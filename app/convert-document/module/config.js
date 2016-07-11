/**
 * Created by Stefan Hariton on 6/12/16.
 */

import moduleName from '../name';

class Config{
  constructor() {

  }
}

angular.module(moduleName).constant('documentPattern',
    'application/pdf,' +
    'text/*,' +
    'image/*,' +
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document,' +
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template,' +
    'application/msword,' +
    'application/vnd.palm,' +
    'application/rtf,' +
    'application/vnd.stardivision.writer,' +
    'application/vnd.sun.xml.writer.template,' +
    'application/vnd.oasis.opendocument.text'
);

angular.module(moduleName).config([
  (...args) => {
    return new Config(...args);
  }
]);

angular.module(moduleName).constant('documentFormats', [
  {
    caption: 'Microsoft Word 97/2000/XP [.doc]',
    value: 'doc'
  },
  {
    caption: 'Microsoft Word 6.0 [.doc]',
    value: 'doc6'
  },
  {
    caption: 'Microsoft Word 95 [.doc]',
    value: 'doc95'
  },
  {
    caption: 'DocBook [.xml]',
    value: 'docbook'
  },
  {
    caption: 'HTML Document (OpenOffice.org Writer) [.html]',
    value: 'html'
  },
  {
    caption: 'Open Document Text [.odt]',
    value: 'odt'
  },
  {
    caption: 'Open Document Text [.ott]',
    value: 'ott'
  },
  {
    caption: 'Microsoft Office Open XML [.xml]',
    value: 'ooxml'
  },
  {
    caption: 'AportisDoc (Palm) [.pdb]',
    value: 'pdb'
  },
  {
    caption: 'Portable Document Format [.pdf]',
    value: 'pdf'
  },
  {
    caption: 'Pocket Word [.psw]',
    value: 'psw'
  },
  {
    caption: 'Rich Text Format [.rtf]',
    value: 'rtf'
  },
  {
    caption: 'LaTeX 2e [.ltx]',
    value: 'latex'
  },
  {
    caption: 'StarWriter 5.0 [.sdw]',
    value: 'sdw'
  },
  {
    caption: 'StarWriter 4.0 [.sdw]',
    value: 'sdw4'
  },
  {
    caption: 'StarWriter 3.0 [.sdw]',
    value: 'sdw3'
  },
  {
    caption: 'Open Office.org 1.0 Text Document Template [.stw]',
    value: 'stw'
  },
  {
    caption: 'Open Office.org 1.0 Text Document [.sxw]',
    value: 'sxw'
  },
  {
    caption: 'Text Encoded [.txt]',
    value: 'text'
  },
  {
    caption: 'Plain Text [.txt]',
    value: 'txt'
  },
  {
    caption: 'StarWriter 5.0 Template [.vor]',
    value: 'vor'
  },
  {
    caption: 'StarWriter 4.0 Template [.vor]',
    value: 'vor4'
  },
  {
    caption: 'StarWriter 3.0 Template [.vor]',
    value: 'vor3'
  },
  {
    caption: 'XHTML Document [.html]',
    value: 'xhtml'
  }
]);
