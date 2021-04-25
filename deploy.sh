set -e

npm run build

cd dist

git init
git add -A
git commit -m 'gh-pages'

git push -f git@github.com:shynghys/vuelidate-form.git master:gh-pages

cd -