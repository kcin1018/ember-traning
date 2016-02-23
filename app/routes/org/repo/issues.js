import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let org = this.modelFor('org').get('login');
    let repo = this.modelFor('org.repo').repo;

    console.log(org, repo);

    return Ember.$.get(`https://api.github.com/repos/${org}/${repo}/issues`);
  }
});
