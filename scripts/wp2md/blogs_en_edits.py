"""Per-site, per-item decisions for blogs_en.py (op syntax in core.apply_ops).

NO_CONTENT  items without pedagogical content worth keeping (discarded), with the reason
EDITS       remove references to the source site, school, store, authors and to "this article"
"""
from core import d, p

NO_CONTENT = {
    'montessori-services': {
        '40-years-of-montessori-services',                  # company history
        'sourcing-classroom-materials',                     # how the store develops its products
        'polish-up-your-polishing-activities',              # product development story / product launch
        'back-to-school-resources',                         # list of publications to order
        'aline-wolfs-montessori-journey', 'aline-wolfs-montessori-journey-part-2',     # biographical interviews
        'she-was-trained-by-maria-and-mario-montessori-part-1', 'she-was-trained-by-maria-and-mario-montessori-part-2',
        'michael-dorer-montessori-storyteller',
    },
    'happy-kids': {
        'comment-choisir-ecole-montessori-geneve',          # guide to the school market in Geneva, ends in self-promotion
        'podcast-parenthood-la-pdagogie-montessori-ses-origines-et-ses-principes-fondateurs',  # podcast pointer
    },
    'blooming': {
        'the-famous-former-pupils-of-the-montessori-method-and-how-montessori-have-played-a-role-in-their-success',  # celebrity list
    },
}

EDITS = {
    'montessori-services': {
        'cultivating-respect': [('sub', ' (See our article *Cultivating Peace in the Classroom*.)', '')],
        'three-year-multi-age-grouping': d("Fortunately, Lakshmi's words of wisdom are available"),
        'making-and-eating-snacks-in-class': d('For additional ideas, see our article') + [
            ('sub', 'The Montessori Services *Snack Cards* give four-step photo instructions that are', 'Recipe cards with four-step photo instructions are')],
        'scissors-skills-for-children': d('After Jane Campbell, founder of Montessori Services'),
        'tools-in-practical-life': [('sub', ' (Many ideas are included in the woodworking books on our website.)', '')],
        'take-another-look-at-the-metal-insets': d('**For products to help children create beautiful Metal Inset designs'),
        'theres-more-to-physical-science': [('trunc', ' To save you time, Montessori Services')],
        'cool-summer-water-lessons': [
            ('sub', ' We have a float-sink exercise in our catalog along with books and lessons that describe the process.', ''),
            ('re', r', which is available in our catalog', '')],
        'sensorial-sounds': [('sub', ', and yet I hope that this article has struck a chord.', '.')] + d('Montessori Services is not a distributor'),
        'music-in-the-montessori-classroom': [('sub', ' (See our article, *Walking on the Meandering Line*.)', '')],
        'cursive-handwriting-in-the-21st-century': [('re', r'\n- For more ideas, see our article, \*How Children Learn to Write\*\.', '')],
        'the-ground-was-our-writing-board': d('*What do you do when you meet a legend?', 'Choosing one article to represent a lifetime',
                                              '*The Ground Was Our Writing Board* is a longer article', '—Kelly Griffith Mannion'),
        'grace-and-courtesy-stories': [
            ('sub', ' (more about the importance of choosing Montessori for the preschool years in a future newsletter!)', '')] + d(
            'Please share your grace and courtesy stories with us'),
        'social-justice-environmental-justice-and-the-elementary-child': d('The author of this article, Irene Baker'),
        'i-did-it-all-by-myself': d('P.S. Do you have a photo of your children'),
        'pack-a-childs-lunch-montessori-style': d('P.S. Do you and your children make fun'),
        'backyard-camping-montessori-style': [('re', r' Did your child sing\? Please visit us on \[Facebook\]\([^)]*\) and let us all know which school!', '')],
        'lessons-from-pandemic-parenting': [('trunc', ' —by Jane M. Jacobs')],
        'must-toys-be-educational': [('sub', 'Jane Campbell, founder of Montessori Services reminds us:', 'It is worth remembering:')],
        'children-love-to-sew-weave-and-knit': [
            ('sub', ' Our catalog and website have some of these sewing kits or you can visit your crafts store for ideas.', ' Craft stores also carry simple sewing kits.')],
        'children-at-the-workbench': [
            ('sub', 'The woodworking books in our catalog and on our website give specific instructions', 'Woodworking books for children give specific instructions')],
    },
    'happy-kids': {
        'comment-profiter-au-mieux-des-vacances-dt-avec-ses-enfants-des-activits-inspires-de-la-pdagogie-montessori': [('trunc', ' Dans cet article')],
        'activites-de-vie-pratique': [('trunc', ' Cet article explore')],
        'les-fonctions-excutives-comment-favoriser-le-dveloppement-cognitif-de-votre-enfant': [('trunc', ' Cet article explore')],
        'accompagner-son-enfant-dans-lapprentissage-de-la-propret-10-conseils-pour-les-parents': [('trunc', ' Dans cet article')],
        'maria-montessori-et-les-neurosciences': d('#### Chez Montessori Happy Kids, ces quatre piliers', "L'école Montessori Happy Kids intègre",
                                                   'Montessori Happy Kids offre un cadre pédagogique') + [
            ('sub', 'Nos classes sont soigneusement organisées', 'Les classes Montessori sont soigneusement organisées')],
        'comment-enrichir-le-vocabulaire-de-votre-enfant': d('Chez Montessori Happy Kids, nous utilisons Bookinou'),
        'les-benefices-des-relations-intergenerationnelles': [
            ('trunc', ' Chez Montessori Happy Kids, nous avons mis en place'),
            ('sub', 'nous construisons chez Montessori Happy Kids un socle solide', 'nous construisons un socle solide')],
        'les-bienfaits-du-bilinguisme-francais-anglais-dans-une-classe-montessori': d(
            "Chez Montessori Happy Kids, l'apprentissage des langues", 'Derrière chaque réussite, il y a un enseignant passionné'),
        '7-raisons-de-choisir-une-cole-montessori-plutt-quune-cole-traditionnelle': d('**N’hésitez pas à**'),
    },
    'blooming': {
        'guide-for-parents-to-find-authentic-montessori-nursery': [('sub', 'look for the qualities I mentioned in this article', 'look for these qualities')],
        'how-montessori-education-can-prepare-children-for-future-careers': [
            ('sub', ' In this blog post, I’ll explore how Montessori education can prepare children for future careers.', '')],
    },
    'amshq': {
        # the landing page repeats the FAQ page; only its unique question is kept
        'about-montessori': [('from', '### What is the role of a Montessori teacher if the work is child-led?'),
                             ('cut', '### What materials and lessons are unique to Montessori?')],
        'about-dr-maria-montessori': d('History of the American Montessori Society »'),
        'benefits-of-montessori': [('sub', ' and how the American Montessori Society supports everyone involved in this community', '')],
        'history-of-montessori': [('sub', ' In 1960, Rambusch founds the American Montessori Society.', ''), ('re', r'\AHistory of Montessori\n\n', '')],
        'inside-the-montessori-classroom': d('- Find a School', 'Deepen your understanding of Montessori with real-life insights',
                                             'Explore the benefits of a Montessori family lifestyle', '### Reading material',
                                             '### Early Childhood Course', '## Resources for Families', '8 Tips For Cooking With Your Child',
                                             '### Quick Links:') + [
            ('re', r'\s*For additional information on quality Montessori schools, see the Pathway[^\n]*', ''),
            ('sub', ' AMS has several affiliated techer education programs available to earn Montessori credentials across all age groups.', '')],
        'montessori-children-with-disabilities-and-neurodivergences': d('Language and perceptions change rapidly. AMS will continue'),
        'infant-and-toddler': [('sub', 'Learning materials, such as the ones in the photos on this page, are easily accessible.', 'Learning materials are easily accessible.')],
        'montessori-faqs': d('# How can we help you?', 'Find answers to common questions on Montessori education and AMS.'),
        'what-is-montessori': [
            ('sub', 'AMS recognizes 5 components as essential to high-quality programs.', 'Five components are essential to high-quality programs.'),
            ('sub', 'they are a vital part of any school accredited by the American Montessori Society. Currently, about 15% of our member schools fall into this elite group.',
             'they are a vital part of high-fidelity Montessori programs.')],
    },
}
