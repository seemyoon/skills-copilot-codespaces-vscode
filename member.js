function skillsMember()
{
  var member = {
    firstName: 'John',
    lastName: 'Doe',
    skills: ['JavaScript', 'HTML', 'CSS'],
    showSkills: function() {
      this.skills.forEach(function(skill) {
        console.log(`${this.firstName} ${this.lastName} knows ${skill}`);
      });
    }
  };

  member.showSkills();
}