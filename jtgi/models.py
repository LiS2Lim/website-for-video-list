from django.db import models

class Videolist(models.Model):
    video_id = models.CharField(db_column='videoID', primary_key=True, max_length=100)  # Field name made lowercase.
    language_fk = models.ForeignKey('MasterLanguages', models.DO_NOTHING, db_column='language_fk')  # Field name made lowercase.
    video_name = models.CharField(db_column='videoNameforAdmin', max_length=100)  # Field name made lowercase.
    is01trend = models.IntegerField(db_column='Is01Trend')  # Field name made lowercase.
    is02event = models.IntegerField(db_column='Is02Event')  # Field name made lowercase.
    is03shock = models.IntegerField(db_column='Is03Shock')  # Field name made lowercase.
    is04food = models.IntegerField(db_column='Is04Food')  # Field name made lowercase.
    is05interest = models.IntegerField(db_column='Is05Interest')  # Field name made lowercase.
    is06howto = models.IntegerField(db_column='Is06HowTo')  # Field name made lowercase.
    is07recommend = models.IntegerField(db_column='Is07Recommend')  # Field name made lowercase.
    is08suggested = models.IntegerField(db_column='Is08Suggested')  # Field name made lowercase.
    is09city = models.IntegerField(db_column='Is09City')  # Field name made lowercase.
    is10other = models.IntegerField(db_column='Is10Other')  # Field name made lowercase.
    publish_date = models.DateTimeField(db_column='publish_date_utc')

    class Meta:
        managed = False
        db_table = 'jtgi_videolist'
        ordering = ['-publish_date']

    def __str__(self):
        return str(self.language_fk) + self.video_name + "(" + str(self.publish_date) + ")"

class MasterLanguages(models.Model):

    id = models.CharField(primary_key=True, max_length=2)
    name = models.TextField()
    active = models.IntegerField()
    sort = models.PositiveIntegerField()

    class Meta:
        managed = False
        db_table = 'master_languages'

    def __str__(self):
        return self.id + ": " + self.name
