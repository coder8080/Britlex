from PIL import Image

im = Image.open('icon.png')
im2 = im.resize((64, 64))
im2.save('favicon.ico')
