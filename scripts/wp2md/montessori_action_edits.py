"""Per-item decisions for montessoriaction.com (op syntax in core.apply_ops).

NO_CONTENT  items without pedagogical content worth keeping (discarded)
EDITS       remove blog navigation notes ("in the next post...", "see you soon") and partnership notes
"""
from core import d

NO_CONTENT = {
    # news, event announcements and event reports
    '2019-general-assembly-association-montessori-france',
    'annual-general-assembly-swiss-montessori-association',
    'annual-general-assembly-maria-montessori-aiglons-high-school',
    'maria-montessori-aiglons-middle-school-remise-graudation-ceremony-12-15-year-olds',
    'maria-montessori-aiglons-middle-school-end-year-celebration-theme-food',   # also written in French
    'conference-christian-marechal-montessori-pedagogy-neuroscience',
    'steve-hughes-conference-education-for-life-neuroscience-perspectives-montessori-education',
    'solange-denervaud-lecture-concentration-service-interior-construction',
    'karen-pearce-lecture-seeing-is-believing-art-observation',
    'death-jeannette-toulemonde',                         # obituary
    'publication-book-montessori-heart-family-odile-anot',  # book announcement
    # "Director's Cut": the author's story as a school parent and reflections on school governance/legal form
    'my-first-montessori-school',
    'being-parent-student-montessori-school',
    'running-montessori-school-parents-association',
    'role-parents-montessori-school',
    'limits-associative-management-montessori-school',
    # "Montessori Training from the inside": personal diary of the training course (travel, routine, roommates)
    'premier-jour-cours-elementaire-montessori',
    'importance-trainer-montessori-training',
    'typical-day-montessori-training',
    'montessori-training-happily-tired',
    'montessori-training-how-many-questions-can-you-ask',
    'montessori-choose-your-people',
    'montessori-unsupervised-practice-at-home',
}

EDITS = {
    '4-stages-development-human-babies': d('[In the next post]') + [
        ('sub', ' (the one that is the subject of this blog)', '')],
    'child-development-from-0-to-6-years': d('That’s why in the next post', 'So much for the general attitude … but when and how to intervene') + [
        ('sub', ' (it is one of my favourite subjects, and I will often come back to it on this blog)', '')],
    'sensitive-periods-montessori-pedagogy': [('sub', ' We will have the opportunity to come back to this soon.', '')],
    'letting-go-montessori-pedagogy': d('Have a great day.', 'So much for today, I hope that this reading has served you well.'),
    'educating-twins-respecting-autonomy': d('I hope that these reflections from my experience will be useful to you.'),
    'jeannette-toulemonde-lie-really': d('*This article was published in partnership with'),
}
