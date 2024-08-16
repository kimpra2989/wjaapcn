#!/usr/bin/env node

import chalk from 'chalk'
import inquirer from 'inquirer'
import boxen from 'boxen'
import { KOREAN } from './menu/korean.js'
import { CHINESE } from './menu/chinese.js'
import { JAPANESE } from './menu/japanese.js'

async function recommendMenu() {
  const { cuisine } = await inquirer.prompt([
    {
      type: 'list',
      name: 'cuisine',
      message: chalk.bold.magenta('어떤 종류?'),
      choices: [
        { name: chalk.red('한식'), value: 'korean' },
        { name: chalk.green('중식'), value: 'chinese' },
        { name: chalk.blue('일식'), value: 'japanese' },
      ],
    },
  ])

  let menu
  if (cuisine === 'korean') {
    menu = KOREAN
  } else if (cuisine === 'chinese') {
    menu = CHINESE
  } else if (cuisine === 'japanese') {
    menu = JAPANESE
  }

  const randomMenu = menu[Math.floor(Math.random() * menu.length)]

  const message = chalk.yellow.bold(`${chalk.bold(randomMenu)}\n`)

  console.log(boxen(message, { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'green' }))
}

recommendMenu()
