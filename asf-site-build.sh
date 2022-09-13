# TREEDIRTY=0
if [[ $(git diff --stat) != '' ]]; then
  # TREEDIRTY=1
  echo 'The current tree is dirty, please clean it before running the script'
  exit
fi

BRANCH=$(git branch | grep '^*' | sed 's/* //' )
if [[ $BRANCH == "master" ]]; then
  location=$PWD # get current dir
  printf "\nThe current directory is %s\n" $location # print current dir

  docker build -t milagro-site .
  # BRANCHNAME="asf-build-$(date +%s)"
  #git checkout -b $BRANCHNAME origin/asf-site
  git checkout asf-site
  rm -rf *
  docker run --rm milagro-site tar c -C /app/website/build/incubator-milagro . | tar -x
  git add .
  git commit -m "update website"
  git checkout master

  echo
  echo "> site built in" $BRANCHNAME
  echo "> please inspect and potentially push the result"
  echo
  echo "git checkout $BRANCHNAME"
  echo "git checkout asf-site && git merge $BRANCHNAME"
  echo
  echo "> when you are done, clean up after yourself:"
  echo "git branch -d $BRANCHNAME"

elif [[ $BRANCH != "master" ]]; then
  printf "\nThis script must be run off the master branch.\n"
fi
