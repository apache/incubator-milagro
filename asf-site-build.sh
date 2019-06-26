BRANCH=$(git branch | grep '^*' | sed 's/* //' )
if [[ $BRANCH == "master" ]]; then
  location=$PWD # get current dir
  printf "\nThe current directory is %s\n" $location # print current dir
  cd website # change to website dir
  printf "\nThis directory should end in ../website: %s\n" $PWD # echo website directory just to be safe
  printf "\nThe script is going to build the website now, this make take a few minutes.\n"
  npm run build # build website
  # for i in ./*; do
  #   echo $i
  # done
  printf "\nThe script will make a temporary directory at /tmp/asf-site-prep/\n" $USER # describe action
  mkdir /tmp/asf-site-prep/ # making temp director
  printf "\nThe script will move the contents of the /build directory to /tmp/asf-site-prep/\n" # describe action
  mv ./build/* /tmp/asf-site-prep/ # copy contents of directory
  printf "\nThe script will make a temporary directory at /tmp/asf-site/ and will clone the asf-site branch into it.\n" # describe action
  mkdir /tmp/asf-site # make directory
  cd /tmp/asf-site # switch directory
  git clone -b asf-site --single-branch https://github.com/apache/incubator-milagro # cloning website
  cd incubator-milagro # into directory
  printf "\nThe script will push the new asf-site branch and begin cleanup.\n\n" # describe action
  git rm -r *
  git commit -m "removing asf-site files"
  cp -R /tmp/asf-site-prep/incubator-milagro\ /* /tmp/asf-site/incubator-milagro/
  git add .
  git commit -m "new asf-site"
  git push origin asf-site
  cd $location 
  printf "\nRemoving the /tmp directories.\n\n" # describe action
  rm -rf /tmp/asf-site-prep
  rm -rf /tmp/asf-site
  printf "\nAll done!\n" # describe action
elif [[ $BRANCH != "master" ]]; then
  printf "\nThis script must be run off the master branch.\n"
fi
