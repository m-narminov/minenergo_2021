exports.constants = {
  admin: {
    name: 'admin',
    email: 'admin@admin.com',
  },
  confirmEmails: {
    from: 'no-reply@test-app.com',
  },
  telegram: 'https://flask-hak.herokuapp.com/setmsg?msg=',
  gladeMap: {
    begin_support: '№ опоры (начало пролета)',
    end_support: '№ опоры (конец пролета)',
    span_length: 'Длина пролета, м',
    left_forest_length: 'Протяженность лесного участка слева, м',
    right_forest_length: 'Протяженность лесного участка справа, м',
    left_forest_depth: 'Глубина лесного участка слева, м',
    right_forest_depth: 'Глубина лесного участка справа, м',
    clearing_width: 'Ширина просеки',
    height_forest_left: 'Высота основного лесного массива слева, м',
    height_forest_right: 'Высота основного лесного массива справа, м',
    span_area: 'Площадь пролета, га',
    area_to_clear: 'Площадь, подлежащая периодической расчистке, га',
    presence_of_trees: 'Сведения о наличии угрожающих деревьях',
    inspection_date: 'Дата обследования (дд.мм.гггг.)',
    trees_height: 'Высота ДКР, м',
    size_from_wire: 'Габарит от провода до ДКР, м',
    wire_left: 'Расстояние от крайнего провода до леса слева, м',
    between_phases: 'Расстояние между крайними фазами, м',
    wire_right: 'Расстояние от крайнего провода до леса справа, м',
    actual: 'Фактическая, м',
    within_clearing_width: 'В пределах существующей ширины просеки ВЛ',
    within_security_zone: 'В пределах охранной зоны ВЛ',
    from_left: 'Кол-во угрожающих деревьев слева',
    from_right: 'Кол-во угрожающих деревьев справа',
    clearing_width: {
      wire_left: 'Расстояние от крайнего провода до леса слева, м',
      wire_right: 'Расстояние от крайнего провода до леса справа, м',
      between_phases: 'Расстояние между крайними фазами, м',
      actual: 'Фактическая, м',
    },
    // Площадь, подлежащая периодической расчистке, га
    area_to_clear: {
      within_clearing_width: 'В пределах существующей ширины просеки ВЛ',
      within_security_zone: 'В пределах охранной зона ВЛ',
    },
    // Сведения о наличии угрожающих деревьев
    presence_of_trees: {
      from_left: 'Кол-во угрожающих деревьев слева',
      from_right: 'Кол-во угрожающих деревьев справа',
    },
  },
}
