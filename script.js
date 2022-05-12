const getSubject = () => {
    const subjects = [
        {
            "part" : "You",
            "type" : "you"
        },
        {
            "part" : "A friend",
            "type" : "other"
        },
        {
            "part" : "Someone close to you",
            "type" : "other"
        },
        {
            "part" : "A family member",
            "type" : "other"
        }];
    
    let subjectIndex = Math.floor(Math.random() * subjects.length);

    return subjects[subjectIndex];
}

const getVerb = (subjectType) => {
    const verbs = [
        {
            "part" : "will",
            "type" : "any"
        },
        {
            "part" : "are about to",
            "type" : "you"
        },
        {
            "part" : "is about to",
            "type" : "other"
        }];

    let verbIndex = -1;
    let typeMatch = false;

    do {
        verbIndex = Math.floor(Math.random() * verbs.length);
        
        if (verbs[verbIndex].type === subjectType || verbs[verbIndex].type === "any") {
            typeMatch = true;
        }
    } while (!typeMatch);

    return verbs[verbIndex];
}

const getComplement = (subjectType) => {
    const complements = [
        {
            "part" : "face a difficult time in your life.",
            "type" : "you"
        },
        {
            "part" : "face a difficult time in their life.",
            "type" : "other"
        },
        {
            "part" : "have an unusual encounter soon.",
            "type" : "any"
        }];
    
    let complementIndex = -1;
    let typeMatch = false;
    
    do {
        complementIndex = Math.floor(Math.random() * complements.length);

        if (complements[complementIndex].type === subjectType || complements[complementIndex].type === "any") {
            typeMatch = true;
        }
    } while (!typeMatch);

    return complements[complementIndex];
}

const getFortune = () => {

    let subject = getSubject();
    let verb = getVerb(subject.type);
    let complement = getComplement(subject.type);

    document.getElementById('fortune').innerText = `${subject.part} ${verb.part} ${complement.part}`;
}