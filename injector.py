import glob, os


for file in glob.glob("*.html"):


    
    htmlFile = open(file, 'r', encoding='utf-8')
    file_content = htmlFile.read()
    file_content = file_content.split('\n')

    passThisPage = False
    fileProcessing = htmlFile.read()
    if '<link rel="stylesheet" href="rebased.css" />' not in fileProcessing:
        for content in range(len(file_content)):
            string = '<body>'
            globalCss = file_content[content].find(string)
            rebasedCss = file_content[content].find('<link rel="stylesheet" href="rebased.css" />')
            
            if (globalCss >= 0) and (rebasedCss == -1) and (len(file_content) != 0) and passThisPage==False:
                passThisPage = True
                file_content[content] = file_content[content] +'\n    <link rel="stylesheet" href="rebased.css" />'
                print('injected: '+file_content[content])
            


    final_txt = ""
    for content in range(len(file_content)):
        final_txt = final_txt + (file_content[content])
        if (content+1) != len(file_content):
            final_txt+='\n'
    htmlFile.close()

    htmlFile = open(file, 'w', encoding='utf-8')
    htmlFile.write(final_txt)
    htmlFile.close()
