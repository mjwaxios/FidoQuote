/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
        http://aws.amazon.com/apache2.0/
    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

var APP_ID = "amzn1.echo-sdk-ams.app.6d6d69d2-1d76-46a5-9180-3ae3c6d0eb59";
var VERSION = "7/19/2016 - 11:13 am";
var QUOTES = [
"Ill play with it first and tell you what it is later.<p>MILES DAVIS</p>",
"Im hungry! Im hungry! for good things to eat for Sugar Jets, Sugar Jets whole toasted wheat<p>ADVERTISEMENT</p>",
"Nothing is true. Everything is permitted.<p>HASSAN I SABBAH</p>",
"Dont let your mouth write no check that your tail cant cash.<p>BO DIDDLEY</p>",
"The opposite of a correct statement is a false statement. But the opposite of a profound truth may well be another profound truth.<p>NIELS BOHR</p>",
"Just because everything is different doesnt mean anything has changed.<p>SOUTHERN CALIFORNIA ORACLE</p>",
"The most merciful thing in the world ... is the inability of the human mind to correlate all its contents.<p>H P LOVECRAFT</p>",
"Take what you can use and let the rest go by <p> KEN KESEY</p>",
"Its not the size of the ship, its the size of the waves <p>LITTLE RICHARD</p>",
"I never loved another person the way I loved myself <p>MAE WEST</p>",
"Nothing is true. Everything is permitted.<p>HASSAN I SABBAH</p>",
"When choosing between two evils I always like to take the one Ive never tried before.<p>MAE WEST</p>",
"Her life was saved by rock and roll.<p>LOU REED</p>",
"Dont let your mouth write no check that your tail cant cash.<p>BO DIDDLEY</p>",
"The opposite of a correct statement is a false statement. But the opposite of a profound truth may well be another profound truth.<p>NIELS BOHR</p>",
"The most merciful thing in the world ... is the inability of the human mind to correlate all its contents.<p>H P LOVECRAFT</p>",
"Never invest your money in anything that eats or needs painting.<p>BILLY ROSE</p>",
"The rich will do anything for the poor but get off their backs.<p>KARL MARX</p>",
"If Karl, instead of writing a lot about capital, had made a lot of it ... it would have been much better.<p>KARL MARX'S MOTHER</p>",
"I regret to say that we of the FBI are powerless to act in cases of oral-genital intimacy, unless it has in some way obstructed interstate commerce.<p>J EDGAR HOOVER</p>",
"Honest Officer, had I known my health stood in jeprody I would never had lit one.<p>MAXIM OF THE HELLS ANGELS</p>",
"It is a rather pleasent experience to be alone in a bank at night.<p>WILLIE SUTTON</p>",
"Never invest your money in anything that eats or needs painting.<p>BILLY ROSE</p>",
"If you think the United States has stood still, who built the largest shopping center in the world?<p>RICHARD M NIXON</p>",
"When I sell liquor, its called bootlegging; when my patrons serve it on Lake Shore Drive, its called hospitality.<p>AL CAPONE</p>",
"Anything anybody can say about America is true.<p>EMMETT GROGAN</p>",
"Tip the world over on its side and everything loose will land in Los Angeles.<p>FRANK LLOYD WRIGHT</p>",
"If youve seen one city slum, youve seen them all.<p>SPIRO AGNEW</p>",
"If youve seen one redwood, youve seen them all.<p>RONALD REAGAN</p>",
"He who shits on the road will meet flies on his return.<p>SOUTH AFRICAN SAYING</p>",
"Use it up ... Wear it out. Make it do ... Or do without.<p>US WORLD WAR II MESSAGE</p>",
"You cant underestimate the power of fear.<p>TRICIA NIXON</p>",
"The whole earth is in jail and we're plotting this incredible jailbreak.<p>WAVY GRAVY</p>",
"The end move in politics is always to pick up a gun.<p>BUCKMINSTER FULLER</p>",
"Things are more like they are now than they ever were before.<p>DWIGHT D EISENHOWER</p>",
"You smash it and Ill build around it.<p>JOHN LENNON</p>",
"College isnt the place to go for ideas.<p>HELLEN KELLER</p>",
"Politicians should read science fiction, not westerns and detective stories.<p>ARTHUR C CLARKE</p>",
"America, how can a write a holy litany in your silly mood?<p>ALLEN GINSBERG</p>",
"It is necessary for me to establish a winner image. Therefore, I have to beat somebody.<p>RICHARD M NIXON</p>",
"Any smoothly functioning technology will have the appearence of magic.<p>ARTHUR C CLARKE</p>",
"Justice is incedental to law and order.<p>J EDGAR HOOVER</p>",
"Military intelligence is a contradiction in terms.<p>GROUCHO MARX</p>",
"The first duty of a revolutionary is to get away with it.<p>ABBIE HOFFMAN</p>",
"Stay out of the road, if you want to grow old.<p>PINK FLOYD</p>",
"Here I am, fifty eight, and I still dont know what I want to be when I grow up.<p>PETER DRUCKER</p>",
"How can you be two places at once when youre not anywhere at all?<p>FIRESIGN THEATER</p>",
"I think that God in creating man somewhat overestimated his ability.<p>OSCAR WILDE</p>",
"We are what we pretend to be.<p>KURT VONNEGUT, JR</p>",
"We are all in the gutter, but some of us are looking at the stars.<p>OSCAR WILDE</p>",
"The race is not always to the swift, nor the battle to the strong but thats the way to bet.<p>DAMON RUNYON</p>",
"I could prove God statistically.<p>GEORGE GALLUP</p>",
"Real wealth can only increase.<p>R BUCKMINSTER FULLER</p>",
"Anyone can hate. it costs to love.<p>JOHN WILLIAMSON</p>",
"In the province of the mind, what one believes to be true either is true or becomes true.<p>JOHN LILLY</p>",
"Time is an illusion perpetrated by the manufacturers of space.<p>GRAFFITI</p>",
"The most incomprehensible thing about the world is that it is comprehensible.<p>ALBERT EINSTEIN</p>",
"Nobody can be exactly like me. Even I have trouble doing it<p>TALLULAH BANKHEAD</p>",
"A physicist is an atoms way of knowing about atoms.<p>GEORGE WALD</p>",
"Dont lose Your head To gain a minute You need your head Your brains are in it.<p>BURMA SHAVE</p>",
"It was always thus; and even if twere not, twould inevitably have been always thus.<p>DEAN LATTIMER</p>",
"Burnt Sienna. Thats the best thing that ever happened to Crayolas.<p>KEN WEAVER</p>",
"We dont know who discovered water, but we are certain it wasnt a fish.<p>JOHN CULKIN</p>",
"Try to be the best of what you are, even if what you are is no good.<p>ASHLEIGH BRILLIANT</p>",
"I waited and waited, and when no message came, I knew it must have been from you.<p>ASHLEIGH BRILLIANT</p>",
"Please dont lie to me, unless youre absolutely sure Ill never find out the truth.<p>ASHLEIGH BRILLIANT</p>",
"Please dont ask me what the score is, Im not even sure what the game is.<p>ASHLEIGH BRILLIANT</p>",
"I either want less corruption, or more chance to participate in it.<p>ASHLEIGH BRILLIANT</p>",
"If you cant learn to do it well, learn to enjoy doing it badly.<p>ASHLEIGH BRILLIANT</p>",
"I dont have any solution, but I certainly admire the problem.<p>ASHLEIGH BRILLIANT</p>",
"Maybe Im lucky to be going so slowly, because I may be going in the wrong direction.<p>ASHLEIGH BRILLIANT</p>",
"By doing just a little every day, I can gradually let the task completely overwhelm me.<p>ASHLEIGH BRILLIANT</p>",
"To be sure of hitting the target, shoot first, and call whatever you hit the target.<p>ASHLEIGH BRILLIANT</p>",
"America is the only country that went from barbarism to decadence without civilization in between.<p>OSCAR WILDE</p>",
"The flush toilet is the basis of Western civilization.<p>ALAN COULT</p>",
"If the aborigine drafted an IQ test, all of Western civilization would presumably flunk it.<p>STANLEY GARN</p>",
"The world looks as if it has been left in the custody of trolls.<p>FATHER ROBERT F CAPON</p>",
"Sure there are dishonest men in local government. But there are dishonest men in national government too.<p>RICHARD M NIXON</p>",
"We are going to have peace even if we have to fight for it.<p>DWIGHT D EISENHOWER</p>",
"If we make peaceful revolution impossible, we make violent revolution inevitiable.<p>JOHN F KENNEDY</p>",
"Contrariwise, continued Tweedledee, If it was so, it might be; and if it were so, it would be; but as it isnt, it aint. Thats logic.<p>LEWIS CARROLL</p>",
"It takes a long time to understand nothing.<p>EDWARD DAHLBERG</p>",
"To know the world one must construct it.<p>CESARE PAVESE</p>",
"Eeny Meeny, Jelly Beanie, the spirits are about to speak.<p>BULLWINKLE MOOSE</p>",
"The mistake you make is in trying to figure it out.<p>TENESSEE WILLIAMS</p>",
"An object never serves the same function as its image or its name.<p>RENE MAGRITTE</p>",
"All I kin say is when you finds yo self wanderin in a peach orchard, ya dont go lookin for rutabagas.<p>KINGFISH</p>",
"He who wonders discovers that this in itself is wonder.<p>M C ESCHER</p>",
"<p>Law of Computability Applied to Social Sciences</p>If at first you dont suceed, transform your data set.",
"When more and more people are thrown out of work, unemployment results.<p>CALVIN COOLIDGE</p>",
"The first rule of intelligent tinkering is to save all the parts<p>PAUL ERLICH</p>",
"If A equals success, then the formula is: A= X + Y + Z. X is work. Y is play. Z is keep your mouth shut.<p>ALBERT EINSTEIN</p>",
"Sex is hereditary. If your parents never had it, chances are you wont either.<p>JOSEPH FISCHER</p>",
"Fourth Law of Thermodymanics:If the probability of success is not almost one, then it is damn near zero.<p>DAVID ELLIS</p>",
"<p>Frouds Law:</p>A transistor protected by a fast acting fuse will protect the fuse by blowing first.",
"Give a small boy a hammer and he will find that everything he encounters needs pounding.<p>ABRAHAM KAPLAN</p>",
"The fault lies not with our technologies but with our systems.<p>ROGER LEVIAN</p>",
"Under any conditions, anywhere, whatever you are doing, there is some ordinance under which you can be booked.<p>ROBERT D SPRECHT (RAND CORP)</p>",
"<p>Thoreau's Law:</p> If you see a man approaching you with the obvious intent of doing you good, you should run for your life.",
"<p>Vique's Law:</p> A man without religion is like a fish without a bicycle.",
"If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization.<p>GERALD WEINBERG</p>",
"<p>Zimmerman's Law of Complaints:</p>Nobody notices when things go right.",
"Real knowledge is to know the extent of ones ignorance.<p>CONFUCIUS</p>",
"Whoso diggeth a pit shall fall therein.<p>BOOK OF PROVERBS</p>",
"It usually takes more than three weeks to prepare a good impromptu speech.<p>MARK TWAIN</p>",
"The unnatural, that too is natural.<p>GOETHE</p>",
"I used to be indecisive; now Im not sure.<p>GRAFFITI</p>",
"I had a monumental idea this morning, but I didnt like it.<p>SAMUEL GOLDWYN</p>",
"He hasn't one redeeming vice.<p>OSCAR WILDE</p>",
"I'd give my right arm to be ambidextrous.<p>GRAFFITI</p>",
"Martyrdom is the only way a person can become famous without ability<p>George Bernard Shaw</p>",
"Science has proof without any certainty. Creationists have certainty without any proof<p>Ashley Montague</p>",
"Birth, Copulation, and Death. That's all the facts when you come to brass tacks<p>T. S. Elliot</p>",
"Make no little plans. They have no Magic to stir Men's blood.<p>D. B. Hudson</p>",
"<p>Bradley's Bromide:</p>If computers get too powerful,we can organize them into a committee... that will do them in.",
"<p>Civilization Law #1:</p>Civilization advances by extending the number of important operations one can do without thinking about them.",
"<p>Ketterling's Law:</p>Logic is an organized way of going wrong with confidence.",
"Whenever 'A' attempts by law to impose his moral standards upon 'B', 'A' is most likely a scoundrel<p>H. L. Mencken </p>",
"The government of the United States is not in any sense founded on the Christian Religion<p>George Washington</p>",
"In every country and every age, the priest has been hostile to Liberty.<p>Thomas Jefferson</p>",
"Money, not morality, is the principle commerce of civilized nations<p>Thomas Jefferson</p>",
"We must all hang together, or we will surely all hang separately<p>Benjamin Franklin</p>",
"Where a new invention promises to be useful, it ought to be tried<p>Thomas Jefferson </p>",
"Assuming that either the left wing or the right wing gained control of the country, it would probably fly around in circles<p>Pat Paulsen</p>",
"An intellectual is someone whose mind watches itself<p>Camus</p>",
"Six years for possession of a cigarette?...I got six months for possession of a deadly weapon!<p>cartoon by S. Harris </p>",
"<p>The Swartzberg Test:</p> The validity of a science is its ability to predict.",
"What do you call a boomerang that doesn't work? A stick!<p>Bill Kirchenbaum, comedian </p>",
"To err is human, to compute divine. Trust your computer but not its programmer<p>Morris Kingston</p>",
"I've seen many politicians paralyzed in the legs as myself, but I've seen more of them who were paralyzed in the head<p>George Wallace</p>",
"You don't have to explain something you never said<p>Calvin Coolidge </p>",
"A little caution outflanks a large cavalry<p> Bismarck </p>",
"A billion here, a billion there, sooner or later it adds up to real money<p>Everett Dirksen </p>",
"I like a man who grins when he fights.<p>Winston Churchill </p>",
"There are a lot of lies going around.... and half of them are true.<p>Winston Churchill </p>",
"Man will occasionally stumble over the truth, but most times he will pick himself up and carry on...<p>Winston Churchill </p>",
"Pioneering basically amounts to finding new and more horrible ways to die<p>John W. Campbell</p>",
"That man is richest whose pleasures are cheapest<p>Thoreau </p>",
"Life is not one thing after another.... it's the same<p>damn thing over and over!</p>",
"<p>The meek will inherit the Earth..... The rest of us will go to the stars.</p>",
"<p>After all is said and done, a lot more has been said than done.</p>",
"<p>Beauty is only skin deep, but Ugly goes straight to the bone.</p>",
"<p>Any given program, when running correctly, is obsolete.</p>",
"<p>What matters is not the length of the wand, but the magic in the stick.</p>",
"Discovery consists in seeing what everyone else has seen and thinking what no one else has thought.<p>Albert Szent-Gyorgi </p>",
"Revolution is the opiate of the intellectuals<p>Oh, Lucky Man </p>",
"Some people like my advice so much that they frame it upon the wall instead of using it<p>Gordon R. Dickson </p>",
"Civilization is a movement, not a condition; it is a voyage, not a harbor.<p>Toynbee </p>",
"We have met the enemy and he is us<p>Walt Kelly (in POGO) </p>",
"If it ain't broke, don't fix it.<p>Bert Lantz </p>",
"The one charm of marriage is that it makes a life of deception a neccessity.<p>Oscar Wilde </p>",
"God is a comedian playing to an audience too afraid to laugh.<p>Voltaire </p>",
"There are things that are so serious that you can only joke about them<p>Heisenberg </p>",
"It takes all sorts of in & out-door schooling to get adapted to my kind of fooling<p>R. Frost </p>",
"Confound these ancestors.... They've stolen our best ideas!<p>Ben Jonson </p>",
"<p>Anthony's Law of Force</p>Don't force it, get a bigger hammer.",
"<p>Brook's Law</p>Adding manpower to a late software project makes it later.",
"<p>Cann's Axiom</p>When all else fails, read the instructions.",
"<p>Canada Bill Jones' Motto</p>It's morally wrong to allow suckers to keep their money.",
"<p>Canada Bill Jones' Supplement</p>A Smith & Wesson beats four aces.",
"<p>Clarke's Third Law</p>Any sufficiently advanced technology is indistinguishable from magic.",
"<p>Murphy's Fourth Law</p>If there is a possibility of several things going wrong, the one that will cause the most damage will be the one to go wrong.",
"<p>Franklin's Rule</p>Blessed is he who expects nothing, for he shall not be disappointed.",
"<p>Heller's Law</p>The first myth of management is that it exists.",
"<p>Hoare's Law of Large Programs</p>Inside every large program is a small one struggling to get out.",
"<p>Imhoff's Law</p>The organisation of any bureaucracy is very much like a septic tank ... the really big chunks always rise to the top.",
"<p>Iron Law of Distribution</p>Them what has gets.",
"<p>John's Axiom</p> When your opponent is down, kick him.",
"<p>John's Collateral Corollary</p>In order to get a loan, you must first prove that you don't need it.",
"<p>Johnson-Laird's Law</p>Toothaches tend to start on Saturday night.",
"<p>Jones' Law</p>The man who can smile when things go wrong has thought of someone he can blame it on.",
"<p>Jones' Motto</p>Friends may come and go, but enemies accumulate.",
"<p>Kitman's Law</p>Pure drivel tends to drive out ordinary drivel.",
"<p>Law of Selective Gravitation</p>Any dropped object will fall so as to do the most damage. (Also known as the Buttered-Side Down principle)",
"<p>Lowery's Law</p>If it jams force it.  If it breaks, it needed replacing anyway.",
"<p>Dean Martin's Definition of Drunkenness</p>You're not drunk if you can lie on the floor without holding on.",
"<p>Meskimen's Law</p>There's never enough time to do it right, but always time to do it over.",
"<p>Murphy's Third Law</p>In any field of scientific endeavout, anything that can go wrong will.",
"<p>Murphy's Law of Thermodynamics</p>Things get worse under pressure.",
"<p>Osborne's Law</p> Variables won't.  Constants aren't.",
"<p>O'Tooles's Commentary on Murphy</p> He was an optimist.",
"<p>Peer's Law</p>The solution to a problem changes the problem.",
"<p>Peter's Placebo</p>An ounce of image is worth a pound of performance.",
"<p>Pudder's Law</p> Anything that begins well ends badly. Anything that begins badly ends worse.",
"<p>Rule of Accuracy</p>When working toward the solution of a problem, it always helps to know the answer.",
"<p>Sattinger's Law </p>It works better if you plug it in.",
"<p>Sevarenid's Law</p>The chief cause of problems is solutions.",
"<p>Shaw's Principle</p> Build a system that a fool can use, and only a fool will want to use it.",
"<p>Weinberg's Corollary</p>An expert is a person who avoids the small errors while sweeping on to the grand fallacy.",
"<p>Sometimes a cigar is just a cigar </p> SIGMUND FREUD",
"The meek shall inherit the earth, but not its mineral rights.<p>J PAUL GETTY</p>",
"Fantasy, abandoned by reason, produces impossible monsters; united with it, she is the mother of the arts and the origin of marvels<p>Goya </p>",
"<p>90-90 Rule of Scheduling</p>The first ninety percent of the task takes ninety percent of the time, and the last ten percent takes the other ninety percent.",
"Tell a man that there are 300 billion stars in the universe, and he'll believe you.... Tell him that a bench has wet paint upon it and he'll have to touch it to be sure.",

"My religion consists of a humble admiration of the illimitable superior spirit who reveals himself in the slight details we are able to perceive"
+" with our frail and feeble mind.<p>ALBERT EINSTEIN</p>",

"(To Walter Cronkite):"
+"Well Walter, I believe that the Good Lord gave us a finite number of heartbeats and I'm damned if I'm going to use up mine running up and down a street"
+"<p>Neil Armstrong</p>",

"Software suppliers are trying to make their software packages more"
+" user-friendly'.... Their best approach, so far, has been to take"
+" all the old brochures, and stamp the words, 'user-friendly' on the cover."
+"<p>Bill Gates,Pres.,Microsoft,Inc.</p>",

"<p>I really hate this damn machine,</p>"
+"I wish that they would sell it."
+" It never does just what I want,"
+" But only what I tell it.",

"<p>Gummidge's Law</p>"
+"     The amount of expertise varies in inverse proportion to the number of statements understood by the general public.",

"<p>Harvard Law</p>"
+"     Under the most rigorously controlled conditions of pressure, temperature,"
+"     volume, humidity and other variables, the organism will do as it damn well"
+"     pleases.",

"Welcome to FIODNET."

/*
"<p>Laws of Computer Programming</p>"
+" (1) Any given program, when running, is obsolete."
+" (2) Any given program costs more and takes longer."
+" (3) If a program is useful, it will have to be changed."
+" (4) If a program is useless, it will have to be documented."
+" (5) Any given program will expand to fill all available memory."
+" (6) The value of a program is porportional to the weight of its output."
+" (7) Program complexity grows until it exceeds the capability of the programmer who must maintain it."  
+" (8) Make it possible for programmers to write programs in  English, and you will find that programmers cannot write in English.",

"Fullers Law of Cosmic Irreversibility:"
+" 1 Pot T == 1 Pot P"
+" 1 Pot P != 1 Pot T"
+"<p>R BUCKMINSTER FULLER</p>",

"Gilbs Laws of Reliability"
+" (1) Computers are unreliable, but humans are even more unreliable."
+" (3) The only difference between the fool, and the criminal who attacks a systrem is that the fool attacks unpredictably and on a broader front."
+" (5) Self-checking systems tend to have a complexity in proportion  to the inherent unreliability of the system in which they are used."
+" (6) The error-detection and correction capabilities of any system are the key to understanding the type of errors which they cannot handle."
+" (7) Undetectable errors are infinite in variety, in contrast to detectable errors, which by definition are limited."
+" (8) All real programs contain errors until proven otherwise which is impossible."
+" (9) Investment in reliability will increase until it exceeds the probable cost of errors, or somebody insists on getting someuseful work done."  
+"<p>TOM GILB</p>",

"You doubted Me, God tells the Lawgiver Moses, But I forgave"
+" you that doubt. You doubted your own self and failed to believe "
+" in your own powers as a leader, and I forgave you that also. But "
+" you lost faith in these people and doubted the divine possibilities "
+" of Human Nature. THIS loss of faith makes it impossible for"
+" you to enter the Promised Land."
+"<p>The Midrash</p>",


"Eight Things your computer won't do:"
+" 1) It won't save you money"
+" 2) It won't make your organization run right"
+" 3) It won't solve every problem"
+" 4) It won't run itself"
+" 5) It won't always be right"
+" 6) It won't meet all its own needs"
+" 7) It won't protect itself"
+" 8) It won't become obsolete"
+"<p>J. Makower </p>",

"During Halmost fifteen centuries the legal establishment of Christianity"
+" has been upon trial. What has been its fruits? More or less, Pin all places,"
+" pride and indolence in the clergy; ignorance and servility in the laity,"
+" in both, superstition, big try, and persecution."
+"<p>James Madison</p>",

"There is no choice before us. Either we must Succeed in providing"
+" the rational coordination of impulses and guts, or for centuries"
+" civilization will sink into a mere welter of minor excitements."
+" We must provide a Great Age or see the collapse of the upward"
+" striving of the human race"
+"<p> Alfred North Whitehead </p>",

"My own life has been spent chronicling the rise and fall of"
+" human systems, and I am convinced that we are terribly"
+" vulnerable.... We should be reluctant to turn back upon the"
+" frontier of this epoch. Space is indifferent to what we"
+" do; it has no feeling, no design, no interest in whether"
+" or not we grapple with it. But we cannot be indifferent to"
+" space, because the grand, slow march of intelligence has brought"
+" us, in our generation, to a point from which we can explore and"
+" understand and utilize it. To turn back now would be to deny"
+" our history, our capabilities."
+"<p>James A. Michener</p>",

"What does it take for Americans to do great things; to go"
+" to the moon, to win wars, to dig canals linking oceans, to"
+" build railroads across a continent? In independent thought"
+" about this question, Neil Armstrong and I concluded that it"
+" takes a coincidence of four conditions, or in Neil's view,"
+" the simultaneous peaking of four of the many cycles of American"
+" life. First, a base of technology must exist from which to do"
+" the thing to be done. Second, a period of national uneasiness"
+" about America's place in the scheme of human activities must"
+" exist. Third, some catalytic event must occur that focuses"
+" the national attention upon the direction to proceed. Finally,"
+" an articulate and wise leader must sense these first three"
+" conditions and put forth with words and action the great thing"
+" to be accomplished. The motivation of young Americans to do what"
+" needs to be done flows from such a coincidence of conditions...."
+" The Thomas Jeffersons, The Teddy Roosevelts, The John Kennedys"
+" appear. We must begin to create the tools of leadership which"
+" they, and thier young frontiersmen, will require to lead us"
+" onward and upward."
+"<p>Dr. Harrison H. Schmidt,Sen.,New Mexico</p>",

"The personal computer market is about the same size as the"
+" total potato chip market. Next year it will be about half the"
+" size of the pet food market and is fast approaching the total"
+" worldwide sales of pantyhose"
+"<p>James Finke,Pres.,Commodore Int'l Ltd.(1982)</p>",

"God runs electromagnetics by wave theory on Monday, Wednesday,"
+" and Friday, and the Devil runs them by quantum theory on Tuesday,"
+" Thursday, and Saturday."
+"<p>William Bragg /p>",

"<p>Ode to Turbulent Flow:</p>"
+" Big whirls have little whirls"
+" Which feed on their velocity"
+" And little whirls have lesser whirls"
+" And so on, to viscosity.",

"IBM uses what I like to call the 'hole-in-the-ground technique"
+" to destroy the competition..... IBM digs a big HOLE in the"
+" ground and covers it with leaves. It then puts a big POT"
+" OF GOLD nearby. Then it gives the call, 'Hey, look at all"
+" this gold, get over here fast.' As soon as the competitor"
+" approaches the pot, he falls into the pit"
+"<p>John C. Dvorak /p>",


"<p>Barber's Laws of Backpacking</p>"
+"     1.     The integral of the gravitational potential taken around any loop"
+"            train you choose to hike always comes out positive."
+"     2.     Any stone in your boot always migrates against the pressure"
+"            gradient to exactly the point of most pressure."
+"     3.     The weight of your pack increases in direct proportion to the"
+"            amount of food you consume from it.  If you run out of food, the"
+"            pack weight goes on increasing anyway."
+"     4.     The number of stones in your boot is directly proportional to the"
+"            number of hours you have been on the trail."
+"     5.     The difficulty of finding any given trail marker is directly"
+"            proportional to the importance of the consequences of failing to"
+"            find it."
+"     6.     The size of each of the stones in your boot is directly propor-"
+"            tional to the number of hours you have been on the trail."
+"     7.     The remaining distance to your chosen campsite remains constant as"
+"            twilight approaches."
+"     8.     The net weight of your boots is proportional to the cube of the"
+"            number of hours you have been on the trail."
+"     9.     When you arrive at your chosen campsite, it is full."
+"    10.     If you take your boots off, you'll never get them back on again."
+"    11.     The local density of mosquitoes is inversely proportional to your"
+"            remaining repellent.",

"<p>Finagle's Rules</p>"
+"     Ever since the first scientific experiment, man has been plagued by the"
+"     increasing antagonism of nature.  It seems only right that nature should"
+"     be logical and neat, but experience has shown that this is not the case. "
+"     A further series of rules has been formulated, designed to help man accept"
+"     the pigheadedness of nature."
+"     Rule 1     To study a subject best, understand it thoroughly before you"
+"                start."
+"     Rule 2     Always keep a record of data.  It indicates that you've been"
+"                working."
+"     Rule 3     Always draw your curves, then plot the reading."
+"     Rule 4     In case of doubt, make it sound convincing."
+"     Rule 5     Experiments should be reproducible.  They should all fail in"
+"                the same way."
+"     Rule 6     Do not believe in miracles.  Rely on them.",

"<p>Ginsberg's Theorem</p>"
+"     1     You can't win."
+"     2     You can't break even."
+"     3     You can't quit the game.",

"<p>Gilb's Laws of Unreliability</p>"
+"     1     Computers are unreliable, but humans are even more unreliable."
+"           Corollary:  At the source of every error which is blamed on the"
+"           computer you will find at least two human errors, including the"
+"           error of blaming it on the computer."
+"     2     Any system which depends on human reliability is unreliable."
+"     3     The only difference between the fool and the criminal who attacks a"
+"           system, is that the fool attacks unpredictable and on a broader"
+"           front."
+"     4     Undetectable errors are infinite in variety, in contrast to dectable"
+"           errors, which by definition are limited."
+"     5     Investment in reliability will increase until it exceeds the"
+"           probable cost of errors, or until someone insists on getting some"
+"           work done.",

"<p>SNAFU Equations</p>"
+"     1     Given a problem containing n equations, there will be n+1 unknowns."
+"     2     An object or bit of information most needed will be least available."
+"     3     Any device requiring service or adjustment will be least accessible."
+"     4     Interchangeable devices won't."
+"     5     In any human endeavour, once you have exhausted all possibilities"
+"           and fail, there will be one solution, simple and obvious, and highly"
+"           visible to everyone else."
+"     6     Badness comes in waves.",

"I was in this prematurely air conditioned supermarket and there were all"
+" these aisles and there were these bathing caps you could buy that had these"
+" kind of Fourth of July plumes on them that were red and yellow and blue and"
+" I wasnt tempted to buy one but I was reminded of the fact that I had been"
+" avoiding the beach."
+"<p>LUCINDA CHILDS (PHILIP GLASS: EINSTEIN ON THE BEACH)</p>"
*/
];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * Fido Quote is a child of AlexaSkill.
 */
var Quote = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Quote.prototype = Object.create(AlexaSkill.prototype);
Quote.prototype.constructor = Quote;

Quote.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
};

Quote.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    handleNewQuoteRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
Quote.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
};

Quote.prototype.intentHandlers = {
    "GetNewQuoteIntent": function (intent, session, response) {
        handleNewQuoteRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say tell me a quote, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/**
 * Gets a random new quote from the list and returns to the user.
 */
function handleNewQuoteRequest(response) {
    var quoteIndex = Math.floor(Math.random() * QUOTES.length);
    var randomQuote = QUOTES[quoteIndex];

    console.log("Version: " + VERSION + " -- Index: " + quoteIndex + " of " + QUOTES.length);
    
    var speechOutput = { 
      speech: "<speak><s>Fido Says:</s> " + randomQuote+ "</speak>",
      type: AlexaSkill.speechOutputType.SSML
    };
    var cardTitle = "Fido BBS Quote";
    var cardquote = randomQuote.replace('<p>', '\n').replace('</p>','\n').replace(/^\s+|\s+$/g, '');
    
    response.tellWithCard(speechOutput, cardTitle, cardquote);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    if (event.session == null) {
      console.log("<index.handler> Called without a session.  Version: " + VERSION);
      return;
    }

    var quote = new Quote();
    quote.execute(event, context);
};

