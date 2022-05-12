const getSubject = () => {
    const subjects = ["you", "a friend", "someone close to you", "a family member"];
    
    let subjectIndex = Math.floor(Math.random() * subjects.length);

    return subjects[subjectIndex];
}

const getVerb = () => {
    const verbs = ["will", "are about to"];
    
    let verbIndex = Math.floor(Math.random() * verbs.length);

    return verbs[verbIndex];
}

const getComplement = () => {
    const complements = ["face a difficult time in your life", "have an unusual encounter soon"];
    
    let complementIndex = Math.floor(Math.random() * complements.length);

    return complements[complementIndex];
}

const getFortune = () => {

    let sentence = getSubject() + ' ' + getVerb() + ' ' + getComplement() + '.';
    document.getElementById('fortune').innerText = sentence;
}