const Engineer = require('..lib/Engineer');
const engineer = new Engineer('john', '12345','johnsmith@yahoo.com', 'jsmith');

test ('test if we can get the constructor values for the engineer', () => {
    expect(engineer.name).toBe('john');
    expect(engineer.id).toBe('12345');
    expect(engineer.email).toBe('johnsmith@yahoo.com');
    expect(engineer.github).toBe('jsmith');
})

test ('test if we can get the name from getName()', () => {
    expect(engineer.getName()).toBe('john');
})

test ('test if we can get the id from getId()', () => {
    expect(engineer.getId()).toBe('12345');
})

test ('test if we can get the email from getEmail()', () => {
    expect(engineer.getEmail()).toBe('johnsmith@yahoo.com');
})

test ('test if we can get the github username from getGithub()', () => {
    expect(engineer.getGithub()).toBe('jsmith');
})

test ('test if we can get the role from getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
})