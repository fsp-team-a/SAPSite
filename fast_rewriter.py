import glob, os


name = 'easy_search'

orig = '<img class="img-2" src="img/image.png" />'



new = '<img class="img-2" src="img/image_logout.png" />'



file = name+".html"


htmlFile = open(file, 'r', encoding='utf-8')
file_content = htmlFile.read()
file_content.replace(orig, new)
htmlFile.close()
    
htmlFile = open(file, 'w', encoding='utf-8')
htmlFile.write(file_content)
htmlFile.close()
    
