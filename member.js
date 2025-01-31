function skillsMember() {
    const member = {
        name: 'John Doe',
        age: 30,
        skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'],
        showSkills: function() {
            this.skills.forEach(skill => {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    }
    return member;
}