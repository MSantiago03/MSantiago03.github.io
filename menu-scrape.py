# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.chrome.options import Options


# driver = webdriver.Chrome()
# driver.get('https://www.bowdoin.edu/dining/menus/index.html')

# # prevents webpage from opening TODO: NOT WORKING
# options = Options()
# options.add_argument('--headless')


# # finds thorne menu
# thorne = driver.find_element(By.ID,"u49").text

# # finds moulton menu
# moulton = driver.find_element(By.ID,"u48").text

# # overwrites thorne menu txt file
# f = open("thorne-menu.txt", "w")
# f.write(thorne)
# f.close()

# # overwrites moutlon menu txt file
# f = open("moulton-menu.txt", "w")
# f.write(moulton)
# f.close()

# driver.quit()

# #
