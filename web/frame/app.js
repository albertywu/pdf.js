class Pdf {
  constructor(name, path) {
    this.name = name
    this.path = path
  }
}

class PdfManager {
  constructor(container, viewer, pdfs) {
    this.container = container
    this.viewer
    this.pdfs = pdfs
  }

  render() {
    this.container.innerHTML = ''
    this.pdfs.forEach(pdf => {
      const a = document.createElement('a')
      a.innerHTML = pdf.name
      a.addEventListener('click', () => viewer.src = `../viewer.html?file=${pdf.path}`)
      this.container.appendChild(a)
    })
  }
}

const pdfs = [
  new Pdf('multi page', '/web/compressed.tracemonkey-pldi-09.pdf'),
  new Pdf('annotation-highlight', '/test/pdfs/annotation-highlight.pdf'),
  new Pdf('annotation-tx', '/test/pdfs/annotation-tx.pdf'),
  new Pdf('annotation-strikeout', '/test/pdfs/annotation-strikeout.pdf'),
  new Pdf('big bounding box', '/test/pdfs/bigboundingbox.pdf'),
  new Pdf('big bounding box', '/test/pdfs/bigboundingbox.pdf'),
  new Pdf('blend mode', '/test/pdfs/blendmode.pdf')
]

document.addEventListener('DOMContentLoaded', () => {
  const manager = new PdfManager(
    document.getElementById('pdf-container'),
    document.getElementById('viewer'),
    pdfs
  )
  manager.render()
})
