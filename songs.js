const songs = [
    {
        id: 'gunslinger',
        title: 'Gunslinger',
        artist: 'Avenged Sevenfold',
        image: 'Assets/A7x.jpg',
        lyric: `Yeah, you've been alone
        I've been gone for far too long
        But with all that we've been through
        After all this time I'm coming home to you
        Never let it show
        The pain I've grown to know
        'Cause with all these things we do
        It don't matter when I'm coming home to you
        I reach towards the sky I've said my goodbyes
        My heart's always with you now
        I won't question why so many have died
        My prayers have made it through yeah
        'Cause with all these things we do
        It don't matter when I'm coming home to you
        Letters keep me warm
        Helped me through the storm
        But with all that we've been through
        After all this time I'm coming home to you
        I reach towards the sky I've said my goodbyes
        My heart's always with you now
        I won't question why so many have died
        My prayers have made it through yeah
        'Cause with all these things we do
        It don't matter when I'm coming home to you
        I've always been true
        I've waited so long just to come hold you
        I'm making it through
        It's been far too long, we've proven our
        love over time's so strong, in all that we do
        The stars in the night, they lend me their light
        to bring me closer to heaven with you
        But with all that we've been through
        After all this time I'm coming home to you
        I reach towards the sky I've said my goodbyes
        My heart's always with you now
        I won't question why so many have died
        My prayers have made it through yeah
        'Cause with all these things we do
        It don't matter when I'm coming home to you
        And with all that we've been through
        After all this time I'm coming home to you`,
        audio: 'Assets/Songs/Gunslinger.mp3',
        desc:`“Gunslinger” is a song dedicated to soldiers. Its about the people who are forced apart from their family and friends, mainly due to war. But anyone away from their loved ones, whether you’re at war, on tour or just on vacation should be able to recognize themselves in the lyrics.`
    },
    {
        id: 'as-it-was',
        title: 'As It Was',
        artist: 'Harry Styles',
        image: 'Assets/as it was.jpg',
        lyric: `Holdin' me back
        Gravity's holdin' me back
        I want you to hold out the palm of your hand
        Why don't we leave it at that?
        Nothin' to say
        When everything gets in the way
        Seems you cannot be replaced
        And I'm the one who will stay, oh
        In this world, it's just us
        You know it's not the same as it was
        In this world, it's just us
        You know it's not the same as it was
        As it was, as it was
        You know it's not the same
        Answer the phone
        "Harry, you're no good alone
        Why are you sittin' at home on the floor?
        What kind of pills are you on?"
        Ringin' the bell
        And nobody's comin' to help
        Your daddy lives by himself
        He just wants to know that you're well, oh
        In this world, it's just us
        You know it's not the same as it was
        In this world, it's just us
        You know it's not the same as it was
        As it was, as it was
        You know it's not the same
        Go home, get ahead, light-speed internet
        I don't wanna talk about the way that it was
        Leave America, two kids follow her
        I don't wanna talk about who's doin' it first
        As it was
        You know it's not the same as it was
        As it was, as it was`,
        audio: 'Assets/Songs/As-It-Was.mp3',
        desc:`"As It Was" is a song by English singer-songwriter Harry Styles, released through Erskine and Columbia on 1 April 2022 as the lead single from his third studio album, Harry's House (2022). The song was written by Styles alongside his producers Kid Harpoon and Tyler Johnson.`
    },
    {
        id: 'photograph',
        title: 'Photograph',
        artist: 'Ed Sheeran',
        image: 'Assets/photograph.jpg',
        lyric: `Loving can hurt, loving can hurt sometimes
        But it's the only thing that I know
        When it gets hard, you know it can get hard sometimes
        It is the only thing makes us feel alive

        We keep this love in a photograph
        We made these memories for ourselves
        Where our eyes are never closing
        Hearts are never broken
        And time's forever frozen still

        So you can keep me
        Inside the pocket of your ripped jeans
        Holding me closer 'til our eyes meet
        You won't ever be alone, wait for me to come home

        Loving can heal, loving can mend your soul
        And it's the only thing that I know, know
        I swear it will get easier
        Remember that with every piece of ya

        Hmm, and it's the only thing we take with us when we die
        Hmm, we keep this love in this photograph
        We made these memories for ourselves
        Where our eyes are never closing
        Hearts were never broken
        And time's forever frozen, still

        So you can keep me
        Inside the pocket of your ripped jeans
        Holding me closer 'til our eyes meet
        You won't ever be alone

        And if you hurt me
        That's okay, baby, only words bleed
        Inside these pages, you just hold me
        And I won't ever let you go
        Wait for me to come home
        Wait for me to come home
        Wait for me to come home
        Wait for me to come home

        Oh, you can fit me
        Inside the necklace you got when you were sixteen
        Next to your heartbeat where I should be
        Keep it deep within your soul
        
        And if you hurt me
        Well, that's okay, baby, only words bleed
        Inside these pages, you just hold me
        And I won't ever let you go
        When I'm away, I will remember how you kissed me
        Under the lamppost back on Sixth street
        Hearing you whisper through the phone
        "Wait for me to come home"`,
        audio:'Assets/Songs/Photograph.mp3',
        desc:`"Photograph" is a song by English singer-songwriter Ed Sheeran from his second studio album, × (2014). Sheeran wrote the song with Snow Patrol member Johnny McDaid, who had a piano loop from which the composition developed. After recording several versions with other producers, Sheeran eventually solicited help from Jeff Bhasker; the collaboration generated a version that Bhasker further enhanced for months. The ballad derives its music primarily from an acoustic guitar, piano and programmed drums. With visually descriptive lyrics, it discusses a long-distance relationship inspired by Sheeran's own experience of being away from his then-girlfriend while he was on tour.`
    },
    {
        id: 'viva-la-vida',
        title: 'Viva La Vida',
        artist: 'Coldplay',
        image: 'Assets/viva la vida.jpg',
        lyric: `I used to rule the world
        Seas would rise when I gave the word
        Now in the morning, I sleep alone
        Sweep the streets I used to own

        I used to roll the dice
        Feel the fear in my enemy's eyes
        Listen as the crowd would sing
        Now the old king is dead, long live the king
        One minute, I held the key
        Next the walls were closed on me
        And I discovered that my castles stand
        Upon pillars of salt and pillars of sand

        I hear Jerusalem bells a-ringin'
        Roman Cavalry choirs are singin'
        Be my mirror, my sword and shield
        My missionaries in a foreign field
        For some reason, I can't explain
        Once you'd gone, there was never, never an honest word
        And that was when I ruled the world

        It was a wicked and wild wind
        Blew down the doors to let me in
        Shattered windows and the sound of drums
        People couldn't believe what I'd become
        Revolutionaries wait
        For my head on a silver plate
        Just a puppet on a lonely string
        Aw, who would ever wanna be king?

        I hear Jerusalem bells a-ringin'
        Roman Cavalry choirs are singing
        Be my mirror, my sword and shield
        My missionaries in a foreign field
        For some reason, I can't explain
        I know Saint Peter won't call my name
        Never an honest word
        But that was when I ruled the world

        Oh-oh-oh, oh-oh, oh
        Oh-oh-oh, oh-oh, oh
        Oh-oh-oh, oh-oh, oh
        Oh-oh-oh, oh-oh, oh
        Oh-oh-oh, oh-oh, oh

        I hear Jerusalem bells a-ringin'
        Roman Cavalry choirs are singin'
        Be my mirror, my sword and shield
        My missionaries in a foreign field
        For some reason I can't explain
        I know Saint Peter won't call my name
        Never an honest word
        But that was when I ruled the world`,
        audio:'Assets/Songs/Viva La Vida.mp3',
        desc:`Viva la Vida is a song by British rock band Coldplay. It was written by all members of the band for their fourth album, Viva la Vida or Death and All His Friends (2008). The lyrics to the song contain historical and Christian references, and the track is built around a looping string section in unison with a digitally processed piano, with other layers gradually being added as the song builds.`
    },
    {
        id: 'Take_A_Chance_With_Me',
        title: 'Take A Chance With Me',
        artist: 'NIKI',
        image: 'Assets/niki.jpg',
        lyric: `His laugh you'd die for, his laugh you'd die for
        The kind that colors the sky
        Heart intangible, slips away faster
        Than dandelion fluff in the sunlight
        And he's got swirls of passion in his eyes
        Uncovering the dreams he dreams at night
        As much and hard as he tries to hide
        I can see right through
        See right through

        His voice you'd melt for, he says my name like
        I'd fade away somehow if he's too loud
        What I would give for me to get my feet
        Back on the ground, head off the clouds
        I laugh at how we're polar opposites
        I read him like a book and he's a clueless little kid
        Doesn't know that I'd stop time and space
        Just to make him smile
        Make him smile

        Oh, why can't we for once
        Say what we want, say what we feel?
        Oh, why can't you for once
        Disregard the world and run to what you know is real?
        Take a chance with me
        Take a chance with me

        Ooh
        Ooh

        His kiss you'd kill for, just one and you're done for
        Electricity surgin' in the air
        He drives me crazy, it's so beyond me
        How he'd look me dead in the eye and stay unaware
        That I'm hopelessly captivated
        By a boy who thinks love's overrated
        How did I get myself in this arrangement?
        It baffles me too, baffles me too

        Oh, why can't we for once
        Say what we want, say what we feel?
        Oh, why can't you for once
        Disregard the world and run to what you know is real?

        In the end, we only regret
        The chances we didn't take
        I'll be your safety net
        So why not raise the stakes?
        I can hear your heart from across the room
        Pulsin' through my veins, I know you need this too
        Lie to me all you please
        I can see right through
        See right through

        Oh, why can't we for once
        Say what we want, say what we feel?
        Oh, why can't you for once
        Disregard the world and run to what you know is real?
        Oh, why can't we for once
        Say what we want, say what we feel?
        Oh, why can't you for once
        Disregard the world and run to what you know is real?
        Take a chance with me
        Take a chance with me
        Ooh`,
        audio:'Assets/Songs/Take A Chance With Me.mp3',
        desc:`“Take A Chance With Me” is a breath of fresh air, an unbreakable seal of bittersweetness and pays homage to old 2000s songs. Being the final song on the album, this provides the listener with a new beginning as opposed to the songs before, which were chapters closing of her past`
    },
    {
        id: 'Sunflower',
        title: 'Sunflower',
        artist: 'Post Malone, Swae Lee',
        image: 'Assets/sunflower.jpg',
        lyric: `Ayy, ayy, ayy, ayy (ooh)
        Ooh, ooh, ooh, ooh (ooh)
        Ayy, ayy
        Ooh, ooh, ooh, ooh

        Needless to say, I keep her in check
        She was a bad-bad, nevertheless (yeah)
        Callin' it quits now, baby, I'm a wreck (wreck)
        Crash at my place, baby, you're a wreck (wreck)

        Needless to say, I'm keeping her in check
        She was all bad-bad, nevertheless
        Callin' it quits now, baby, I'm a wreck
        Crash at my place, baby, you're a wreck

        Thinkin' in a bad way, losin' your grip
        Screamin' at my face, baby, don't trip
        Someone took a big L, don't know how that felt
        Lookin' at you sideways, party on tilt

        Ooh-ooh-ooh
        Some things you just can't refuse
        She wanna ride me like a cruise
        And I'm not tryna lose

        Then you're left in the dust
        Unless I stuck by ya
        You're the sunflower
        I think your love would be too much
        Or you'll be left in the dust
        Unless I stuck by ya
        You're the sunflower
        You're the sunflower

        Every time I'm leavin' on you (ooh)
        You don't make it easy, no (no, no)
        Wish I could be there for you
        Give me a reason to, oh (oh)

        Every time I'm walkin' out
        I can hear you tellin' me to turn around
        Fightin' for my trust and you won't back down
        Even if we gotta risk it all right now, oh (now)

        I know you're scared of the unknown ('known)
        You don't wanna be alone (alone)
        I know I always come and go (and go)
        But it's out of my control

        And you'll be left in the dust
        Unless I stuck by ya
        You're the sunflower
        I think your love would be too much
        Or you'll be left in the dust
        Unless I stuck by ya
        You're the sunflower
        You're the sunflower (yeah)
        `,
        audio: 'Assets/Songs/Sunflower.mp3',
        desc:`Sunflower is a song by American rapper-singers Post Malone and Swae Lee. It was released on October 19, 2018, as a single from the soundtrack to the 2018 animated film Spider-Man: Into the Spider-Verse, and was later included on Post Malone's third studio album Hollywood's Bleeding (2019). An official remix features Latin singers Nicky Jam and Prince Royce.`
    },
    {
        id: 'Mrs. Hollywood',
        title: 'Mrs. Hollywood',
        artist: 'Go-Jo',
        image: 'Assets/gojo.jpg',
        lyric: `Missing in action, left me in L.A.
        With her, it's magic 'til she runs away
        Hard as I try, I've gotten really good
        At saying goodbye to Mrs. Hollywood

        She don't know what she does, the movies aren't enough
        'Cause they don't make 'em 'bout us, uh
        I'm just dancing with luck, or has she moved out of love?
        Maybe I'm being too much

        She's always M.I.A., way out in California
        What can I say? She's got a talent for it
        Still wish she'd stay, guess I'll be waiting for her
        Standing in line for Mrs. Hollywood

        Finally felt like I was number one
        Two days together, now she's in Milan
        And I'm driving the highway up to Malibu
        But her seat is empty, and she stole the mood, yeah

        She don't know what she does, the movies aren't enough
        'Cause they don't make 'em 'bout us (make 'em 'bout us)
        I'm just dancing with luck, or has she moved out of love?
        Maybe I'm being too much

        She's always M.I.A., way out in California
        What can I say? She's got a talent for it
        Still wish she'd stay, guess I'll be waiting for her
        Standing in line for Mrs. Hollywood

        She's always M.I.A., M.I.A.
        She's always M.I.A. (way out in California)
        She's always M.I.A., M.I.A.
        She's always M.I.A. (way out in California)

        She's always M.I.A., way out in California
        What can I say? She's got a talent for it
        Still wish she'd stay, guess I'll be waiting for her
        Standing in line for Mrs. Hollywood`,
        audio: 'Assets/Songs/Mrs. Hollywood.mp3',
        desc:`If you’ve been following Go-Jo’s story for a minute then you know he’s out here hustling. He’s selling out shows, busking, giving out free broccoli, and racking up impressive streaming numbers. The buzz surrounding this Australian singer-songwriter is wild, but well deserved, and he’s just dropped what’s quickly becoming his biggest hit yet. “Mrs. Hollywood” is a song he’s been proactively promoting on TikTok and authentically enticing an audience who are ready for an infectious anthem to make their Autumn feel like Summer.`
    },
    {
        id: 'starboy',
        title: 'Starboy',
        artist: 'The Weeknd',
        image: 'Assets/the weeknd cover.jpg',
        lyric: `I'm tryna put you in the worst mood, ah
        P1 cleaner than your church shoes, ah
        Milli point two just to hurt you, ah
        All red Lamb' just to tease you, ah
        None of these toys on lease too, ah
        Made your whole year in a week too, yeah
        Main bitch outta your league too, ah
        Side bitch out of your league too, ah

        House so empty, need a centerpiece
        Twenty racks a table cut from ebony
        Cut that ivory into skinny pieces
        Then she clean it with her face, man, I love my baby, ah
        You talkin' money, need a hearing aid
        You talkin' 'bout me, I don't see the shade
        Switch up my style, I take any lane
        I switch up my cup, I kill any pain

        Look what you've done
        I'm a motherfuckin' starboy
        Look what you've done
        I'm a motherfuckin' starboy

        Every day a nigga try to test me, ah
        Every day a nigga try to end me, ah
        Pull off in that Roadster SV, ah
        Pockets overweight, gettin' hefty, ah
        Coming for the king, that's a far cry, ah
        I come alive in the fall time, I
        The competition, I don't really listen
        I'm in the blue Mulsanne bumping New Edition

        House so empty, need a centerpiece
        Twenty racks a table cut from ebony
        Cut that ivory into skinny pieces
        Then she clean it with her face, man, I love my baby, ah
        You talkin' money, need a hearing aid
        You talkin' 'bout me, I don't see the shade
        Switch up my style, I take any lane
        I switch up my cup, I kill any pain

        Look what you've done
        I'm a motherfuckin' starboy
        Look what you've done
        I'm a motherfuckin' starboy

        Let a nigga brag Pitt
        Legend of the fall, took the year like a bandit
        Bought mama a crib and a brand new wagon
        Now she hit the grocery shop looking lavish
        Star Trek roof in that Wraith of Khan
        Girls get loose when they hear this song
        A hundred on the dash get me close to God
        We don't pray for love, we just pray for cars

        House so empty, need a centerpiece
        Twenty racks a table cut from ebony
        Cut that ivory into skinny pieces
        Then she clean it with her face, man, I love my baby, ah
        You talkin' money, need a hearing aid
        You talkin' 'bout me, I don't see the shade
        Switch up my style, I take any lane
        I switch up my cup, I kill any pain

        Look what you've done
        I'm a motherfuckin' starboy
        Look what you've done
        I'm a motherfuckin' starboy
        Look what you've done
        I'm a motherfuckin' starboy
        Look what you've done
        I'm a motherfuckin' starboy`,
        audio:'Assets/Songs/Starboy.mp3',
        desc:`Starboy is the third studio album by the Canadian singer-songwriter the Weeknd, released on November 25, 2016, through XO and Republic Records. It features guest appearances from Daft Punk, Lana Del Rey, Kendrick Lamar, and Future. As the album's executive producers, the Weeknd and Doc McKinney enlisted a variety of producers such as Diplo, Cashmere Cat, Metro Boomin, Frank Dukes, and Labrinth, among others.`
    },
    {
        id: 'ddu_du_ddu_du',
        title: 'DDU-DU DDU-DU',
        artist: 'Blackpink',
        image: 'Assets/blackpink cover.jpg',
        lyric: `BLACKPINK
        Ah-yeah, ah-yeah
        BLACKPINK
        Ah-yeah, ah-yeah

        Eh
        착한 얼굴에 그렇지 못한 태도 (uh-huh)
        가녀린 몸매 속 가려진 volume은 두 배로 (yo, yo, double up)
        거침없이 직진, 굳이 보진 않지 눈치 (ooh)
        Black 하면 pink 우린 예쁘장한 savage (BLACKPINK)

        원할 땐 대놓고 뺏지 (uh)
        넌 뭘 해도 칼로 물 베기 (uh)
        두 손엔 가득한 fat checks
        궁금하면 해봐 fact check
        눈 높인 꼭대기, 물 만난 물고기
        좀 독해 난 toxic, you 혹해 I'm foxy

        두 번 생각해
        흔한 남들처럼 착한 척은 못 하니까
        착각하지 마
        쉽게 웃어주는 건 날 위한 거야

        아직은 잘 모르겠지
        굳이 원하면 test me
        넌 불 보듯이 뻔해
        만만한 걸 원했다면
        Oh, wait 'til I do what I

        Hit you with that ddu-du, ddu-du, du
        Ah-yeah, ah-yeah
        Hit you with that ddu-du, ddu-du, du
        Ah-yeah, ah-yeah
        (Du-du, du-du-du-du-du)

        BLACKPINK

        지금 내가 걸어가는 거린
        BLACKPINK four way 사거리
        동서남북 사방으로 run it
        니네 버킷리스트 싹 다 I bought it
        널 당기는 것도, 멀리 밀치는 것도
        제멋대로 하는 bad girl
        좋건, 싫어하건, 누가 뭐라 하던
        When the bass drop, it's another banger

        두 번 생각해
        흔한 남들처럼 착한 척은 못 하니까
        착각하지 마
        쉽게 웃어주는 건 날 위한 거야

        아직은 잘 모르겠지
        굳이 원하면 test me
        넌 불 보듯이 뻔해
        만만한 걸 원했다면
        Oh, wait 'til I do what I

        Hit you with that ddu-du, ddu-du, du
        Ah-yeah, ah-yeah
        Hit you with that ddu-du, ddu-du, du
        Ah-yeah, ah-yeah
        (Du-du, du-du-du-du-du)

        What you gonna do when I come, come through
        With that, that? Uh (uh), uh-huh (uh-huh)
        What you gonna do when I come, come through
        With that, that? Uh (uh), uh-huh (uh-huh)

        뜨거워, 뜨거워, 뜨거워 like fire (fire)
        (Du-du, du-du-du-du-du)
        (Du-du, du-du-du-du-du)
        뜨거워, 뜨거워, 뜨거워 like fire (fire)
        (Du-du, du-du-du-du-du)
        (Du-du, du-du-du-du-du)

        BLACKPINK
        Hey
        (Du-du, du-du-du-du, du-du-du-du)

        Ah-yeah, ah-yeah, ah-yeah, ah-yeah
        뜨거워, 뜨거워, 뜨거워 like fire (fire, hey)
        뜨거워, 뜨거워, 뜨거워 like fire (fire)
        Hit you with that ddu-du, ddu-du, du`,
        audio: 'Assets/Songs/DDU-DU DDU-DU.mp3',
        desc:`Ddu-Du Ddu-Du is a song by South Korean girl group Blackpink, recorded for their first Korean extended play, Square Up (2018) The song was written by YG collaborator Teddy Park, whilst production and composition were handled by Teddy, 24, Bekuh Boom, and R. Tee. It was released as the extended play's lead single to digital outlets on June 15, 2018. The Japanese version of the single was released through YGEX on August 22, 2018, and was distributed in three physical formats. A trap and pop rap song infused with bubblegum pop and EDM sounds, it utilizes oriental percussion rhythms and whistling while the title imitates the sound of a gunshot. Its lyrics contain messages of strength and self-assurance.`
    },
    {
        id: 'End_Of_Beginning',
        title: 'End Of Beginning',
        artist: 'Djo',
        image: 'Assets/end of beginning.jpg',
        lyric: `Just one more tear to cry
        One teardrop from my eye
        You better save it for
        The middle of the night
        When things aren't black and white
        Enter, Troubadour
        Remember twenty-four?

        And when I'm back in Chicago, I feel it
        Another version of me, I was in it
        I wave goodbye to the end of beginning

        This song has started now
        And you're just finding out
        Now isn't that a laugh?
        A major sacrifice
        But clueless at the time
        Enter, Caroline
        Just trust me, you'll be fine

        And when I'm back in Chicago, I feel it
        Another version of me, I was in it
        I wave goodbye to the end of beginning
        (Goodbye, goodbye, goodbye, goodbye)

        You take the man out of the city, not the city out the man
        You take the man out of the city, not the city out the man
        You take the man out of the city, not the city out the man
        You take the man out of the
        
        And when I'm back in Chicago, I feel it
        Another version of me, I was in it
        Oh, I wave goodbye to the end of beginning
        (Goodbye, goodbye)`,
        audio: 'Assets/Songs/End Of Beginning.mp3',
        desc:`"End of Beginning" is a song by American actor and singer-songwriter Joe Keery, under his alias, Djo. It was independently released on September 16, 2022, as track six of his second studio album Decide and later released as a single on March 1, 2024. The song gained popularity in early 2024 through TikTok.`
    },
    {
        id:'Teenagers',
        title:'Teenagers',
        artist:'My Chemical Romance',
        image:'Assets/teenagers.jpg',
        lyric:`They're gonna clean up your looks
        With all the lies in the books
        To make a citizen out of you
        Because they sleep with a gun
        And keep an eye on you, son
        So they can watch all the things you do

        Because the drugs never work
        They're gonna give you a smirk
        'Cause they got methods of keeping you clean
        They're gonna rip up your heads
        Your aspirations to shreds
        Another cog in the murder machine

        They said, "All teenagers scare the livin' shit out of me"
        They could care less as long as someone'll bleed
        So darken your clothes, or strike a violent pose
        Maybe they'll leave you alone, but not me

        The boys and girls in the clique
        The awful names that they stick
        You're never gonna fit in much, kid
        But if you're troubled and hurt
        What you got under your shirt
        Will make them pay for the things that they did

        They said, "All teenagers scare the livin' shit out of me"
        They could care less as long as someone'll bleed
        So darken your clothes, or strike a violent pose
        Maybe they'll leave you alone, but not me

        Oh, yeah!

        They said, "All teenagers scare the livin' shit out of me"
        They could care less as long as someone'll bleed
        So darken your clothes, or strike a violent pose
        Maybe they'll leave you alone, but not me

        All together now!
        "Teenagers scare the livin' shit out of me"
        They could care less as long as someone'll bleed
        So darken your clothes, or strike a violent pose
        Maybe they'll leave you alone, but not me

        "Teenagers scare the livin' shit out of me"
        They could care less as long as someone'll bleed
        So darken your clothes, or strike a violent pose
        Maybe they'll leave you alone, but not me
        `,
        audio:'Assets/Songs/Teenagers.mp3',
        desc:`Teenagers is the fourth and final single and the eleventh track from My Chemical Romance's third studio album, The Black Parade (2006). It was the third United States single from the album, but the fourth released in the United Kingdom, the Philippines, Australia, and Canada. The song was released to radio on May 15, 2007.`
    },
    {
        id:'Basket_Case',
        title:'Basket Case',
        artist:'Green Day',
        image:'Assets/basket case.jpg',
        lyric:`Do you have the time to listen to me whine
        About nothing and everything all at once?
        I am one of those
        Melodramatic fools
        Neurotic to the bone
        No doubt about it

        Sometimes I give myself the creeps
        Sometimes my mind plays tricks on me
        It all keeps adding up
        I think I'm cracking up
        Am I just paranoid?
        Or am I just stoned?

        I went to a shrink
        To analyze my dreams
        She says it's lack of sex that's bringing me down
        I went to a whore
        He said my life's a bore
        So quit my whining 'cause it's bringing her down

        Sometimes I give myself the creeps
        Sometimes my mind plays tricks on me
        It all keeps adding up
        I think I'm cracking up
        Am I just paranoid?
        Huh yeah, yeah, yeah
        (Ooh, ooh)

        Grasping to control
        So I better hold on

        Sometimes I give myself the creeps
        Sometimes my mind plays tricks on me
        It all keeps adding up
        I think I'm cracking up
        Am I just paranoid?
        Or am I just stoned?`,
        audio:'Assets/Songs/Basket Case.mp3',
        desc:`"Basket Case" is a song by rock band Green Day, released on August 1, 1994 by Reprise Records as the second single from the band's third studio album, Dookie (1994). The song spent five weeks at the top of the US Billboard Alternative Songs chart and garnered a Grammy Award nomination in the category for Best Rock Vocal Performance by a Duo or Group. Its music video was directed by Mark Kohr and filmed in an abandoned mental institution in California. In 2001, the song appeared on their greatest hits album International Superhits!. In 2021, "Basket Case" was ranked number 150 in Rolling Stone's updated list of the "500 Greatest Songs of All Time".As of March 2024, "Basket Case" is the most streamed song by the band on Spotify (exempting remixes and alternate versions), with over 1 billion streams.`
    },
    {
        id: 'Back_In_Black',
        title : 'Back In Black',
        artist : 'AC/DC',
        image : 'Assets/ACDC_Back_in_Black.png',
        lyric : `Back in black
        I hit the sack
        I've been too long, I'm glad to be back
        Yes, I'm let loose
        From the noose
        That's kept me hanging about
        I've been looking at the sky
        'Cause it's gettin' me high
        Forget the hearse 'cause I never die
        I got nine lives
        Cat's eyes
        Abusin' every one of them and running wild

        'Cause I'm back
        Yes, I'm back
        Well, I'm back
        Yes, I'm back
        Well, I'm back, back
        Well, I'm back in black
        Yes, I'm back in black

        Back in the back
        Of a Cadillac
        Number one with a bullet, I'm a power pack
        Yes, I'm in a bang
        With a gang
        They've got to catch me if they want me to hang
        'Cause I'm back on the track
        And I'm beatin' the flack
        Nobody's gonna get me on another rap
        So look at me now
        I'm just makin' my play
        Don't try to push your luck, just get out of my way

        'Cause I'm back
        Yes, I'm back
        Well, I'm back
        Yes, I'm back
        Well, I'm back, back
        Well, I'm back in black
        Yes, I'm back in black

        Well, I'm back, yes, I'm back
        Well, I'm back, yes, I'm back
        Well, I'm back, back
        Well, I'm back in black
        Yes, I'm back in black

        Oh, yeah
        Oh, yeah
        Take my love
        Oh, yeah, yeah
        Oh, yeah, yeah, ooh, yeah
        Well, I'm back (I'm back)
        Back (I'm back)
        Back (I'm back)
        Back (I'm back)
        Back (I'm back)
        Back
        Back in black
        Yes, I'm back in black
        I've hit the sack`,
        audio : 'Assets/Songs/Back In Black.mp3',
        desc:`Back in Black is the seventh studio album by Australian rock band AC/DC, released on 25 July 1980 by Albert Productions and Atlantic Records. It was the band's first album to feature Brian Johnson as lead singer, following the death of Bon Scott, their previous vocalist.`
    },{
        id: "It's_My_Life",
        title : "It's My Life",
        artist : 'Bon Jovi',
        image : 'Assets/bonjovi.png',
        lyric : `This ain't a song for the broken-hearted
        No silent prayer for the faith-departed
        I ain't gonna be just a face in the crowd
        You're gonna hear my voice
        When I shout it out loud

        It's my life
        It's now or never
        I ain't gonna live forever
        I just want to live while I'm alive

        It's my life
        My heart is like the open highway
        Like Frankie said, "I did it my way"
        I just want to live while I'm alive
        It's my life

        This is for the ones who stood their ground
        It's for Tommy and Gina who never backed down
        Tomorrow's getting harder, make no mistake
        Luck ain't enough, you've got to make your own breaks

        It's my life
        It's now or never
        I ain't gonna live forever
        I just want to live while I'm alive

        It's my life
        My heart is like the open highway
        Like Frankie said, "I did it my way"
        I just want to live while I'm alive
        It's my life

        You better stand tall when they're calling you out
        Don't bend, don't break, baby, don't back down

        It's my life
        It's now or never
        I ain't gonna live forever
        I just want to live while I'm alive

        It's my life
        My heart is like the open highway
        Like Frankie said, "I did it my way"
        I just want to live while I'm alive
        It's my life`,
        audio: "Assets/Songs/It's My Life.mp3",
        desc:`"It's My Life" is a song by American rock band Bon Jovi. It was released on May 8, 2000, as the lead single from their seventh studio album, Crush (2000). It was written by Jon Bon Jovi, Richie Sambora, and Max Martin, and co-produced by Luke Ebbin. The song peaked at number one in Austria, Flanders, Italy, the Netherlands, Portugal, Romania, Spain, and Switzerland while charting within the top 10 across several other countries and peaking at number 33 on the US Billboard Hot 100. "It's My Life" is Bon Jovi's most well-known post-1980s hit single and helped introduce the band to a new, younger fanbase.`
    },{
        id:'Killer_Queen',
        title : "Killer Queen",
        artist : 'Queen',
        image : 'Assets/killer queen.jpg',
        lyric: `She keeps her Moët et Chandon
        In her pretty cabinet
        "Let them eat cake, " she says
        Just like Marie Antoinette
        A built-in remedy
        For Khrushchev and Kennedy
        At anytime an invitation
        You can't decline

        Caviar and cigarettes
        Well versed in etiquette
        Extraordinarily nice

        She's a Killer Queen
        Gunpowder, gelatine
        Dynamite with a laser beam
        Guaranteed to blow your mind
        Anytime

        Recommended at the price
        Insatiable an appetite
        Wanna try?

        To avoid complications
        She never kept the same address
        In conversation
        She spoke just like a baroness
        Met a man from China
        Went down to Geisha Minah
        Then again incidentally
        If you're that way inclined

        Perfume came naturally from Paris (naturally)
        For cars she couldn't care less
        Fastidious and precise

        She's a Killer Queen
        Gunpowder, gelatine
        Dynamite with a laser beam
        Guaranteed to blow your mind
        Anytime

        Drop of a hat she's as willing as
        Playful as a pussy cat
        Then momentarily out of action
        Temporarily out of gas
        To absolutely drive you wild, wild
        She's out to get you

        She's a Killer Queen
        Gunpowder, gelatine
        Dynamite with a laser beam
        Guaranteed to blow your mind
        Anytime

        Recommended at the price
        Insatiable an appetite
        Wanna try?
        You wanna try`,
        audio: 'Assets/Songs/Killer Queen.mp3',
        desc:`"Killer Queen" is a song by the British rock band Queen. It was written by lead singer Freddie Mercury and recorded for their third album Sheer Heart Attack in 1974. It reached number two in the UK Singles Chart and became their first US hit, reaching number twelve on the Billboard Hot 100. The song is about a high-class call girl and has been characterised as "Mercury's piano-led paean to a Moët-quaffing courtesan".`
    },
    {
        id: 'Creep',
        title : 'Creep',
        artist: 'Radiohead',
        image: 'Assets/creep.jpg',
        lyric: `When you were here before
        Couldn't look you in the eye
        You're just like an angel
        Your skin makes me cry
        You float like a feather
        In a beautiful world
        I wish I was special
        You're so fucking special
        
        But I'm a creep
        I'm a weirdo
        What the hell am I doing here?
        I don't belong here
        
        I don't care if it hurts
        I want to have control
        I want a perfect body
        I want a perfect soul
        I want you to notice
        When I'm not around
        You're so fucking special
        I wish I was special
        
        But I'm a creep
        I'm a weirdo
        What the hell am I doing here?
        I don't belong here
        
        Oh, oh
        
        She's running out again
        She's running out
        She run, run, run, run
        Run
        
        Whatever makes you happy
        Whatever you want
        You're so fucking special
        I wish I was special
        
        But I'm a creep
        I'm a weirdo
        What the hell am I doing here?
        I don't belong here
        I don't belong here`,
        audio: 'Assets/Songs/Creep.mp3',
        desc:`"Creep" is the debut single by the English rock band Radiohead, released on 21 September 1992. It was included on Radiohead's debut album, Pablo Honey (1993). It features "blasts" of guitar noise by Jonny Greenwood and lyrics describing an obsessive unrequited attraction.`
    },
    {
        id: 'Wonderwall',
        title : 'Wonderwall',
        artist: 'Oasis',
        image: 'Assets/Oasis.jpg',
        lyric: `Today is gonna be the day
        That they're gonna throw it back to you
        By now you should've somehow
        Realized what you gotta do
        I don't believe that anybody
        Feels the way I do about you now
        
        Backbeat, the word is on the street
        That the fire in your heart is out
        I'm sure you've heard it all before
        But you never really had a doubt
        I don't believe that anybody feels
        The way I do about you now
        
        And all the roads we have to walk are winding
        And all the lights that lead us there are blinding
        There are many things that I would
        Like to say to you
        But I don't know how
        
        Because maybe
        You're gonna be the one that saves me
        And after all
        You're my wonderwall
        
        Today was gonna be the day
        But they'll never throw it back to you
        By now you should've somehow
        Realized what you're not to do
        I don't believe that anybody
        Feels the way I do
        About you now
        
        And all the roads that lead you there were winding
        And all the lights that light the way are blinding
        There are many things that I would like to say to you
        But I don't know how
        
        I said maybe
        You're gonna be the one that saves me
        And after all
        You're my wonderwall
        
        I said maybe (I said maybe)
        You're gonna be the one that saves me
        And after all
        You're my wonderwall
        
        I said maybe (I said maybe)
        You're gonna be the one that saves me (saves me)
        You're gonna be the one that saves me (saves me)
        You're gonna be the one that saves me (saves me)`,
        audio:'Assets/Songs/Wonderwall.mp3',
        desc:`"Wonderwall" is a song by English rock band Oasis, written by lead guitarist and chief songwriter Noel Gallagher. The song was produced by Gallagher and Owen Morris for the band's second studio album, (What's the Story) Morning Glory?, released in 1995. According to Gallagher, "Wonderwall" describes "an imaginary friend who's gonna come and save you from yourself".`
    }
];

function getSongById(id) {
    return songs.find(song => song.id === id);
}

function displaySongDetails(song) {
    if (song) {
        document.getElementById('song-title').innerText = song.title;
        document.getElementById('artist-name').innerText = song.artist;
        document.getElementById('song-image').src = song.image;
        document.getElementById('song-image').alt = song.title;
        document.getElementById('song-lyric').innerText = song.lyric;
        document.getElementById('song-audio').src = song.audio;
        document.getElementById('song-desc').innerText = song.desc;
    } else {
        document.getElementById('song-title').innerText = 'Song not found';
        document.getElementById('artist-name').innerText = '';
        document.getElementById('song-image').src = '';
        document.getElementById('song-image').alt = '';
        document.getElementById('song-lyric').innerText = 'Lyric not found';
        document.getElementById('song-audio').src = '';
        document.getElementById('song-desc').innerText = '';
    }
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', () => {
    const songId = getQueryParam('id');
    const song = getSongById(songId);
    displaySongDetails(song);
});


let progress = document.getElementById("progress")
let audio = document.getElementById("song-audio")
let playIcon = document.getElementById("playIcon")

audio.onloadedmetadata = function(){
    progress.max = audio.duration;
    progress.value = audio.currentTime;
}

function playPause(){
    if(playIcon.classList.contains("bx-pause")){
        audio.pause();
        playIcon.classList.remove("bx-pause");
        playIcon.classList.add("bx-play");
    }else{
        audio.play();
        playIcon.classList.add("bx-pause");
        playIcon.classList.remove("bx-play");
    }
}

if(audio.play()){
    setInterval(()=>{
        progress.value = audio.currentTime;
    },500)
}

progress.onchange = function(){
    audio.play();
    audio.currentTime = progress.value
    playIcon.classList.add("bx-pause")
    playIcon.classList.remove("bx-play")
}