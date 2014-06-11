

###How I made the CEO use ruby on rails. aka the worlds least user friendly CMS.


In a terminal you want to be in the project folder for any of the below to work.
	```
	cd ~/Sites/arrivalist/
	```

this starts up a little server so you can test the site. 

	```
	jekyll serve --watch 
	```

Opens a text editor 

	```
	sublime .
	```

check to see what files have changed. 
	```
	git status
	```
add files that might have been added
	```
	git add -A
	```

commit the changes to the repo
	```
	git commit -am "Tell others what you changed"
	```

make sure your secure key is loaded 
	```
	sudo ssh-add ~/.ssh/id_rsa
	```

Deploy you changes live
	```
	git push origin master
	```