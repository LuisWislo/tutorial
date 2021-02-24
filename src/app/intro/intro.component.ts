import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  code : string = `<!DOCTYPE html>
  <html>
  <head>
      <script type="text/javascript">
          window.languagePluginUrl = 'http://localhost:8000/';
      </script>
      <script src="pyodide.js"></script>
  </head>
  <body>
    Pyodide test page <br>
    Open your browser console to see pyodide output
    <script type="text/javascript">
          languagePluginLoader.then(function () {
              console.log(pyodide.runPython('print("Hello World")'));
          });
    </script>
  </body>`;

  code2 : string = `<script type="text/javascript">
      window.languagePluginUrl = 'http://localhost:8000/';
  </script>`;

  code3 : string = `<script src="pyodide.js"></script>`;

  code4 : string = `<script type="text/javascript">
    languagePluginLoader.then(function () {
        console.log(pyodide.runPython('print("Hello World")'));
    });
  </script>`;

  constructor() { }

  ngOnInit(): void {

  }





}
