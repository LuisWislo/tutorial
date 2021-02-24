import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.scss']
})
export class ExampleTwoComponent implements OnInit {

  code : string = `let python_imports = \`
  import numpy as np
  import scipy.stats as stats
  import matplotlib.pyplot as plt
  import io, base64
  \`;`;

  code2 : string = `pyodide.runPythonAsync(python_imports).then(output => console.log(output));`;

  code3 : string = `let python_code2 = \`
  # Python
  from js import document
  div_container = document.createElement('div')
  div_container.innerHTML = """
      <br><br>
      mu:
      <input id='mu' value='1' type="number">
      <br><br>
      sigma:
      <input id='sigma' value='1' type="number">
      <br><br>
      <button onclick='pyodide.globals.generate_plot_img()'>Plot</button>
      <br>
      <img id="fig" />
  """
  document.body.appendChild(div_container)

  def generate_plot_img():
      # get values from inputs
      mu = int(document.getElementById('mu').value)
      sigma = int(document.getElementById('sigma').value)
      # generate an interval
      x = np.linspace(mu - 3*sigma, mu + 3*sigma, 100)
      # calculate PDF for each value in the x given mu and sigma and plot a line 
      plt.plot(x, stats.norm.pdf(x, mu, sigma))
      # create buffer for an image
      buf = io.BytesIO()
      # copy the plot into the buffer
      plt.savefig(buf, format='png')
      buf.seek(0)
      # encode the image as Base64 string
      img_str = 'data:image/png;base64,' + base64.b64encode(buf.read()).decode('UTF-8')
      # show the image
      img_tag = document.getElementById('fig')
      img_tag.src = img_str
      buf.close()
  \`;`;

  code4 : string = `pyodide.runPython(python_code2);`

  constructor() { }

  ngOnInit(): void {
  }
}
