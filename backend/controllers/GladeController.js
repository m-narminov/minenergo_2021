const { body, validationResult } = require('express-validator')
const ExcelJS = require('exceljs')
const axios = require('axios')

const apiResponse = require('../helpers/apiResponse')
const constants = require('../helpers/constants').constants
const utils = require('../helpers/gladeUtils')
const Glade = require('../models/GladeModel')
const auth = require('../middlewares/jwt')
var mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const columnLetters = 'abcdefglmnstu'.toUpperCase().split('')

function GladeData(data) {
  const date = utils.getDate(data.inspection_date)

  this.begin_support = data.begin_support //№ опоры (начало пролета)
  this.end_support = data.end_support // № опоры (конец пролета)
  this.span_length = data.span_length // Длина пролета, м
  this.left_forest_length = data.left_forest_length // Протяженность лесного участка слева, м
  this.right_forest_length = data.right_forest_length // Протяженность лесного участка справа, м
  this.left_forest_depth = data.left_forest_depth // Глубина лесного участка слева, м
  this.right_forest_depth = data.right_forest_depth // Глубина лесного участка справа, м

  // Ширина просеки
  this.clearing_width = data.clearing_width
  // {
  //   wire_left: data.wire_left, // Расстояние от крайнего провода до леса слева, м
  //   wire_right: data.wire_right, // Расстояние от крайнего провода до леса справа, м
  //   between_phases: data.between_phases, // Расстояние между крайними фазами, м
  //   actual: data.actual, // Фактическая, м
  // }

  this.height_forest_left = data.height_forest_left // Высота основного лесного массива слева, м
  this.height_forest_right = data.height_forest_right // Высота основного лесного массива справа, м
  this.span_area = data.span_area // Площадь пролета, га

  // Площадь, подлежащая периодической расчистке, га
  this.area_to_clear = data.area_to_clear
  // {
  //   within_clearing_width: data.within_clearing_width, // В пределах существующей ширины просеки ВЛ
  //   within_security_zone: data.within_security_zone, // В пределах охранной зона ВЛ
  // }

  // Сведения о наличии угрожающих деревьях
  this.presence_of_trees = data.presence_of_trees
  // {
  //   from_left: data.from_left, // Количество угрожающих деревьев слева
  //   from_right: data.from_right, // Количество угрожающих деревьев справа
  // }

  this.inspection_date = date // Дата обследования (дд.мм.гг.) // Высота ДКР, м
  this.size_from_wire = data.size_from_wire // Габарит от провода до ДКР, м
}

exports.gladeList = [
  function (req, res) {
    try {
      Glade.find().then(glades => {
        if (glades.length > 0) {
          return apiResponse.successResponseWithData(res, 'Operation success', glades)
        } else {
          return apiResponse.successResponseWithData(res, 'Operation success', [])
        }
      })
    } catch (err) {
      //throw error in json response with status 500.
      return apiResponse.ErrorResponse(res, err)
    }
  },
]

exports.gladeDetail = [
  (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return apiResponse.successResponseWithData(res, 'Operation success', {})
    }
    try {
      Glade.findOne({ _id: req.params.id }, '_id title description isbn createdAt').then(glade => {
        if (glade !== null) {
          let gladeData = new GladeData(glade)
          return apiResponse.successResponseWithData(res, 'Operation success', gladeData)
        } else {
          return apiResponse.successResponseWithData(res, 'Operation success', {})
        }
      })
    } catch (err) {
      //throw error in json response with status 500.
      return apiResponse.ErrorResponse(res, err)
    }
  },
]

exports.gladeCreate = [
  body('begin_support').isLength({ min: 1 }).trim(),
  body('end_support').isLength({ min: 1 }).trim(),
  // body('inspection_date').isLength({ min: 10 }).trim(),
  (req, res) => {
    try {
      const errors = validationResult(req)
      const glade = new Glade({
        begin_support: req.body.begin_support, //№ опоры (начало пролета)
        end_support: req.body.end_support, // № опоры (конец пролета)
        span_length: req.body.span_length, // Длина пролета, м
        left_forest_length: req.body.left_forest_length, // Протяженность лесного участка слева, м
        right_forest_length: req.body.right_forest_length, // Протяженность лесного участка справа, м
        left_forest_depth: req.body.left_forest_depth, // Глубина лесного участка слева, м
        right_forest_depth: req.body.right_forest_depth, // Глубина лесного участка справа, м

        // Ширина просеки
        // wire_left // Расстояние от крайнего провода до леса слева, м
        // wire_right // Расстояние от крайнего провода до леса справа, м
        // between_phases // Расстояние между крайними фазами, м
        // actual // Фактическая,
        clearing_width: req.body.clearing_width,

        height_forest_left: req.body.height_forest_left, // Высота основного лесного массива слева, м
        height_forest_right: req.body.height_forest_right, // Высота основного лесного массива справа, м
        span_area: req.body.span_area, // Площадь пролета, га

        // Площадь, подлежащая периодической расчистке, га
        // within_clearing_width // В пределах существующей ширины просеки ВЛ
        // within_security_zone // В пределах охранной зона ВЛ
        area_to_clear: req.body.area_to_clear,

        // Сведения о наличии угрожающих деревьях
        // from_left // Количество угрожающих деревьев слева
        // from_right // Количество угрожающих деревьев справа
        presence_of_trees: req.body.presence_of_trees,

        inspection_date: req.body.inspection_date, // Дата обследования (дд.мм.гг.)
        trees_height: req.body.trees_height, // Высота ДКР, м
        size_from_wire: req.body.size_from_wire, // Габарит от провода до ДКР, м
      })

      if (!errors.isEmpty()) {
        return apiResponse.validationErrorWithData(res, 'Validation Error.', errors.array())
      } else {
        //Save glade.
        glade.save(function (err) {
          if (err) {
            return apiResponse.ErrorResponse(res, err)
          }
          let gladeData = new GladeData(glade)

          const msg = Object.keys(gladeData).reduce((acc, key) => {
            let result
            if (typeof gladeData[key] !== 'object') {
              result = `${constants.gladeMap[key]}: ${gladeData[key]}\n`
              if (typeof gladeData[key] === 'object') {
                result = `${constants.gladeMap[key]}: ${utils.getDate(gladeData[key])}\n`
              }
            } else {
              result = Object.keys(gladeData[key]).reduce((nestAcc, nestKey) => {
                return nestAcc.concat(
                  `  ${constants.gladeMap[nestKey]}: ${gladeData[key][nestKey]}\n`
                )
              }, '')
            }

            return acc.concat(result)
          }, '')

          axios
            .get(encodeURI(`${constants.telegram}Добавлена информация о просеке\n\n${msg}`))
            .then(resposne => {
              // console.log(res)
              return apiResponse.successResponseWithData(res, 'Glade add Success.', resposne)
            })
            .catch(err => {
              return apiResponse.ErrorResponse(res, err)
            })
          //
        })
      }
    } catch (err) {
      //throw error in json response with status 500.
      return apiResponse.ErrorResponse(res, err)
    }
  },
]

exports.gladeUpdate = [
  (req, res) => {
    try {
      const errors = validationResult(req)
      var glade = new Glade({ ...req.body, _id: req.params.id })

      if (!errors.isEmpty()) {
        return apiResponse.validationErrorWithData(res, 'Validation Error.', errors.array())
      } else {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
          return apiResponse.validationErrorWithData(res, 'Invalid Error.', 'Invalid ID')
        } else {
          Glade.findById(req.params.id, function (err, foundGlade) {
            if (foundGlade === null) {
              return apiResponse.notFoundResponse(res, 'Glade not exists with this id')
            } else {
              //Check authorized user
              // if (foundGlade.user.toString() !== req.user._id) {
              //   return apiResponse.unauthorizedResponse(
              //     res,
              //     'You are not authorized to do this operation.'
              //   )
              // } else {

              //update glade.
              Glade.findByIdAndUpdate(req.params.id, glade, {}, function (err) {
                if (err) {
                  return apiResponse.ErrorResponse(res, err)
                } else {
                  let gladeData = new GladeData(glade)
                  return apiResponse.successResponseWithData(
                    res,
                    'Glade update Success.',
                    gladeData
                  )
                }
              })
              // }
            }
          })
        }
      }
    } catch (err) {
      //throw error in json response with status 500.
      return apiResponse.ErrorResponse(res, err)
    }
  },
]

exports.gladeDelete = [
  function (req, res) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return apiResponse.validationErrorWithData(res, 'Invalid Error.', 'Invalid ID')
    }
    try {
      Glade.findById(req.params.id, function (err, foundGlade) {
        if (foundGlade === null) {
          return apiResponse.notFoundResponse(res, 'Glade not exists with this id')
        } else {
          //Check authorized user
          // if (foundGlade.user.toString() !== req.user._id) {
          //   return apiResponse.unauthorizedResponse(
          //     res,
          //     'You are not authorized to do this operation.'
          //   )
          // } else {
          //delete glade.
          Glade.findByIdAndRemove(req.params.id, function (err) {
            if (err) {
              return apiResponse.ErrorResponse(res, err)
            } else {
              return apiResponse.successResponse(res, 'Glade delete Success.')
            }
          })
          // }
        }
      })
    } catch (err) {
      //throw error in json response with status 500.
      return apiResponse.ErrorResponse(res, err)
    }
  },
]

exports.gladeExport = [
  (req, res) => {
    try {
      Glade.find().then(glades => {
        if (!glades.length) return apiResponse.successResponseWithData(res, 'Operation success', [])

        const today = new Date().toISOString().replace(/[^\w]/g, '')

        const workbook = new ExcelJS.Workbook()
        workbook.creator = 'system'
        workbook.created = new Date()
        const worksheet = workbook.addWorksheet('Информация о просеках')

        for (const key of columnLetters) worksheet.mergeCells(`${key}1:${key}2`)
        worksheet.mergeCells('H1:K1')
        worksheet.mergeCells('O1:P1')
        worksheet.mergeCells('Q1:R1')

        const columns = [
          '№ опоры (начало пролета)',
          '№ опоры (конец пролета)',
          'Длина пролета, м',
          'Протяженность лесного участка слева, м',
          'Протяженность лесного участка справа, м',
          'Глубина лесного участка слева, м',
          'Глубина лесного участка справа, м',
          'Расстояние от крайнего провода до леса слева, м',
          'Расстояние между крайними фазами, м',
          'Расстояние от крайнего провода до леса справа, м',
          'Фактическая, м',
          // ,
          'Высота основного лесного массива слева, м',
          'Высота основного лесного массива справа, м',
          'Площадь пролета, га',
          'В пределах существующей ширины просеки ВЛ',
          'В пределах охранной зоны ВЛ',
          'Количество угрожающих деревьев слева',
          'Количество угрожающих деревьев справа',
          // ,
          // ,
          'Дата обследования (дд.мм.гг.)',
          'Высота ДКР, м',
          'Габарит от провода до ДКР, м',
        ]

        for (let i = 1; i <= 21; i++) worksheet.getRow(2).getCell(i).value = columns[i - 1]
        worksheet.getCell('H1').value = 'Ширина просеки'
        worksheet.getCell('O1').value = 'Площадь, подлежащая периодической расчистке, га'
        worksheet.getCell('Q1').value = 'Сведения о наличии угрожающих деревьях'

        for (let i = 1; i < 26; i++) {
          worksheet.getColumn(i).alignment = {
            vertical: 'middle',
            horizontal: 'center',
            wrapText: true,
          }
          worksheet.getColumn(i).width = 20
        }

        worksheet.getRow(1).height = 50
        worksheet.getRow(2).height = 100

        glades.forEach((glade, index) => {
          const addGlade = [
            glade.begin_support,
            glade.end_support,
            glade.span_length,
            glade.left_forest_length,
            glade.right_forest_length,
            glade.left_forest_depth,
            glade.right_forest_depth,
            glade.clearing_width.wire_left,
            glade.clearing_width.between_phases,
            glade.clearing_width.wire_right,
            glade.clearing_width.actual,
            glade.height_forest_left,
            glade.height_forest_right,
            glade.span_area,
            glade.area_to_clear.within_clearing_width,
            glade.area_to_clear.within_security_zone,
            glade.presence_of_trees.from_left,
            glade.presence_of_trees.from_right,
            glade.inspection_date,
            glade.trees_height,
            glade.size_from_wire,
          ]
          // console.log(glade)
          worksheet.insertRow(3 + index, addGlade)
        })

        res.setHeader(
          'Content-Type',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        )
        res.setHeader('Content-Disposition', `attachment; filename=table_${today}.xlsx`)

        return workbook.xlsx.write(res).then(function () {
          res.status(200).end()
        })
      })
    } catch (error) {
      return apiResponse.ErrorResponse(res, err)
    }
  },
]
