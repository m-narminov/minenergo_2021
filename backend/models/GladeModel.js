const mongoose = require('mongoose')

const Schema = mongoose.Schema

// схема просеки
const GladeSchema = new Schema(
  {
    begin_support: String, //№ опоры (начало пролета)
    end_support: String, // № опоры (конец пролета)
    span_length: Number, // Длина пролета, м
    left_forest_length: Number, // Протяженность лесного участка слева, м
    right_forest_length: Number, // Протяженность лесного участка справа, м
    left_forest_depth: Number, // Глубина лесного участка слева, м
    right_forest_depth: Number, // Глубина лесного участка справа, м

    // Ширина просеки
    clearing_width: {
      wire_left: Number, // Расстояние от крайнего провода до леса слева, м
      wire_right: Number, // Расстояние от крайнего провода до леса справа, м
      between_phases: Number, // Расстояние между крайними фазами, м
      actual: Number, // Фактическая, м
    },

    height_forest_left: Number, // Высота основного лесного массива слева, м
    height_forest_right: Number, // Высота основного лесного массива справа, м
    span_area: Number, // Площадь пролета, га

    // Площадь, подлежащая периодической расчистке, га
    area_to_clear: {
      within_clearing_width: Number, // В пределах существующей ширины просеки ВЛ
      within_security_zone: Number, // В пределах охранной зона ВЛ
    },

    // Сведения о наличии угрожающих деревьях
    presence_of_trees: {
      from_left: Number, // Количество угрожающих деревьев слева
      from_right: Number, // Количество угрожающих деревьев справа
    },

    inspection_date: String, // Дата обследования (дд.мм.гг.)
    trees_height: Number, // Высота ДКР, м
    size_from_wire: Number, // Габарит от провода до ДКР, м
  },
  { timestamps: true }
)

module.exports = mongoose.model('Glade', GladeSchema)
