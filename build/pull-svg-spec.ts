import { DOMParser } from 'xmldom'
import * as fs from 'fs'
import * as path from 'path'

function parseXML() {
  const dp = new DOMParser()
  const src = fs.readFileSync(path.resolve(__dirname, '../definition.xml'), 'utf-8')
  const doc = dp.parseFromString(src)

  const els = doc.getElementsByTagName('element')

  console.log(JSON.stringify(els, null, 2))
}

parseXML()

