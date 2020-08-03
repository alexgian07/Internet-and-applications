# Internet-and-applications
Final project for "Internet and applications" course


Alex Giannoulis  - 03115199

## Χρησιμοποίηση δοθέντων Web services και συνδυασμός τους
Θα δημιουργήσω ένα restful API το οποίο θα λαμβάνει δεδομένα απο τα δοθέντα Web Services ώστε στην συνέχεια να τα επεξεργάζομαι και να παραθέτω χρήσιμες πληροφορίες.
Πρόκειται για μια CLI εφαρμογή  με 3 βασικές χρήσεις :



1 ) Ο χρήστης θα εισάγει τις συντεταγμένες του και θα χρησιμοποιώ το web service που μας δίνεται ( της itravel ) και θα βρίσκω τις 5 πιο κοντινές στάσεις σε αυτόν ( τόσο τις συντεταγμένες ,όσο και το όνομα και το device id) ( οπότε ουσιαστικά θα χρησιμοποιώ τα 2 πρώτα web services αλλά και το end point που μας δίνει όλα τα devices : http://feed.opendata.imet.gr:23577/itravel/devices ) .


2 ) o χρήστης θα εισάγει στάση ( είτε με device id είτε με όνομα ) και θα εμφανίζονται όλα τα paths που εκκινούν ή τερματίζουν  απο εκει ( τόσο το path id,όσο και  το όνομα του path ).
Σίγουρα θα χρειαστεί να κάνω χρήση του endpoint που εμφανίζονται όλα τα paths ,δηλαδή του : http://feed.opendata.imet.gr:23577/itravel/paths ,καθώς και κάποιων web services  .
Σημείωση : Η συγκεκριμένη προδιαγραφή άλλαξε από "o χρήστης θα εισάγει στάση ( είτε με device id είτε με όνομα ) και θα εμφανίζονται όλα τα paths που περνάνε απο εκεί " μετά απο σχετική άδεια που πήρα με email ( λόγω μη αντιστοίχισης συντεταγμένων των polyline σε στάσεις )


3 ) Εμφάνιση του polyline για δοθέν path id ή path name  ( απλή υλοποίηση δηλαδή με βάση κυρίως  το end point που παίρνουμε απο το web service 3 )

Ενδέχεται να προσθέσω συμπληρωματικές λειτουργίες , αν προλάβω..

**Update: Υλοποίησα ένα απλό front-end**

Θα γίνει ως επι το πλείστον χρήση nodejs για την υλοποίηση.Συγκεκριμένα, θα χρησιμοποιήσω τις βιβλιοθήκες express και commander για το api ( server)  και το cli , αντίστοιχα .



## Στήσιμο του back-end
Ενώ είμαστε στο directory του back-end σε ένα command-line γράφουμε :
```
npm install
```
(για τα dependancies απο modules)
```
npm run start
```
( για την εκκίνηση του server)


## Στήσιμο του CLI
Ενώ είμαστε στο directory του cli σε ένα command-line γράφουμε :
```
npm install
```
(για τα dependancies απο modules)
```
npm link
```

## Στήσιμο του front-end
Απο το directory του front-end ανοίγουμε με κάποιον browser  το αρχείο front-end.html

Προσοχή : Πρέπει να τρέχει το back-end  ( όπως και στο cli βέβαια).



 **Χρήση:**
