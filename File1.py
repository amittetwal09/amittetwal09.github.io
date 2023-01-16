import fitz

# open the pdf file
pdf_document = fitz.open("resume.pdf")

# iterate over all pages
for page in pdf_document:
    # extract the text from the page
    text = page.get_text("text")
