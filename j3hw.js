let userProfile = {
    username: " CoolUser99 ",
    bio: " I LOVE coding! JavaScript is Great!!! "
};

function cleanUserBio(profile) {
    let username = profile.username.trim().toLowerCase();

    let bio = profile.bio.trim().toLowerCase();
    bio = bio.replace("javascript", "JS");

    let length = bio.length;

    return {
        username: username,
        bio: bio,
        bioLength: length
    };
}

let result = cleanUserBio(userProfile);

document.write("Username: " + result.username + "<br>");
document.write("Bio: " + result.bio + "<br>");
document.write("Bio Length: " + result.bioLength);