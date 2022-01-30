
-- Main game table
CREATE TABLE game (
    gameid          SERIAL PRIMARY KEY,
    title           VARCHAR(255),
    summary         TEXT,
    longdescription TEXT,
    publisher       VARCHAR(255),
    developer       VARCHAR(255),
    platform        VARCHAR(255),
    genre           VARCHAR(255),
    releasedate     DATE,
    coverimage      TEXT
);

-- Sample data for game table
INSERT INTO game (title, summary, longdescription, publisher, developer, platform, genre, releasedate, coverimage) 
	VALUES ('Metal Gear Solid', '', '', 'Konami', 'Konami Computer Entertainment Japan', 
			'Playstation', 'Stealth', '9/3/1998',
			'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Metal_Gear_Solid_cover_art.png/220px-Metal_Gear_Solid_cover_art.png'),
    
            ('Metal Gear Solid 2: Sons of Liberty', '', '', 'Konami', 'Konami Computer Entertainment Japan', 
			'Playstation 2', 'Stealth', '11/13/2001',
			'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Metalgear2boxart.jpg/220px-Metalgear2boxart.jpg'),
					
			('Metal Gear Solid 3: Snake Eater', '', '', 'Konami', 'Konami Computer Entertainment Japan', 
			'Playstation 2', 'Stealth', '11/17/2004',
			'https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Mgs3box.jpg/220px-Mgs3box.jpg'),
			
			('Metal Gear Solid 4: Guns of the Patriots', '', '', 'Konami', 'Kojima Productions', 
			'Playstation 3', 'Stealth', '6/12/2008',
			'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Mgs4us_cover_small.jpg/220px-Mgs4us_cover_small.jpg'),
			
			('Metal Gear Solid V: Ground Zeroes', '', '', 'Konami', 'Kojima Productions', 
			'Playstation 4', 'Stealth', '3/18/2017',
			'https://upload.wikimedia.org/wikipedia/en/thumb/0/07/MGSV_Ground_Zeroes_boxart.jpg/220px-MGSV_Ground_Zeroes_boxart.jpg'),
			
			('Metal Gear Solid V: The Phantom Pain', '', '', 'Konami', 'Kojima Productions', 
			'Playstation 4', 'Stealth', '9/1/2015',
			'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Metal_Gear_Solid_V_The_Phantom_Pain_cover.png/220px-Metal_Gear_Solid_V_The_Phantom_Pain_cover.png')
			
	RETURNING *;
			
			
			
			
			
			