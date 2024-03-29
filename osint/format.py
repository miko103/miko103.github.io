with open("usrsearch/urls.txt", "r") as f:
    contents = f.read().split("\n")
    print(contents)

with open("usrsearch/urls.txt","w") as f:
    f.write("")

with open("usrsearch/urls.txt","a") as f:
    for i in range(len(contents)):
        f.write(f'"{contents[i]}",\n')
