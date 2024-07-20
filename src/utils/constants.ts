export interface IQuestion {
  question: string
  options: string[]
  img: string | null
  type: string
}

export interface IPerson {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

export const data: IQuestion[] = [
  { question: 'Ваш пол:', options: ['Мужчина', 'Женщина'], img: null, type: 'text' },
  {
    question: 'Укажите ваш возраст:',
    options: ['До 18', 'От 18 до 28', 'От 29 до 35', 'От 36'],
    img: null,
    type: 'text'
  },
  {
    question: 'Выберите лишнее:',
    options: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина'],
    img: null,
    type: 'text'
  },
  {
    question: 'Продолжите числовой ряд: 18  20  24  32',
    options: ['62', '48', '74', '57', '60', '77'],
    img: null,
    type: 'text'
  },
  {
    question: 'Выберите цвет, который сейчас наиболее Вам приятен:',
    options: [
      '#A8A8A8',
      '#0000A9',
      '#00A701',
      '#F60100',
      '#FDFF19',
      '#A95403',
      '#000000',
      '#850068',
      '#46B2AC'
    ],
    img: null,
    type: 'color'
  },
  {
    question: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
    options: [
      '#A8A8A8',
      '#46B2AC',
      '#A95403',
      '#00A701',
      '#000000',
      '#F60100',
      '#850068',
      '#FDFF19',
      '#0000A9'
    ],
    img: null,
    type: 'color'
  },
  {
    question: 'Какой из городов лишний?',
    options: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава'],
    img: null,
    type: 'text'
  },
  {
    question: 'Выберите правильную фигуру из четырёх пронумерованных.',
    options: ['1', '2', '3', '4'],
    img: 'question_image_1.png',
    type: 'numbers'
  },
  {
    question: 'Вам привычнее и важнее:',
    options: [
      'Наслаждаться каждой минутой проведенного времени',
      'Быть устремленными мыслями в будущее',
      'Учитывать в ежедневной практике прошлый опыт'
    ],
    img: null,
    type: 'text'
  },
  {
    question: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:',
    options: ['Оно остроконечное', 'Оно устойчиво', 'Оно находится в состоянии равновесия'],
    img: 'question_image_2.png',
    type: 'text'
  },
  {
    question: 'Вставьте подходящее число',
    options: ['34', '36', '53', '44', '66', '42'],
    img: 'question_image_3.png',
    type: 'numbers'
  }
]
