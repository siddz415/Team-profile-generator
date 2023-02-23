const Intern = require('..lib/intern');
const intern = new Intern('john', '12345','johnsmith@yahoo.com', 'UCB');

test ('test if we can get the constructor values for the intern', () => {
    expect(intern.name).toBe('john');
    expect(intern.id).toBe('12345');
    expect(intern.email).toBe('johnsmith@yahoo.com');
    expect(intern.school).toBe('UCB');
})

test ('test if we can get the name from getName()', () => {
    expect(intern.getName()).toBe('john');
})

test ('test if we can get the id from getId()', () => {
    expect(intern.getId()).toBe('12345');
})

test ('test if we can get the email from getEmail()', () => {
    expect(intern.getEmail()).toBe('johnsmith@yahoo.com');
})

test ('test if we can get the school name from getSchool()', () => {
    expect(intern.getSchool()).toBe('UCB');
})

test ('test if we can get the role from getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
})