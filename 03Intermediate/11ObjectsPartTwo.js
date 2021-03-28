var user = {
    firstName : "Yaswanth",
    lastName  : "Bethu",
    role      : "Admin",
    loginCount : 23,
    faceBookSignedIn : true,
    courseList : [],

    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },

    getCourseCount : function () {
        return `${this.firstName} has enrolled in total of ${this.courseList.length}`;
    },

    info : function () {
        return(`
        UserName: ${this.firstName+this.lastName}
        UserRole: ${this.role}
        Login COunt : ${this.loginCount}
        SignedIn: ${this.faceBookSignedIn}
        Course List: ${this.courseList}
        `);
    }
};

console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("MERN BootCamp");
console.log(user.getCourseCount());
console.log(user.info());
