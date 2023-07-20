# repositorioReto1

He creado dos ramas en el proyecto del reto 1 llamado repositorioReto1, “rama1” y “rama2” con el comando git branch.
Una vez creadas las ramas, en la “rama1” borro desde ella la función suma, para ello me situo en rama1 con el comando git checkout rama1, compruebo con un git branch y hago los 3 pasos(git add . git commit y git push --set-upstream origin rama1)
Subí los cambios al repositorio y los fusioné con el proyecto principal haciendo los siguientes pasos: situandome primero en main con git checkout main , git branch, git pull y git merge rama1.
Al Cámbiarme a la “rama2” y modificar la función suma, para que ahora reciba tres
números por parámetro y los sume, me volví a situar en mi rama2 desde git checkout rama2, git branch para comprobarlo y git add . git commit y git push --set-upstream origin rama2.
Subí los cambios al repositorio y lo fusioné con el proyecto principal haciendo un git checkout main, git branch, git pull y git merge rama2 y me apareció dos confictos :Auto-merging index.js
CONFLICT (content): Merge conflict in index.js
Auto-merging run.js
CONFLICT (content): Merge conflict in run.js
Automatic merge failed; fix conflicts and then commit the result.
lo solucioné aceptando la opción remove encoming , complete merge y commit desde Visual y volví a guardar los cambios y subirlos al repositorio remoto con los cambios en mi proyecto main.