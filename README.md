# product-project

## Инструкция

Чтобы запустить проект, нужно сделать несколько простых шагов.
- Создайте папку и перейдите в неё:
```
cd <Имя-папки>
```
- Склонируйте этот репозиторий:
```
git clone https://github.com/defimov9/product-project.git
```
- Установите все зависимости:
```
yarn или npm install
```
- Теперь можете запустить проект:
```
npm run start
```

## Скрипты
- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test:unit` - Хапуск unit тестов с jest
- `npm run test:ui` - Хапуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда
- `npm run prepare` - прекоммит хуки

## Архитектура проекта
Проект разрабатывается в соответствии с методологией Feature Sliced Design.
Ссылка на документацию: [Feature Sliced Design](https://feature-sliced.design/)

## Работа с переводами
В проекте используется библиотека i18next для работы с переводами. Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендую установить плагин для webstorm/vscode.

Документация [i18next](https://react.i18next.com/). 

## Storybook
В проекте для каждого компонента описываются стори-кейсы. Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создается рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
```
npm run storybook
```
Подробнее о [Storybook](docs/storybook.md)

## CI pipeline и pre-commit хуки
Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky
