const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const userName = "faceplantDev";
const userEmail = "illegalgmaner@yandex.ru";

function createCommitForDate(date, numberOfCommits, repositoryPath) {
    process.chdir(path.join(__dirname, repositoryPath)); // Переходим в директорию репозитория
    for (let i = 0; i < numberOfCommits; i++) {
        const fileName = `dummy-file-${date}-${i}.txt`;
        fs.writeFileSync(fileName, 'Dummy content\n'); // Создаем файл с dummy-содержимым
        execSync(`git add ${fileName}`); // Добавляем файл в индекс
        execSync(`git -c user.name="${userName}" -c user.email="${userEmail}" commit --date="${date}" -m "Add ${fileName}"`);
    }
}

function pushCommits(branchName = 'main') {
    execSync(`git push origin ${branchName}`); // Отправляем коммиты в удаленный репозиторий
}

// Проходимся по всем датам из конфига и создаем коммиты
for (const [date, numberOfCommits] of Object.entries({
    '2021-05-26': 20,
    '2021-05-27': 20,
    '2021-05-28': 20,
    '2021-05-29': 20,
    '2021-05-30': 20,
    '2021-05-31': 20,
    '2021-06-01': 20,
    '2021-06-02': 20,
    '2021-06-09': 20,
    '2021-06-16': 20,
    '2021-06-23': 20,
    '2021-06-30': 20,
    '2021-07-07': 20,
    '2021-07-08': 20,
    '2021-07-09': 20,
    '2021-07-10': 20,
    '2021-07-11': 20,
    '2021-07-12': 20,
    '2021-07-13': 20,
    '2021-07-28': 20,
    '2021-07-29': 20,
    '2021-07-30': 20,
    '2021-07-31': 20,
    '2021-08-01': 20,
    '2021-08-02': 20,
    '2021-08-03': 20,
    '2021-08-04': 20,
    '2021-08-07': 20,
    '2021-08-11': 20,
    '2021-08-14': 20,
    '2021-08-18': 20,
    '2021-08-21': 20,
    '2021-08-25': 20,
    '2021-08-28': 20,
    '2021-09-01': 10,
    '2021-09-04': 10,
    '2021-09-09': 20,
    '2021-09-10': 20,
    '2021-09-29': 20,
    '2021-09-30': 20,
    '2021-10-01': 20,
    '2021-10-02': 20,
    '2021-10-03': 20,
    '2021-10-04': 20,
    '2021-10-05': 20,
    '2021-10-11': 20,
    '2021-10-17': 20,
    '2021-10-23': 20,
    '2021-10-29': 20,
    '2021-11-04': 20,
    '2021-11-10': 20,
    '2021-11-11': 20,
    '2021-11-12': 20,
    '2021-11-13': 20,
    '2021-11-14': 20,
    '2021-11-15': 20,
    '2021-11-16': 20,
    '2021-12-01': 20,
    '2021-12-02': 20,
    '2021-12-03': 20,
    '2021-12-04': 20,
    '2021-12-05': 20,
    '2021-12-06': 20,
    '2021-12-07': 20,
    '2021-12-08': 20,
    '2021-12-11': 20,
    '2021-12-14': 20,
    '2021-12-15': 20,
    '2021-12-18': 20,
    '2021-12-21': 20,
    '2021-12-22': 20,
    '2021-12-25': 20,
    '2021-12-28': 20,
    '2021-12-29': 20,
    '2022-01-01': 20,
    '2022-01-04': 20,
    '2022-01-06': 20,
    '2022-01-07': 10,
    '2022-01-09': 20,
    '2022-01-10': 20,
    '2022-01-11': 10,
    '2022-01-26': 20,
    '2022-01-27': 20,
    '2022-01-28': 20,
    '2022-01-29': 20,
    '2022-01-30': 20,
    '2022-01-31': 20,
    '2022-02-01': 20,
    '2022-02-02': 20,
    '2022-02-05': 20,
    '2022-02-08': 20,
    '2022-02-09': 20,
    '2022-02-12': 20,
    '2022-02-15': 20,
    '2022-02-16': 20,
    '2022-02-19': 20,
    '2022-02-22': 20,
    '2022-02-23': 20,
    '2022-02-26': 20,
    '2022-03-01': 20,
    '2022-03-02': 20,
    '2022-03-08': 20,
    '2022-03-23': 20,
    '2022-03-30': 20,
    '2022-04-06': 20,
    '2022-04-13': 20,
    '2022-04-14': 20,
    '2022-04-15': 20,
    '2022-04-16': 20,
    '2022-04-17': 20,
    '2022-04-18': 20,
    '2022-04-19': 20,
    '2022-04-20': 20,
    '2022-04-27': 20,
    '2022-05-04': 20
  })) {
    createCommitForDate(date, numberOfCommits, './path');
}

// Отправляем созданные коммиты в удаленный репозиторий
pushCommits('drawing');