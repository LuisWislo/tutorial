import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.scss']
})
export class ExampleOneComponent implements OnInit {

  code : string = `let python_code = \`
  # Python
  from js import document
  div = document.createElement('div')
  div.innerHTML = '<h1>This element was created from Python</h1>'
  #insert into body as a first child
  document.body.prepend(div)
  \`;`;

  code2 : string = 'pyodide.runPython(python_code);';

  constructor() { }

  ngOnInit(): void {
  }

}
