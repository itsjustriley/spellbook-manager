# Spellbook Manager 

* Created with React
* Styled (sort of) with Tailwind
* 5e SRD API courtesy of 5e-bits

### How to Use
The Spellbook Manager is a tool to help while playing a wizard in 5e Dungeons and Dragons.
Use the 'search spells' page to search SRD spells, learn the ones you like, and prepare from spells known. Use the 'known' and 'prepared' pages to view those lists specifically. 

Click on a spell card to view the spell's description

### Limitations
The spells available are limited to SRD content, for legal reasons. 
Ability to add custom spells is a potential future improvement.


### Future Improvements
* Improved searching/filter
  * damage/save type
  * class
  * description text
  * ritual/concentration
  * etc
* Move search/filter to separate component so it can be used for known/prepared
* Detailed Spell View
  * click icon to open larger spell view with all details
* Level Selection Setting
  * ability to toggle level appropriate spells
  * used for spell slot numbers, spells prepared, proficiency bonus, etc.
* Spell Slot Tracking
  * display correct number of slots based on level
  * this allows tracking proficiency bonuses
  * Should add rest button to reset
* Cast button 
  * Select level, if possible to upcast
  * Automatically use spell slot
* Concentration tracker
  * when you cast a concentration spell, display a 'concentration on' banner
  * if you try to cast another concentration spell, prompt for confirmation, notify original spell dropped, update concentration banner
  * ability to drop concentration manually
* Dice roller
  * Roll appropriate spell attack / damage roll when casting
* Intelligence Modifier Setting
  * allows us to determine spell save DCs/attack rolls
  * would need to implement a manual "other bonuses" field
* Restrict spells prepared based on level/modifier
* Ability to add custom spells
* Implement backend to avoid using local storage
  * This allows for user accounts, multiple device access
* Mobile versions
* Forget/Unprepare All
* Long term, add ability to select class
  * default to showing class spells only, ability to toggle to view all
  * adjust spell slots
  * only display learn/prepare to appropriate classes
* Various styling improvements
  * Prettier checkbox alternatives/toggles
  * Fix card resizing to show description
  * Footer stick to bottom
  * generally make prettier
