import RandomFacts from '../models/randomfacts';

export const RANDOMFACTS = [
  //Mars Facts
  new RandomFacts(1, "Name of Mars", "Named after the Roman God of war, Mars is the fourth planet from the sun in our solar system. Mars is also known as the ‘Red Planet’ because, well, it’s red! This signature colour comes from the large amount of a chemical called iron oxide (or ‘rust’ as you might know it) in its rocks and soil.", "https://www.natgeokids.com/uk/discover/science/space/facts-about-mars/"),
  new RandomFacts(2, "Size of Mars", "Mars is the second smallest planet in the solar system after Mercury. With a diameter (distance through the middle) of 6,791 kilometres, it’s roughly half the size of Earth.", "https://www.natgeokids.com/uk/discover/science/space/facts-about-mars/"),
  new RandomFacts(3, "Mars Temperature", "It can get pretty cold on Mars – much colder than our own planet, since it’s further away from the sun. At the equator, temperatures can reach 20°C, but at its poles they can plummet to as low as -140°C. Brr!", "https://www.natgeokids.com/uk/discover/science/space/facts-about-mars/"),
  new RandomFacts(4, "Highest Mountain", "Mars is home to the highest mountain in our solar system – a volcano called Olympus Mons. Standing a whopping 24 kilometres high, it’s about three times the height of Mount Everest!", "https://www.natgeokids.com/uk/discover/science/space/facts-about-mars/"),
  new RandomFacts(5, "Jumping on Mars", "You could jump around three times higher on Mars than you can on Earth. Boing! This is because the planet’s gravity – the force that keeps us on the ground – is much weaker.", "https://www.natgeokids.com/uk/discover/science/space/facts-about-mars/"),
  new RandomFacts(6, "Mars Moons", "Do you like to look at the moon at night? Well, check this out – Mars has two moons! One is called Phobos and the other Deimos.", "https://www.natgeokids.com/uk/discover/science/space/facts-about-mars/"),
  new RandomFacts(7, "Day on Mars", "A day on Mars is 24 hours and 37 minutes – only a little bit longer than a day on our own planet. A year on Mars, however, is almost twice as long, lasting 687 Earth days! This is because it takes a lot longer than Earth to complete its orbit around the Sun.", "https://www.natgeokids.com/uk/discover/science/space/facts-about-mars/"),
  new RandomFacts(8, "Water on Mars", "Until recently, scientists believed that there was no liquid water on the surface of Mars – only rocks, soil dust and ice. But… News flash! In 2018, they found evidence of a lake under the planet’s south polar ice cap. Exciting stuff!", "https://www.natgeokids.com/uk/discover/science/space/facts-about-mars/"),
  new RandomFacts(9, "Humans on Mars", "Humans have not yet been to Mars, but scientists have sent spacecraft there to help them research this fascinating planet. The first spacecraft to land on Mars were the Viking Landers, which touched down on the surface in 1976.", "https://www.natgeokids.com/uk/discover/science/space/facts-about-mars/"),
  new RandomFacts(10, "Bits of Mars", "Did you know…? There are bits of Mars here on Earth! In the past, asteroids hit the Red Planet, sending debris into space. Some of this debris landed on our planet as meteorites.", "https://www.natgeokids.com/uk/discover/science/space/facts-about-mars/"),
  //Universe Facts
  new RandomFacts(11, "Stars", "There are more stars in the universe than grains of sand on all the beaches on Earth. That’s at least a billion trillion!", "https://www.natgeokids.com/nz/discover/science/space/universe-facts/"),
  new RandomFacts(12, "Black Hole", "A black hole is created when big stars explode. Its gravitational force is so strong that nothing can escape from it – luckily the closest black hole is about 10,000 light-years from Earth.", "https://www.natgeokids.com/nz/discover/science/space/universe-facts/"),
  new RandomFacts(13, "Spacesuits", "When venturing into space, astronauts wear spacesuits which have to be warmed, cooled, pressurised and supplied with fresh air. This takes six hours for them to put on!", "https://www.natgeokids.com/nz/discover/science/space/universe-facts/"),
  new RandomFacts(14, "Universe", "The universe has no centre and is constantly expanding (getting bigger) every second – making it impossible to reach the edge.", "https://www.natgeokids.com/nz/discover/science/space/universe-facts/"),
  new RandomFacts(15, "Age", "The Earth is about 4.5 billion years old – but that’s only a third of the age of the universe – which is 13.5 billion years old!", "https://www.natgeokids.com/nz/discover/science/space/universe-facts/"),
  new RandomFacts(16, "Earth", "The Earth is tiny in comparison with the rest of the universe – it could fit into the sun 1.3 million times. How small does that make you feel? ", "https://www.natgeokids.com/nz/discover/science/space/universe-facts/"),
  new RandomFacts(17, "Eclipse", "In 840AD Emperor Louis of Bavaria died of fright when experiencing an eclipse of the sun – this is when the moon moves between the Earth and the sun and a shadow falls over parts of the Earth.", "https://www.natgeokids.com/nz/discover/science/space/universe-facts/"),
  new RandomFacts(18, "Moon - The Waterbender", "The moon is the reason why we have tides and waves on Earth. Along with the sun, it moves billions of tonnes of water each day.", "https://www.natgeokids.com/nz/discover/science/space/universe-facts/"),
  new RandomFacts(19, "A Day on Mercury", "A day on Mercury lasts longer than its year! Mercury moves around the sun faster than any other planet – making its year the equivalent of 88 Earth days. While a day on Mercury – the interval between one sunrise and the next – lasts 176 Earth days!", "https://www.natgeokids.com/nz/discover/science/space/universe-facts/"),
  new RandomFacts(20, "Dwarf Planet", "In 2006, Pluto was reclassified as a ‘dwarf planet’ after 76 years classified as the outermost planet in our solar system since its discovery in 1930.", "https://www.natgeokids.com/nz/discover/science/space/universe-facts/"),
  //NASA
  new RandomFacts(21, "NASA", "The acronym 'NASA' stands for National Aeronautics and Space Administration.", "https://www.nasa.gov/facts/"),
  new RandomFacts(22, "NASA", "NASA became operational on October 1, 1958 - one year after the Soviets launched Sputnik 1, the world's first artificial satellite.", "https://www.nasa.gov/facts/"),
  new RandomFacts(23, "You Grow Taller", "During the six months that most astronauts spend on the International Space Station, they can grow up to 3 percent taller. That means that a 6-foot-tall (1.8 meters) person could gain as many as 2 inches (5 centimeters) while in orbit. Without gravity, the spine is free to expand, making the space flyers taller, even when they first return to Earth. Fortunately, however, the astronauts return to their preflight height after a few months of being back within the Earth’s gravity.", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(24, "Puffy Faces and Skinny Legs", "When on Earth, the fluids in the human body are distributed unevenly because of gravity. Most fluid pools in the lower extremities, leaving little fluid in the top of the body. Life in orbit changes all of that. For the first few weeks of spaceflight, most astronauts appear to have a puffy head and skinny legs. The fluid in their bodies redistributes evenly when gravity isn't playing a role in their biological systems. After a little time in orbit, however, the body adapts to the new distribution of fluids, and the astronauts don't appear as puffy.", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(25, "Coordination Conundrum After Landing", "After coming home from a stint on the space station, many astronauts have reported difficulty adjusting back to gravity. Sometimes, space flyers will drop things, forgetting that gravity is operative back on Earth. After six months in microgravity conditions, it is difficult to adjust to life in a place where materials fall if you drop them.", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(26, "Muscle Meltdown", "In the weightlessness of space, muscles aren't needed to support the body. An astronaut's muscles start to adapt to that change almost immediately. Instead of maintaining the usual base of muscle mass needed for life on Earth, astronauts' bodies quickly get to work ridding themselves of unnecessary tissue. Although this might be ideal in space, it's problematic once back on Earth. Astronauts have to exercise for two hours a day on the space station just to maintain a healthy amount of muscle mass that they will need once they are back on the Earth.", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(27, "Bone Density Loss", "All that exercise on the space station also helps prevent bone-density loss. Each month, astronauts could lose up to 1 percent of their bone density if they don’t get enough exercise. There are two treadmills and two stationary bicycles on board the space station to help the residents keep in shape during their time in orbit.", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(28, "Trouble Sleeping", "Astronauts have reported seeing flashes of light zap through their eyes as they try to rest, making it difficult for them to sleep on the space station. The flashes are actually from cosmic rays — high-energy particles that beam through the solar system — shooting through the orbiting outpost. Spaceflyers have described the flashes as 'fireworks' or 'streaks'. Although the radiation from the cosmic rays can build up over time, the particles don't pose too much of a risk during the limited time that astronauts spend on the station.", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(29, "Meteor", "Surprisingly (to some) a meteor isn’t a physical object. It is rather the visible evidence of a physical object. Specifically, a meteor is the visible path of a meteoroid that enters the Earth's (or another body's) atmosphere, commonly called a shooting star or falling star.", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(30, "Black Holes", "Black holes are perhaps the most nightmarishly fascinating features of our universe. Like long dark tunnels to nowhere (or giant garbage disposals), these mysterious fixtures in space exert a gravitational pull so gripping that nothing close by —not even light— can escape from being swallowed. What goes in, (mostly) never comes out.", "https://www.nasa.gov/content/interesting-fact-of-the-month"),

  new RandomFacts(31, "Luna 15", "Soviet probe, 'Luna 15', crashed into the surface of the moon while Buzz Aldrin and Neil Armstrong were still on it.", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(32, "Typo", "The Mariner 1 probe, which was meant to orbit Venus, failed because of a missing hyphen in a line of code, making it the most expensive typo in the history. ", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(33, "Space Probe", "Gravity Probe B has the most perfect spheres ever created by man “If GP-B’s gyroscopes were enlarged to the size of the earth, the tallest mountain would be just eight feet tall.” ", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(34, "Spacecraft", "Helios 1 and 2 are the fastest spacecraft relative to the Sun that humans have ever build. They are travelling at 252,000 km/h (43 miles/sec) and although they are no longer functional, they are still orbiting around the sun. ", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(35, "Spacedog", "On August 19, 1960, the Soviets launched Korabl-Sputnik 2 into orbit with 2 dogs, 40 mice, 2 rats, and a variety of plants. One of the dogs later had puppies, one of which was sent to then First-Lady Jackie Kennedy. JFK originally did not want to take the dog, fearing that it may be bugged. ", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(36, "Exploring other Planets", "The first man-made aircraft to successfully land on another planet and send back data was the Soviet Venera 7 in 1970. After landing on Venus, the craft sent back only 23 minutes of weak data, presumably because it landed on its side. ", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(37, "Don't forget to...What?", "When the spacecraft Cassini sent a probe to Saturn’s moon Titan, the European Space Agency forgot to turn on a receiver and thus missed half of the images. ", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(38, "Always Good Prepared", "The New Horizons spacecraft, launched in 2006, carried a Florida state quarter symbolically to pay Charon, the ferryman to the realm of the dead (Pluto). ", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(39, "Fastst Object", "The New Horizons spacecraft is the fastest object to have ever been launched. It passed the Moon’s orbit in just 9 hours after its launch, a trip that took the Apollo astronauts three full days. ", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(40, "Beatles in Space", "Carl Sagan wanted to include the Beatles “Here Comes the Sun” on the golden record sent into space on the Voyager spacecraft. The Beatles said yes, EMI (EMI Records, Ltd.) said no. ", "https://www.nasa.gov/content/interesting-fact-of-the-month"),

  new RandomFacts(41, "Units", "In 1999, the Mars Climate Orbiter disintegrated after entering the upper atmosphere of Mars. This occurred because one team used imperial units, and another used metric, destroying the orbiter and wasting hundreds of millions of dollars.", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(42, "Mars", "Mars, the red planet, was named after this god of war. According to Roman myth, Mars rode on a chariot pulled by two horses named Phobos and Deimos (meaning fear and panic). The two small moons of Mars are named after these two mythical horses.", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(43, "Mercury", "The Romans knew of seven bright objects in the sky: the Sun, the Moon, and the five brightest planets. They named them after their most important gods. Because Mercury was the fastest planet as it moved around the Sun, it was named after the Roman messenger god Mercury. Mercury was also the god of travelers. According to myth, he had a winged hat and sandals, so he could fly.", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(44, "Venus", "Venus, the brightest planet in the night sky, was named after the Roman goddess of love and beauty and is the only planet named after a female. Venus may have been named after the most beautiful deity of the pantheon because it shone the brightest among the five planets known to ancient astronomers.", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(45, "Earth", "All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. The name Earth is an English/German name which simply means the ground. It comes from the Old English words 'eor(th)e' and 'ertha'. In German, it is 'erde'.", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(46, "Jupiter", "The Romans named the planet after their king of gods, Jupiter, who was also the god of the sky and of thunder.", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(47, "Saturn", "Saturn was named after the Roman god of agriculture. According to myth, Saturn introduced agriculture to his people by teaching them how to farm the land. Saturn was also the Roman god of time and this is perhaps why the slowest (in orbit around the Sun) of the five bright planets was named after him.", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(48, "Uranus", "So the first six planets in the solar system have been visible to observers throughout human history and were named for Roman gods. But because it orbits so far from the sun, Uranus was not visible with the naked eye. In fact, it is the first planet officially identified with a telescope.", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(49, "Neptune", "Shortly after its discovery, Neptune was only referred to as “the planet exterior to Uranus” or as “Le Verrier’s planet”, after its discoverer, Urbain Le Verrier. ", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  new RandomFacts(50, "Pluto", "At the time of Pluto's discovery, it was considered to be a planet (it is now classified as a dwarf planet). Being very cold and the farthest from the Sun, Pluto was named after the Roman god of death. According to Roman myth, when someone died, they traveled down to the Underworld. The name was suggested by 11-year-old Venetia Burney of Oxford, England.", "https://www.nasa.gov/content/interesting-fact-of-the-month"),
  //Some short facts
  new RandomFacts(51, "DNA", "If you unravelled all of the DNA in your body, it would span 34 billion miles, reaching to Pluto (2.66 billion miles away) and back ... six times.", "https://www.businessinsider.com/14-facts-about-the-universe-2016-8?op=1#if-you-unraveled-all-of-the-dna-in-your-body-it-would-span-34-billion-miles-reaching-to-pluto-266-billion-miles-away-and-back--six-times-1"),
  new RandomFacts(52, "Sugar Cube", "Almost all of ordinary matter (99.9999999% of it) is empty space. If you took out all of the space in our atoms, the entire human race (all 7 billion of us) would fit into the volume of a sugar cube.", "https://www.businessinsider.com/14-facts-about-the-universe-2016-8?op=1#if-you-unraveled-all-of-the-dna-in-your-body-it-would-span-34-billion-miles-reaching-to-pluto-266-billion-miles-away-and-back--six-times-1"),
  new RandomFacts(53, "Made of Stars", "Many of the atoms you're made of, from the calcium in your bones to the iron in your blood, were brewed up in the heart of an exploding star billions of years ago.", "https://www.businessinsider.com/14-facts-about-the-universe-2016-8?op=1#if-you-unraveled-all-of-the-dna-in-your-body-it-would-span-34-billion-miles-reaching-to-pluto-266-billion-miles-away-and-back--six-times-1"),
  new RandomFacts(54, "Big Bang", "In fact, your body contains cosmic relics from the creation of the universe. Almost all of your hydrogen atoms were formed in the Big Bang, about 13.7 billion years ago.", "https://www.businessinsider.com/14-facts-about-the-universe-2016-8?op=1#if-you-unraveled-all-of-the-dna-in-your-body-it-would-span-34-billion-miles-reaching-to-pluto-266-billion-miles-away-and-back--six-times-1"),
  new RandomFacts(55, "Long Travel", "Light from some stars takes so long to travel to our eyes that when you look at the star-speckled night sky you're actually peering deep into the past. NASA's Hubble Telescope can look as far back as 13 billion years ago.", "https://www.businessinsider.com/14-facts-about-the-universe-2016-8?op=1#if-you-unraveled-all-of-the-dna-in-your-body-it-would-span-34-billion-miles-reaching-to-pluto-266-billion-miles-away-and-back--six-times-1"),
  new RandomFacts(56, "Boot Prints", "1969, humankind took its first steps on the moon — and the boot prints will probably still be there a million years from now. That's because the moon has no atmosphere, so there's no wind or water to sweep through and erase the marks.", "https://www.businessinsider.com/14-facts-about-the-universe-2016-8?op=1#if-you-unraveled-all-of-the-dna-in-your-body-it-would-span-34-billion-miles-reaching-to-pluto-266-billion-miles-away-and-back--six-times-1"),
  new RandomFacts(57, "Silence", "Outer space is silent. Eerily silent. That's because sound waves need some sort of medium to travel through. And space is a vacuum. A dark, silent vacuum.", "https://www.businessinsider.com/14-facts-about-the-universe-2016-8?op=1#if-you-unraveled-all-of-the-dna-in-your-body-it-would-span-34-billion-miles-reaching-to-pluto-266-billion-miles-away-and-back--six-times-1"),
  new RandomFacts(58, "Stick Together", "If you touch two pieces of the same type of metal together in the vacuum of space, they will fuse, bound together until eternity (or until you break them apart).", "https://www.businessinsider.com/14-facts-about-the-universe-2016-8?op=1#if-you-unraveled-all-of-the-dna-in-your-body-it-would-span-34-billion-miles-reaching-to-pluto-266-billion-miles-away-and-back--six-times-1"),
  new RandomFacts(59, "Year on Venus", "One year on Venus is equal to 224 Earth days. And one day on Venus is equal to 243 Earth days. Which makes a day on Venus longer than a year. And to top it off, Venus is the only planet in our solar system that rotates backwards.", "https://www.businessinsider.com/14-facts-about-the-universe-2016-8?op=1#if-you-unraveled-all-of-the-dna-in-your-body-it-would-span-34-billion-miles-reaching-to-pluto-266-billion-miles-away-and-back--six-times-1"),
  new RandomFacts(60, "Sand", "There might be as many as three sextillion stars in the universe. That's 3 followed by 23 zeros, or 300,000,000,000,000,000,000,000. That's more than all of the grains of sand on Earth.", "https://www.businessinsider.com/14-facts-about-the-universe-2016-8?op=1#if-you-unraveled-all-of-the-dna-in-your-body-it-would-span-34-billion-miles-reaching-to-pluto-266-billion-miles-away-and-back--six-times-1"),

  new RandomFacts(61, "Explosion", "When a massive star explodes, its scrunched-up core forms something called a neutron star. Neutron stars are so dense that just a teaspoon of their material would weigh more than Mt. Everest. The explosion can spin the neutron star to mind blowing speeds — up to 600 rotations per second.", "https://www.businessinsider.com/14-facts-about-the-universe-2016-8?op=1#if-you-unraveled-all-of-the-dna-in-your-body-it-would-span-34-billion-miles-reaching-to-pluto-266-billion-miles-away-and-back--six-times-1"),
  new RandomFacts(62, "Analog TV", "Because analog TVs use radio waves, when your TV screen is grey and buzzing, part of this is afterglow from the Big Bang.", "https://www.odysseymagazine.com/universe-facts/"),
  new RandomFacts(63, "Dark Energy", "Our universe is made up of 68% dark energy, 27% dark matter and 5% regular matter. This means we can only actually see 5% of our universe. Our estimations of how much of the universe we can observe and understand in laboratories here on Earth has decreased over the last few decades. As we realise the Universe is bigger, it also means there’s so much more out there that we don’t know anything about.", "https://www.odysseymagazine.com/universe-facts/"),
  new RandomFacts(64, "Planets", "Out of all the other planets that we have discovered in the universe – more than 3,500 – none of them are like our planets.", "https://www.odysseymagazine.com/universe-facts/"),
  new RandomFacts(65, "Aliens", "When we look at something a light year away, is takes this long to travel – so we’re looking at it 1 year in the past. So if an alien was looking at the Earth from the Andromeda galaxy, they would see the Earth 2.5 million years ago.", "https://www.odysseymagazine.com/universe-facts/"),
  new RandomFacts(66, "The Sun", "Our Sun takes up more than 99% of the mass of our solar system. But, the reality is that our Sun isn’t even a big star.", "https://www.odysseymagazine.com/universe-facts/"),
  new RandomFacts(67, "Betelgeuse", "Betelgeuse, a star, is more than 700x the size of our Sun, and it’s approximately 14,000x as bright.", "https://www.odysseymagazine.com/universe-facts/"),
  new RandomFacts(68, "Burning Ice", "Do you know this? 33 light years from us, there is an exoplanet, which is completely covered in burning ice.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(69, "Smell of Space", "Astronauts say that, space smells like hot metal, welding fumes and seared steak.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(70, "Cheers!", "There is a massive cloud of alcohol more than 463,000,000,000 kms across, with which we can have 400 trillion trillion pints of beer.  This massive cloud of alcohol is 10,000 light years away from us.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),

  new RandomFacts(71, "Black Hole", "Earth can become a black hole.  This can be achieved by compressing earth down to the size of a marble, it would collapse by itself.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(72, "New Stars", "275 million new stars are born every day according to estimates of astronomers.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(73, "Long Time", "225 million years is the time taken by our solar system to rotate around the Milky way.  Dinosaurs just began to roam on the Earth, the last time Earth was in its current position.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(74, "Black Hole", "If you were in a black hole and look out from inside, you would able to see the bank of your own head and the entire universe in one small patch of the sky.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(75, "Yummy", "The center of our galaxy smells like rum and tastes like raspberries.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(76, "Thanks Japan", "Day on Earth is shortened by 1.8 microseconds, by 2011 Japan earth quake.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(77, "Galileo", "Galileo was the first person to look into space with a telescope nearly 400 years ago.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(78, "Bubble", "When water boils, it creates thousands of little bubbles on Earth. If water is boiled in space, it would produce one giant, undulating bubble, which is due to lack of buoyancy and convection.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(79, "Convection", "There is no convection in space, as there is no gravity in space.  Due to this heat of skin won’t rise, and cool body will perspire, but sweat won’t evaporate or drip, it will just build up.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(80, "Never Ending Journey", "You could never get to the edge of the universe, if you travel outward in a straight line, you would come back to the point where you began.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),

  new RandomFacts(81, "Universe Glue", "The glue that holds the universe together is dark matter, which can’t be measured, but scientists believe that there is a chance of measuring it.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(82, "Cosmic Rays", "From outer space, cosmic rays flow throughout our solar system, which are highly energetic particles.  But no one is aware of their origin.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(83, "Solar System", "Our solar system, with the sun, the planets, moons and the billions of asteroids and comets fill less than a trillionth of our universe.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(84, "Edge", "The edge of our solar system is not Pluto, it is theorized Oort cloud.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(85, "Distance between Stars", "20 million million miles, this is the average distance between stars.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(86, "200 billion pounds", "The core of a neutron star is very dense.  It is so dense that if you take a spoonful of matter from its core, it would weigh 200 billion pounds!", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(87, "Universe", "2.7 kelvin is the temperature of the cosmic microwave background radiation, that permeates the entire universe.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(88, "Massive Star", "R136a1 is the most luminous and massive star, which is 8.7 million times brighter than sun, it is present in the Large Magellanic Cloud.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(89, "Oldest Star", "13.2 billion years is age of the oldest known star, it is the red giant HE 1523-0901.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(90, "Galaxies", "According to the estimates of scientists, there are around 20 trillion galaxies in our universe.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),

  new RandomFacts(91, "Diameter of the Universe", " 150 billion light years is the diameter of the Universe, approximately.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(92, "No Center", "There is no center for Universe, as every galaxy is expanding away from one another.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(93, "Universe", "The Universe was hot when it was young and gradually it has become cold.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(94, "Moon Smell", "Astronauts say that Moon dust smells like gunpowder and it is extremely soft.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(95, "Human Brain", "The most complex object in the universe is human brain, with a billion neurons and a quadrillion connections.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  new RandomFacts(96, "Dead Stars", "Do you know that the stars you see in the sky may be dead? As they are billions of light years away from us and it will take billions of years for the light to reach earth, which means that the stars light which you see now is billion year old lighting. So they may be dead now.", "https://www.spinfold.com/35-unknown-facts-about-universe/"),
  /*new RandomFacts(97, "", "", ""),
  new RandomFacts(98, "", "", ""),
  new RandomFacts(99, "", "", ""),
  new RandomFacts(100, "", "", ""),*/
];