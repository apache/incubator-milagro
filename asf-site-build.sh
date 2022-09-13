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
  cd website # change to website dir
  printf "\nThis directory should end in ../website: %s\n" $PWD # echo website directory just to be safe
  printf "\nThe script is going to build the website now, this make take a few minutes.\n"
  npm run build # build website

  TEMPDIR=$(mktemp -d)
  mv ./build/incubator-milagro/* $TEMPDIR # copy contents of directory
  cd $location
  BRANCHNAME="asf-build-$(date +%s)"
  # [[ $TREEDIRTY -eq 1 ]] && git stash
    git checkout -b $BRANCHNAME origin/asf-site && \
    rm -rf * && \
    cp -r $TEMPDIR/* . && \
    git add . && \
    git commit -m "update website" && \
    git checkout master
  # [[ $TREEDIRTY -eq 1 ]] && git stash pop
  rm -rf $TEMPDIR

  echo
  echo "> site built in" $BRANCHNAME
  echo "> please inspect and potentially push the result"
  echo
  echo "git checkout $BRANCHNAME"
  echo "git checkout asf-site && git merge --fast-forward $BRANCHNAME"
  echo
  echo "> when you are done, clean up after yourself:"
  echo "git branch -d $BRANCHNAME"

elif [[ $BRANCH != "master" ]]; then
  printf "\nThis script must be run off the master branch.\n"
fi
