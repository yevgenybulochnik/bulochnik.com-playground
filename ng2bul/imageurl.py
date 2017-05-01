import os

ng2bul_path = os.getcwd()
img_dir = ng2bul_path +"/src/assets/img"

imgUrl_list = []

for image in os.listdir(img_dir):
    imgUrl_list.append("{'url':'../src/assets/img/"+image+"'}")
    print("Generated Url for "+image)
    
imageProviderString = """
export class ImageUrls{
    images: any;
    constructor(){
        this.images = [\n\t\t\t"""+",\n\t\t\t".join(imgUrl_list)+"""\n\t\t]
    }
}
"""
    
os.chdir(ng2bul_path+"/src/assets")
file = open("image.provider.ts","w+")

file.write(imageProviderString)
file.close()