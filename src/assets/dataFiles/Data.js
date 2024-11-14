export const godData = [
	{
		"Name": "Achilles",
		"HealthPerLevel": 89,
		"ManaPerLevel": 35,
		"Health": 665,
		"Mana": 205,
		"PhysicalProtection": 23.8,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/achilles.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Achilles punches forward with the edge of his Shield, inflicting massive damage and stunning enemy targets hit by the impact. The force of his punch continues to radiate past his initial target area, dealing 70% damage to targets farther away. Lane Minions take an additional 15% damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Stun, Damage" },
						{ "description": "Range:", "value": "50" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/155/210/265/320 (80% of your Physical Power)",
						},
						{ "description": "Stun Duration:", "value": "1s" },
					],
				},
			},
			"Id": 15676,
			"Summary": "Shield of Achilles",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/shield-of-achilles.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "9s",
					"cost": "40/45/50/55/60",
					"description":
						"Achilles is blessed by the gods, giving him bonus Physical Power, Protections, and Crowd Control Reduction for 6 seconds. While this blessing is active, Achilles will heal himself upon successfully damaging enemies with abilities.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{ "description": "Heal:", "value": "15/18/21/24/27" },
						{ "description": "Max Heals per Ability:", "value": "4" },
						{ "description": "Physical Power:", "value": "+6/7/8/9/10%" },
						{ "description": "Protections:", "value": "+10/12.5/15/17.5/20%" },
						{ "description": "Crowd Control Reduction:", "value": "20%" },
					],
				},
			},
			"Id": 15677,
			"Summary": "Radiant Glory",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/radiant-glory.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "12/11.5/11/10.5/10s",
					"cost": "22/24/26/28/30",
					"description":
						"Achilles dodges his enemies' attacks before striking them in swift response. If Achilles successfully hits an enemy god with this strike, Achilles can use this ability once more before it goes on Cooldown.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Dash, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Total Damage (Both Hits):",
							"value": "130/200/270/340/410 (+90% of your Physical Power)",
						},
					],
				},
			},
			"Id": 15679,
			"Summary": "Combat Dodge",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/combat-dodge.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80/85/90/95/100",
					"description":
						"Achilles dashes forward and attacks. While dashing, Achilles will pass through minions, stop and hit the first enemy god he encounters, dealing damage to all he hits and executing gods below 35% Health. If Achilles kills a god with this ability, he can use it again, up to 5 times. As Achilles successfully Executes his enemies, he becomes more reckless in combat and leaves his heel exposed. Achilles will become more susceptible to damage, stacking up to 5 times.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Dash, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "180/270/360/450/540 (100% of your Physical Power)",
						},
						{ "description": "Execute Threshold:", "value": "35%" },
						{ "description": "D Taken Increase:", "value": "5%" },
					],
				},
			},
			"Id": 15680,
			"Summary": "Fatal Strike",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/fatal-strike.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 2.0, "Scaling": 1.0 },
		"Attack Speed": 0.95,
		"Attack Speed Per Level": 0.012,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Nut",
		"Health": 672,
		"HealthPerLevel": 80,
		"Mana": 230,
		"ManaPerLevel": 37,
		"PhysicalProtection": 18,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtection": 30,
		"MagicProtectionPerLevel": 1.6,
		"Role": "Hunter",
		"Type": "Physical",
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/nut.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "45/50/55/60/65",
					"description":
						"Nut enhances her Basic Attacks, firing 2 additional damaging projectiles from her sides at a converging angle. All projectiles pierce enemies but not walls, with the center dealing Basic Attack damage and the sides dealing ability damage. Nut always shoots at least once, but may fire up to an additional 4 shots by gaining stacks when damaging enemies with Basic Attacks. Nut gains 2 stacks for damaging enemy gods. Nut may cancel this ability to refund unused shots as stacks",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area Basic, Buff" },
						{ "description": "Range", "value": "55" },
					],
					"rankitems": [
						{
							"description": "D per Tick:",
							"value": "",
						},
						{
							"description": "Explosion D:",
							"value": "",
						},
						{ "description": "Fumes Duration:", "value": "10s" },
						{ "description": "Stun Duration:", "value": "1s" },
					],
				},
			},
			"Id": 7812,
			"Summary": "Convergence",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/noxious-fumes.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "15/14/13/12/11s",
					"cost": "60/65/70/75/80",
					"description":
						"",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "50" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/110/150/190/230 (+70% of your Physical Power)",
						},
					],
				},
			},
			"Id": 7811,
			"Summary": "Crashing Comet",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/crashing-comet.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "70/75/80/85/90",
					"description":
						"	Nut warps in the direction she is currently traveling. After she warps, she automatically fires 3 homing projectiles that spread out among nearby enemies, prioritizing gods. These projectiles deal damage and apply a stacking Slow to enemies. Additionally, Nut resets the cooldown of Convergence after using this ability.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Damage" },
						{ "description": "Range:", "value": "60" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "45/75/105/135/165 (+60% of your Physical Power)",
						},
						{ "description": "Path Duration:", "value": "3s" },
					],
				},
			},
			"Id": 7818,
			"Summary": "Warp",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/path-of-flames.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "Dependent on Halos",
					"cost": "10",
					"description":
						"Nut becomes Crowd Control immune and gathers all her energy, flying high into the air and becoming untargetable for 3s. Nut then may move and aim before firing a massive black hole toward the battleground that lands after a short delay, dealing damage to all enemies. After the black hole lands, a gravity surge extends outward, damaging and pulling all enemies toward the center. Nut then lands, returning to her initial location.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Damage" },
						{ "description": "Range/Radius:", "value": "65/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "280/360/440/520/600 (+120% of your Physical Power)",
						},
						{ "description": "Max Halos:", "value": "3" },
					],
				},
			},
			"Id": 7824,
			"Summary": "Skyfall",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/skyfall.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 2.7, "Scaling": 1 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.017,
	},

	{
		"Name": "Agni",
		"HealthPerLevel": 75,
		"ManaPerLevel": 45,
		"Health": 504,
		"Mana": 255,
		"PhysicalProtection": 15.4,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.8,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/agni.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Agni summons a cloud of noxious fumes at his ground target location, doing damage every second. Firing any of Agni's abilities into the fumes detonates the gas, Stunning and damaging all enemies in the radius.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Stun, Damage" },
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Damage per Tick:",
							"value": "10/20/30/40/50 (+5% of your Magical Power)",
						},
						{
							"description": "Explosion Damage:",
							"value": "20/40/60/80/100 (20% of your Magical Power)",
						},
						{ "description": "Fumes Duration:", "value": "10s" },
						{ "description": "Stun Duration:", "value": "1s" },
					],
				},
			},
			"Id": 7812,
			"Summary": "Noxious Fumes",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/noxious-fumes.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "15/14/13/12/11s",
					"cost": "60/65/70/75/80",
					"description":
						"Agni summons a wave of fire in front of him that scorches all enemies in its path. Ignites Noxious Fumes.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "50" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/155/210/265/320 (+65% of your Magical Power)",
						},
					],
				},
			},
			"Id": 7811,
			"Summary": "Flame Wave",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/flame-wave.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "70/75/80/85/90",
					"description":
						"Agni blazes a path forward in a quick dash, leaving flames trailing behind him. Any enemies passing through the flames catch fire and burn for damage every .5s for 2s. Ignites Noxious Fumes. Agni is immune to Knockback while dashing.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Damage" },
						{ "description": "Range:", "value": "60" },
					],
					"rankitems": [
						{
							"description": "Damage per Tick:",
							"value": "20/30/40/50/60 (+15% of your Magical Power)",
						},
						{ "description": "Path Duration:", "value": "3s" },
					],
				},
			},
			"Id": 7818,
			"Summary": "Path of Flames",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/path-of-flames.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "Dependent on Halos",
					"cost": "10",
					"description":
						"Every 18 seconds, Agni gains a flaming halo that can be expended to summon a giant meteor at his ground target location. He can summon 1 every .8 seconds. Ignites Noxious Fumes.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Damage" },
						{ "description": "Range/Radius:", "value": "65/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "140/180/220/260/300 (+65% of your Magical Power)",
						},
						{ "description": "Max Halos:", "value": "3" },
					],
				},
			},
			"Id": 7824,
			"Summary": "Rain Fire",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/rain-fire.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Ah Muzen Cab",
		"HealthPerLevel": 82,
		"ManaPerLevel": 40,
		"Health": 630,
		"Mana": 230,
		"PhysicalProtection": 16.8,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon":
			"https://webcdn.hirezstudios.com/smite/god-icons/ah-muzen-cab.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "40",
					"description":
						"Bees swarm at the ground target location, creating a new Hive that provides Movement Speed, Attack Speed and HP5 Buffs to Ah Muzen Cab. Hives reveal enemies within 20 units of them. The Hives can only be destroyed by Basic Attacks (maximum 7 Hives).",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff" },
						{ "description": "Radius:", "value": "90" },
					],
					"rankitems": [
						{ "description": "HP5:", "value": "20/25/30/35/40" },
						{ "description": "Movement Speed:", "value": "10/15/20/25/30%" },
						{ "description": "Attack Speed:", "value": "10/20/30/40/50%" },
					],
				},
			},
			"Id": 9385,
			"Summary": "Hive",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/hive.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "15/14/13/12/11s",
					"cost": "65/70/75/80/85",
					"description":
						"Ah Muzen Cab summons a large swarm of bees that fly forward in a path in front of him, dealing damage to all enemies hit and applying Bees to them.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "50/90/130/170/210 (+70% of your Physical Power)",
						},
					],
				},
			},
			"Id": 9381,
			"Summary": "Swarm",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/swarm.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "60",
					"description":
						"Ah Muzen Cab sprays honey that lasts for 4s at a moveable ground target location, Slowing all enemies in the area. Bees from Hives within 90 units and Swarm will fly over to protect the honey, dealing damage every .5 second and applying Bees! to all enemies as they leave the honey.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Slow, Damage" },
						{ "description": "Range/Radius:", "value": "55/10" },
					],
					"rankitems": [
						{
							"description": "Damage per Tick:",
							"value": "13/25/37/49/61 (+15% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "20%" },
					],
				},
			},
			"Id": 9423,
			"Summary": "Honey",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/honey.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "100s",
					"cost": "100",
					"description":
						"Ah Muzen Cab fires off an enormous stinger that deals damage to all enemies in a line, sticking into the first god that is hit, applying Bees!, Slowing, Crippling, and decreasing their Physical Protections for 3 seconds. If the target dies or after 3 seconds, the stinger falls onto the ground for 4 seconds. If Ah Muzen Cab picks up his stinger, he gains a significant reduction to Stinger's Cooldown.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Cripple, Damage",
						},
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "275/355/435/515/595 (+90% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "20%" },
						{ "description": "Physical Protection Reduction:", "value": "10%" },
						{ "description": "Retrieval Cooldown Reduction:", "value": "60%" },
					],
				},
			},
			"Id": 9393,
			"Summary": "Stinger",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/stinger.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 2.2, "Scaling": 1.0 },
		"Attack Speed": 0.95,
		"Attack Speed Per Level": 0.016,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Ah Puch",
		"HealthPerLevel": 79,
		"ManaPerLevel": 55,
		"Health": 630,
		"Mana": 265,
		"PhysicalProtection": 18.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.9,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/ah-puch.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Ah Puch raises up to two decaying corpses from the underworld that surge forward exploding on anything they touch, when they reach max distance, or when Ah Puch reactivates Undead Surge dealing damage and slowing targets hit. Enemies hit also have their healing reduced by 40% for 5s. The corpses collapse after exploding remaining behind.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Slow, Damage" },
						{ "description": "Range/Radius:", "value": "60/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/110/130/150/170 (+35% of your magical power)",
						},
						{ "description": "Slow:", "value": "20/25/30/35/40%" },
						{ "description": "Slow Duration", "value": "2s" },
					],
				},
			},
			"Id": 11348,
			"Summary": "Undead Surge",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/undead-surge.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "8s",
					"cost": "60",
					"description":
						"Ah Puch causes the target area to explode dealing damage. Corpse Explosion also causes any decaying corpses in the area to explode.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Damage" },
						{ "description": "Range/Radius:", "value": "55/20,25" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "390/550/710/870/1030 (+170% of your Magical Power)",
						},
						{
							"description": "per Corpse:",
							"value": "55/80/105/130/155 (+25% of your Magical Power)",
						},
					],
				},
			},
			"Id": 16364,
			"Summary": "Corpse Explosion",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/corpse-explosion.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "60/65/70/75/80",
					"description":
						"Ah Puch throws a charm from the underworld which awakens a decaying corpse that applies miasma to targets in an area and falls to the ground, remaining behind. Targets take damage every second. After the duration, targets take additional damage and are stunned if they were healed by an ability during the initial duration.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Stun, Damage" },
						{ "description": "Range/Radius:", "value": "55/13" },
					],
					"rankitems": [
						{
							"description": "Tick D:",
							"value": "30/40/50/60/70 (+20% of your Magical Power)",
						},
						{
							"description": "Healing D:",
							"value": "50/100/150/200/250 (+50% of your Magical Power)",
						},
						{ "description": "Stun Duration:", "value": "1.5s" },
						{
							"description": "Total Damage:",
							"value": "120/160/200/240/280 (+80% of your Magical Power)",
						},
					],
				},
			},
			"Id": 11394,
			"Summary": "Fleeting Breath",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/fleeting-breath.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Ah Puch unleashes an army of Wraiths from the Ninth Hell that swarm forward and reduce healing and deal damage to enemies they collide with.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Damage" },
						{ "description": "Range:", "value": "75" },
					],
					"rankitems": [
						{
							"description": "Damage per Wraith:",
							"value": "40/50/60/70/80 (+10% of your magical power)",
						},
						{ "description": "Duration:", "value": "6s" },
						{ "description": "Healing Reduction", "value": "20% per Stack" },
						{ "description": "Max Stacks", "value": "3" },
					],
				},
			},
			"Id": 11364,
			"Summary": "Empty the Crypts",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/empty-the-crypts.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.86,
		"Attack Speed Per Level": 0.008,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Amaterasu",
		"HealthPerLevel": 89,
		"ManaPerLevel": 35,
		"Health": 672,
		"Mana": 220,
		"PhysicalProtection": 25.2,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/amaterasu.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "9s",
					"cost": "50/55/60/65/70 ",
					"description":
						"Amaterasu harnesses the power of her jewel, gaining Attack Speed and healing herself every second for 4 seconds. She also creates a persistent aura that buffs nearby allied gods. Every time this ability is activated the aura switches between Valor and Benevolence. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Buff" },
						{ "description": "Radius:", "value": "30" },
					],
					"rankitems": [
						{ "description": "Heal Per Tick:", "value": "10/18/26/34/42" },
						{ "description": "Attack Speed:", "value": "15/17.5/20/22.5/25%" },
						{
							"description": "Benevolence Aura:",
							"value": "9/12/15/18/21 % Move Speed",
						},
						{
							"description": "Valor Aura:",
							"value": "14/18/22/26/30 Bonus Power",
						},
					],
				},
			},
			"Id": 12046,
			"Summary": "Divine Presence",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/divine-presence.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Amaterasu charges her mirror for 5 seconds. While the mirror is charging she takes decreased damage. By activating the ability again or at the end of 5 seconds she will fire her mirror straight ahead, dealing damage. The mirror can be charged by successfully attacking enemies or from taking damage, and will deal up to double the base damage when fully charged.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Buff, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{ "description": "Self Mitigation:", "value": "7/9/11/13/15%" },
						{
							"description": ":",
							"value": "70/105/140/175/210 (60% of your Physical Power)",
						},
						{
							"description": "Full Charge Damage:",
							"value": "140/210/280/350/420 (60% of your Physical Power)",
						},
					],
				},
			},
			"Id": 12055,
			"Summary": "Heavenly Reflection",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/heavenly-reflection.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "70/75/80/85/90 ",
					"description":
						"Amaterasu shines light off of her sacred blade, silencing all enemies in front of her. She then dashes forward while dealing damage, piercing through minions or stopping at the first god hit. ",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Dash, Silence, Damage",
						},
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{ "description": "Silence Duration:", "value": "1s" },
						{
							"description": "Dash Damage:",
							"value": "80/135/190/245/300 (+60% of your Physical Power)",
						},
					],
				},
			},
			"Id": 12047,
			"Summary": "Glorious Charge",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/glorious-charge.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "95/90/85/80/75s",
					"cost": "100",
					"description":
						"Amaterasu focuses the power of the heavens into an impressive 3 strike combination attack. The 2nd hit will do 20% more base damage and slow enemies by 30%. The 3rd hit will do 40% more base damage and stun enemies. She must hit an enemy with the 1st hit to receive the increased damage and CC on the 2nd hit. The same rule applies to the 2nd and 3rd hits.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Stun, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "288/450/612/774/936 (+150% of your Physical Power)",
						},
						{ "description": "Slow Duration:", "value": "2s" },
						{ "description": "Stun Duration:", "value": "2s" },
					],
				},
			},
			"Id": 12049,
			"Summary": "Dazzling Offensive",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/dazzling-offensive.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.0, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.014,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Anhur",
		"HealthPerLevel": 82,
		"ManaPerLevel": 35,
		"Health": 644,
		"Mana": 220,
		"PhysicalProtection": 15.4,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/anhur.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Anhur erects an obelisk from the ground, blocking all player movement. The surrounding sands Slow enemies and increase the damage of Anhur's Basic Attacks against targets in the sands.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Debuff" },
						{ "description": "Range/Radius:", "value": "70/30" },
					],
					"rankitems": [
						{ "description": "Slow:", "value": "20/25/30/35/40%" },
						{ "description": "Buff:", "value": "8/11/14/17/20%" },
						{ "description": "Lifetime:", "value": "7s" },
					],
				},
			},
			"Id": 8193,
			"Summary": "Shifting Sands",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/shifting-sands.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "70/75/80/85/90",
					"description":
						"Anhur hurls his spear with great might. If the spear hits a god, they take damage and are knocked back. Gods knocked back into a wall are Stunned. Enemies hit by the pushed god take damage. The spear passes through minions, doing damage to them as well.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "105/170/235/300/365 (80% of your Physical Power)",
						},
						{
							"description": "Stun Duration:",
							"value": "1.1/1.2/1.3/1.4/1.5s",
						},
					],
				},
			},
			"Id": 8200,
			"Summary": "Impale",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/impale.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15/14.5/14/13.5/13s",
					"cost": "60/65/70/75/80",
					"description":
						"Anhur leaps to his ground target location, doing damage and knocking back all enemies in the radius where he lands.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/110/150/190/230 (+60% of your Physical Power)",
						},
					],
				},
			},
			"Id": 8198,
			"Summary": "Disperse",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/disperse.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80/90/100/110/120",
					"description":
						"Summoning the fury of the desert, Anhur hunkers down and throws empowered spears that pass through everything, doing damage to all enemies in their path. He is immune to Crowd Control for the duration.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "80" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "520/720/920/1120/1320 (+240% of your Physical Power)",
						},
						{ "description": "Spears Thrown:", "value": "8" },
					],
				},
			},
			"Id": 8201,
			"Summary": "Desert Fury",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/desert-fury.jpg",
		},
		"Basic Damage": { "Base Damage": 40.0, "Per Level": 2.5, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.017,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Anubis",
		"HealthPerLevel": 74,
		"ManaPerLevel": 58,
		"Health": 532,
		"Mana": 280,
		"PhysicalProtection": 14,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.7,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/anubis.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "11s",
					"cost": "60/65/70/75/80",
					"description":
						"A plague of locusts bellows forth from Anubis' mouth, smothering all enemies in the area and doing damage every .25s for 3s. Anubis is immune to knockback while channeling and moves at 50% speed.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage per Tick:",
							"value": "18/26/34/42/50 (+20% of your Magical Power)",
						},
					],
				},
			},
			"Id": 11495,
			"Summary": "Plague of Locusts",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/plague-of-locusts.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "16/15/14/13/12s",
					"cost": "60",
					"description":
						"Anubis fires a bandage projectile, mummifying and stunning his target.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Stun" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{ "description": "Stun Duration:", "value": "1.6/1.7/1.8/1.9/2s" },
					],
				},
			},
			"Id": 11497,
			"Summary": "Mummify",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/mummify.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13/12/11/10s",
					"cost": "60/65/70/75/80",
					"description":
						"Anubis calls for help from the underworld as hands penetrate the ground and claw at his enemies, doing damage and Slowing every .5s for 2s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Slow, Damage" },
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Damage Per Tick:",
							"value": "25/40/55/70/85 (+35% of your Magical Power)",
						},
						{ "description": "Slow:", "value": "25%" },
					],
				},
			},
			"Id": 11498,
			"Summary": "Grasping Hands",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/grasping-hands.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90/85/80/75/70s",
					"cost": "90",
					"description":
						"Anubis focuses all of his energy into a piercing gaze, doing damage to all enemies in the path, every 0.1 seconds for 3 seconds.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Damage per Tick:",
							"value": "23/28/33/38/43 (+15% of your Magical Power)",
						},
					],
				},
			},
			"Id": 11491,
			"Summary": "Death Gaze",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/death-gaze.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.86,
		"Attack Speed Per Level": 0.009,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Ao Kuang",
		"HealthPerLevel": 86,
		"ManaPerLevel": 38,
		"Health": 560,
		"Mana": 240,
		"PhysicalProtection": 16.8,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/ao-kuang.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "70",
					"description":
						"Ao Kuang Teleports forward into Stealth, leaving behind a watery form of himself. He remains in Stealth for 5s or until he attacks or takes damage.\n\nAo Kuang may activate this ability again to detonate the watery form, dealing damage to nearby enemies.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Teleport, Damage",
						},
						{ "description": "Range/Radius:", "value": "30/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/120/170/220/270 (+70% of your Magical Power)",
						},
					],
				},
			},
			"Id": 10645,
			"Summary": "Water Illusion",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/water-illusion.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "15/14/13/12/11s",
					"cost": "60/65/70/75/80",
					"description":
						"Ao Kuang summons 6 dragons to his side. For every successful Basic Attack Ao Kuang makes, a dragon will dive to the target dealing additional damage. This ability ends after all dragons are used, or after 10s. Ao Kuang may activate this ability again to send forward any remaining dragons in a ranged attack. The dragons damage and Slow the first enemy they hit.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Buff, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "210/300/390/480/570 (+180% of your Magical Power)",
						},
						{
							"description": "Ranged Dragon:",
							"value":
								"20/25/30/35/40 (+13% of your Magical Power) per remaining dragon",
						},
						{
							"description": "Slow:",
							"value": "30%/ for 1s + 0.25s per remaining dragon",
						},
					],
				},
			},
			"Id": 10648,
			"Summary": "Dragon Call",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/dragon-call.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "7s",
					"cost": "50/55/60/65/70",
					"description":
						"Ao Kuang unleashes a storm of lightning from his sword, damaging all enemies in front of him. This hit will send a Dragon from Dragon's Call forth, dealing damage to hit targets.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Damage" },
						{ "description": "Range:", "value": "30" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/135/180/225/270 (+40% of your Magical Power)",
						},
					],
				},
			},
			"Id": 10736,
			"Summary": "Wild Storm",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/wild-storm.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "100s",
					"cost": "90/100/110/120/130",
					"description":
						"Ao Kuang grabs a single target, damaging and knocking them into the air. If the target is below a Health threshold, Ao Kuang will also reveal his true form, becoming an airborne Dragon and executing them restoring Health. After transforming Ao Kuang then picks a new location to land, dealing damage to enemies within 20 units.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Target, Knockup, Damage",
						},
						{ "description": "Range:", "value": "15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/140/190/240/290 (+50% of your Magical Power)",
						},
						{ "description": "Execute Threshold:", "value": "30%" },
						{
							"description": "Heal:",
							"value": "10/15/20/25/30% of maximum Health",
						},
						{
							"description": "Landing Damage:",
							"value": "100/150/200/250/300 (+50% of your Magical Power)",
						},
					],
				},
			},
			"Id": 10652,
			"Summary": "King of the Eastern Seas",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/king-of-the-eastern-seas.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 2.4, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.02,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Aphrodite",
		"HealthPerLevel": 71,
		"ManaPerLevel": 43,
		"Health": 532,
		"Mana": 240,
		"PhysicalProtection": 12.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.9,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/aphrodite.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13.5/13/12.5/12s",
					"cost": "50/55/60/65/70",
					"description":
						"Aphrodite blows a kiss to an allied god, making them her soul mate and giving them both increased movement speed. If it hits an ally, it has a reduced 1s cooldown. If the kiss hits an enemy god, they are Damaged, Stunned and Aphrodite's soul mate gets jealous, increasing their damage. Also Aphrodite's soul mate gains 50% of her MP5 and 10% of her Physical and Magical Protections.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Buff" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "40/60/80/100/120 (+25% of your Magical Power)",
						},
						{ "description": "Movement Speed:", "value": "6/7/8/9/10%" },
						{ "description": "Stun Duration:", "value": "1s" },
						{
							"description": "Jealousy D Increase:",
							"value": "5/7.5/10/12.5/15%",
						},
						{ "description": "Jealousy Duration:", "value": "5s" },
					],
				},
			},
			"Id": 8742,
			"Summary": "Kiss",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/kiss.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "70/75/80/85/90",
					"description":
						"Agitated by all the attention, Aphrodite commands enemies to get away from her, doing damage around her, slowing them by 25% for 2s and knocking them back to 25 units from her.\nIf Aphrodite has a soul mate, an explosion originates on them in addition, dealing the same damage as well as slowing enemies.\nIf an enemy would be hit by both blasts, they will only be affected by the one originating from Aphrodite.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockback, Damage",
						},
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/140/200/260/320 (+70% of your Magical Power)",
						},
						{ "description": "Slow:", "value": "25%" },
					],
				},
			},
			"Id": 8776,
			"Summary": "Back Off!",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/back-off.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "70/75/80/85/90",
					"description":
						"Aphrodite calls forth a flock of beautiful doves that fly forward in the area in front of her. The doves circle around all enemies in the path, damaging enemies every .5s for 3s. Aphrodite and her soul mate receive healing when cast and decreased ability cooldowns.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Heal, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "105/175/245/315/385 (+105% of your Magical Power)",
						},
						{
							"description": "Heal per Tick:",
							"value": "7/10/13/16/19 + 2 per level",
						},
						{ "description": "Cooldown decrease:", "value": "0.2s per Tick" },
					],
				},
			},
			"Id": 8740,
			"Summary": "Love Birds",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/love-birds.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Aphrodite pledges undying love to herself and her soul mate. While this is active, her and her soul mate are invulnerable to all damage and gain the Jealousy effect for a short duration. All Crowd Control effects are also removed when activated.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{
							"description": "Invulnerability Duration:",
							"value": ".8/1.1/1.4/1.7/2s",
						},
					],
				},
			},
			"Id": 8743,
			"Summary": "Undying Love",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/undying-love.jpg",
		},
		"Basic Damage": { "Base Damage": 32.0, "Per Level": 1.45, "Scaling": 0.2 },
		"Attack Speed": 0.87,
		"Attack Speed Per Level": 0.008,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Apollo",
		"HealthPerLevel": 81,
		"ManaPerLevel": 40,
		"Health": 630,
		"Mana": 225,
		"PhysicalProtection": 16.8,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.9,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/apollo.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "11s",
					"cost": "70/75/80/85/90",
					"description":
						"Apollo strums a single chord on his lyre. It's so beautiful it hurts, and all enemies in a long range line take damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/150/210/270/330 (+90% of your Physical Power)",
						},
					],
				},
			},
			"Id": 8759,
			"Summary": "So Beautiful",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/so-beautiful.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "17/16/15/14/13s",
					"cost": "75",
					"description":
						"Apollo uses his amazing voice to Mesmerize all nearby enemies and bolster himself with additional Protections. Any damage done breaks the effect.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Mesmerize" },
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{ "description": "Mesmerize:", "value": "1.5/1.7/1.9/2.1/2.3s" },
						{ "description": "Protections:", "value": "10/15/20/25/30" },
						{ "description": "Buff Lifetime:", "value": "5s" },
					],
				},
			},
			"Id": 8808,
			"Summary": "Serenade",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/serenade.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "70",
					"description":
						"Apollo runs forward and slides on his knees, dealing damage, knocking aside all enemies and adding a stack of Audacity for each enemy hit. At the end of the slide, the movement speed is decreased for enemies and increased for himself and allies.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Buff, Damage" },
						{ "description": "Range/Radius:", "value": "45/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/115/160/205/250 (+60% of your Physical Power)",
						},
						{
							"description": "Movement Speed Buff/Debuff:",
							"value": "15/17.5/20/22.5/25%",
						},
						{ "description": "Buff Duration:", "value": "3s" },
					],
				},
			},
			"Id": 8783,
			"Summary": "The Moves",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/the-moves.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "110s",
					"cost": "20 + 35/40/45/50/55 per second",
					"description":
						"Apollo rides his chariot across the sky, choosing when to land, dealing damage every .15s for .6s as he lands. Enemies hit by the last tick of the landing will also be knocked up.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Range/Radius:", "value": "60/20" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "280/380/480/580/680 (+100% of your Physical Power)",
						},
					],
				},
			},
			"Id": 8785,
			"Summary": "Across The Sky",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/across-the-sky.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 2.6, "Scaling": 1.0 },
		"Attack Speed": 0.95,
		"Attack Speed Per Level": 0.016,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Arachne",
		"HealthPerLevel": 83,
		"ManaPerLevel": 41,
		"Health": 623,
		"Mana": 210,
		"PhysicalProtection": 18.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/arachne.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "15/14/13/12/11s",
					"cost": "60/65/70/75/80",
					"description":
						"Upon activation, Arachne's next Basic Attack within 5s does additional damage and infects the target with Venom, dealing damage over time, lowering their healing received and healing Arachne every 0.5s for 3s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Buff, Damage" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "110/183/256/329/402 (+83% of your Physical Power)",
						},
						{
							"description": "D per Tick:",
							"value": "10/18/26/34/42 (+8% of your Physical Power)",
						},
						{ "description": "Healing Reduction:", "value": "40%" },
						{ "description": "Healing per Tick:", "value": "8/15/22/29/36" },
					],
				},
			},
			"Id": 10495,
			"Summary": "Venomous Bite",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/venomous-bite.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "70",
					"description":
						"Arachne spindles her webbing, increasing her Attack Speed for 4s. If her next 2 Basic Attacks hit the same target, that target is Stunned and have their active Cooldowns increased.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Buff, Stun" },
					],
					"rankitems": [
						{ "description": "Attack Speed:", "value": "20/30/40/50/60%" },
						{ "description": "Stun Duration:", "value": "1/1.1/1.2/1.3/1.4s" },
						{ "description": "Cooldown Increase:", "value": "2s" },
					],
				},
			},
			"Id": 10614,
			"Summary": "Cocoon",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/cocoon.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "50/55/60/65/70",
					"description":
						"Arachne shoots a line of Web forward. She is Immune to Slows and moves faster on Web. If the Web reaches max range a Web trap will spawn. Enemy gods who walk through the trap or get hit by the projectile are Slowed by 15%, revealed to Arachne, leave a trail of Web behind them, and are attacked by Pet Broodlings. Arachne can only have 3 Web traps or projectiles active at a time.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Slow, Damage" },
						{ "description": "Range:", "value": "45" },
					],
					"rankitems": [
						{ "description": "Slow Duration:", "value": "4/4.5/5/5.5/6s" },
						{ "description": "Movement Speed:", "value": "40%" },
						{ "description": "Broodlings:", "value": "2/2/2/2/3" },
						{
							"description": "Broodling Damage:",
							"value": "20/30/40/50/60 per hit",
						},
						{ "description": "Web Lifetime:", "value": "240s" },
					],
				},
			},
			"Id": 10570,
			"Summary": "Web",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/web.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90/85/80/75/70s",
					"cost": "100",
					"description":
						"Arachne flips up to her infinite web, hanging upside down above the lane and increasing her movement speed. She may leap off the web to deal damage to all enemies in the target area and create a large web around the target area. The web area provides the same slow to enemies and benefit to Arachne as her Web Trail. Arachne may activate Ability 1 and 2 while running on this web.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Slow, Damage" },
						{ "description": "Radius:", "value": "15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "150/250/350/450/550 (100% of your Physical Power)",
						},
						{ "description": "Duration on Web:", "value": "5s" },
						{ "description": "Movement Speed:", "value": "40%" },
						{ "description": "Web Radius:", "value": "25ft" },
					],
				},
			},
			"Id": 10507,
			"Summary": "Night Crawler",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/night-crawler.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 2.2, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.02,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Ares",
		"HealthPerLevel": 95,
		"ManaPerLevel": 37,
		"Health": 679,
		"Mana": 200,
		"PhysicalProtection": 28,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/ares.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "15/14.5/14/13.5/13s",
					"cost": "70/75/80/85/90",
					"description":
						"Chains extend from Ares' shield, doing damage to all enemies in its path. Hitting a god shackles them to Ares, Cripples them, preventing movement abilities, dealing the same damage every second while slowing them by 15% and buffing Ares. While shackled, Ares can fire another chain for free within 2s. Jungle Camps take an extra +40% damage.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Cripple, Damage",
						},
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Minion Damage:",
							"value": "70/90/110/130/150 (+15% of your Magical Power)",
						},
						{
							"description": "God Damage per Tick:",
							"value": "20/40/60/80/100 (+15% of your Magical Power)",
						},
						{
							"description": "Speed Buff per Target Shackled:",
							"value": "15% ",
						},
						{ "description": "Duration:", "value": "4s" },
						{ "description": "Max Shackles:", "value": "3" },
					],
				},
			},
			"Id": 8284,
			"Summary": "Shackles",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/shackles.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "40/45/50/55/60",
					"description":
						"Ares strengthens the defenses of himself and all nearby allies for 6s, granting Basic Attack Damage, Protections, HP5, and reducing Crowd Control durations. For each shackled enemy, the Protection Buffs are increased.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff" },
						{ "description": "Radius:", "value": "35" },
					],
					"rankitems": [
						{ "description": "Protections:", "value": "20/25/30/35/40" },
						{ "description": "CC Reduction:", "value": "30%" },
						{ "description": "Basic Attack D:", "value": "0/5/10/15/20" },
						{ "description": "Shackle Bonus:", "value": "7" },
						{ "description": "HP5:", "value": " 25/30/35/40/45" },
					],
				},
			},
			"Id": 8315,
			"Summary": "Bolster Defenses",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/bolster-defenses.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "55/60/65/70/75",
					"description":
						"Flames pour forth from Ares' shield, engulfing enemies in a cone in front of him causing damage every .5s for 4s. Ares is immune to Knockback for the duration.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage per Tick:",
							"value": "15/20/25/30/35 (+7% of your Magical Power)",
						},
						{
							"description": "% Max Health per Tick (Gods):",
							"value": "1/1/2/2/3%",
						},
						{
							"description": "% Max Health per Tick (Minions):",
							"value": "4%",
						},
					],
				},
			},
			"Id": 8286,
			"Summary": "Searing Flesh",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/searing-flesh.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80/85/90/95/100",
					"description":
						"Ares throws chains out to all enemy gods in an area around him, gaining Crowd Control immunity and Damage Mitigation. All enemies hit by the chains are pulled to Ares after 2.5s, taking damage and are Stunned.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Stun, Damage" },
						{ "description": "Radius:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "200/275/350/425/500 (+40% of your magical power)",
						},
						{ "description": "Stun:", "value": "1s" },
						{ "description": "Damage Mitigation:", "value": "20%" },
					],
				},
			},
			"Id": 8316,
			"Summary": "No Escape",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/no-escape.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 4.0, "Scaling": 0.2 },
		"Attack Speed": 0.9,
		"Attack Speed Per Level": 0.011,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Artemis",
		"HealthPerLevel": 79,
		"ManaPerLevel": 34,
		"Health": 630,
		"Mana": 205,
		"PhysicalProtection": 16.8,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/artemis.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13/12/11/10s",
					"cost": "45",
					"description":
						"Artemis places a trap on the ground. Enemy gods coming within 5 units of her traps activate them, Rooting and Crippling the enemy god, preventing movement abilities and dealing damage every second for 3s. ",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "40/5" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "105/144/183/222/261 (+90% of your Physical Power)",
						},
						{ "description": "Root:", "value": "2s" },
						{ "description": "Max Traps:", "value": "4" },
					],
				},
			},
			"Id": 7970,
			"Summary": "Transgressor's Fate",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/transgressors-fate.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "16/15.5/15/14.5/14s",
					"cost": "60/65/70/75/80",
					"description":
						"Artemis attacks at a furious pace, increasing her Attack and Movement Speed significantly. Additionally, Artemis cleanses herself of slows and becomes immune to Slows for 0.6s when activated.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{ "description": "Attack Speed:", "value": "40/50/60/70/80%" },
						{ "description": "Movement Speed:", "value": "25%" },
						{ "description": "Duration:", "value": "3/3.5/4/4.5/5s" },
					],
				},
			},
			"Id": 7974,
			"Summary": "Vengeful Assault",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/vengeful-assault.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "8s",
					"cost": "50/55/60/65/70",
					"description":
						"Artemis fires a volley into a ground target, suppressing all of her enemies. Enemies caught within the volley are damaged and are Slowed.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Slow, Damage" },
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/150/200/250/300 (+75% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "25%" },
						{ "description": "Slow Duration:", "value": "2s" },
					],
				},
			},
			"Id": 8066,
			"Summary": "Suppress the Insolent",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/suppress-the-insolent.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80/90/100/110/120",
					"description":
						"Artemis summons the great Calydonian Boar on her enemies, doing damage to the nearest enemy god and Stunning them, and itself. The boar is immune until it hits the first god and then continues to charge other gods for its lifetime. Artemis is also immune to Crowd Control for 1.5s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Stun, Damage" },
						{ "description": "Radius:", "value": "60" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "150/225/300/375/450 (+100% of your Physical Power)",
						},
						{ "description": "Stun:", "value": "1.1/1.2/1.3/1.4/1.5s" },
						{ "description": "Boar Lifetime:", "value": "6s" },
					],
				},
			},
			"Id": 8126,
			"Summary": "Calydonian Boar",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/calydonian-boar.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 2.5, "Scaling": 1.0 },
		"Attack Speed": 0.95,
		"Attack Speed Per Level": 0.016,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Artio",
		"HealthPerLevel": 100,
		"ManaPerLevel": 39,
		"Health": 700,
		"Mana": 210,
		"PhysicalProtection": 28,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.5,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/artio.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "40/45/50/55/60",
					"description":
						"Druid: Artio pulses out a strong wave of energy that damages enemies. She will heal herself and allies within 65 units for each enemy god hit by this ability.\n\nBear Form: Artio slashes twice with her claws, damaging enemies with each swipe. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Heal, Damage" },
						{ "description": "Range:", "value": "25" },
					],
					"rankitems": [
						{
							"description": "Druid Damage:",
							"value": "70/105/140/175/210 (+35% of your Magical Power)",
						},
						{ "description": "Druid Heal:", "value": "40/55/70/85/100" },
						{
							"description": "Total Bear D:",
							"value": "80/140/200/260/320 (+60% of your magical power)",
						},
					],
				},
			},
			"Id": 14681,
			"Summary": "Energy Surge (Maul Prey)",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/energy-surge.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "50/55/60/65/70",
					"description":
						"Druid Form: Artio creates a thicket of vines around herself that cripples enemy gods and decreases their Magical or Physical Power as long as they are in the area. Bear Form: Artio lets out a ferocious roar that Stuns all nearby enemies and increases her own Physical and Magical Protections for 4s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Cripple" },
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Druid Area Duration:",
							"value": "4/4.5/5/5.5/6s",
						},
						{
							"description": "Druid Power Debuff:",
							"value": "9/10.5/12/13.5/15%",
						},
						{
							"description": "Bear Stun Duration:",
							"value": "1/1.1/1.2/1.3/1.4s",
						},
						{
							"description": "Bear Self Buff:",
							"value": "15/20/25/30/35 Protections",
						},
					],
				},
			},
			"Id": 14676,
			"Summary": "Entangling Vines (Ferocious Roar)",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/entangling-vines.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "50/55/60/65/70",
					"description":
						"Druid Form: Artio channels for 2s, draining the life from enemies. While channeling she deals damage up to 5 times and heals herself up to 5 times. Each hit increasingly Slows enemies and enemies hit all 5 times are Rooted for 1s.\n\nBear Form: Artio charges forward at an increased movement speed for 3s. Enemies she charges through take damage and are Slowed for 2s.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "75/125/175/225/275 (+50% of your magical power)",
						},
						{ "description": "Druid Heal Per Hit:", "value": "6/10/14/18/22" },
						{ "description": "Druid Slow:", "value": "10%" },
						{
							"description": "Bear D:",
							"value": "75/120/165/210/255 (+50% of your Magical Power)",
						},
						{ "description": "Bear Slow:", "value": "30%" },
					],
				},
			},
			"Id": 14683,
			"Summary": "Life Tap (Heavy Charge)",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/life-tap.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "1s",
					"cost": "0",
					"description":
						"Active: Artio Shapeshifts between her Druid stance and Bear stance.\n\nPassive: Every time Artio hits at least 1 enemy with an ability she gains 1 stack of Invigoration. Invigoration stacks increase her Movement Speed and MP5. Stacks last 6s, and stack up to 8 times. ",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{
							"description": "Movement Speed Per Stack",
							"value": "1/1.5/2/2.5/3%",
						},
						{ "description": "MP5 Per Stack", "value": "2/4/6/8/10" },
					],
				},
			},
			"Id": 14685,
			"Summary": "Shapeshift (Bear)",
			"URL":
				"https://static.wikia.nocookie.net/smite_gamepedia/images/1/17/Icons_Artio_A04.png/revision/latest?cb=20170801114447",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Athena",
		"HealthPerLevel": 105,
		"ManaPerLevel": 34,
		"Health": 700,
		"Mana": 190,
		"PhysicalProtection": 28,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.5,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/athena.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/70/80/90/100",
					"description":
						"Athena powers up for a dash. While dashing, Athena will pass through minions, stop and hit the first enemy god she encounters, dealing damage. If she hits an enemy, Athena gains one stack of Block (max 3), absorbing the next Basic Attack from any god that hits her.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Slow, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/130/180/230/280 (+50% of your Magical Power)",
						},
					],
				},
			},
			"Id": 8926,
			"Summary": "Preemptive Strike",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/preemptive-strike.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "18s",
					"cost": "60/65/70/75/80",
					"description":
						"Athena releases a shockwave of power from her shield, Taunting enemy gods and decreasing their Attack Speed as she forces them to fight or chase her.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Taunt, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Taunt Duration:",
							"value": "1.0/1.25/1.5/1.75/2.0s",
						},
						{
							"description": "Damage:",
							"value": "40/65/90/115/140 (20% of your Magical Power)",
						},
						{
							"description": "Attack Speed Slow:",
							"value": "20/22.5/25/27.5/30%",
						},
					],
				},
			},
			"Id": 8891,
			"Summary": "Confound",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/confound.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Athena summons a group of Athenian warriors who do damage and Slow upon arrival. After 2s, they strike again, dealing additional damage and Slowing.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Damage" },
						{ "description": "Radius:", "value": "15" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "140/245/350/455/560 (+100% of your Magical Power)",
						},
						{
							"description": "Secondary D:",
							"value": "70/135/200/265/330 (+50% of your Magical Power)",
						},
						{ "description": "Slow:", "value": "20%" },
					],
				},
			},
			"Id": 8892,
			"Summary": "Shield Wall",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/shield-wall.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "120s ",
					"cost": "80/90/100/110/120",
					"description":
						"Athena picks a single allied god anywhere in the world, and launches herself up into the air, landing next to that god 3.6 seconds later. During that 3.6 seconds, both Athena and the allied god gain Damage Mitigation, and the allied god also gains Movement Speed. Enemies nearby when Athena lands take damage.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Teleport, Buff, Damage",
						},
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "340/415/490/565/640 (+90% of your Magical Power)",
						},
						{ "description": "Mitigation:", "value": "20%" },
						{ "description": "Movement Speed:", "value": "20%" },
					],
				},
			},
			"Id": 8970,
			"Summary": "Defender of Olympus",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/defender-of-olympus.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Atlas",
		"HealthPerLevel": 105,
		"ManaPerLevel": 35,
		"Health": 714,
		"Mana": 190,
		"PhysicalProtection": 28,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.7,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/atlas.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13/12/11/10s",
					"cost": "65/70/75/80/85",
					"description":
						"Atlas throws his Astrolabe to a target location, damaging and slowing enemies where it lands. While deployed, his Basic Attack will cause an explosion at the target area that damages all enemies and does not trigger item effects. This explosion deals 50% damage to Minions and costs 5 Mana to use. After 5s or when he re-fires this ability, the Astrolabe will return to him. Atlas' second ability changes based on whether his Astrolabe is deployed or held.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Slow, Damage" },
						{ "description": "Range/Radius:", "value": "50/25" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "50/85/120/155/190 (+40% of your Magical Power)",
						},
						{ "description": "Slow:", "value": "20/22.5/25/27.5/30%" },
						{ "description": "Slow Duration:", "value": "2s" },
						{ "description": "Basic Explosion:", "value": "23 + 6 Per Level" },
					],
				},
			},
			"Id": 20944,
			"Summary": "Unburden",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/unburden.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "50/55/60/65/70",
					"description":
						"Atlas pulls enemies towards his Astrolabe. Enemy gods who are too close get pulled into the Astrolabe. If Atlas is holding the Astrolabe he becomes immune to knockups, and enemies who get pulled into the Astrolabe get held in front of Atlas. After a brief delay, the held targets get launched in the direction Atlas is facing. If Atlas has thrown the Astrolabe, enemies who get pulled into the Astrolabe will get held at the Astrolabe's location before being launched towards Atlas.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Cone, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "100/160/220/280/340 (+70% of your Magical Power)",
						},
						{
							"description": "Launch D:",
							"value": "50/80/110/140/170 (+35% of your Magical Power)",
						},
					],
				},
			},
			"Id": 20945,
			"Summary": "Gravity Pull",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/gravity-pull.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "60/65/70/75/80",
					"description":
						"Atlas charges forward, damaging minions and cleansing himself of slows. Each allied god he charges near will have their burdens removed, cleansing them of any current slows and increasing their movement speed. While Atlas is charging, he is immune to slows and knockups. When Atlas collides with an enemy god he will release accumulated burdens in an explosion, slowing enemies in a 15 unit radius. For every burden accumulated, the slow is increased by 25% up to a maximum of 75%. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Buff, Damage" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/130/180/230/280 (+40% of your Magical Power)",
						},
						{
							"description": "Movement Speed:",
							"value": "25/27.5/30/32.5/35%",
						},
						{ "description": "Min Slow:", "value": "25%" },
						{ "description": "Max Slow:", "value": "75%" },
					],
				},
			},
			"Id": 21221,
			"Summary": "Kinetic Charge",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/kinetic-charge.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "60/70/80/90/100",
					"description":
						"Atlas tears the sky asunder and calls forth a Gamma-Ray Burst. Enemies in this area are hit every 0.5s and gain a stack of Radiation. Radiation can stack up to !{rankprog:5,5,6,6,7}! times and lowers the enemy's Protections and Power. After 5s or upon re-fire the Gamma-Ray Burst will focus in power and begin traveling across the battleground. Enemies hit by this focused ray take heavier damage and gain Focused Radiation, lowering Protections and Power equal to 3 stacks of Radiation.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Debuff, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/30" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "370/530/690/850/1010 (+140% of your Magical Power)",
						},
						{ "description": "Protection Reduction:", "value": "5%" },
						{ "description": "Power Reduction:", "value": "3%" },
						{
							"description": "Focused D:",
							"value": "120/180/240/300/360 (+40% of your Magical Power)",
						},
					],
				},
			},
			"Id": 20947,
			"Summary": "Gamma-Ray Burst",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/gamma-ray-burst.jpg",
		},
		"Basic Damage": { "Base Damage": 37.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.95,
		"Attack Speed Per Level": 0.011,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Awilix",
		"HealthPerLevel": 81,
		"ManaPerLevel": 38,
		"Health": 665,
		"Mana": 240,
		"PhysicalProtection": 18.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/awilix.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "30/35/40/45/50",
					"description":
						"Awilix mounts her Panther Suku, gaining movement speed but decreasing strafe speed. Awilix may leap off of Suku to deal damage to all enemies in the target area.\n\nCanceling this ability before leaping will not trigger its Cooldown.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/135/190/245/300 (+80% of your Physical Power)",
						},
						{ "description": "Movement Speed:", "value": "30%" },
						{ "description": "Strafe cap:", "value": "275" },
					],
				},
			},
			"Id": 10835,
			"Summary": "Summon Suku",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/summon-suku.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "8s",
					"cost": "60/65/70/75/80",
					"description":
						"Awilix flips over the last enemy she hit within 1.5s, Rooting, Crippling, and dealing damage as she passes over them. The damage dealt is modified based on the next attack in Awilix's Basic Attack progression.\n\nIf the next attack is her third attack, then she also hits all targets in the area around her.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "30/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/170/240/310/380 (+100% of your Physical Power)",
						},
						{
							"description": "Attack Progression Bonus:",
							"value": "1x/ 1.5x/ 2x",
						},
						{ "description": "Root and Cripple Duration:", "value": "0.6s" },
					],
				},
			},
			"Id": 10828,
			"Summary": "Feather Step",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/feather-step.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Suku comes to Awilix's aid, rushing forward and damaging all enemies. If hit from the side or behind, enemies are also knocked up into the air.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Knockup, Damage",
						},
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/140/190/240/290 (+80% of your Physical Power)",
						},
					],
				},
			},
			"Id": 10922,
			"Summary": "Moonlight Charge",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/moonlight-charge.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "80/75/70/65/60s",
					"cost": "100",
					"description":
						"Awilix calls upon the power of the moon, immediately pulling to her the closest enemy god she is facing that is either leaping or knocked up into the air. The target god takes damage and is Stunned for 0.8s when they land.\n\nAwilix is then bathed in moonlight, gaining bonus Attack Speed and Physical Power, along with protection against Roots, Slows, and Knockbacks for 6s.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Target, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "75" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "200/250/300/350/400 (80% of your Physical Power)",
						},
						{ "description": "Attack Speed:", "value": "50/55/60/65/70%" },
						{ "description": "Physical Power:", "value": "20/30/40/50/60" },
					],
				},
			},
			"Id": 10818,
			"Summary": "Gravity Surge",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/gravity-surge.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 2.16, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.019,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Baba Yaga",
		"HealthPerLevel": 77,
		"ManaPerLevel": 50,
		"Health": 560,
		"Mana": 280,
		"PhysicalProtection": 15.4,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.9,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/baba-yaga.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "70/75/80/85/90",
					"description":
						"Baba Yaga throws forward magic imbued with chaotic qualities. The magic will travel in the path of a random shape (Left Corner, Right Corner, Split, or Oval) and leave behind a random magical field on the ground it flew over for 4s. The fields can boost friendly Protections, boost friendly Movement Speed, lower enemy Movement Speed, or Silence enemies.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Area, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "60,60,90,60" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/150/200/250/300 (+70% of your Magical Power)",
						},
						{ "description": "Protections:", "value": "15/20/25/30/35 for 1s" },
						{
							"description": "Movement Speed:",
							"value": "20/22.5/25/27.5/30% for 1s",
						},
						{ "description": "Slow:", "value": "20/22.5/25/27.5/30% for 1s" },
					],
				},
			},
			"Id": 18293,
			"Summary": "Wild Witchcraft",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/wild-witchcraft.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "60",
					"description":
						"Baba Yaga throws together random ingredients to brew a Potion. Each Eye of Newt increases the Potion's Damage by 7.5%. Each Dragon Scale adds a 12.5% slow to enemies hit for 2.5s. Each Wolf Tooth adds a 7.5% Attack Speed slow and Power reduction to enemies hit for 5s. Baba Yaga can store a single Potion in her consumable slot refiring/canceling this ability. She can pull it out at any time to throw it.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "60/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "85/120/155/190/225 (+70% of your Magical Power)",
						},
						{ "description": "Ingredient Count:", "value": "3/3/4/4/5" },
					],
				},
			},
			"Id": 18295,
			"Summary": "Baba's Brew",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/babas-brew.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Baba Yaga crawls inside her Mortar for protection. While inside the mortar she gains Damage Mitigation, Knockup Protection, and begins to build up explosive magic. After 1s the magic explodes, launching Baba Yaga and her Mortar in the direction she is facing. Enemies near the Mortar when it explodes take damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "40/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/125/170/215/260 (+85% of your Magical Power)",
						},
						{
							"description": "Damage Mitigation:",
							"value": "25/27.5/30/32.5/35%",
						},
					],
				},
			},
			"Id": 18296,
			"Summary": "Blast Off!",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/blast-off.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "60/65/70/75/80",
					"description":
						"Baba Yaga calls down her Cabin, causing it to crash onto her and launch nearby enemies away. Baba Yaga commands the cabin for up to 8s, using it as a protective shield to create and throw 4 Witchfire Bolts from the inside. When the thrown Witchfire lands, it explodes dealing damage to enemies in the area while leaving behind a creeping patch of fire that chases nearby enemies. Enemies caught in the creeping fire take burn damage every 0.4s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Radius:", "value": "15" },
					],
					"rankitems": [
						{
							"description": "Total Damage Per Shot:",
							"value": "142/202/262/322/382 (+90% of your Magical Power)",
						},
						{
							"description": "Burst D:",
							"value": "70/100/130/160/190 (+30% of your Magical Power)",
						},
						{
							"description": "Burn D:",
							"value": "12/17/22/27/32 (+10% of your Magical Power)",
						},
						{
							"description": "Shield Health:",
							"value": "160/215/270/325/380 (+25% of your Magical Power)",
						},
					],
				},
			},
			"Id": 18297,
			"Summary": "Home Sweet Home",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/home-sweet-home.jpg",
		},
		"Basic Damage": { "Base Damage": 33.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.95,
		"Attack Speed Per Level": 0.01,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Bacchus",
		"HealthPerLevel": 90,
		"ManaPerLevel": 40,
		"Health": 693,
		"Mana": 200,
		"PhysicalProtection": 26.6,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/bacchus.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "8s",
					"cost": "20",
					"description":
						"Bacchus takes a drink from his jug, healing him and giving him additional Buffs.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{ "description": "Drunk-O-Meter:", "value": "40%" },
						{ "description": "Protections:", "value": "0/15/20/25/30/35" },
						{ "description": "Magical Power:", "value": "0/7/14/21/28/35" },
						{ "description": "Duration:", "value": "6s" },
						{ "description": "Heal:", "value": "0/22/29/36/43/50" },
					],
				},
			},
			"Id": 8447,
			"Summary": "Chug",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/chug.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Bacchus jumps into the air and, not so gracefully, comes slamming to the ground belly first, knocking all enemies into the air and dealing damage. If he is Tipsy, all enemies are also Slowed after they land.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/130/170/210/250 (+70% of your Magical Power)",
						},
						{ "description": "Slow:", "value": "20%" },
						{ "description": "Slow Duration:", "value": "2s" },
					],
				},
			},
			"Id": 8449,
			"Summary": "Belly Flop",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/belly-flop.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Bacchus lets out an obnoxiously loud belch, doing damage every .5s for 2s and reducing enemy healing. Lane Minions take a small amount of extra damage. If he is Tipsy, enemies are Stunned for 1s. Bacchus is immune to knockback for the duration.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Stun, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Total Damage",
							"value": "120/180/240/300/360 (+60% of your Magical Power)",
						},
						{ "description": "Minion D per Tick:", "value": "3/4/5/6/7" },
						{ "description": "Stun:", "value": "1.1/1.2/1.3/1.4/1.5s" },
						{ "description": "Healing Reduction:", "value": "40%" },
						{ "description": "Healing Reduction Duration:", "value": "5s" },
					],
				},
			},
			"Id": 8483,
			"Summary": "Belch of the Gods",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/belch-of-the-gods.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "95",
					"description":
						"Bacchus smashes his jug of wine on the ground, intoxicating all nearby enemies and doing damage. If he is Smashed, Bacchus also gains a Magical Power Buff because of his anger over his lost wine!",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Intoxicate, Damage",
						},
						{ "description": "Radius:", "value": "30" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "230/300/370/440/510 (+60% of your Magical Power)",
						},
						{ "description": "Intoxication Debuff Duration:", "value": "6s" },
						{ "description": "Magical Power Buff:", "value": "20/30/40/50/60" },
						{ "description": "Buff Duration:", "value": "5s" },
					],
				},
			},
			"Id": 8491,
			"Summary": "Intoxicate",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/intoxicate.jpg",
		},
		"Basic Damage": { "Base Damage": 37.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.88,
		"Attack Speed Per Level": 0.009,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Bakasura",
		"HealthPerLevel": 82,
		"ManaPerLevel": 39,
		"Health": 637,
		"Mana": 200,
		"PhysicalProtection": 18.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/bakasura.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Bakasura leaps to his ground target location, dealing damage to all enemies in the area, increases the damage they take from all sources by 10% and lowers their healing received for 3s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/160/220/280/340 (+60% of your Physical Power)",
						},
						{ "description": "Damage Taken Increase:", "value": "10%" },
						{ "description": "Healing Reduction:", "value": "40%" },
						{ "description": "Duration:", "value": "3s" },
					],
				},
			},
			"Id": 8178,
			"Summary": "Take Down",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/take-down.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "10/9.5/9/8.5/8s",
					"cost": "40",
					"description":
						"Bakasura grabs a minion and devours it, healing himself, restoring Mana, reducing His 1st and 3rd ability cooldowns, and gaining a Protections Buff. Large Jungle monsters must be at 33% Health to be eaten, but will provide 2 minions toward Regurgitate. Up to 6 minions can be stored for Regurgitate.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Target, Buff" },
						{ "description": "Range:", "value": "12" },
					],
					"rankitems": [
						{ "description": "Heal:", "value": "60/115/170/225/280" },
						{ "description": "Mana Restore:", "value": "60/65/70/75/80" },
						{ "description": "Cooldown Decrease:", "value": "1.5s" },
						{ "description": "Protections:", "value": "10/15/20/25/30" },
						{ "description": "Protections Duration:", "value": "10s" },
					],
				},
			},
			"Id": 8180,
			"Summary": "Eat Minion",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/eat-minion.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Bakasura passively gains Physical Power. When activated, he gains additional true damage on each strike for the duration.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{
							"description": "Passive Physical Power:",
							"value": "5/10/15/20/25",
						},
						{
							"description": "True Damage:",
							"value": "10/25/40/55/70 (+0% of your Physical Power)",
						},
						{ "description": "Duration:", "value": "6s" },
					],
				},
			},
			"Id": 8184,
			"Summary": "Butcher Blades",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/butcher-blades.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90/85/80/75/70s",
					"cost": "80/90/100/110/120",
					"description":
						"Bakasura regurgitates all of the minions consumed by his Eat Minion ability at his ground target location that Slows for 3s and Cripples enemy players. This area lasts for 6s. Bakasura's Basic Attacks become cone attacks and he is immune to Crowd Control for a short duration. Bakasura is able to use Eat Minion on his regurgitated minions.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Range/Radius:", "value": "70/25" },
					],
					"rankitems": [
						{ "description": "Slow:", "value": "30/32.5/35/37.5/40%" },
						{ "description": "Slow Duration:", "value": "3s" },
						{ "description": "Cone Attack Duration:", "value": "6s" },
						{ "description": "CC Immunity Duration:", "value": "1.5s" },
						{
							"description": "Minion Damage:",
							"value": "17 (+15% of your Physical Power)",
						},
					],
				},
			},
			"Id": 8190,
			"Summary": "Regurgitate",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/regurgitate.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 2.2, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.016,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Bake Kujira",
		"HealthPerLevel": 105,
		"ManaPerLevel": 38,
		"Health": 700,
		"Mana": 200,
		"PhysicalProtection": 30,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.6,
		"MagicProtectionPerLevel": 1.6,
		"God Icon":
			"https://webcdn.hirezstudios.com/smite/god-icons/bake-kujira.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Bake Kujira imbues himself with cursed energy. When activated, Bake Kujira gains increased Basic Attack range and reduced Movement Penalty when Basic Attacking. He also gains a stack of Protections for each enemy hit with his Basic Attacks.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{ "description": "Basic Attack Radius:", "value": "20" },
						{ "description": "Protections per stack", "value": "2/3/4/5/6" },
						{ "description": "Max Stacks", "value": "6/7/8/9/10" },
						{ "description": "Movement Penalty Reduction:", "value": "50%" },
						{ "description": "Duration:", "value": "5s" },
					],
				},
			},
			"Id": 25104,
			"Summary": "Rough Waters",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/rough-waters.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "40/45/50/55/60",
					"description":
						"Bake Kujira sends out a wave of cursed energy. Enemies hit are slowed, damaged, and Cursed. Enemies that are Cursed deal reduced damage for 6s. If a Cursed enemy is hit by this ability, the slow is doubled and their Curse becomes amplified. Bake Kujira's Basic Attacks reduce this ability's Cooldown by 1s when hitting an enemy god and 0.1s when hitting an enemy minion.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Damage" },
						{ "description": "Range:", "value": "40" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/125/170/215/260 (+30% of your Magical Power)",
						},
						{
							"description": "Curse Damage Reduction:",
							"value": "6/7/8/9/10%",
						},
						{
							"description": "Amplified Curse Damage Reduction:",
							"value": "12/14/16/18/20%",
						},
						{ "description": "Slow:", "value": "15% for 2s" },
					],
				},
			},
			"Id": 25105,
			"Summary": "Sonic Wave",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/sonic-wave.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "50/55/60/65/70",
					"description":
						"Bake Kujira gathers power then dashes straight ahead, damaging enemies around him. Enemies hit by the dash take additional damage and are stunned and pushed to Bake Kujira's ending location. Bake Kujira is immune to Knockback while using this ability.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Dash, Damage" },
						{ "description": "Range:", "value": "40" },
					],
					"rankitems": [
						{
							"description": "Splash Damage:",
							"value": "55/85/115/145/175 (+20% of your Magical Power)",
						},
						{
							"description": "Dash Damage:",
							"value": "80/120/160/200/240 (+30% of your Magical Power)",
						},
						{ "description": "Stun:", "value": "0.5/0.75/1.0/1.25/1.5s" },
					],
				},
			},
			"Id": 25106,
			"Summary": "Twisting Dive",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/twisting-dive.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "110/105/100/95/90s",
					"cost": "100",
					"description":
						"Bake Kujira begins to sing for the next 5s, gaining bonus Basic Attack Damage, increasing his Basic Attack range to 20, and distorting a large area around himself with the sound waves. Enemies between 20 and 50 units away gain stacks of time dilation every 0.25s, causing all of their actions to happen more slowly. Leaving the time dilation area will cause the stacks of time dilation to decay over time. Enemies within 20 units are not time dilated, but instead take increased damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff" },
						{ "description": "Inner/Outer Radius:", "value": "20/50" },
					],
					"rankitems": [
						{ "description": "Enemy Debuff:", "value": "10% slower per stack" },
						{ "description": "Max Stacks:", "value": "4" },
						{
							"description": "Bonus Basic Attack Damage:",
							"value": "20/30/40/50/60%",
						},
						{
							"description": "Nearby Enemy Damage Increase:",
							"value": "5/7.5/10/12.5/15%",
						},
					],
				},
			},
			"Id": 25107,
			"Summary": "Yokai's Lament",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/yokais-lament.jpg",
		},
		"Basic Damage": { "Base Damage": 24.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 1.25,
		"Attack Speed Per Level": 0,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Baron Samedi",
		"HealthPerLevel": 84,
		"ManaPerLevel": 44,
		"Health": 532,
		"Mana": 300,
		"PhysicalProtection": 25.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.8,
		"MagicProtectionPerLevel": 1.6,
		"God Icon":
			"https://webcdn.hirezstudios.com/smite/god-icons/baron-samedi.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "9s",
					"cost": "55/60/65/70/75",
					"description":
						"Baron Samedi animates two skulls, both which briefly warm up before firing two beams of voodoo magic that damage enemies. The beams crossover wherever Baron Samedi was aiming. Enemies hit by both beams take 15% damage on the second hit. If the enemy god hit is above 30 Hysteria, their Physical Power, Magical Power, and Attack Speed are reduced for !{rankprog:3,3.5,4,4.5,5}!s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Debuff, Damage" },
						{ "description": "Range:", "value": "60" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "104/150/196/242/288 (+81% of your Magical Power)",
						},
						{ "description": "Power Reduction:", "value": "30%" },
						{ "description": "Attack Speed Reduction:", "value": "30%" },
						{ "description": "Hysteria Per Hit:", "value": "15" },
					],
				},
			},
			"Id": 16003,
			"Summary": "Vivid Gaze",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/vivid-gaze.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "13/12.5/12/11.5/11s",
					"cost": "60",
					"description":
						"Baron Samedi guides restless spirits to the ground and buries them. After a brief delay the ground erupts, damaging enemies standing in the area. If an enemy god is hit, friendly spirits fly from the area and heal allies near the explosion or by Baron Samedi.\n\nIf the enemy god hit is above 30 Hysteria the friendly spirit applies Slow Immunity for allies, and increases their Movement Speed for 3s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Range/Radius:", "value": "55/18" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/125/180/235/290 (+70% of your Magical Power)",
						},
						{ "description": "Flat Heal:", "value": "30/55/80/105/130" },
						{ "description": "Missing Health Heal:", "value": "5%" },
						{ "description": "Movement Speed:", "value": "25%" },
						{ "description": "Hysteria Per Hit:", "value": "20" },
					],
				},
			},
			"Id": 16168,
			"Summary": "Consign Spirits",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/consign-spirits.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Baron Samedi throws his snake forward, wrapping any enemy god hit and dealing damage every .5s for 2.5s and applying a ramp to root. If a god hit is above 30 Hysteria, the snake will also lash out at nearby enemy gods who stand too close after 1s. Enemies hit by this are injected with venom that applies a ramp to root and deals the full damage over time immediately.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "60/25" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "50/90/130/170/210 (+40% of your Magical Power)",
						},
						{ "description": "Slow Duration:", "value": "1.75s" },
						{ "description": "Root Duration:", "value": "0.75s" },
						{ "description": "Hysteria Per Hit:", "value": "5" },
					],
				},
			},
			"Id": 16006,
			"Summary": "Wrap It Up",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/wrap-it-up.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "70/75/80/85/90",
					"description":
						"Baron Samedi pulls the souls of the living towards his Coffin, becoming immune to Crowd Control and taking 50% reduced damage. Enemy gods within range are caught in a Vortex, dragging them towards the Coffin and taking damage every .33s. When an enemy god reaches the Coffin their soul is ripped out, causing them to be stunned, take a large amount of damage based on their maximum health and gain max Hysteria. This ability persists for 3.5s or until an enemy god is pulled to the Coffin. If targets being pulled are above 30 Hysteria, the pull strength is increased.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Vortex, Damage" },
						{ "description": "Range:", "value": "60" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "270/410/550/690/830 (+130% of your Magical Power)",
						},
						{
							"description": "D On Hit:",
							"value": "100/170/240/310/380 (50% of your Magical Power)",
						},
						{ "description": "Max Health D:", "value": "10%" },
						{ "description": "Stun:", "value": "1.5s" },
						{ "description": "Hysteria Per Hit:", "value": "5" },
					],
				},
			},
			"Id": 16254,
			"Summary": "Life of the Party",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/life-of-the-party.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.9,
		"Attack Speed Per Level": 0.007,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Bastet",
		"HealthPerLevel": 84,
		"ManaPerLevel": 39,
		"Health": 581,
		"Mana": 230,
		"PhysicalProtection": 16.8,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/bastet.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13.5/13/12.5/12s",
					"cost": "60/65/70/75/80",
					"description":
						"Bastet pounces to her target location, damaging enemies within the radius. For 4 seconds after pouncing, you can press the button again to pounce back to your initial location. Bastet moves 25% faster while in the return pounce state.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "95/150/205/260/315 (+90% of your Physical Power)",
						},
					],
				},
			},
			"Id": 18286,
			"Summary": "Pounce",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/pounce.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "40/45/50/55/60",
					"description":
						"Bastet swipes at her enemies, causing them to Bleed for damage every 0.66 seconds for the duration.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "120/180/240/300/360 (+110% of your Physical Power)",
						},
						{ "description": "Duration:", "value": "2s" },
					],
				},
			},
			"Id": 18258,
			"Summary": "Razor Whip",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/razor-whip.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Bastet sends a cat forward at her enemies. If a cat finds an enemy it ensnares them, damaging them and rooting them for .5s. The cat persists for 4s or until defeated, continuing to attack nearby enemies. The cats attacks will apply a 2s slow to the enemy.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Root, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Root Damage:",
							"value": "60/95/130/165/200 (65% of your Physical Power)",
						},
						{
							"description": "Cat Basics:",
							"value": "20/25/30/35/40 (0% of your Basic Attack Power)",
						},
						{ "description": "Cat Hit Points:", "value": "3" },
						{
							"description": "Lane Minion Health Loss:",
							"value": "1 HP lost per 5 hits",
						},
						{ "description": "Slow:", "value": "25%" },
					],
				},
			},
			"Id": 18299,
			"Summary": "Ensnaring Claw",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/ensnaring-claw.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "110/105/100/95/90s",
					"cost": "80/85/90/95/100",
					"description":
						"Bastet becomes CC Immune and conjures a radiant projectile that travels forward in a line damaging and stunning the first enemy god hit. A Huntress of Bast appears near the hit target and a destination is marked at Bastet. The Huntress then picks up and carries the enemy hit to the marked location.\nOn successful capture, a pool of quicksand is formed under the enemy creating a Vortex which drags targets toward the center and deals damage.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "100" },
					],
					"rankitems": [
						{
							"description": "Initial Hit:",
							"value": "160/220/280/340/400 (90% of your physical power)",
						},
						{
							"description": "Total Damage:",
							"value": "280/370/460/550/640 (+180% of your Physical Power)",
						},
					],
				},
			},
			"Id": 20192,
			"Summary": "Huntress of Bast",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/huntress-of-bast.jpg",
		},
		"Basic Damage": { "Base Damage": 37.0, "Per Level": 2.21, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.02,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Bellona",
		"HealthPerLevel": 92,
		"ManaPerLevel": 35,
		"Health": 686,
		"Mana": 220,
		"PhysicalProtection": 25.2,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/bellona.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60",
					"description":
						"Bellona dashes forward and bashes with her shield, dealing damage and Slowing enemies. Bellona gains 1 Stack of block for each enemy god hit. Block absorbs all damage from a single Basic Attack and reflects a portion of the damage around her.\nBellona then makes Basic Attacks with sword and shield until she has not taken or dealt damage in the last 7s. Every 3 successful basic attacks she gains another Stack of block (max. 3). ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Slow, Damage" },
						{ "description": "Range:", "value": "45" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/130/170/210/250 (+50% of your Physical Power)",
						},
						{ "description": "Block Reflect:", "value": "30%" },
						{ "description": "Slow:", "value": "20% for 2s" },
					],
				},
			},
			"Id": 11127,
			"Summary": "Shield Bash",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/shield-bash.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13/12/11/10s",
					"cost": "60/65/70/75/80",
					"description":
						"Bellona summons a hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack.\n\nBellona now makes Basic Attacks with her hammer until she has not taken or dealt damage in the last 7s. Every hammer attack hits all enemies in melee range and only benefit from 33% of Bellona's total Lifesteal.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Damage" },
						{ "description": "Range/Radius:", "value": "25/25" },
					],
					"rankitems": [
						{
							"description": "Total Damage",
							"value": "105/195/285/375/465 (+85% of your Physical Power)",
						},
						{
							"description": "Slam D:",
							"value": "70/130/190/250/310 (+60% of your Physical Power)",
						},
						{
							"description": "Slam D Increase Per God:",
							"value": "25% per Enemy God hit",
						},
					],
				},
			},
			"Id": 11137,
			"Summary": "Bludgeon",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/bludgeon.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "18/17/16/15/14s",
					"cost": "60/65/70/75/80",
					"description":
						"Bellona summons a scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make Basic Attacks. Bellona now makes Basic Attacks with a scourge until she has not taken or dealt damage in the last 7s. Basic Attacks have extended range (+4) and every third attack heals Bellona.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Disarm, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/130/170/210/250 (+50% of your Physical Power)",
						},
						{
							"description": "Disarm Duration:",
							"value": "1.4/1.6/1.8/2/2.2s",
						},
						{ "description": "Healing:", "value": "20/24/28/32/36" },
					],
				},
			},
			"Id": 11140,
			"Summary": "Scourge",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/scourge.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "75s",
					"cost": "100",
					"description":
						"Bellona plants a Roman flag, granting Protections and increased Power to allied gods. Enemies directly under where the flag is placed take damage and are Stunned for 1.25s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Stun, Damage" },
						{ "description": "Range/Radius:", "value": "50/40" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "150/250/350/450/550 (+50% of your Physical Power)",
						},
						{ "description": "Protections:", "value": "15/20/25/30/35" },
						{ "description": "Physical Power:", "value": "20/30/40/50/60" },
						{ "description": "Magical Power:", "value": "35/45/55/65/75" },
						{ "description": "Flag Duration:", "value": "8s" },
					],
				},
			},
			"Id": 11141,
			"Summary": "Eagle's Rally",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/eagles-rally.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.0, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Cabrakan",
		"HealthPerLevel": 95,
		"ManaPerLevel": 38,
		"Health": 686,
		"Mana": 200,
		"PhysicalProtection": 28,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.6,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/cabrakan.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "16/15.5/15/14.5/14s",
					"cost": "50/55/60/65/70 ",
					"description":
						"Cabrakan becomes enraged, increasing his movement speed. While active, Cabrakan gains 70% increased Attack Speed and his next successful Basic Attack will Stun with no diminishing returns and do bonus damage. Additionally, Cabrakan gains Haste and is immune to Slows and Roots while this ability is active.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Stun, Damage" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/125/170/215/260 (+50% of your Magical Power)",
						},
						{ "description": "Stun Duration:", "value": "1s" },
						{
							"description": "Movement Speed Increase:",
							"value": "15/20/25/30/35%",
						},
					],
				},
			},
			"Id": 10453,
			"Summary": "Seismic Crush",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/seismic-crush.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "10",
					"description":
						"Passive: As Cabrakan's shields take damage they store energy and gain Protection stacks.\n\nActive: Cabrakan slams his shields together creating a concussive blast and damaging enemies in front of him, granting him Mana per enemy hit. If his shields have the maximum number of Stacks then the enemy gods hit are Stunned. Stacks are removed.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Stun, Damage" },
						{ "description": "Range:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/135/190/245/300 (+50% of your Magical Power)",
						},
						{
							"description": "Stun Duration:",
							"value": "1.1/1.2/1.3/1.4/1.5s",
						},
						{
							"description": "Protections per Stack:",
							"value": "2/3/4/5/6 Max 5 Stacks",
						},
						{ "description": "Mana:", "value": "10/14/18/22/26" },
					],
				},
			},
			"Id": 10262,
			"Summary": "Refraction Shield",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/refraction-shield.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "4s",
					"cost": "20/30/40/50/60 every 0.5s.",
					"description":
						"Cabrakan repeatedly slams the ground with his shields creating an earthquake and causing enemy gods around him to Tremble. Enemies in the earthquake also take damage and are caught in a Vortex which drags them towards Cabrakan. This ability can only be channeled for a maximum amount of 10s.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Tremble, Damage",
						},
						{ "description": "Radius:", "value": "30" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "378/588/798/1008/1218 (+735% of your Magical Power)",
						},
					],
				},
			},
			"Id": 10271,
			"Summary": "Tremors",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/tremors.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "75s",
					"cost": "100 ",
					"description":
						"Cabrakan stomps the ground creating a wall of earth and a fissure that travels out in front of him and damages any enemies caught in its path. The walls may be destroyed if they take enough hits. Cabrakan may destroy his own walls with a single Basic Attack.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Wall, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "150/250/350/450/550 (+60% of your Magical Power)",
						},
						{ "description": "Hits to destroy:", "value": "3 hits " },
					],
				},
			},
			"Id": 10387,
			"Summary": "Tectonic Shift",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/tectonic-shift.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.9,
		"Attack Speed Per Level": 0.011,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Camazotz",
		"HealthPerLevel": 82,
		"ManaPerLevel": 35,
		"Health": 616,
		"Mana": 240,
		"PhysicalProtection": 15.4,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/camazotz.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "50/55/60/65/70",
					"description":
						"Camazotz screeches loudly and launches a sound wave that pierces through minions and deals damage.\n\nIf the screech hits an enemy god, the sound wave will echo. If Camazotz is hit by an echo, his team gains vision of the god that was hit by screech for the next 15s and he gains bonus Physical Power for the duration.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Buff, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/145/190/235/280 (+85% of your Physical Power)",
						},
						{
							"description": "Echo Buff:",
							"value": "15/20/25/30/35 Physical Power ",
						},
					],
				},
			},
			"Id": 13391,
			"Summary": "Screech",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/screech.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "60/65/70/75/80",
					"description":
						"Camazotz commands a swarm of bats to fly out and attack a single target, damaging, slowing them by 40%, lowering their healing received for 3s and then carrying back a heal.\n\nIf the target was a Buff Holder, Oracle, or Alpha Harpy, they will be marked and Camazotz will receive a heal as well as a stackable Vampirism buff that lasts 300s. Marked monsters will not provide Camazotz with another stack of Vampirism or an additional heal.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Slow, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "100/170/240/310/380 (110% of your Physical Power)",
						},
						{ "description": "Heal:", "value": "20/40/60/80/100" },
						{ "description": "Healing Reduction:", "value": "40%" },
						{
							"description": "Buff per Stack:",
							"value": "2% Physical Lifesteal and Increased Healing",
						},
						{ "description": "Max Buff Stacks:", "value": "3" },
					],
				},
			},
			"Id": 13560,
			"Summary": "Vampire Bats",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/vampire-bats.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "60/65/70/75/80",
					"description":
						"Camazotz Leaps forward a short distance dealing damage on impact and healing himself per enemy hit. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "40/10" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/140/200/260/320 (75% of your Physical Power)",
						},
						{ "description": "Heal Per Hit:", "value": "10/20/30/40/50" },
					],
				},
			},
			"Id": 13562,
			"Summary": "Devour",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/devour.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "120/115/110/105/100s",
					"cost": "100 ",
					"description":
						"Camazotz flies into the air for the next 4s. While flying, he may swoop forward to deal damage. He may do this up to 3 times, landing on the 3rd time. Hitting more than one enemy god in a single swoop will deal increased damage per god.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "300/405/510/615/720 (+105% of your Physical Power)",
						},
						{ "description": "Bonus D:", "value": "10% Per God" },
					],
				},
			},
			"Id": 13509,
			"Summary": "Bat Out of Hell",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/bat-out-of-hell.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.3, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.02,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Cerberus",
		"HealthPerLevel": 100,
		"ManaPerLevel": 35,
		"Health": 686,
		"Mana": 200,
		"PhysicalProtection": 26.6,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/cerberus.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "13/12.5/12/11.5/11s",
					"cost": "60/65/70/75/80",
					"description":
						"Cerberus's snake tail spits venom that passes through and damages Enemies. If Cerberus's dog heads are Alert, they then also spit venom when the ability is fired. Each head is alerted upon hitting an Enemy with a Basic Attack, and all are alerted after Ghastly Breath. Each projectile that hits the same target deals 20% less damage, but hitting an Enemy with all 4 Stuns them.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Stun, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "140/224/308/392/476 (+56% of your Magical Power)",
						},
						{
							"description": "Stun Duration:",
							"value": "1.4/1.5/1.6/1.7/1.8s",
						},
					],
				},
			},
			"Id": 15343,
			"Summary": "Paralyzing Spit",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/paralyzing-spit.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Each of Cerberus's 3 heads releases a cone of noxious breath in front of them, damaging all Enemies in range 7 times over 2.4s and reducing their Magical Protection up to three times. Enemies in the center of his breath are also Slowed up to three times. This attack immediately puts all three of Cerberus's heads on Alert for Paralyzing Spit.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Debuff, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "140/210/280/350/420 (+87.5% of your Magical Power)",
						},
						{ "description": "Slow per Tick:", "value": "8/9/10/11/12%" },
						{ "description": "Protection Reduction:", "value": "5/8/11/14/17" },
						{ "description": "Slow Duration:", "value": "2s" },
						{ "description": "Max Stacks:", "value": "3" },
					],
				},
			},
			"Id": 15647,
			"Summary": "Ghastly Breath",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/ghastly-breath.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "55",
					"description":
						"Cerberus leaps a short distance forward, dealing damage on impact and severing the souls of Enemies. These souls will not block Cerberus's attacks, and killing the souls heals Cerberus.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/120/160/200/240 (60% of your Magical Power)",
						},
						{ "description": "Soul Health:", "value": "50/75/100/125/150" },
						{ "description": "Heal per Minion:", "value": "12/19/26/33/40" },
						{ "description": "Heal per God:", "value": "20/40/60/80/100" },
					],
				},
			},
			"Id": 15345,
			"Summary": "Soul Expulsion",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/soul-expulsion.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "90/95/100/105/110",
					"description":
						"Cerberus's haunting wail summons below him the souls of the damned, which then knockup all Enemy Gods into the air while stretching the link between their bodies and souls, Damaging them. This knockup can be cleansed. A short time later, Cerberus uses this link to pull the Enemies to him. This attack immediately puts all three of Cerberus's heads on Alert for Paralyzing Spit.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Crowd Control, Damage",
						},
						{ "description": "Radius:", "value": "30" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "180/255/330/405/480 (+55% of your Magical Power)",
						},
					],
				},
			},
			"Id": 15518,
			"Summary": "Stygian Torment",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/stygian-torment.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.01,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Cernunnos",
		"HealthPerLevel": 84,
		"ManaPerLevel": 37,
		"Health": 672,
		"Mana": 220,
		"PhysicalProtection": 18.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/cernunnos.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "0s",
					"cost": "None",
					"description":
						"Cernnunos imbues his glaive with the power of the 4 seasons. Activating this ability rotates him through 4 different bonuses to his basic attacks.\n\nSpring Growth: Bonus Physical Lifesteal\nSummer Heat: Bonus Damage\nAutumn Decay: Physical Protections debuff for 10s\nWinter Chill: Slows for 1.4s",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{
							"description": "Spring Growth:",
							"value": "6/8.25/10.5/12.75/15% Physical Lifesteal",
						},
						{
							"description": "Summer Heat:",
							"value": "5/10/15/20/25(+8% of your Physical Power)",
						},
						{
							"description": "Autumn Decay:",
							"value": "5/10/15/20/25 Reduced Protections",
						},
						{
							"description": "Winter Chill:",
							"value": "9/10.5/12/13.5/15% Slow",
						},
					],
				},
			},
			"Id": 14244,
			"Summary": "Shifter of Seasons",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/shifter-of-seasons.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "60/65/70/75/80",
					"description":
						"Cernunnos fires a bramble forward in a line that roots and cripples a single enemy hit. Upon hitting an enemy, wall, or reaching max range it will explode dealing damage and spawning an area of brambles at the location. This area deals damage every .5s and persists for 5s.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "135/210/285/360/435 (+125% of your physical power)",
						},
						{ "description": "Root/Cripple Duration:", "value": "1s" },
						{
							"description": "Area Tick:",
							"value": "8/12/16/20/24 (+5% of your Physical Power)",
						},
					],
				},
			},
			"Id": 14241,
			"Summary": "Bramble Blast",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/bramble-blast.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "17/16/15/14/13s",
					"cost": "70/75/80/85/90",
					"description":
						"Cernunnos charges forward, damaging and crashing through all types of enemies.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/125/180/235/290 (+80% of your Physical Power)",
						},
					],
				},
			},
			"Id": 14245,
			"Summary": "Horn Charge",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/horn-charge.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Cernunnos selects an area where The Wild Hunt will begin. After a 1s delay, enemies in the area will be damaged and gods will be Polymorphed into wild boars. Polymorphed gods are silenced, disarmed and slowed. Polymorph is not affected by diminishing returns.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Polymorph, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/25" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "200/250/300/350/400 (90% of your Physical Power)",
						},
						{ "description": "Polymorph Duration:", "value": "1.5s" },
						{ "description": "Slow:", "value": "20%" },
					],
				},
			},
			"Id": 14246,
			"Summary": "The Wild Hunt",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/the-wild-hunt.jpg",
		},
		"Basic Damage": { "Base Damage": 37.0, "Per Level": 2.5, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.014,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Chaac",
		"HealthPerLevel": 92,
		"ManaPerLevel": 35,
		"Health": 686,
		"Mana": 205,
		"PhysicalProtection": 25.2,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/chaac.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "50/55/60/65/70",
					"description":
						"Chaac throws his axe forward, damaging all enemies in a radius around its landing location. The axe remains idle in the ground for 5s or until another ability is used.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Damage" },
						{ "description": "Range/Radius:", "value": "60/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/150/210/270/330 (+75% of your Physical Power)",
						},
					],
				},
			},
			"Id": 9541,
			"Summary": "Thunder Strike",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/thunder-strike.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "13/12/11/10/9s",
					"cost": "60/65/70/75/80",
					"description":
						"Chaac spins his axe around him, damaging all enemies, and gaining Protections for each enemy hit (max. 4). Gods hits provide 2 stacks.\n\nIf his axe is out from Thunder Strike, he will first dash to the axe location, doing 50% base damage to enemies he passes through and then executing his spin attack. This dash can go through walls.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Teleport, Damage",
						},
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/160/220/280/340 (+70% of your Physical Power)",
						},
						{ "description": "Protections:", "value": "5/10/15/20/25" },
						{ "description": "Protection Duration:", "value": "6s" },
					],
				},
			},
			"Id": 11801,
			"Summary": "Torrent",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/torrent.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "75/80/85/90/95",
					"description":
						"Chaac summons a rainstorm around his current location for 6s. While it rains, he regains Health, and enemies are caught in the mud and have their Movement Speed, Attack Speed, and Power reduced.\n\nIf his axe is out from Thunder Strike, a rainstorm will also spawn at that location. Enemies caught in the area of both rainstorms will have the Movement Slow and Attack Speed Reduction applied twice.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Slow" },
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{ "description": "Slow:", "value": "20/25/30/35/40%" },
						{
							"description": "Attack Speed Reduction:",
							"value": "15/17.5/20/22.5/25%",
						},
						{ "description": "Power Reduction:", "value": "10%" },
						{ "description": "Healing:", "value": "8/13/18/23/28 every 0.5s" },
					],
				},
			},
			"Id": 9502,
			"Summary": "Rain Dance",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/rain-dance.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80/90/100/110/120",
					"description":
						"Chaac charges up his lightning axe for a short duration then unleashes a blast, Silencing, Knocking Up and damaging all enemies around him. While charging up, Chaac has Damage Mitigation and is immune to Crowd Control effects.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Crowd Control, Damage",
						},
						{ "description": "Radius:", "value": "25" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "300/350/400/450/500 (120% of your Physical Power)",
						},
						{ "description": "Silence Duration:", "value": "3s" },
						{ "description": "Mitigation:", "value": "50/55/60/65/70%" },
					],
				},
			},
			"Id": 9558,
			"Summary": "Storm Call",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/storm-call.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.1, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Chang'e",
		"HealthPerLevel": 88,
		"ManaPerLevel": 48,
		"Health": 650,
		"Mana": 310,
		"PhysicalProtection": 15.4,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.9,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/change.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "6s",
					"cost": "60/65/70/75/80",
					"description":
						"Chang'e flings a crescent moon in an arc, dealing damage to all enemies in its path.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/120/160/200/240 (+60% of your Magical Power)",
						},
					],
				},
			},
			"Id": 11776,
			"Summary": "Crescent Moon Dance",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/crescent-moon-dance.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "20/18.5/17/15.5/14s",
					"cost": "60",
					"description":
						"Chang'e performs an evasive spin dance. She is immune to damage and Crowd Control during the action. For each tick of damage from an ability or Basic Attack that was avoided, Chang'e restores Mana to herself and her allies.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff" },
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Mana Restored:",
							"value": "20/30/40/50/60 per tick avoided",
						},
					],
				},
			},
			"Id": 8965,
			"Summary": "Moonlit Waltz",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/moonlit-waltz.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Chang'e twirls, scattering flowers around her, and healing herself and all nearby allies and damaging nearby enemies.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Heal, Damage" },
						{ "description": "Radius:", "value": "30" },
					],
					"rankitems": [
						{ "description": "Heal:", "value": "40/80/120/160/200" },
						{
							"description": "Damage:",
							"value": "85/110/135/160/185 (+60% of your Magical Power)",
						},
					],
				},
			},
			"Id": 16101,
			"Summary": "Moonflower Dance",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/moonflower-dance.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80/90/100/110/120",
					"description":
						"Chang'e's Waxing Moon dance is captivating, with this dance dealing damage and Stunning enemy gods in front of her. Each subsequent god that gets Stunned is Stunned for longer than the previous one.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Stun, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "160/225/290/355/420 (+70% of your Magical Power)",
						},
						{
							"description": "Stun:",
							"value": "1s + 1s for each god already Stunned",
						},
					],
				},
			},
			"Id": 8966,
			"Summary": "Waxing Moon",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/waxing-moon.jpg",
		},
		"Basic Damage": { "Base Damage": 32.0, "Per Level": 1.45, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.01,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Charon",
		"HealthPerLevel": 93,
		"ManaPerLevel": 38,
		"Health": 686,
		"Mana": 210,
		"PhysicalProtection": 26.6,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/charon.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "60/65/70/75/80",
					"description":
						"Charon plucks a soul out of the Styx, firing it as a line projectile that damages and Slows all enemies while stopping on the first god hit. If the soul hits an enemy god, it then explodes in a damaging and Silencing area around the target. All enemy gods hit by the explosion leave behind a damaging trail of the Styx for the next 3s. ",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "60/15" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "152/194/236/278/320 (+85% of your Magical Power)",
						},
						{
							"description": "Trail:",
							"value": "8/10/12/14/16 (+5% of your Magical Power)",
						},
						{ "description": "Soul Slow:", "value": "10/12.5/15/17.5/20%" },
						{ "description": "Silence Duration:", "value": "1s" },
					],
				},
			},
			"Id": 24455,
			"Summary": "Spectral Surge",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/spectral-surge.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13.5/13/12.5/12s",
					"cost": "60/65/70/75/80",
					"description":
						"After a short delay, Charon creates a rift to the underworld in an area, dealing damage and marking all enemy gods hit for the next 3s. The marked gods are revealed and have their Attack Speed reduced. Additionally, any time an allied god hits a marked god once per mark per ability or basic attack, that ally gains a shield for 3s. Subsequent shields only grant 25% of the original value.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Debuff, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "50/85/120/155/190 (40% of your Magical Power)",
						},
						{ "description": "Attack Speed Slow:", "value": "25%" },
						{
							"description": "Shield Health:",
							"value": "40/65/90/115/140 + 2.5% of Charon's Max Health",
						},
						{
							"description": "Shield Cap:",
							"value": "15% of Charon's Max Health",
						},
					],
				},
			},
			"Id": 24456,
			"Summary": "Damnation",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/damnation.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "17/16.5/16/15.5/15s",
					"cost": "60/65/70/75/80",
					"description":
						"Charon forcibly rows at a break-neck pace, charging forward with increased Movement Speed and reduced turn radius for 2.5s. Charon is Slow and Knockback immune while charging. Charon deals damage to and Roots enemies he collides with as well as those directly to his sides in the wake of his boat.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Root, Damage" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/130/180/230/280 (40% of your Magical Power)",
						},
						{ "description": "Direct Root:", "value": "1s" },
						{ "description": "Wake Root:", "value": "0.5s" },
						{ "description": "Movement Speed:", "value": "100%" },
					],
				},
			},
			"Id": 24457,
			"Summary": "Swift Voyage",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/swift-voyage.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "110s",
					"cost": "100",
					"description":
						"Charon gains Crowd Control immunity and summons a massive tidal wave that he sends forth across the entire battlefield. Enemy gods hit by the wave are Feared, while allied gods gain Protections for 3s. Additionally, if an allied god is within 60 units directly behind the wave, they gain Movement Speed.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Fear, Damage" },
						{ "description": "Range:", "value": "Global" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "230/300/370/440/510 (50% of your Magical Power)",
						},
						{ "description": "Fear:", "value": "0.8/0.9/1/1.1/1.2s" },
						{ "description": "Protections:", "value": "20/25/30/35/40" },
						{ "description": "Movement Speed:", "value": "40%" },
					],
				},
			},
			"Id": 24458,
			"Summary": "Summon Styx",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/summon-styx.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Charybdis",
		"HealthPerLevel": 81,
		"ManaPerLevel": 38,
		"Health": 616,
		"Mana": 220,
		"PhysicalProtection": 15.4,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/charybdis.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13/12/11/10s",
					"cost": "50/55/60/65/70",
					"description":
						"Charybdis reveals The Maw as it fires large spikes for a short duration dealing Basic Attack damage. These projectiles pass through minions and are wider and faster than normal Basic Attacks.\n\nOn hitting enemy gods and walls, the spikes splinter dealing additional damage.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Ranged Basic, Buff, Damage",
						},
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Minion Damage:",
							"value": "80/85/90/95/100% scaling",
						},
						{
							"description": "Splinter Damage:",
							"value": "20/25/30/35/40 (+25% of your physical power)",
						},
						{ "description": "Splinter Tide:", "value": "3% Tide per hit" },
						{ "description": "Duration:", "value": "4s" },
					],
				},
			},
			"Id": 20469,
			"Summary": "Spike Shot",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/spike-shot.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13.5/13/12.5/12s",
					"cost": "60/65/70/75/80",
					"description":
						"Charybdis absorbs water from around her before firing a quick blast from The Maw. Enemies are hit by a rapidly decaying Slow and Physical Protection debuff.\n\nThis ability can be channeled for longer, consuming Tide on fire, to become wider, strengthen the debuff effects and deal more damage.\n\nUp to 40% Tide consumed.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Debuff, Damage" },
						{ "description": "Range:", "value": "45" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/140/190/240/290 (+85% of your physical power)",
						},
						{ "description": "Extra Scaling:", "value": "30%" },
						{ "description": "Slow:", "value": "40% on max Tide" },
						{
							"description": "Physical Protection Reduction:",
							"value": "40% on max Tide",
						},
						{ "description": "Duration:", "value": "4s on max Tide" },
					],
				},
			},
			"Id": 20470,
			"Summary": "Capsize",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/capsize.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "17/16.5/16/15.5/15s",
					"cost": "70/75/80/85/90",
					"description":
						"Charybdis dives into a whirlpool she creates, expanding and revealing the terrifying Maw. Charybdis moves faster and deals damage to enemies caught in the area.\nThis ability can be amplified by toggling it again and spending 30% Tide. Doing so increases the damage dealt and movement speed as well as providing extra damage and a knockup on exiting.\nWhile submerged, Charybdis is untargetable and immune to damage for up to 3s.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Radius:", "value": "15" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "180/280/380/480/580 (+125% of your Physical Power)",
						},
						{
							"description": "Amplified Tick:",
							"value":
								"20/30/40/50/60 (+10% of your physical power) every 0.5s",
						},
						{
							"description": "Exit D:",
							"value": "60/100/140/180/220 (+65% of your physical power)",
						},
						{ "description": "Movement Speed:", "value": "20%" },
						{ "description": "Amplified Movement Speed:", "value": "40%" },
					],
				},
			},
			"Id": 20471,
			"Summary": "Whirlpool Form",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/whirlpool-form.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Charybdis reveals her true nature, becoming immune to Crowd Control for the next 6s, and gaining movement speed. She may make one powerful attack as The Maw charges forward, damaging and carrying back enemies hit before chomping down, damaging again and stunning.\n\nIf she kills an enemy god with the attack, she gains another 6s and may attack again.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Area, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Charge Damage:",
							"value": "60/90/120/150/180 (+20% of your physical power)",
						},
						{
							"description": "Bite Damage:",
							"value": "300/400/500/600/700 (150% of your physical power)",
						},
						{ "description": "Movement Speed:", "value": "35%" },
						{ "description": "Stun Duration:", "value": "1.3s" },
					],
				},
			},
			"Id": 20472,
			"Summary": "The Maw Hungers",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/the-maw-hungers.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 2.6, "Scaling": 1.0 },
		"Attack Speed": 0.95,
		"Attack Speed Per Level": 0.015,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Chernobog",
		"HealthPerLevel": 84,
		"ManaPerLevel": 38,
		"Health": 630,
		"Mana": 220,
		"PhysicalProtection": 15.4,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/chernobog.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "15/14.5/14/13.5/13s",
					"cost": "50/55/60/65/70",
					"description":
						"Chernobog conjures a large crystal of curses and hurls it at the target location dealing damage and Slowing enemies on landing. After several seconds the crystalline curses explode dealing damage again and Rooting any enemy in the area. The crystal can be detonated early by firing at it with Vicious Barrage. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Root, Damage" },
						{ "description": "Range/Radius:", "value": "60/20" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "110/165/220/275/330 (+150% of your Physical Power)",
						},
						{
							"description": "Detonation:",
							"value": "40/70/100/130/160 (+70% of your physical power)",
						},
						{ "description": "Slow:", "value": "20% for 2s" },
						{ "description": "Root:", "value": "1s" },
						{ "description": "Detonation Duration:", "value": "3s" },
					],
				},
			},
			"Id": 15877,
			"Summary": "Crystallized Curses",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/crystallized-curses.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "8s",
					"cost": "30/35/40/45/50",
					"description":
						"Chernobog fires an enlarged crystal shard that can pierce enemies and deals damage like a Basic Attack. This applies a single stack of Heart of Cold to all enemies it passes through and instantly detonates Crystallized Curses. After firing, Chernobog gains increased Attack Speed for several seconds.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Buff, Damage" },
						{ "description": "Range:", "value": "65" },
					],
					"rankitems": [
						{ "description": "Attack Speed:", "value": "30/35/40/45/50%" },
						{ "description": "Duration:", "value": "4s" },
					],
				},
			},
			"Id": 15860,
			"Summary": "Vicious Barrage",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/vicious-barrage.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16/15.5/15/14.5/14s",
					"cost": "50",
					"description":
						"Chernobog dashes forward, dealing damage to any enemy he collides with. If Chernobog comes in contact with a wall, he briefly enters it as a shadow, becoming untargetable and immune to damage for up to 3s. Chernobog can leave the wall early by dashing or just stepping out of the wall. If he remains for the full duration, Chernobog will automatically dash out as his time expires.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Damage" },
						{ "description": "Range:", "value": "40" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value":
								"150/180/210/240/270 (+90% of your Physical Power) damage.",
						},
					],
				},
			},
			"Id": 15870,
			"Summary": "Into Darkness",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/into-darkness.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "120s",
					"cost": "80/90/100/110/120",
					"description":
						"During a brief channeling period, Chernobog summons shadows at the location of all enemies that last for 8s and apply a short stacking Slow. Chernobog can select any of his shadow clones to fly towards. Once he reaches the location he takes the place of his shadow, refreshing his cooldowns, as well as temporarily obtaining damage mitigations and extra movement speed.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Teleport, Debuff" },
					],
					"rankitems": [
						{ "description": "Buff Duration:", "value": "6s" },
						{
							"description": "Damage Mitigation:",
							"value": "5/7.5/10/12.5/15%",
						},
						{ "description": "Movement Speed:", "value": "15%" },
						{ "description": "Shadow Slow:", "value": "3% Stacking 3 times" },
						{
							"description": "Shadow Clone Speed:",
							"value": "365/380/395/410/425",
						},
					],
				},
			},
			"Id": 15909,
			"Summary": "Living Nightmare",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/living-nightmare.jpg",
		},
		"Basic Damage": { "Base Damage": 36.0, "Per Level": 2.6, "Scaling": 1.0 },
		"Attack Speed": 0.95,
		"Attack Speed Per Level": 0.016,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Chiron",
		"HealthPerLevel": 79,
		"ManaPerLevel": 40,
		"Health": 644,
		"Mana": 225,
		"PhysicalProtection": 16.8,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/chiron.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "55/60/65/70/75",
					"description":
						"Chiron warns his teammates to evade the area, granting them .5s of Crowd Control Immunity so they can escape before it explodes and does damage to all enemies in the area. Applies Target Mark",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Range/Radius:", "value": "55/17.5" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/150/200/250/300 (+80% of your Physical Power)",
						},
					],
				},
			},
			"Id": 11944,
			"Summary": "Training Exercise",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/training-exercise.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "65",
					"description":
						"Chiron passively marks his enemies as targets when he damages them with Basic Attacks, Training Exercise, or Centaurus, reducing their Physical Protections by 5%. He may activate this ability to fire seeking arrows at all marked targets within range, damaging and slowing them.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Target, Slow, Damage" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "55/90/125/160/195 (+80% of your Physical Power)",
						},
						{ "description": "Mark Duration:", "value": "3.5s" },
						{ "description": "Slow:", "value": "25/27.5/30/32.5/35%" },
						{ "description": "Slow Duration:", "value": "2s" },
					],
				},
			},
			"Id": 12020,
			"Summary": "Masterful Shot",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/masterful-shot.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "70/75/80/85/90",
					"description":
						"Chiron gallops forward damaging enemies, knocking up minions, and kicking enemy gods behind him. Chiron is immune to knockups while charging.\nChiron may fire Basic Attacks while charging.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Dash, Knockback, Damage",
						},
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/95/120/145/170 (+50% of your Physical Power)",
						},
						{ "description": "Bonus Power:", "value": "10/20/30/40/50" },
					],
				},
			},
			"Id": 11983,
			"Summary": "Giddyup!",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/giddyup.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80/90/100/110/120",
					"description":
						"Chiron is transformed into a constellation, and can fire three long-distance shots, even through walls.\nIf Chiron would be killed during this ability, he does not die until he runs out of time or shots. Killing an enemy with this ability when Chiron would have died returns him to life with health equal to the damage dealt instead.\n Applies target mark.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "130" },
					],
					"rankitems": [
						{
							"description": "Total Damage",
							"value": "390/525/660/795/930 (+180% of your Physical Power)",
						},
					],
				},
			},
			"Id": 11990,
			"Summary": "Centaurus",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/centaurus.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 2.35, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.014,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Chronos",
		"HealthPerLevel": 79,
		"ManaPerLevel": 42,
		"Health": 560,
		"Mana": 240,
		"PhysicalProtection": 15.4,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/chronos.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "5s",
					"cost": "50/55/60/65/70",
					"description":
						"Chronos creates a rift in time, damaging all enemies in the area.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Damage" },
						{ "description": "Range/Radius:", "value": "55/10" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/125/170/215/260 (+80% of your Magical Power)",
						},
					],
				},
			},
			"Id": 8995,
			"Summary": "Time Rift",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/time-rift.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Chronos accelerates himself over time, allowing him to move faster initially and gain speed over time. While active, his Attack Speed is increased. This ability also stops the Wheel of Time.\n\nSection I: Heal 1% Max Health Per Second.\nSection II: 100% Mana Refund On Abilities.\nSection III: +35% Magical Power.\nSection IV: +35% Magical Power Contribution to Basic Attacks.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{
							"description": "Movement Speed:",
							"value": "20% initial + 12/14/16/18/20% over time",
						},
						{ "description": "Attack Speed:", "value": "25/27.5/30/32.5/35%" },
						{ "description": "Lifetime:", "value": "7s" },
					],
				},
			},
			"Id": 8973,
			"Summary": "Accelerate",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/accelerate.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "18/17/16/15/14s",
					"cost": "65/70/75/80/85",
					"description":
						"Shooting forward spinning gears of time, any enemies hit by Chronos' attack have their Attack Speed reduced and Ramp to a Stun, taking damage on the initial hit and again when they are stunned.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "100/150/200/250/300 (+90% of your Magical Powe",
						},
						{ "description": "Stun:", "value": "1s" },
					],
				},
			},
			"Id": 8955,
			"Summary": "Stop Time",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/stop-time.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "100/95/90/85/80s",
					"cost": "100",
					"description":
						"Chronos travels through time to where he was 8 seconds ago, gaining Health and Mana back to the values of that time. All of his Cooldowns are instantly reset as well.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [],
				},
			},
			"Id": 8980,
			"Summary": "Rewind",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/rewind.jpg",
		},
		"Basic Damage": { "Base Damage": 40.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 1.05,
		"Attack Speed Per Level": 0.016,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Cliodhna",
		"HealthPerLevel": 81,
		"ManaPerLevel": 40,
		"Health": 665,
		"Mana": 225,
		"PhysicalProtection": 16.8,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.3,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/cliodhna.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12",
					"cost": "50/55/60/65/70",
					"description":
						"Cliodhna wails at enemies before her, causing damage 3 times, with the final hit being the strongest. The final hit will also cause enemies to be silenced and deafened for 1.5s. While channeling this scream Cliodhna is immune to knockups. While inside a wall Cliodhna will cause a spectral face to appear and wail in her stead that damages only enemy gods in a wider cone. ",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Cone, Silence, Damage",
						},
						{ "description": "Range:", "value": "30" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "120/190/260/330/400 (+150% of your Physical Power)",
						},
						{
							"description": "Final Hit D:",
							"value": "60/100/140/180/220 (60% of your Physical Power)",
						},
					],
				},
			},
			"Id": 20672,
			"Summary": "Banshee's Wail",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/banshees-wail.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14",
					"cost": "40/50/60/70/80",
					"description":
						"Cliodhna fires a distorting bolt of energy that explodes on contact with a living soul. Enemy gods hit by this explosion lose the ability to perceive Cliodhna for 4s. If Cliodhna attacks or is hit she flickers back into vision before fading back out. As long as one enemy god is debuffed Cliodhna gains a Movement Speed Buff.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Blind, Damage" },
						{ "description": "Range/Radius:", "value": "60/15" },
					],
					"rankitems": [
						{
							"description": "Bolt Damage:",
							"value": "70/125/180/235/290 (+80% of your Physical Power)",
						},
						{ "description": "Movement Speed:", "value": "25%" },
					],
				},
			},
			"Id": 20671,
			"Summary": "Flickering Visions",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/flickering-visions.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13.5/13/12.5/12s",
					"cost": "50/55/60/65/70",
					"description":
						"Cliodhna dashes forward, damaging enemies she passes through. At max range, if she cancels this dash, or upon refiring the ability she will unleash a claw swipe that deals heavy damage. Cliodhna can cast this while inside a wall, resulting in the dash traveling further.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Damage" },
						{ "description": "Range:", "value": "75,85" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "125/200/275/350/425 (+110% of your Physical Power)",
						},
						{
							"description": "Claw D:",
							"value": "90/140/190/240/290 (+80% of your Physical Power)",
						},
					],
				},
			},
			"Id": 20670,
			"Summary": "Lurching Claw",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/lurching-claw.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "55",
					"cost": "30/35/40/45/50",
					"description":
						"Cliodhna tears the veil between life and death. When the rift first opens it deals heavy damage and then deals rift damage to targets in a line and slows them. Enemies hit by subsequent hits take 40% less damage, stacking twice up to 80%. This ability has 2 charges. Rifts can be destroyed by basic attacks. Cliodhna can use this ability while inside a wall. When used this way the veil is not fully torn, instead activating when a target gets too close. Cliodhna can have up to 3 rifts active.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Slow, Damage" },
						{ "description": "Range:", "value": "85" },
					],
					"rankitems": [
						{
							"description": "Total Damage (Opening):",
							"value": "150/225/300/375/450 (+60% of your Physical Power)",
						},
						{
							"description": "Rift D Per Tick",
							"value": "60/95/130/165/200 (+30% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "6% for 1.5s" },
						{ "description": "Slow Stacks:", "value": "6" },
					],
				},
			},
			"Id": 20673,
			"Summary": "Tearing The Veil",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/tearing-the-veil.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.25, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.022,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Cthulhu",
		"HealthPerLevel": 100,
		"ManaPerLevel": 38,
		"Health": 700,
		"Mana": 210,
		"PhysicalProtection": 29.4,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.5,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/cthulhu.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "60",
					"description":
						"Cthulhu sends out a terrifying blast of energy, dealing damage to all enemies hit and reducing their Attack Speed. Enemies hit by this ability also do reduced damage to Cthulhu for 6s.\nThis ability applies 1 stack of Torment, 2 if the enemy hit is facing Cthulhu or Fears them instead if they are afflicted with Insanity.\nSuccessfully consuming Insanity permanently increases the base mitigation of this ability.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Fear, Damage" },
						{ "description": "Range:", "value": "32" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/150/200/250/300 (+40% of your magical power)",
						},
						{
							"description": "Attack Speed Slow:",
							"value": "20/22.5/25/27.5/30% for 3s",
						},
						{ "description": "Fear Duration:", "value": "1.5s" },
						{
							"description": "Damage Mitigation:",
							"value": "20% + 0.5% (Max 30%)",
						},
					],
				},
			},
			"Id": 18493,
			"Summary": "Sanity Break",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/sanity-break.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "50/55/60/65/70",
					"description":
						"Cthulhu summons a portal creating a slowing field of eldritch mire at the target location. While Cthulhu channels, The Mire continues to grow as the portal fires out two masses of corruption that hit and damage all enemies in the field.\nThe first shot also Slows enemies while the second Roots them, both hits applying 1 stack of Torment. Cancelling the ability early stops The Mire from growing or the portal from firing additional shots.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/30" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "120/210/300/390/480 (+60% of your Magical Power)",
						},
						{ "description": "Slow:", "value": "10%" },
						{ "description": "Corruption Slow:", "value": "35%" },
						{ "description": "Corruption Slow/Root Duration:", "value": "1s" },
						{
							"description": "Mire Duration:",
							"value": "3s after ability cancel/end",
						},
					],
				},
			},
			"Id": 18494,
			"Summary": "The Mire",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/the-mire.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "60/65/70/75/80",
					"description":
						"Cthulhu creates two twisting projectiles at his sides as he unfurls his wings and charges forwards, damaging, stunning and knocking away enemies hit.\n\nThe projectiles follow at a slightly slower pace but travel further, damaging enemies as well.\n\nEnemies hit by Cthulhu or the projectiles gain 1 stack of Torment.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Dash, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "50" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "50/250/350/450/550 (+70% of your Magical Power)",
						},
						{ "description": "Stun Duration:", "value": "0.4s" },
						{
							"description": "Projectile D:",
							"value": "40/70/100/130/160 (+20% of your Magical Power)",
						},
					],
				},
			},
			"Id": 18495,
			"Summary": "Rushing Terror",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/rushing-terror.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "120s",
					"cost": "100",
					"description":
						"Cthulhu reveals his true form as he plunges the battlefield into R'lyeh while any enemies caught nearby are damaged.\nIn this form Cthulhu gains increased Health, becomes immune to Crowd Control and gains access to new abilities. Enemies near Cthulhu gain stacks of Torment, increasing in pace if they are facing him. Enemies also suffer the debuff effects of Sanity Break, causing them to deal less damage to Cthulhu.\n<font color='#9932CC'>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</font>",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Radius:", "value": "40" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "160/205/250/295/340 (+50% of your Magical Power)",
						},
						{ "description": "Max Health:", "value": "25%" },
						{ "description": "Duration:", "value": "10/11/12/13/14s" },
						{ "description": "Debuff Radius:", "value": "50" },
					],
				},
			},
			"Id": 18496,
			"Summary": "Descend into Madness",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/descend-into-madness.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.9,
		"Attack Speed Per Level": 0.011,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Cu Chulainn",
		"HealthPerLevel": 89,
		"ManaPerLevel": 0,
		"Health": 672,
		"Mana": 100,
		"PhysicalProtection": 23.8,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon":
			"https://webcdn.hirezstudios.com/smite/god-icons/cu-chulainn.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "15/14/13/12/11s",
					"cost": "9 Rage",
					"description":
						"Cu Chulainn thrusts his spear forward, damaging all enemies in front of him and stunning less powerful minions. Successfully hitting an enemy minion with this ability restores 5 Rage, 8 for a god (to a max of 18). Barbs from his spear stick in opponents and reduce their healing received for 5s.\nIn his Berserk Form, Cu Chulainn instead slams his massive arms down, damaging and rooting all enemies in front of him and this ability costs no Rage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Debuff, Damage" },
						{ "description": "Range:", "value": "45" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "85/145/205/265/325 (+55% of your Physical Power)",
						},
						{ "description": "Healing Reduction:", "value": "40%" },
						{ "description": "Stun Duration:", "value": "2s" },
						{ "description": "Root Duration:", "value": "1s" },
					],
				},
			},
			"Id": 14578,
			"Summary": "Barbed Spear (Ground Slam)",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/barbed-spear.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "6s",
					"cost": "16 Rage",
					"description":
						"Cu Chulainn vents his anger as superheated steam, increasing his Movement Speed and draining his Rage. Every .5s while in this state, all enemies within range are damaged by the heat. Vent Anger does not return Rage.\n\nIn his Berserk form, Cu Chulainn Vents Anger automatically and does not drain Rage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Radius:", "value": "22.5" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "120/204/288/372/456 (+60% of your Physical Power)",
						},
						{ "description": "Movement Speed:", "value": "5%" },
						{ "description": "Duration:", "value": "6s" },
					],
				},
			},
			"Id": 14581,
			"Summary": "Vent Anger",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/vent-anger.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "9 Rage",
					"description":
						"Cu Chulainn vaults over his spear, leaping to a target location and slamming it down to damage enemies around and in front of him. Successfully hitting an enemy minion with this ability restores 5 Rage, 8 for a god (to a max of 18).\n\nIn his Berserk Form, Cu Chulainn instead charges forward damaging, stunning and driving all enemies back with him and this ability costs no Rage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "35/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/125/180/235/290 (+60% of your Physical Power)",
						},
					],
				},
			},
			"Id": 14580,
			"Summary": "Salmon's Leap (Furious Charge)",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/salmons-leap.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "100/95/90/85/80s",
					"cost": "14 Rage",
					"description":
						"Cu Chulainn swings his spear Gae Bulg in a circle around him, Damaging and Knocking Up all Enemies. Successfully hitting an enemy minion with this ability restores 10 Rage, 26 for a god (to a max of 36).\n\nIn his Berserk Form, Cu Chulainn instead gives a terrifying yell, Damaging all Enemies and causing them to Tremble. This yell costs no Rage and has a 35s cooldown.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Radius:", "value": "30" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "165/235/305/375/445 (+65% of your Physical Power)",
						},
						{ "description": "Tremble Duration:", "value": "1s" },
					],
				},
			},
			"Id": 14579,
			"Summary": "Spear of Mortal Pain (War Cry)",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/spear-of-mortal-pain.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 2.0, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Cupid",
		"HealthPerLevel": 76,
		"ManaPerLevel": 39,
		"Health": 623,
		"Mana": 230,
		"PhysicalProtection": 15.4,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/cupid.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "70/75/80/85/90",
					"description":
						"Cupid fires an arrow of love at the target, causing damage when it hits and Slowing them. After a short time, the targets heart explodes, dealing the damage again to the target and all enemies within the radius. If Cupid has max Heart Stacks then all enemies in the explosion area are Stunned for 1s. Minions take 55% increased damage from Heart Bomb.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/25" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value":
								"116/185.6/255.2/324.8/394.4 (+186% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "20%" },
						{ "description": "Detonation Duration:", "value": "3s" },
					],
				},
			},
			"Id": 11146,
			"Summary": "Heart Bomb",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/heart-bomb.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "50",
					"description":
						"Cupid places 3 floating hearts at his ground target location that heal himself or allied gods and provide a passive stack when picked up. Cupid regenerates Mana and heals for 60% of the value for each heart that is picked up by an ally.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Heal" },
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{ "description": "Heal per Heart:", "value": "25/50/75/100/125" },
						{ "description": "Mana Regen per Heart:", "value": "30" },
						{ "description": "Heart Lifetime:", "value": "8s" },
					],
				},
			},
			"Id": 8230,
			"Summary": "Share the Love",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/share-the-love.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16/15/14/13/12s",
					"cost": "70",
					"description":
						"Passive: Cupid gains increased Attack Speed.\n\nActive: Cupid flutters forward quickly, leaving a trail behind him that increases all allies' movement speed.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Buff" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{ "description": "Attack Speed:", "value": "4/8/12/16/20%" },
						{ "description": "Movement Speed:", "value": "30%" },
						{ "description": "Lifetime:", "value": "6s" },
					],
				},
			},
			"Id": 8222,
			"Summary": "Flutter",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/flutter.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "100s",
					"cost": "80/90/100/110/120",
					"description":
						"Cupid fires arrows of love at his ground target location, slowing enemies in the area and crippling them, preventing movement abilities. The arrows grow and explode, dealing damage and Mesmerizing enemies. Any damage done breaks the Mesmerize effect. If Cupid has max Heart Stacks the Mesmerize duration is doubled.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/35" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "232/325/417.6/510.4/603.2 (+116% your physical power)",
						},
						{ "description": "Slow:", "value": "30%" },
						{ "description": "Mesmerize:", "value": "1s" },
					],
				},
			},
			"Id": 8233,
			"Summary": "Fields of Love",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/fields-of-love.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 2.5, "Scaling": 1.0 },
		"Attack Speed": 0.95,
		"Attack Speed Per Level": 0.017,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Da Ji",
		"HealthPerLevel": 80,
		"ManaPerLevel": 40,
		"Health": 616,
		"Mana": 210,
		"PhysicalProtection": 19.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/da-ji.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "9s",
					"cost": "50",
					"description":
						"Da Ji heats up her claws, causing her next successfully hit Basic Attack to burn the target, dealing instant bonus damage, additional damage every 1s for 3s and Slowing them for 3s. Da Ji gains Haste when this ability activates, which lasts until she hits a target.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Buff, Damage" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "60/120/180/240/300 (+75% of your Physical Power)",
						},
						{
							"description": "D Per Tick:",
							"value": "10/20/30/40/50 (+20% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "15/20/25/30/35%" },
					],
				},
			},
			"Id": 14434,
			"Summary": "Horrible Burns",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/horrible-burns.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "11s",
					"cost": "60/65/70/75/80",
					"description":
						"Da Ji lashes out with her claws at nearby enemies, executing 4 strikes that damage all enemies in range and apply the Bleed from Torture Blades.\n\nWhile this ability is channeling Da Ji moves freely in all directions, gains 40% increased Movement Speed, immunity to Slows and Knockups, and her tails mitigate Damage dealt to her by Enemy Gods who are behind her.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Buff, Damage" },
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Total Damage",
							"value": "140/220/310/380/460 (+160% of your Physical Power)",
						},
						{ "description": "Mitigation:", "value": "20/25/30/35/40%" },
					],
				},
			},
			"Id": 14438,
			"Summary": "One Thousand Cuts",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/one-thousand-cuts.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "60/65/70/75/80",
					"description":
						"Da Ji selects a single allied or enemy target and teleports to their location after a short delay. Upon arriving at the target, she lashes out with her claws, dealing damage and applying the Bleed from Torture Blades to all enemies around her.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Teleport, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/10" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/120/160/200/240 (+80% of your Physical Power)",
						},
					],
				},
			},
			"Id": 14519,
			"Summary": "Trickster Spirit",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/trickster-spirit.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "120s",
					"cost": "100",
					"description":
						"Da Ji Summons her signature torture device, the Paolao. As she hovers above the device she may fire up to 3 shots. Enemy gods hit take damage and become Chained and Slowed. At the end of her ability Chained enemies are pulled to the Paolao becoming Stunned and then taking damage 3 times over 2s. If a god hit by this ability becomes Crowd Control Immune at any time, they break the Chain on them and cannot be Chained again until this ability ends.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "80/10" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "390/490/590/690/790 (+210% of your Physical Power)",
						},
						{ "description": "Chain Slow:", "value": "20%" },
						{
							"description": "Pull D:",
							"value": "60/90/120/150/180 (+20% of your Physical Power)",
						},
						{ "description": "Pull Stun Duration:", "value": "1s" },
					],
				},
			},
			"Id": 14636,
			"Summary": "Paolao",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/paolao.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.25, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.02,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Danzaburou",
		"HealthPerLevel": 82,
		"ManaPerLevel": 38,
		"Health": 644,
		"Mana": 230,
		"PhysicalProtection": 18.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon":
			"https://webcdn.hirezstudios.com/smite/god-icons/danzaburou.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "70/75/80/85/90",
					"description":
						"Danzaburou rolls out 3 money bags that pass through and damage Enemy minions but stop on Enemy gods, slowing as they travel. Gods hit are damaged and Intoxicated, dropping a gold coin that Danzaburou or his ally gods can pick up to provide him 10 gold.\n\nWhen a money bag stops moving, it reveals to be an explosive which detonates after a short delay. Subsequent hits of the money bag or explosions deal 15% damage.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Intoxicate, Damage",
						},
						{ "description": "Range/Radius:", "value": "70/12" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "163/253/345/435/527 (+143% of your Physical Power)",
						},
						{
							"description": "Explosion:",
							"value": "30/55/80/105/130 (+30% of your physical power)",
						},
						{ "description": "Intoxicate:", "value": "0.6/0.8/1/1.2/1.4s" },
					],
				},
			},
			"Id": 19639,
			"Summary": "Fool's Gold",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/fools-gold.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "16/15/14/13/12s",
					"cost": "60/65/70/75/80",
					"description":
						"Danzaburou takes a swig of his sake bottle, gaining health, before hurling it in front of him dealing damage to Enemies in the inner circle. Jungle Camps take an extra+40% damage. \n\nThe bottle of sake applies stacks to Enemy gods in the area slowing, and upon reaching 3 stacks, taunting (with no DR) them towards the sake bottle. Enemies that take more than 30% of their max. Health while taunted are broken out early.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "45/18" },
					],
					"rankitems": [
						{ "description": "Healing:", "value": "20/40/60/80/100" },
						{
							"description": "Damage:",
							"value": "90/140/190/240/290 (+70% of your Physical Power)",
						},
						{
							"description": "Slow per stack:",
							"value": "10% for 1.5s (3 stacks max.)",
						},
						{ "description": "Taunt Duration:", "value": "1s" },
						{ "description": "Hits to break:", "value": "2/2/3/3/4" },
					],
				},
			},
			"Id": 18989,
			"Summary": "Alluring Spirits",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/alluring-spirits.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "70",
					"description":
						"Danzaburou creates a field where he moves faster, is slow immune, takes less damage, and has no basic attack penalty. Enemies are slowed by 20%. If he leaves the field it fades turning him into a leaf with other decoys that mimic his movement. As a leaf his movement speed is increased, he is slow immune and can pass through enemies and allies. After a short delay from transforming, any hit from Enemy gods or if Danzaburou himself attacks, he will revert back.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff" },
						{ "description": "Radius:", "value": "24" },
					],
					"rankitems": [
						{ "description": "Movement Speed:", "value": "20%" },
						{
							"description": "Leaf Movement Speed:",
							"value": "30/32.5/35/37.5/40%",
						},
						{ "description": "Reduced Damage:", "value": "15%" },
						{ "description": "Field Duration:", "value": "5s" },
						{ "description": "Leaf Duration:", "value": "4s" },
					],
				},
			},
			"Id": 18990,
			"Summary": "Tanuki Trickery",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/tanuki-trickery.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Danzaburou summons a magical leaf which transforms into a large bamboo rocket! While preparing, Danzaburou can aim the rocket within 180 degrees to lock onto Enemy gods or he can refire this ability to become the rocket, also becoming damage immune.\n\nOnce fired the Rocket will pass through and damage Enemy minions, stopping on the first Enemy god hit damaging and stunning them while dealing 50% damage in a larger area. ",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "120/30" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "300/360/420/480/540 (100% of your physical power)",
						},
						{ "description": "Stun Duration:", "value": "1/1.1/1.2/1.3/1.4s" },
					],
				},
			},
			"Id": 18991,
			"Summary": "Uproarious Rocket",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/uproarious-rocket.jpg",
		},
		"Basic Damage": { "Base Damage": 40.0, "Per Level": 2.6, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.014,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Discordia",
		"HealthPerLevel": 71,
		"ManaPerLevel": 51,
		"Health": 518,
		"Mana": 280,
		"PhysicalProtection": 12.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.9,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/discordia.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "50/55/60/65/70",
					"description":
						"Discordia sends an orb of unruly magic to a location that damages any enemies it hits along the way. At that location it will break down into 6 minor projectiles that fire out in all directions, damaging any enemies hit and bouncing off of walls.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Orb Damage:",
							"value": "85/135/185/235/285 (+75% of your Magical Power)",
						},
						{
							"description": "Minor D:",
							"value": "20/30/40/50/60 (+10% of your Magical Power)",
						},
					],
				},
			},
			"Id": 15063,
			"Summary": "Unruly Magic",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/unruly-magic.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "60/65/70/75/80 ",
					"description":
						"Discordia creates an area of Strife that damages all enemies hit. If 2 or more enemy gods are hit at the same time they will be afflicted by Madness for 1s, forcing them to attack each other for additional damage. The same is true for minions. If only a single target of one type is hit then it becomes Rooted for 1s instead.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Area, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "60" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/120/160/200/240 (+60% of your Magical Power)",
						},
						{
							"description": "Madness Damage Per Hit:",
							"value": "10/20/30/40/50 (+10% of your Magical Power)",
						},
					],
				},
			},
			"Id": 15320,
			"Summary": "Strife",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/strife.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "50/55/60/65/70",
					"description":
						"Discordia leaps a short distance and then creates an area of confusion where she lands that persists for 5s. While inside the area she becomes stealthed, gains bonus movement speed, and Her 1st and 2nd ability cooldowns are decreased by an additional amount of time every .5s she remains in the area. Attacking from the area will briefly reveal her. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Leap" },
						{ "description": "Range/Radius:", "value": "30/15" },
					],
					"rankitems": [
						{
							"description": "Movement Speed Buff:",
							"value": "20/25/30/35/40%",
						},
						{
							"description": "1 and 2 Cooldown Decrease Per Tick:",
							"value": "0.5/0.75/1/1.25/1.5s",
						},
					],
				},
			},
			"Id": 15077,
			"Summary": "Erratic Behavior",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/erratic-behavior.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Discordia throws her Golden Apple of Discord that damages and passes through minions and bounces off of walls. If the Apple hits an enemy god it will damage them and force them to hold the Apple.\nGods holding the apple will become intolerable, causing them to be Crippled, Intoxicated while they constantly boast.\nAt the end of the duration, the Apple will detonate, dealing damage and spreading the effects to nearby gods.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "190/35" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "325/400/475/550/625 (+110% of your Magical Power)",
						},
						{
							"description": "Detonate:",
							"value": "200/250/300/350/400 (+60% of your Magical Power)",
						},
						{ "description": "1st Target Duration:", "value": "2s and AoE " },
						{
							"description": "Spread Targets Duration:",
							"value": "3s and Single Target ",
						},
					],
				},
			},
			"Id": 15367,
			"Summary": "Golden Apple of Discord",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/golden-apple-of-discord.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.9,
		"Attack Speed Per Level": 0.009,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Erlang Shen",
		"HealthPerLevel": 89,
		"ManaPerLevel": 35,
		"Health": 679,
		"Mana": 220,
		"PhysicalProtection": 23.8,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon":
			"https://webcdn.hirezstudios.com/smite/god-icons/erlang-shen.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Erlang Shen opens his third eye and analyzes the enemy's strengths and weaknesses. When activated, Erlang Shen gains additional Physical Damage and Lifesteal on each strike. He also applies a stacking debuff to enemy gods, reducing their damage dealt to all sources. Stacks last 3s. If the buff effect has ended and the ability is on Cooldown, successful Basic Attacks reduce the Cooldown of this ability by 1s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Buff, Damage" },
					],
					"rankitems": [
						{
							"description": "Physical Damage:",
							"value": "12/22/32/42/52 (+5% of your Physical Power)",
						},
						{ "description": "Lifesteal", "value": "4.5/9/13.5/18/22.5 %" },
						{ "description": "Damage Reduction", "value": "5/5.5/6/6.5/7 %" },
						{ "description": "Max Stacks", "value": "3" },
						{ "description": "Duration:", "value": "5s" },
					],
				},
			},
			"Id": 13026,
			"Summary": "Spot Weakness",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/spot-weakness.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "50/55/60/65/70",
					"description":
						"Erlang Shen launches a spear that damages enemies on impact. Enemies in the dead center of the effect when it lands are Rooted in place.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Root, Damage" },
						{ "description": "Range/Radius:", "value": "60/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "85/130/175/220/265 (+55% of your Physical Power)",
						},
						{ "description": "Duration:", "value": "1.5s" },
					],
				},
			},
			"Id": 13030,
			"Summary": "Pin",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/pin.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "18/17.5/17/16.5/16s",
					"cost": "65/70/75/80/85",
					"description":
						"Erlang Shen transforms into a Mink or Turtle and charges forward, becoming immune to knock ups and slows. Mink: Damages all enemies, stopping on first god hit and increasing Attack Speed and Movement Speed for 4s. Turtle: Gains a health shield that is boosted by 75% of your protections from items for 12s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Buff, Damage" },
					],
					"rankitems": [
						{
							"description": "Turtle D:",
							"value": "55/100/145/190/235 (+40% of your Physical Power)",
						},
						{ "description": "Shield Health:", "value": "50/100/150/200/250 " },
						{
							"description": "Mink Damage:",
							"value": "70/130/190/250/310 (+70% of your Physical Power)",
						},
						{ "description": "Mink Attack Speed:", "value": "15/20/25/30/35%" },
						{ "description": "Mink Movement Speed:", "value": "15%" },
					],
				},
			},
			"Id": 13019,
			"Summary": "72 Transformations",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/72-transformations.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "85s",
					"cost": "80/85/90/95/100",
					"description":
						"Erlang Shen Taunts nearby Enemy gods, gaining Damage Mitigation for the next 4s. Afterwards, if Erlang Shen is still alive he is Healed for a flat amount plus 12% of his Maximum Health.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Taunt" },
						{ "description": "Range:", "value": "30" },
					],
					"rankitems": [
						{
							"description": "Heal:",
							"value": "100/150/200/250/300 (12% of your Maximum Health)",
						},
						{ "description": "Damage Mitigation:", "value": "35%" },
						{ "description": "Taunt Duration:", "value": "1.5s" },
					],
				},
			},
			"Id": 13156,
			"Summary": "9 Turns Blessing",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/9-turns-blessing.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.0, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.01,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Eset",
		"HealthPerLevel": 71,
		"ManaPerLevel": 51,
		"Health": 511,
		"Mana": 280,
		"PhysicalProtection": 12.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.9,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/eset.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "60/65/70/75/80",
					"description":
						"Eset flaps her wings, gaining increased movement speed with no backpedal penalty, and sending forth 4 wing gusts in a line, each dealing Magical Damage to all targets in their path. Eset is immune to Root and Knockback effects while casting.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Buff, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "140/220/300/380/460 (+180% of your Magical Power)",
						},
						{ "description": "Gusts Spawned:", "value": "4" },
						{ "description": "Movement Speed:", "value": "25%" },
						{ "description": "Firing Duration:", "value": "3s" },
					],
				},
			},
			"Id": 8920,
			"Summary": "Wing Gust",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/wing-gust.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "70/75/80/85/90",
					"description":
						"Eset sends forth a ball of spirit energy. As the ball travels, it gains in power up to 1.5x at max. range. At any time, Eset can activate the ability to detonate the ball, dealing Magical Damage and Stunning enemies within 10 units, scaling in duration up to 1.5s at max range.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Stun, Damage" },
						{ "description": "Range/Radius:", "value": "80/10" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "105/172.5/240/307.5/375 (+105% of your Magical Power)",
						},
						{ "description": "Stun:", "value": "1s" },
					],
				},
			},
			"Id": 8921,
			"Summary": "Spirit Ball",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/spirit-ball.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Eset Silences and slows enemy gods at her target location. Enemy gods hit also lose a portion of their Magical Protection. If Eset successfully hits an enemy god, allies near the Dispel Magic or Eset gain a shield. If Eset hits multiple enemy gods, the shield is increased by 30% for each enemy hit after the first up to a maximum of 60%.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Silence, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{ "description": "Slow:", "value": "20/22.5/25/27.5/30%" },
						{ "description": "Magical Protection Debuff:", "value": "10%" },
						{
							"description": "Debuff Duration:",
							"value": "1.5/1.75/2/2.25/2.5s",
						},
						{ "description": "Silence:", "value": "1.5/1.75/2/2.25/2.5s" },
						{ "description": "Shield:", "value": "50/100/150/200/250" },
					],
				},
			},
			"Id": 8939,
			"Summary": "Dispel Magic",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/dispel-magic.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80/90/100/110/120",
					"description":
						"Eset plants her staff at her target location for 5s. Allies within its radius take less damage. Any damage dealt within the radius charges up the staff. If Eset activates the staff again, it explodes, dealing damage to enemies inside and healing allies.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Range/Radius:", "value": "40/30" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "360/484/625/784/960 (+150% of your Magical Power)",
						},
						{ "description": "Healing:", "value": "75/110/145/180/215" },
						{ "description": "Mitigation:", "value": "30%" },
						{
							"description": "Max Charge:",
							"value": "700/1400/2100/2800/3500",
						},
						{
							"description": "Max Charge Dmg/Heal Scale:",
							"value": "2/2.25/2.5/2.75/3x",
						},
					],
				},
			},
			"Id": 8883,
			"Summary": "Circle of Protection",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/circle-of-protection.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Fafnir",
		"HealthPerLevel": 95,
		"ManaPerLevel": 40,
		"Health": 693,
		"Mana": 200,
		"PhysicalProtection": 29.4,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.7,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/fafnir.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "15/14.5/14/13.5/13s",
					"cost": "60/65/70/75/80",
					"description":
						"Fafnir hurls his hammer forward, dealing damage to enemies in its path. If Fafnir hits a god the hammer stops short and Stuns them. The Stunned god also radiates out a cursed pulse, Slowing them and nearby enemies by 20% for 3s.\n\nIn dragon form, this ability deals increased damage that ticks 3 times over 3s. Also, the cursed pulse shreds Protections in addition to Slowing.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/30" },
					],
					"rankitems": [
						{
							"description": "Hammer Damage:",
							"value": "100/140/180/220/260 (+50% of your Magical Power)",
						},
						{ "description": "Stun:", "value": "1/1.1/1.2/1.3/1.4s" },
						{
							"description": "Dragon D Per Tick:",
							"value": "50/70/90/110/130 (+25% of your Magical Power)",
						},
						{ "description": "Dragon Protection Debuff:", "value": "20%" },
					],
				},
			},
			"Id": 12923,
			"Summary": "Cursed Strength",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/cursed-strength.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "50/55/60/65/70",
					"description":
						"Fafnir coerces his allies into fighting harder, boosting Attack Speed for 5s and healing himself. While Coerce is active Fafnir deals bonus Magic Damage whenever the affected ally damages an enemy.\n\nIn dragon form, this ability has a larger area of effect and can buff multiple allies.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Target, Buff, Damage" },
						{ "description": "Range/Radius:", "value": "55/10,20" },
					],
					"rankitems": [
						{
							"description": "Attack Speed Buff:",
							"value": "20/22.5/25/27.5/30%",
						},
						{
							"description": "Bonus D:",
							"value": "4/8/12/16/20% of the damage dealt",
						},
						{ "description": "Self Heal:", "value": "40/60/80/100/120" },
					],
				},
			},
			"Id": 12922,
			"Summary": "Coerce",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/coerce.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "60",
					"description":
						"Fafnir leaps to a target location and executes a despicable strike, dealing damage and disarming enemies in front of him for 2s.\n\nIn dragon form, Fafnir can leap much further. Also, this ability deals increased damage that ticks three times over 3s and Fafnir Stuns the enemy god closest to him for 2s in addition to Disarming. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Leap, Damage" },
						{ "description": "Range:", "value": "75,90" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "80/120/160/200/240 (+60% of your Magical Power)",
						},
						{
							"description": "Dragon D Per Tick:",
							"value": "40/60/80/100/120 (+30% of your Magical Power)",
						},
					],
				},
			},
			"Id": 12926,
			"Summary": "Underhanded Tactics",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/underhanded-tactics.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "70",
					"description":
						"Fafnir transforms into a terrifying dragon and is untargetable during the process. When he emerges in dragon form, he regains 200 Mana and nearby enemies become poisoned, taking damage three times over 3s. He remains in this form for a duration or until the ability is activated again. As a dragon, his abilities have additional effects and his basic attack changes to a Dragon Breath that deals damage 3 times per second. Dragon Breath can not proc item hit effects.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Radius:", "value": "30" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "240/300/360/420/480 (+120% of your Magical Power)",
						},
						{ "description": "Duration:", "value": "20/30/40/50/60s " },
						{
							"description": "Dragon Breath:",
							"value": "20/30/40/50/60 (+10% of your Magical Power)",
						},
					],
				},
			},
			"Id": 12946,
			"Summary": "Draconic Corruption",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/draconic-corruption.jpg",
		},
		"Basic Damage": { "Base Damage": 37.0, "Per Level": 1.55, "Scaling": 0.2 },
		"Attack Speed": 0.9,
		"Attack Speed Per Level": 0.011,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Fenrir",
		"HealthPerLevel": 82,
		"ManaPerLevel": 35,
		"Health": 637,
		"Mana": 230,
		"PhysicalProtection": 19.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/fenrir.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Fenrir leaps forward, dealing damage to all enemies when he lands. At full Runes, the leap Stuns the enemies hit. If the leap hits a god, the Cooldown is reduced by 30%.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "85/145/205/265/325 (+95% of your Physical Power)",
						},
						{ "description": "Stun:", "value": "1s" },
					],
				},
			},
			"Id": 8831,
			"Summary": "Unchained",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/unchained.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "60",
					"description":
						"Fenrir rears back and howls, inspiring himself with a Physical Power, Attack Speed, and Lifesteal Buff. While inspired Fenrir generates 2 runes.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{ "description": "Physical Power:", "value": "15/25/35/45/55" },
						{ "description": "Physical Lifesteal:", "value": "30%" },
						{ "description": "Attack Speed:", "value": "25%" },
						{ "description": "Buff Duration:", "value": "6s" },
					],
				},
			},
			"Id": 8830,
			"Summary": "Seething Howl",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/seething-howl.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Fenrir gains increased protections and pounces to his ground target location. If there was an enemy in the radius, he strikes them 4 times, dealing damage with each strike and hits enemies around the target for 60% of the damage. While casting this ability Fenrir is immune to knockups. At full Runes, each strike gains 15% additional Physical Power scaling.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Target, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "30/20" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "180/300/420/540/660 (+460% of your Physical Power)",
						},
						{ "description": "Protections:", "value": "5 + 2 per level " },
					],
				},
			},
			"Id": 8857,
			"Summary": "Brutalize",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/brutalize.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "100s",
					"cost": "100",
					"description":
						"Upon Ragnarok, Fenrir grows massive in size, becoming immune to Crowd Control while moving faster. Fenrir bites enemy gods, dealing Physical damage and carrying them away. Biting a Crowd Control immune target deals the damage but ends his Ultimate. At full Runes, he gains Protections.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Target, Grab, Damage" },
						{ "description": "Range:", "value": "15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "200/275/350/425/500 (+120% of your Physical Power)",
						},
						{ "description": "Movement Speed:", "value": "75%" },
						{ "description": "Carry Duration:", "value": "1.75s" },
						{
							"description": "Protections at full Runes",
							"value": "20/30/40/50/60",
						},
					],
				},
			},
			"Id": 8825,
			"Summary": "Ragnarok",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/ragnarok.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 2.3, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.017,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Freya",
		"HealthPerLevel": 84,
		"ManaPerLevel": 37,
		"Health": 610,
		"Mana": 220,
		"PhysicalProtection": 19.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/freya.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "11s",
					"cost": "45/50/55/60/65",
					"description":
						"Freya activates a Buff that makes her Basic Attacks do bonus Magical damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Buff, Damage" },
					],
					"rankitems": [
						{
							"description": "Bonus Damage:",
							"value": "40/55/70/85/100 (+25% of your Magical Power)",
						},
						{ "description": "Duration:", "value": "5s" },
					],
				},
			},
			"Id": 8344,
			"Summary": "Irradiate",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/irradiate.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "11s",
					"cost": "45/50/55/60/65",
					"description":
						"Freya activates a Buff that makes her Basic Attacks ranged, dealing bonus Magical damage and Slowing the target and all nearby enemies. The area effect and slow are lost when Irradiate is active.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Buff, Damage" },
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{
							"description": "Bonus Damage:",
							"value": "30/40/50/60/70 (+15% of your Magical Power)",
						},
						{ "description": "Duration:", "value": "6s" },
						{ "description": "Slow:", "value": "15/17.5/20/22.5/25%" },
					],
				},
			},
			"Id": 8345,
			"Summary": "Pulse",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/pulse.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "19/18/17/16/15s",
					"cost": "70/65/60/55/50",
					"description":
						"At her ground target location, Freya Banishes her enemies into the air for a short time. The enemies can't be hit or take action while in the air.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Banish" },
						{ "description": "Range/Radius:", "value": "55/10" },
					],
					"rankitems": [{ "description": "Banish Duration:", "value": "1.5s" }],
				},
			},
			"Id": 8413,
			"Summary": "Banish",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/banish.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "100s",
					"cost": "90/95/100/105/110",
					"description":
						"Freya uses her Cloak of Feathers to fly above the battlefield where she fires down blasts of Magical damage up to 4 times while flying. Freya can't be hit when at full ascension and can cancel it anytime.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Damage" },
						{ "description": "Range/Radius:", "value": "55/12" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "360/500/640/780/920 (+140% of your Magical Power)",
						},
						{ "description": "Duration:", "value": "3.6s" },
					],
				},
			},
			"Id": 8371,
			"Summary": "Valkyrie's Discretion",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/valkyries-discretion.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.95,
		"Attack Speed Per Level": 0.019,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Ganesha",
		"HealthPerLevel": 100,
		"ManaPerLevel": 40,
		"Health": 693,
		"Mana": 200,
		"PhysicalProtection": 28,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.5,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/ganesha.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13.5/13/12.5/12s",
					"cost": "65/70/75/80/85",
					"description":
						"Ganesha curses his Enemies with his considerable willpower, damaging them. For each Enemy he hits (up to a maximum of 5), all Allied Gods within 55 units of Ganesha gain bonus Damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Buff, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/150/210/270/330 (+55% of your Magical Power)",
						},
						{ "description": "Bonus Damage per Stack:", "value": "2%" },
						{ "description": "Duration:", "value": "4s" },
					],
				},
			},
			"Id": 14499,
			"Summary": "Turn of Fate",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/turn-of-fate.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13/12/11/10s",
					"cost": "55/60/65/70/75",
					"description":
						"Ganesha begins chanting and rises into the lotus position, where he is slowed slightly but may travel freely in all directions. While chanting, he silences Enemy gods in a cone in front of him, increasing Physical and Magical Protections for all nearby Allied Gods. He is knockback immune while channeling this ability.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Silence" },
						{ "description": "Radius:", "value": "35" },
					],
					"rankitems": [
						{ "description": "Duration:", "value": "1.8s" },
						{ "description": "Protections:", "value": "20/30/40/50/60" },
					],
				},
			},
			"Id": 14498,
			"Summary": "Ohm",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/ohm.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13.5/13/12.5/12s",
					"cost": "70/75/80/85/90",
					"description":
						"Ganesha charges forward, hooking an enemy with his goad, holding them in place and damaging the enemy before knocking them up. While dashing, Ganesha passes through player-made deployables.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Dash, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "45" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/135/180/225/270 (+45% of your Magical Power)",
						},
					],
				},
			},
			"Id": 14346,
			"Summary": "Remove Obstacles",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/remove-obstacles.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "75s",
					"cost": "80/85/90/95/100",
					"description":
						"Ganesha summons the Four Great Pillars of Righteousness to imprison his Enemies. Between each pair of pillars a magical field is created, and Enemies who pass through the field take Damage, are Slowed, and have their Protections reduced for 3s.\n\n The first tick of this damage does an additional 60%, and Enemy Minions and Jungle Monsters take 40% of this Damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Slow, Damage" },
						{ "description": "Range:", "value": "40/55" },
					],
					"rankitems": [
						{ "description": "Duration:", "value": "6s" },
						{
							"description": "Total Damage:",
							"value": "1134/1638/2142/2626/3150 (+504% of your Magical Power)",
						},
						{ "description": "Slow:", "value": "30%" },
						{
							"description": "Protection Reduction:",
							"value": "10/20/30/40/50",
						},
						{ "description": "Debuff Duration:", "value": "3s" },
					],
				},
			},
			"Id": 14350,
			"Summary": "Dharmic Pillars",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/dharmic-pillars.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 1.55, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Geb",
		"HealthPerLevel": 95,
		"ManaPerLevel": 34,
		"Health": 714,
		"Mana": 190,
		"PhysicalProtection": 26.6,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/geb.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13/12/11/10s",
					"cost": "50/55/60/65/70",
					"description":
						"Geb turns into a mass of rolling earth, damaging and Slowing enemies he encounters, stopping at the first god he hits. He increases speed as he travels and his damage increases from 75% to 100% over 3s. Once at his top speed, Geb becomes immune to Crowd Control, and will also Knockback enemy gods.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Dash, Knockback, Damage",
						},
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/175/250/325/400 (+50% of your Magical Power)",
						},
						{ "description": "Slow:", "value": "30%" },
						{ "description": "Slow Duration:", "value": "1/1.25/1.5/1.75/2s" },
					],
				},
			},
			"Id": 9569,
			"Summary": "Roll Out",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/roll-out.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Geb creates a shock wave, which ripples out from him in a cone, causing damage and Knockup to all enemies. The damage decreases the further the enemy is from Geb, down to 80% at the maximum range.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Cone, Knockup, Damage",
						},
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/170/240/310/380 (+50% of your Magical Power)",
						},
					],
				},
			},
			"Id": 9559,
			"Summary": "Shock Wave",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/shock-wave.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "17s",
					"cost": "60",
					"description":
						"Geb targets himself or an ally to put a Shield around. The Shield blocks all damage and lasts until its time expires or it takes enough damage to be destroyed. The Shield also cleanses any Crowd Control when applied.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Target, Buff" },
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{
							"description": "Shield Health:",
							"value": "50/100/150/200/250 +15 per Geb's Level",
						},
						{ "description": "Shield Duration:", "value": "3/3.5/4/4.5/5 " },
					],
				},
			},
			"Id": 9565,
			"Summary": "Stone Shield",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/stone-shield.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Geb becomes immune to Crowd Control as he pulls apart the earth, dealing Magical Damage and stunning enemy gods hit. Targets take additional damage based on their current Health.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Stun, Damage" },
						{ "description": "Radius:", "value": "30" },
					],
					"rankitems": [
						{ "description": "Damage:", "value": "120/235/350/465/580" },
						{
							"description": "Additional D:",
							"value": "15% of current target's Health",
						},
						{ "description": "Stun Duration:", "value": "1.6/1.7/1.8/1.9/2s" },
					],
				},
			},
			"Id": 9648,
			"Summary": "Cataclysm",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/cataclysm.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Gilgamesh",
		"HealthPerLevel": 89,
		"ManaPerLevel": 35,
		"Health": 672,
		"Mana": 210,
		"PhysicalProtection": 25.2,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/gilgamesh.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13/12/11/10",
					"cost": "60/65/70/75/80",
					"description":
						"Gilgamesh ignites his sword with the ferocity of the Sun for 3s. Enemies around the ignition take damage and are slowed for 2s. Lane Minions take an extra +40% damage. Gilgamesh's Basic Attack deals bonus damage equal to 3% of his Maximum Health to enemies hit. When Gilgamesh successfully hits an enemy with his Basic Attack the duration of this effect is extended for 0.8s, up to a maximum of 6s. Gilgamesh gains HP5 per rank of this ability.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Slow, Damage" },
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "65/95/125/155/185 (50% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "15/17.5/20/22.5/25% " },
						{ "description": "HP5:", "value": "10/15/20/25/30" },
					],
				},
			},
			"Id": 19815,
			"Summary": "Sun-forged Scimitar",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/sun-forged-scimitar.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Gilgamesh drop kicks an area in front of him. Enemies in the area are damaged while the closest enemy is launched through these enemies. The launched enemy takes bonus damage when hitting a minion or takes burst damage and is stunned if hitting a God or a Wall. If the launched enemy hits the Winds of Shamash they are thrown toward the center of the ring. Minions hit by the launched enemy take bonus damage. Gods hit by the launched enemy take burst damage and are stunned.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "25" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "110/185/260/335/410 (+60% of your Physical Power)",
						},
						{
							"description": "Bonus:",
							"value": "25/40/55/70/85 (+20% of your Physical Power)",
						},
						{
							"description": "Burst:",
							"value": "50/95/140/185/230 (+30% of your Physical Power)",
						},
						{ "description": "Stun Duration:", "value": "1.2s" },
					],
				},
			},
			"Id": 19816,
			"Summary": "Drop Kick",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/drop-kick.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "70",
					"description":
						"Gilgamesh leaps into the air, crashing down at a target location. Enemies around the impact take damage. Gilgamesh infuses the ground with energy, causing a beacon to appear for 5s. Allies who run towards the beacon will gain Movement Speed, halving once they enter the beacon. Allies who enter the beacon will gain bonus Lifesteal, boosted by 10% of Gilgamesh's highest Protection.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "55/30" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/110/150/190/230 (+40% of your Physical Power)",
						},
						{ "description": "Movement Speed:", "value": "25% " },
						{ "description": "Lifesteal:", "value": "10.5%" },
					],
				},
			},
			"Id": 19817,
			"Summary": "Hero's Advance",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/heros-advance.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "100s",
					"cost": "80/85/90/95/100",
					"description":
						"Gilgamesh calls upon Shamash to create a ring of wind at a target location for 6s. Enemies inside this ring when it starts take damage and are slowed for 2s. Enemies inside the ring take wind damage every .5s. Enemies who try to escape the ring are heavily slowed. If Gilgamesh damages an enemy trying to flee they are thrown back towards the center of the ring. The wind turns into thread over 6s; damaging and Rooting enemies who are still inside the ring. ",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "45/35" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "372/546/720/894/1068 (+145% of your Physical Power)",
						},
						{ "description": "Initial Slow:", "value": "20%" },
						{
							"description": "Wind:",
							"value": "12/16/20/24/28 (+5% of your Physical Power)",
						},
						{ "description": "Wind Wall Slow:", "value": "40%" },
						{
							"description": "Binding:",
							"value": "150/225/300/375/450 (+50% of your Physical Power)",
						},
					],
				},
			},
			"Id": 19818,
			"Summary": "Winds of Shamash",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/winds-of-shamash.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 2.3, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Guan Yu",
		"HealthPerLevel": 91,
		"ManaPerLevel": 39,
		"Health": 672,
		"Mana": 220,
		"PhysicalProtection": 22.4,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/guan-yu.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "45",
					"description":
						"Guan Yu's courageous leadership is infectious and, when focused, heals himself and his allies. Healing friendly gods reduces all Cooldowns by 2s for Guan Yu and 1s for his allies.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Heal" },
						{ "description": "Radius:", "value": "30" },
					],
					"rankitems": [
						{ "description": "Healing:", "value": "20/40/60/80/100" },
						{
							"description": "Boosted Healing:",
							"value": "1.7xNormal Healing",
						},
					],
				},
			},
			"Id": 9146,
			"Summary": "Conviction",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/conviction.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "60/65/70/75/80",
					"description":
						"Guan Yu charges forward, his Green Dragon Crescent Blade extended in front of him. All enemies in his path take damage and are Slowed. Hitting enemy gods lowers all of Guan Yu's Cooldowns by 2s. Guan Yu is immune to Roots, Cripples, and Knockups while dashing.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Slow, Damage" },
						{ "description": "Range:", "value": "30" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/135/190/245/300 (+60% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "20%" },
						{ "description": "Slow Duration:", "value": "2s" },
						{ "description": "Boosted Slow:", "value": "40%" },
					],
				},
			},
			"Id": 9147,
			"Summary": "Warrior's Will",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/warriors-will.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "60/65/70/75/80",
					"description":
						"Guan Yu spins his blade in a controlled but furious display, slicing enemies for damage every .3s for 3s. Each hit steals enemy Protections, giving them to Guan Yu. Guan Yu is immune to Knockback for the duration.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Debuff, Damage" },
						{ "description": "Range:", "value": "30" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "170/270/370/470/570 (+200% of your Physical Power)",
						},
						{
							"description": "Protections Stolen:",
							"value": "2/4/6/8/10 Max. 3 Stacks.",
						},
						{ "description": "Protection Duration:", "value": "5s" },
						{
							"description": "Boosted Protections Stolen:",
							"value": "3/6/9/12/15 Max. 3 Stacks.",
						},
					],
				},
			},
			"Id": 10132,
			"Summary": "Taolu Assault",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/taolu-assault.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80/90/100/110/120",
					"description":
						"Guan Yu mounts his warhorse and charges for 4s. While mounted, he can steer and attack and is immune to Crowd Control. Enemies hit take damage and are Slowed. Each hit increases damage from consecutive hits against that target by 20%. Enemies hit on the dismount are Stunned. You can dismount at any time by canceling.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Stun, Damage" },
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Total Damage (All hits in Succession):",
							"value": "675/900/1125/1350/1575 (+210% of your Physical Power)",
						},
						{ "description": "Escalation:", "value": "20% per hit" },
						{ "description": "Slow:", "value": "25% for 2s" },
						{ "description": "Stun:", "value": "1.1/1.2/1.3/1.4/1.5s" },
						{
							"description": "Boosted CC:",
							"value": "1.6/1.7/1.8/1.9/2s Stun and 40% Slow",
						},
					],
				},
			},
			"Id": 9177,
			"Summary": "Cavalry Charge",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/cavalry-charge.jpg",
		},
		"Basic Damage": { "Base Damage": 37.0, "Per Level": 2.0, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Hachiman",
		"HealthPerLevel": 81,
		"ManaPerLevel": 36,
		"Health": 637,
		"Mana": 230,
		"PhysicalProtection": 15.4,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/hachiman.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12/11.5/11/10.5/10s",
					"cost": "50",
					"description":
						"When Hachiman toggles on this ability, instead of Basic Attacking he fires a series of arrows that travel further and deal additional damage. Each hit may trigger item effects for basic attacks, and can critical hit.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Ranged Basic, Buff" },
						{ "description": "Range:", "value": "80" },
					],
					"rankitems": [
						{
							"description": "Bonus Damage:",
							"value": "10/20/30/40/50 +115% of your Basic Attack Damage",
						},
						{ "description": "Ammo:", "value": "4" },
					],
				},
			},
			"Id": 14791,
			"Summary": "Eagle Eye",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/eagle-eye.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "60/65/70/75/80",
					"description":
						"Hachiman calls down sacred banners from heaven, damaging all enemies in range, granting himself Attack Speed, and leaving a banner which buffs his and allied Attack Speed while within range.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Buff, Damage" },
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "95/150/205/260/315 (60% of your Physical Power)",
						},
						{ "description": "Attack Speed:", "value": "10/12.5/15/17.5/20%" },
						{ "description": "Duration:", "value": "6s" },
					],
				},
			},
			"Id": 15037,
			"Summary": "Heavenly Banner",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/heavenly-banner.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "70/75/80/85/90",
					"description":
						"Hachiman dashes forward, damaging and passing through enemies. Upon reaching his destination, Hachiman swings his blade in a full circle, hitting all enemies in range. If hit by both attacks, enemy Gods are stunned.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Stun, Damage" },
						{ "description": "Range/Radius:", "value": "35/20" },
					],
					"rankitems": [
						{
							"description": "Total Damage",
							"value": "80/140/200/260/320 (+80% of your Physical Power)",
						},
						{ "description": "Stun Duration:", "value": "1s" },
					],
				},
			},
			"Id": 14933,
			"Summary": "Iaijutsu",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/iaijutsu.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "100s",
					"cost": "80/90/100/110/120",
					"description":
						"Hachiman leaps on his horse and charges forward. While mounted, he is immune to Crowd Control and can aim separately from the direction of his horse. He may fire to launch an arrow at every Enemy God within a cone.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Slow, Damage" },
						{ "description": "Range:", "value": "85" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "225/280/335/390/445 (+95% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "20/25/30/35/40%" },
						{ "description": "Slow Duration:", "value": "1.5s" },
					],
				},
			},
			"Id": 14802,
			"Summary": "Mounted Archery",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/mounted-archery.jpg",
		},
		"Basic Damage": { "Base Damage": 36.0, "Per Level": 2.5, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.013,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Hades",
		"HealthPerLevel": 89,
		"ManaPerLevel": 53,
		"Health": 665,
		"Mana": 265,
		"PhysicalProtection": 25.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.8,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/hades.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "50/55/60/65/70",
					"description":
						"Hades descends into the ground and erupts from below at his ground location, doing damage to all enemies in the area. If the enemy is Blighted, they are also Slowed. Applies Blight.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/120/170/220/270 (+60% of your Magical Power)",
						},
						{ "description": "Slow:", "value": "20/25/30/35/40%" },
						{ "description": "Slow Duration:", "value": "2s" },
					],
				},
			},
			"Id": 7343,
			"Summary": "Death From Below",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/death-from-below.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13/12/11/10s",
					"cost": "60",
					"description":
						"Hades Silences all enemies in a cone in front of him. If the enemy is Blighted, they are also Feared. Applies Blight.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Crowd Control" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{ "description": "Silence:", "value": "1/1.25/1.5/1.75/2s" },
					],
				},
			},
			"Id": 7354,
			"Summary": "Shroud of Darkness",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/shroud-of-darkness.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "60/65/70/75/80",
					"description":
						"Hades devours the souls of his enemies, dealing damage in an area around him. Blighted enemies hit by this ability are Detonated, dealing damage to enemies and healing your allies around the Detonated targets. Enemy gods only take 50% of the damage from Detonating Blights.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Heal, Damage" },
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "75/115/155/195/235 (+70% of your Magical Power)",
						},
						{
							"description": "Detonated Damage:",
							"value": "10/20/30/40/50 (+50% of your Magical Power)",
						},
						{ "description": "Detonated Healing:", "value": "20/35/50/65/80" },
						{ "description": "Detonation Radius:", "value": "20" },
					],
				},
			},
			"Id": 7356,
			"Summary": "Devour Souls",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/devour-souls.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Hades calls to all enemy souls nearby, creating a Vortex which drags targets toward him, dealing damage every .5s for 4s. For each enemy hit Hades reduces his ability cooldowns by 0.4s. If the enemy is Blighted, their Protections are reduced. Hades also gains Protections and 10% damage mitigation for the duration.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Vortex, Damage",
						},
						{ "description": "Radius:", "value": "30" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "360/480/600/720/840 (+240% of your Magical Power)",
						},
						{ "description": "Protections:", "value": "60/85/110/135/160" },
						{ "description": "Protections Debuff:", "value": "10/15/20/25/30" },
						{ "description": "Protections Debuff Lifetime:", "value": "4s" },
					],
				},
			},
			"Id": 7357,
			"Summary": "Pillar of Agony",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/pillar-of-agony.jpg",
		},
		"Basic Damage": { "Base Damage": 32.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.95,
		"Attack Speed Per Level": 0.01,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "He Bo",
		"HealthPerLevel": 75,
		"ManaPerLevel": 56,
		"Health": 560,
		"Mana": 298,
		"PhysicalProtection": 12.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.8,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/he-bo.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "4s",
					"cost": "40/50/60/70/80",
					"description":
						"He Bo fires a short burst of water from his hands, damaging all enemies in front of him. Lane Minions and Jungle Camps take an extra 15% damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/125/170/215/260 (+80% of your Magical Power)",
						},
					],
				},
			},
			"Id": 7327,
			"Summary": "Water Cannon",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/water-cannon.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"He Bo unfurls his scroll in a line, releasing the flood waters. Allies on the water are immune to Slows and move faster, while enemies are Slowed.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Buff" },
						{ "description": "Range:", "value": "80" },
					],
					"rankitems": [
						{ "description": "Slow Debuff:", "value": "20/25/30/35/40%" },
						{ "description": "Speed Buff:", "value": "20/25/30/35/40%" },
						{ "description": "Lifetime:", "value": "7s" },
					],
				},
			},
			"Id": 7328,
			"Summary": "Atlas of the Yellow River",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/atlas-of-the-yellow-river.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "65/70/75/80/85",
					"description":
						"He Bo calls forth a geyser, causing it to burst out with tremendous force at his target location, damaging enemies while knocking them into the air.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/10" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/120/170/220/270 (+60% of your Magical Power)",
						},
					],
				},
			},
			"Id": 7329,
			"Summary": "Waterspout",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/waterspout.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"He Bo transforms into a wave and crashes forward, damaging all enemies in his path.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "350/430/510/590/670 (+105% of your Magical Power)",
						},
					],
				},
			},
			"Id": 7330,
			"Summary": "Crushing Wave",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/crushing-wave.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 1.45, "Scaling": 0.2 },
		"Attack Speed": 0.86,
		"Attack Speed Per Level": 0.008,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Heimdallr",
		"HealthPerLevel": 84,
		"ManaPerLevel": 34,
		"Health": 672,
		"Mana": 230,
		"PhysicalProtection": 22.4,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/heimdallr.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "50/55/60/65/70",
					"description":
						"Heimdallr throws his sword, Hofuð, into the air. It shines with brilliant light that reveals enemies within 80 units. Heimdallr can refire this ability to call the sword down, causing it to fly to the target location and damage enemies.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Range/Radius:", "value": "60/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/145/200/255/310 (+85% of your Physical Power)",
						},
					],
				},
			},
			"Id": 17698,
			"Summary": "Piercing Sight",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/piercing-sight.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Heimdallr blows the Gjallarhorn for 2s, causing enemies in front of him to lose Movement and Attack Speed while taking damage every .5s. While blowing his horn Heimdallr is immune to knockups. When Heimdallr ends this cast, either through cancelling it himself or after 2s, he raises the Gjallarhorn for a final blast. This blast damages enemies and knocks them away from Heimdallr.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Cone, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "60/20" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value":
								"Can deal up to 82/154/226/298/370 (+180% of your Physical Power)",
						},
						{
							"description": "Knockback D:",
							"value": "50/90/130/170/210 (+60% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "15/17.5/20/22.5/25%" },
						{ "description": "Slow Duration:", "value": "1.5s" },
					],
				},
			},
			"Id": 17699,
			"Summary": "Gjallarhorn",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/gjallarhorn.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "Variable",
					"cost": "40",
					"description":
						"Heimdallr manifests a fragment of the Bifrost at his target location. When two fragments are placed they become linked, allowing Heimdallr to traverse the Bifrost. The greater the distance between the fragments the longer it takes to begin traversing and the longer it takes for it to be usable again. If Heimdallr places a third fragment down, the oldest fragment vanishes. Enemies that walk between two fragments are revealed to Heimdallr. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Teleport, Buff" },
						{ "description": "Range/Radius:", "value": "45/7" },
					],
					"rankitems": [
						{ "description": "Distance Scale:", "value": "85 to 700 units" },
						{ "description": "Warmup Scale:", "value": "0.8s to 3.5s" },
						{
							"description": "Cooldown Scale:",
							"value": "16s to 210/180/150/120/90s",
						},
					],
				},
			},
			"Id": 17700,
			"Summary": "The Bifrost",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/the-bifrost.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "70/75/80/85/90",
					"description":
						"Heimdallr charges forward, axe ready. If Heimdallr hits an enemy god he stuns them before unleashing a devastating swing of his axe, launching his target into the sky. A Bifrost portal appears and Heimdallr sends the launched foe through the realms of Muspelheim and Niflheim before returning them back to the battleground at a random location in front of him. Muspelheim burns the enemy every .5s for 1.5s while Niflheim slows the enemy for 2.5s.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Target, Debuff, Damage",
						},
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "265/455/645/835/1025 (+175% of your Physical Power)",
						},
						{
							"description": "Muspelheim D:",
							"value": "25/35/45/55/65 (+15% of your Physical Power)",
						},
						{
							"description": "Wall Hit D:",
							"value": "35/75/115/155/195 (+30% of your Physical Power)",
						},
						{ "description": "Niflheim Slow:", "value": "25%" },
						{ "description": "Travel Duration:", "value": "4s" },
					],
				},
			},
			"Id": 17701,
			"Summary": "Through The Realms",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/through-the-realms.jpg",
		},
		"Basic Damage": { "Base Damage": 36.0, "Per Level": 2.8, "Scaling": 1.0 },
		"Attack Speed": 0.96,
		"Attack Speed Per Level": 0.014,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Hel",
		"HealthPerLevel": 70,
		"ManaPerLevel": 57,
		"Health": 574,
		"Mana": 300,
		"PhysicalProtection": 12.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.8,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/hel.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "8s",
					"cost": "45/50/55/60/65",
					"description":
						"DECAY (Dark Stance) - Hel fires an orb of decay that deals damage and passes through minions. The orb will explode in a 12 unit radius if it hits a god or reaches max range.\n\nRESTORATION (Light Stance) - Hel fires an orb of restoration that damages enemy minions and stops on gods. Hitting an enemy god deals damage. Hitting an allied god provides that god and Hel Health and Mana.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Heal, Damage" },
						{ "description": "Range/Radius:", "value": "55/12" },
					],
					"rankitems": [
						{
							"description": "Dark Damage:",
							"value": "70/120/170/220/270 (+60% of your Magical Power)",
						},
						{
							"description": "Light Ally Heal:",
							"value": "45/60/75/90/105 + 4 per level",
						},
						{
							"description": "Light Self Heal: ",
							"value": "45/60/75/90/105 + 4 per level",
						},
						{ "description": "Light Mana Heal:", "value": "45/60/75/90/105" },
						{
							"description": "Light D:",
							"value": "70/120/170/220/270 (+50% of your Magical Power)",
						},
					],
				},
			},
			"Id": 9180,
			"Summary": "Decay (Restoration)",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/decay.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "16/15/14/13/12s",
					"cost": "60/65/70/75/80",
					"description":
						"HINDER (Dark Stance) - Hel debuffs all enemies in the targeted area, reducing their Magical Protection and slowing them for 3s.\n\nCLEANSE (Light Stance) - Hel cleanses all allied gods in the targeted area, removing all Crowd Control effects instantly and protecting them from future ones for a duration.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Debuff" },
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Dark Protections Debuff:",
							"value": "5/7.5/10/12.5/15 + 5%",
						},
						{ "description": "Dark Slow:", "value": "20/25/30/35/40%" },
						{ "description": "Light CC Immunity Duration:", "value": "1.5s" },
					],
				},
			},
			"Id": 9183,
			"Summary": "Hinder (Cleanse)",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/hinder.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"REPULSE (Dark Stance) - Hel conjures a burst of dark energy around her, damaging all nearby enemies. INSPIRE (Light Stance) - Hel conjures a burst of light energy around her, healing herself instantly and applying a heal over time to nearby allies that ticks every 1s. This heal is half as effective when healing minions. Hel gains Increased Movement Speed, and allies gain a reduced amount (7%) for the duration. Hel and allied Gods also gain 20% Attack Speed while the buff is active.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Heal, Damage" },
						{ "description": "Radius:", "value": "30" },
					],
					"rankitems": [
						{
							"description": "Dark Damage:",
							"value": "70/120/170/220/270 (+75% of your Magical Power)",
						},
						{
							"description": "Light Self Heal: ",
							"value": "45/60/75/90/105 + 5.5 per level",
						},
						{
							"description": "Light Heal per Tick:",
							"value": "6/8/10/12/14 + 0.9 per level",
						},
						{ "description": "Light Movement Speed:", "value": "15%" },
						{ "description": "Light Duration:", "value": "5s" },
					],
				},
			},
			"Id": 9185,
			"Summary": "Repulse (Inspire)",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/repulse.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "1s",
					"cost": "0",
					"description":
						"DARK STANCE - Hel's abilities cause damage and she gains increased Magical Power.\n\nLIGHT STANCE - Hel's abilities heal and support her allies and she gains increased Protections.\n\nPassive - Hel gains increased MP5 and Half of the benefits gained from Switch Stances are shared with allied gods within 30 units.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Buff" },
						{ "description": "Radius:", "value": "30" },
					],
					"rankitems": [
						{ "description": "Dark Magical Power:", "value": "30/40/50/60/70" },
						{
							"description": "Light Magical and Physical Protections:",
							"value": "13/16/19/22/25",
						},
						{ "description": "MP5:", "value": "15/20/25/30/35" },
					],
				},
			},
			"Id": 9186,
			"Summary": "Switch Stances (Light)",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/switch-stances.jpg",
		},
		"Basic Damage": { "Base Damage": 33.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.86,
		"Attack Speed Per Level": 0.008,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Hera",
		"HealthPerLevel": 71,
		"ManaPerLevel": 45,
		"Health": 532,
		"Mana": 265,
		"PhysicalProtection": 12.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.9,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/hera.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "55/60/65/70/75 ",
					"description":
						"Hera damages enemies in a cone in front of her before opening a portal for Argus to attack through. Enemy minions hit by this cone are knocked into Argus' path. Argus then slams his fists at the target location dealing heavy damage. If both of his fists connects with an enemy, it deals 15% extra damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Damage" },
						{ "description": "Range:", "value": "50" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "122/195/268/342/415 (+107% of your Magical Power)",
						},
						{
							"description": "Fist:",
							"value": "80/135/190/245/300 (+80% of your Magical Power)",
						},
					],
				},
			},
			"Id": 16441,
			"Summary": "Royal Assault",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/royal-assault.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60",
					"description":
						"Hera weaves magic in front of her before sending it out. Enemies hit by this ability take damage. If this ability hits a god it causes their form to shift into a monster.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Polymorph, Damage",
						},
						{ "description": "Range:", "value": "80" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/140/190/240/290 (+85% of your Magical Power)",
						},
						{
							"description": "Polymorph Duration:",
							"value": "1.2/1.4/1.6/1.8/2s",
						},
						{ "description": "Slow:", "value": "20%" },
					],
				},
			},
			"Id": 16548,
			"Summary": "Polymorph",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/polymorph.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16/15.5/15/14.5/14s",
					"cost": "45/50/55/60/65",
					"description":
						"Hera shrouds herself in her divine power, granting her a shield from damage and temporary movement speed that lasts as long as the shield remains.\n\nIf Argus is active, Argus shines with the same Divine power as Hera, causing him to deal radiant damage and move at an increased rate.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{
							"description": "Shield Health:",
							"value": "70/115/160/205/250 +17 per Hera's Level",
						},
						{ "description": "Shield Duration:", "value": "5s" },
						{ "description": "Movement Speed:", "value": "15%" },
						{
							"description": "Total Aura Damage:",
							"value": "70/110/150/190/230 (+75% of your Magical Power)",
						},
						{ "description": "Argus Speed:", "value": "50%" },
					],
				},
			},
			"Id": 16547,
			"Summary": "Divine Shroud",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/divine-shroud.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80/85/90/95/100",
					"description":
						"Hera brings Argus crashing down at a location, damaging and knocking up enemies. On landing Argus will attack the nearest target. Hera can control where Argus moves through refiring this ability onto an enemy or if he has a target, to recall him. While recalled Argus will defend Hera and attack anyone that gets close. Argus has a hit chain that starts with a normal basic attack, into a ground circle AoE slowing enemies by 20% for 1s, into a line attack.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Range/Radius:", "value": "65/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/150/200/250/300 (+55% of your Magical Power)",
						},
						{ "description": "Argus Lifetime:", "value": "40s" },
						{
							"description": "Argus Health:",
							"value": "700/1400/2100/2800/3500",
						},
						{ "description": "Argus Protections:", "value": "25/35/45/55/65" },
						{
							"description": "Argus Movement Speed:",
							"value": "440/455/470/485/500",
						},
					],
				},
			},
			"Id": 16446,
			"Summary": "Argus, the Defender",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/argus-the-defender.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 1.45, "Scaling": 0.2 },
		"Attack Speed": 0.9,
		"Attack Speed Per Level": 0.009,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Hercules",
		"HealthPerLevel": 93,
		"ManaPerLevel": 32,
		"Health": 686,
		"Mana": 205,
		"PhysicalProtection": 25.2,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/hercules.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "50/55/60/65/70",
					"description":
						"Hercules delivers a mighty strike, driving all enemies back, damaging and Stunning them. Hercules is immune to Knockback during the dash.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Dash, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/170/240/310/380 (+90% of your Physical Power)",
						},
						{ "description": "Stun:", "value": "1.1/1.2/1.3/1.4/1.5s" },
					],
				},
			},
			"Id": 8494,
			"Summary": "Driving Strike",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/driving-strike.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "50/55/60/65/70",
					"description":
						"Hercules smashes the ground, sending a shockwave forward that does damage to all enemies in the path. Enemies at the end of the shockwave are thrown into the air towards Hercules.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Knockback, Damage",
						},
						{ "description": "Range:", "value": "45" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/140/190/240/290 (+70% of your Physical Power)",
						},
					],
				},
			},
			"Id": 8499,
			"Summary": "Earthbreaker",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/earthbreaker.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "60",
					"description":
						"Hercules heals himself instantly and gains increased Attack Speed, Magical, and Physical Protections for the next 4s. A percentage of the damage taken during this time is returned to him as an additional heal at the end of the duration.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{ "description": "Initial Heal:", "value": "45/75/105/135/165" },
						{
							"description": "Damage Returned as Healing:",
							"value": "20/26/32/38/44%",
						},
						{ "description": "Protections Buff:", "value": "20/30/40/50/60" },
						{ "description": "Attack Speed:", "value": "25%" },
					],
				},
			},
			"Id": 8497,
			"Summary": "Mitigate Wounds",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/mitigate-wounds.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90/85/80/75/70s",
					"cost": "100",
					"description":
						"Hercules rips a huge boulder from the ground. Throwing the boulder does damage where the boulder lands. The boulder continues rolling, doing the same damage to all enemies in its path. Subsequent hits on the same enemy do 50% less damage per hit. Hercules is immune to Crowd Control while casting.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Damage" },
						{ "description": "Range/Radius:", "value": "45/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "300/425/550/675/800 (+100% of your Physical Power)",
						},
					],
				},
			},
			"Id": 8632,
			"Summary": "Excavate",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/excavate.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.0, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.01,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Horus",
		"HealthPerLevel": 88,
		"ManaPerLevel": 37,
		"Health": 679,
		"Mana": 230,
		"PhysicalProtection": 23.8,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/horus.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13.5/13/12.5/12s",
					"cost": "55/60/65/70/75",
					"description":
						"Horus uses his wings to create an updraft around himself, knocking nearby enemies into the air.\n\nUsing the currents from the updraft, Horus' next Basic Attack within 5s will create a gust of wind that travels forward, damaging enemies and slowing them for 2.5s. This attack cannot crit. Enemies that are knocked up when hit take bonus damage.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/12" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "50/95/140/185/230 (+75% of your Physical Power)",
						},
						{
							"description": "Gust:",
							"value": "30/40/50/60/70 +100% of your Basic Attack Damage",
						},
						{ "description": "Gust Bonus:", "value": "1.5x" },
						{ "description": "Gust Slow:", "value": "25%" },
					],
				},
			},
			"Id": 17050,
			"Summary": "Updraft",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/updraft.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "15/14.5/14/13.5/13s",
					"cost": "55/60/65/70/75",
					"description":
						"Horus dashes forward a short distance, ready to strike with his weapon. If Horus hits a god he stops and stuns the god for 1.25s. He will then wind up a heavy cleave. Enemies hit have their Protections reduced for 3s. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Dash, Damage" },
						{ "description": "Range:", "value": "40" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "130/195/260/325/390 (+80% of your Physical Power)",
						},
						{
							"description": "Cleave:",
							"value": "60/100/140/180/220 (+50% of your Physical Power)",
						},
						{
							"description": "Protection Reduction:",
							"value": "10/15/20/25/30",
						},
					],
				},
			},
			"Id": 17157,
			"Summary": "Fracture",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/fracture.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "45",
					"description":
						"Horus rushes to the aid of an ally. After selecting an ally, Horus will fly to their location before descending. Upon landing, the selected ally and all nearby allies have their health restored and gain protections for 3s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Target, Buff" },
						{ "description": "Range/Radius:", "value": "60/10" },
					],
					"rankitems": [
						{ "description": "Heal:", "value": "40/70/100/130/160" },
						{ "description": "Protection Buff:", "value": "10/15/20/25/30" },
					],
				},
			},
			"Id": 17052,
			"Summary": "Protector's Surge",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/protectors-surge.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "100s",
					"cost": "100",
					"description":
						"Horus sends a mirror image of himself into the sky that scouts for a location to fly to. Upon selecting a ground location, Horus will begin to channel for 2s. Allies near Horus after these 2 seconds are flown to the location Horus' image chose. Horus and his allies land with such force, enemies take damage and are knocked away from the landing location. Horus and allies at the landing location gain a protective shield for 4s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "150/250/350/450/550 (+80% of your Physical Power)",
						},
						{ "description": "Shield:", "value": "160/240/320/400/480" },
					],
				},
			},
			"Id": 17111,
			"Summary": "To The Skies!",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/to-the-skies.jpg",
		},
		"Basic Damage": { "Base Damage": 37.0, "Per Level": 2.1, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Hou Yi",
		"HealthPerLevel": 82,
		"ManaPerLevel": 38,
		"Health": 672,
		"Mana": 240,
		"PhysicalProtection": 18.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/hou-yi.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "60/65/70/75/80",
					"description":
						"Hou Yi fires a powerful shot that can ricochet off of walls. After firing, if this arrow bounces off of a wall it will travel 70 units from that point and gain +40% bonus damage to gods per bounce up to a maximum of 2 bounces. This arrow will stun if the target has Mark of the Golden Crow.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "399/609/819/1029/1239 (+294% of your Physical Power)",
						},
						{ "description": "Stun Duration:", "value": "1s" },
					],
				},
			},
			"Id": 11416,
			"Summary": "Ricochet",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/ricochet.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "16/15.5/15/14.5/14s",
					"cost": "50",
					"description":
						"Hou Yi marks an enemy with Mark of the Golden Crow. Marked enemies take extra damage for every 10% of their missing health from Hou Yi’s abilities and basic attacks. Also, marked enemies, including stealthed gods, are visible to Hou Yi on the minimap. The mark lasts for 10s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Target, Debuff" },
						{ "description": "Range/Radius:", "value": "55/10" },
					],
					"rankitems": [
						{
							"description": "Daage Increase:",
							"value": "2/3/4/5/6% for every 10% of missing health",
						},
					],
				},
			},
			"Id": 10867,
			"Summary": "Mark of the Golden Crow",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/mark-of-the-golden-crow.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "70/75/80/85/90",
					"description":
						"Hou Yi launches into the air, and for a short time may target some distance away to quickly dive towards the ground damaging any enemies in the immediate area. If the target has Mark of the Golden Crow they are knocked back.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/110/150/190/230 (+60% of your physical power)",
						},
					],
				},
			},
			"Id": 11636,
			"Summary": "Divebomb",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/divebomb.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Hou Yi shoots nine arrows into the sky, striking one sun with each arrow. The nine suns come crashing down one by one, slowing and dealing damage in a target area over time. A target with Mark of the Golden Crow will have their movement speed slowed by an additional 20%.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Slow, Damage" },
						{ "description": "Range/Radius:", "value": "55/30" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "720/810/900/990/1080 (+225% of your Physical Power)",
						},
						{ "description": "Duration:", "value": "4.5s" },
						{ "description": "Slow:", "value": "20%" },
						{ "description": "Slow Duration:", "value": ".5s per Hit" },
					],
				},
			},
			"Id": 10869,
			"Summary": "Sunbreaker",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/sunbreaker.jpg",
		},
		"Basic Damage": { "Base Damage": 40.0, "Per Level": 2.8, "Scaling": 1.0 },
		"Attack Speed": 0.95,
		"Attack Speed Per Level": 0.011,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Hun Batz",
		"HealthPerLevel": 79,
		"ManaPerLevel": 38,
		"Health": 644,
		"Mana": 220,
		"PhysicalProtection": 18.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/hun-batz.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "13/12.5/12/11.5/11s",
					"cost": "60",
					"description":
						"Hun Batz flips through the air, crashing down at his target location, doing damage to all nearby enemies and Slowing them.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "65/105/145/185/225 (+70% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "30/32.5/35/37.5/40%" },
						{ "description": "Slow Duration:", "value": "2s" },
					],
				},
			},
			"Id": 7323,
			"Summary": "Somersault",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/somersault.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "12/11/10/9/8s",
					"cost": "60/65/70/75/80",
					"description":
						"Hun Batz smashes his staff to the ground in front of him, doing damage to all enemies. While Hun Batz is channeling, he is immune to knockups.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "85/140/195/250/305 (+95% of your Physical Power)",
						},
					],
				},
			},
			"Id": 7324,
			"Summary": "Overhand Smash",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/overhand-smash.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "60/65/70/75/80",
					"description":
						"Hun Batz commands a monkey through the air that pounces on enemy targets, doing damage on each pounce, hitting each god only once. The monkey can bounce back to minions it has already hit. Pressing the button again teleports Hun Batz to the next target hit.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Teleport, Damage",
						},
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage per Hit:",
							"value": "80/135/190/245/300 (+70% of your Physical Power)",
						},
						{ "description": "Max Targets:", "value": "4" },
					],
				},
			},
			"Id": 7325,
			"Summary": "Sacred Monkey",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/sacred-monkey.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "120/115/110/105/100s",
					"cost": "100",
					"description":
						"Hun Batz summons a totem from the ground to ward off all evil. Any enemy caught within the radius is feared directly away from the totem and takes damage every .25s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Fear, Damage" },
						{ "description": "Range/Radius:", "value": "35/35" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value":
								"200/250/300/350/400 (+60/75/90/105/120% of your Physical Power)",
						},
						{ "description": "Lifetime:", "value": "1/1.25/1.5/1.75/2s" },
					],
				},
			},
			"Id": 7339,
			"Summary": "Fear No Evil",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/fear-no-evil.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 2.13, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.019,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Ishtar",
		"HealthPerLevel": 82,
		"ManaPerLevel": 38,
		"Health": 658,
		"Mana": 220,
		"PhysicalProtection": 18.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.132,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/ishtar.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "9s",
					"cost": "60/65/70/75/80",
					"description":
						"Ishtar imbues her arrows with heavenly light, enhancing her Basic Attacks in one of three ways for 6s. The three varieties include Strike Shot, a lobbed explosive arrow, Spread Shot, a volley of five arrows, and Storm Shot, a fast-paced long range snipe. Ishtar cannot hit Structures during the duration.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{ "description": "Duration:", "value": "6s" },
						{ "description": "Strike Bonus Damage:", "value": "5/11/17/23/29" },
						{
							"description": "Spread Side Damage:",
							"value": "5/5.75/6.5/7.25/8% of your Basic Attack Damage",
						},
						{
							"description": "Storm Attack Speed:",
							"value": "20/25/30/35/40%",
						},
					],
				},
			},
			"Id": 22833,
			"Summary": "Imbue Arrows",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/imbue-arrows.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "55/60/65/70/75",
					"description":
						"Ishtar calls down four strikes of lightning in a line, damaging Enemies within their area. Ishtar may aim which direction the strikes travel. If an Enemy is hit by more than one strike, they are mesmerized.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Area, Mesmerize, Damage",
						},
						{ "description": "Range/Radius:", "value": "70/15" },
					],
					"rankitems": [
						{
							"description": "Strike Damage:",
							"value": "50/75/100/125/150 (40% of your Physical Power)",
						},
						{ "description": "Mesmerize Duration:", "value": "0.75s" },
					],
				},
			},
			"Id": 22834,
			"Summary": "Rolling Thunder",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/rolling-thunder.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "60",
					"description":
						"Ishtar draws her blades and charges forward, striking all Enemies in her path. If she hits an Enemy God, she stops and roots them for 1s as she backflips off of them. As Ishtar is in the air, she fires her bow, dealing damage in an area around the affected God. This shot may Crit and trigger Basic Attack item effects.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Root, Damage" },
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{
							"description": "Charge Damage:",
							"value": "80/120/160/200/240 (60% of your Physical Power)",
						},
						{
							"description": "Arrow Damage:",
							"value": "20/30/40/50/60 +110% of your Basic Attack Damage",
						},
						{ "description": "Root:", "value": "1s" },
					],
				},
			},
			"Id": 22835,
			"Summary": "Jolt",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/jolt.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Ishtar becomes CC-immune and summons five swords of light, firing them out in a cone in front of her. Each sword damages and cripples enemies for 1.25s. When the swords reach their destination, Ishtar may recall them to her location within 3s. If an Enemy is hit by both the initial fire and the recall, they are stunned for 1s. Each sword hit after the first deals reduced damage, resetting before recalling.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Cone, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "80" },
					],
					"rankitems": [
						{
							"description": "Total Damage",
							"value": "352/440/536/616/704 (+112.5% of your Physical Power)",
						},
						{
							"description": "D reduction:",
							"value": "40% per sword/ up to a max of 80%",
						},
						{ "description": "Cripple:", "value": "1.25s" },
						{ "description": "Stun:", "value": "1s" },
					],
				},
			},
			"Id": 22836,
			"Summary": "Blades of Retribution",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/blades-of-retribution.jpg",
		},
		"Basic Damage": { "Base Damage": 36.0, "Per Level": 2.6, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.016,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Ix Chel",
		"HealthPerLevel": 84,
		"ManaPerLevel": 44,
		"Health": 532,
		"Mana": 300,
		"PhysicalProtection": 16.8,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/ix-chel.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "6s",
					"cost": "40/45/50/55/60",
					"description":
						"Gleaming Blast - Ix Chel fires a blast of gleaming light ahead of her dealing damage, piercing minions, and stopping on the first enemy god hit. Minions and Jungle Camps take an extra +40% damage. Hitting an enemy god causes this ability to change.\nThreads of Light - Strands of light illuminate damaging enemies in their path. Enemies facing the strands as they illuminate are Blinded. Enemies hit by the tip of the field, take bonus damage.",
					"menuitems": [
						{ "description": "Ability:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Blast Damage:",
							"value": "60/80/100/120/140 (+40% of your Magical Power)",
						},
						{
							"description": "Light Damage:",
							"value": "70/115/160/205/250 (+55% of your Magical Power)",
						},
						{ "description": "Bonus Damage:", "value": "30%" },
						{ "description": "Blind Duration:", "value": "1s" },
					],
				},
			},
			"Id": 24065,
			"Summary": "Gleaming Blast (Threads of Light)",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/gleaming-blast.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "65",
					"description":
						"Ix Chel marks an area on the ground invoking it with lunar energy. After a short delay the energy explodes Knocking up and dealing damage to enemies while Healing allies.",
					"menuitems": [
						{
							"description": "Ability:",
							"value": "Circle, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "95/145/195/245/295 (+70% of your Magical Power)",
						},
						{ "description": "Heal:", "value": "50/85/120/155/180" },
					],
				},
			},
			"Id": 24066,
			"Summary": "Lunar Invocation",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/lunar-invocation.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13.5/13/12.5/12s",
					"cost": "50/55/60/65/70",
					"description":
						"Ix Chel sends out an arcing, weaved rainbow towards a location while gaining a small burst of Movement Speed.\n\nOn landing the crashing rainbow deals damage and Roots enemies, splitting into smaller orbs of light. These orbs can be picked up by Ix Chel and her allies for increased Movement Speed.",
					"menuitems": [
						{ "description": "Ability:", "value": "Circle, Buff, Damage" },
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/120/160/200/240 (+75% of your Magical Power)",
						},
						{ "description": "Root Duration:", "value": "1.25s" },
						{ "description": "Movement Speed:", "value": "20% for 3s" },
						{ "description": "Orb Movement Speed:", "value": "20% for 3s" },
					],
				},
			},
			"Id": 24067,
			"Summary": "Rainbow Crash",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/rainbow-crash.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "90",
					"description":
						"Ix Chel becomes CC immune, gaining 15% Damage Mitigation as she channels all of her energy into a single intense beam of light. The beam deals damage to enemies and heals allied gods every 0.2s for 3s, increasing in duration if Ix Chel hits allied and enemy gods at the same time.\nEnemy gods take increasing damage per tick which decays rapidly if not hit recently.\n\nHealing an ally also heals Ix Chel. Ix Chel gains 6 stacks of Rainbow Weaver on firing.",
					"menuitems": [
						{ "description": "Ability:", "value": "Line, Heal, Damage" },
						{ "description": "Range/Radius:", "value": "70/2.5" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "375/735/945/1155/1365 (+210% of your Magical Power)",
						},
						{ "description": "Heal per tick:", "value": "2% Missing HP" },
						{ "description": "Subsequent D Increase:", "value": "5%" },
						{
							"description": "Maximum D increase per target:",
							"value": "100%",
						},
						{ "description": "Maximum Duration:", "value": "6s" },
					],
				},
			},
			"Id": 24068,
			"Summary": "Great End",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/great-end.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.9,
		"Attack Speed Per Level": 0.007,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Izanami",
		"HealthPerLevel": 81,
		"ManaPerLevel": 35,
		"Health": 630,
		"Mana": 210,
		"PhysicalProtection": 15.4,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/izanami.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "60/65/70/75/80",
					"description":
						"For 6s, Izanami throws her kama sickles even faster and more furiously. While active she gains Attack Speed, and her Basic Attacks no longer return to her, instead applying Bonus Damage in addition to 100% of her Basic Attack power per hit. This Bonus Damage applies to all targets, including Structures.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Ranged Basic, Buff" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{ "description": "Attack Speed:", "value": "45/50/55/60/65%" },
						{ "description": "Bonus Damage:", "value": "5/10/15/20/25" },
					],
				},
			},
			"Id": 13316,
			"Summary": "Sickle Storm",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/sickle-storm.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13.5/13/12.5/12s",
					"cost": "70",
					"description":
						"Izanami sends forth a demonic visage of herself to strike down her enemies, damaging and Slowing all Enemies in a line.\n\nIf an Enemy God is killed while slowed by this ability, future uses of the slow will be increased by 6% per kill up to twice, for a maximum of 30%.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Slow, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "65/115/165/215/265 (+80% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "18% + 6% per Kill (Max 30%)" },
						{ "description": "Slow Duration:", "value": "3s" },
					],
				},
			},
			"Id": 13328,
			"Summary": "Spectral Projection",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/spectral-projection.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "17/16.5/16/15.5/15s",
					"cost": "70",
					"description":
						"Izanami descends into the underworld, becoming Stealthed, and leaps away from her current position.\n\nTaking damage, or firing a damaging Ability or Basic Attack breaks her Stealth.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Leap" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{ "description": "Duration:", "value": "3/3.5/4/4.5/5s" },
					],
				},
			},
			"Id": 13327,
			"Summary": "Fade Away",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/fade-away.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "80",
					"cost": "100",
					"description":
						"Izanami summons a dark portal which Damages and Silences all Enemies in range.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Silence, Damage",
						},
						{ "description": "Range/Radius:", "value": "60/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "220/320/420/520/620 (100% of your Physical Power)",
						},
						{ "description": "Duration:", "value": "1.5/1.65/1.8/1.95/2.1s" },
					],
				},
			},
			"Id": 13408,
			"Summary": "Dark Portal",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/dark-portal.jpg",
		},
		"Basic Damage": { "Base Damage": 25.5, "Per Level": 1.8, "Scaling": 1.1 },
		"Attack Speed": 0.92,
		"Attack Speed Per Level": 0.016,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Janus",
		"HealthPerLevel": 74,
		"ManaPerLevel": 58,
		"Health": 560,
		"Mana": 350,
		"PhysicalProtection": 14,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/janus.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "70",
					"description":
						"Janus creates a portal in the world. If placed on a wall, the portal will create a passage through to the other side of the wall that Janus or any ally may use. The portal may be entered from either side, but closes after 1 use.\n\nIf placed on the ground, enemies and Janus will fall into the portal, being teleported into the air above it. Enemies take damage upon landing, and are considered banished during the fall.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Banish, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/10" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/130/180/230/280 (+60% of your Magical Power)",
						},
						{ "description": "Banish Duration:", "value": "1.5s" },
						{ "description": "Wall Portal Duration:", "value": "5s" },
						{ "description": "Wall Portal Range:", "value": "100" },
					],
				},
			},
			"Id": 9938,
			"Summary": "Portal",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/portal.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "9s",
					"cost": "70/75/80/85/90",
					"description":
						"Janus creates two tethered unstable portals, far too small to fit into, and flings them forward dealing damage to enemies in their path. Enemies hit by both portals take 15% damage on the second hit.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Damage (Middle Hit with Passive):",
							"value": "126/201/276/351/426 (+107% of your Magical Power)",
						},
					],
				},
			},
			"Id": 19859,
			"Summary": "Unstable Vortex",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/unstable-vortex.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "60/65/70/75/80",
					"description":
						"Passive: Janus increases the movement speed of himself and allies each time they go through a portal or over a Threshold (max. 2 Stacks).\n\nActive: Janus opens a multi-dimensional rift. Enemies who pass over the rift are slowed, and marked with Phase. Targets in Phase take additional Magical scaling damage when hit by Janus' damaging abilities.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Buff" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{ "description": "Phase Slow:", "value": "25%" },
						{ "description": "Additional Scaling:", "value": "20/30/40/50/60" },
						{ "description": "Rift Duration:", "value": "3/3.5/4/4.5/5" },
						{
							"description": "Movement Speed:",
							"value": "10/12.5/15/17.5/20% per Portal.",
						},
						{ "description": "Passive Duration:", "value": "5s " },
					],
				},
			},
			"Id": 10056,
			"Summary": "Threshold",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/threshold.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "110s",
					"cost": "100",
					"description":
						"Passive: Janus gains increased % Magical Penetration.\nActive: Janus becomes CC Immune and blasts multi-dimensional energy across the battlefield, burning a portal into every surface it hits within range 500. These portals last 10s, may be used by allies, and do not vanish after the first use.\nEnemies hit take damage, increasing in Magical scaling the further the energy travels. Enemy gods cannot take more than 75% of their maximum Health as damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "Global" },
					],
					"rankitems": [
						{
							"description": "Max Damage:",
							"value": "300/375/450/525/600 (195% of your Magical Power)",
						},
						{
							"description": "Distance Scaling:",
							"value":
								"100% of your Magical Power at distance greater than 800.",
						},
						{
							"description": "% Magical Penetration:",
							"value": "10/12.5/15/17.5/20%",
						},
					],
				},
			},
			"Id": 19916,
			"Summary": "Through Space and Time",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/through-space-and-time.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 1.45, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.008,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Jing Wei",
		"HealthPerLevel": 82,
		"ManaPerLevel": 36,
		"Health": 623,
		"Mana": 205,
		"PhysicalProtection": 15.4,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/jing-wei.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12/11.5/11/10.5/10s",
					"cost": "60/65/70/75/80",
					"description":
						"Jing Wei creates a gust of wind that damages enemies and knocks up enemy gods when summoned. The gust persists for 6s and continues to knock up and deal additional damage to enemies every 1s. If Jing Wei walks onto the area she is knocked into the air and gains an attack speed buff for 7s.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/10" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "165/265/365/465/565 (+115% of your Physical Power)",
						},
						{
							"description": "D Per Tick:",
							"value": "15/25/35/45/55 (+5% of your Physical Power)",
						},
						{ "description": "Attack Speed Buff:", "value": "20/25/30/35/40%" },
					],
				},
			},
			"Id": 12763,
			"Summary": "Persistent Gust",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/persistent-gust.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "50",
					"description":
						"Jing Wei loads her crossbow with explosive bolts that augment her next 3 Basic Attacks. These attacks are wider, have increased critical chance, and deal area of effect damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area Basic, Buff" },
						{ "description": "Range/Radius:", "value": "55/8" },
					],
					"rankitems": [
						{ "description": "Crit Chance:", "value": "0/5/10/15/20%" },
						{
							"description": "D per Shot:",
							"value": "110% of Jing Wei's Physical Power",
						},
					],
				},
			},
			"Id": 12767,
			"Summary": "Explosive Bolts",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/explosive-bolts.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "18/18/17/17/16s",
					"cost": "75/70/65/60/55",
					"description":
						"Jing Wei dashes straight forward. She may use this ability while knocked into the air for a longer range dash. She also gains a 4s increase to Physical Power and Movement Speed upon using Agility. The effect of this buff is increased if Agility is used from the air. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Dash" },
						{ "description": "Range:", "value": "35/55" },
					],
					"rankitems": [
						{ "description": "Power:", "value": "10/15/20/25/30" },
						{ "description": "Movement Speed:", "value": "15%" },
						{ "description": "Air Power:", "value": "20/25/30/35/40" },
						{ "description": "Air Movement Speed:", "value": "25%" },
					],
				},
			},
			"Id": 12764,
			"Summary": "Agility",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/agility.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80/90/100/110/120",
					"description":
						"Jing Wei channels briefly before taking to the sky. She then flies forward and upward while covering the area below her in explosions that damage all enemies in the area. After her attack she hovers for up to 2s before landing at a ground target location. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "220/310/400/490/580 (0% of your Physical Power)",
						},
					],
				},
			},
			"Id": 13261,
			"Summary": "Air Strike",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/air-strike.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 2.7, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.014,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Jormungandr",
		"HealthPerLevel": 105,
		"ManaPerLevel": 40,
		"Health": 693,
		"Mana": 190,
		"PhysicalProtection": 29.4,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.8,
		"MagicProtectionPerLevel": 1.6,
		"God Icon":
			"https://webcdn.hirezstudios.com/smite/god-icons/jormungandr.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "16/15/14/13/12s",
					"cost": "60/65/70/75/80",
					"description":
						"Jormungandr fires noxious spit at an area that deals damage and creates a large toxic cloud. This field damages and slows Enemies inside of it every second.\n\nIf Jormungandr interacts with a toxic cloud with Consuming Bellow or Submerge, the duration of the cloud is reduced to 8s.\n\nJormungandr can have a maximum of 9 toxic clouds out at a time.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Slow, Damage" },
						{ "description": "Range/Radius:", "value": "75/10,15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/140/190/240/290 (+45% of your Magical Power)",
						},
						{
							"description": "D per tick:",
							"value": "10/20/30/40/50 (+5% of your Magical Power)",
						},
						{ "description": "Slow:", "value": "20%" },
						{ "description": "Slow Duration:", "value": "1s" },
						{ "description": "Cloud Duration:", "value": "20s" },
					],
				},
			},
			"Id": 16861,
			"Summary": "Venomous Haze",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/venomous-haze.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "70",
					"description":
						"Jormungandr draws power from toxic clouds nearby while channeling for 1.2s. At the end of the channel Jormungandr roars dealing damage to all Enemies, trembling and slowing Enemy gods by 30% for 1.5s.\nEach cloud increases the size of Consuming Bellow and Empowers him up to 3 times while also dealing extra damage to Enemies hit. Extra damage after the first instance is halved.\nWhile Empowered, Jormungandr's basic attack fires at its fastest rate.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Tremble, Damage",
						},
						{ "description": "Radius:", "value": "20-30" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "160/230/300/370/440 (+62.5% of your Magical Power)",
						},
						{
							"description": "Bonus:",
							"value": "20/25/30/35/40 (+10% of your Magical Power)",
						},
						{ "description": "Empowered Buff:", "value": "2s" },
					],
				},
			},
			"Id": 16862,
			"Summary": "Consuming Bellow",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/consuming-bellow.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13.5/13/12.5/12s",
					"cost": "70/75/80/85/90",
					"description":
						"Jormungandr submerges into the ground turning invisible as he searches for prey. During this time he moves faster and gains predatory vision, sensing all enemies in a large radius.\nFiring this ability while invisible reveals Jormungandr as he emerges out of the ground, knocking up Enemies around him.\nEmerging through a toxic cloud creates two new ones in the direction Jormungandr is facing, with a low duration. Taking damage from Enemy gods breaks Stealth.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/125/180/235/290 (+50% of your Magical Power)",
						},
						{ "description": "Movement Speed:", "value": "35%" },
						{ "description": "Duration:", "value": "5s" },
					],
				},
			},
			"Id": 16863,
			"Summary": "Submerge",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/submerge.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "100s",
					"cost": "100",
					"description":
						"Jormungandr prepares to enter into the world, enlarging as he prepares a devastating attack.\nAfter selecting a target area, Jormungandr flies into the air, diving down and crashing into enemies as his body then slams into the ground. He must travel 2 more times.\nWhen Jormungandr Emerges and Submerges during this ability, he knocks up Enemies and with each Submerge he leaves behind a toxic cloud.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Area, Knockup, Damage",
						},
						{ "description": "Range/Radius:", "value": "100/20" },
					],
					"rankitems": [
						{
							"description": "Submerge + Emerge Damage:",
							"value": "225/300/375/450/525 (+55% of your Magical Power)",
						},
						{
							"description": "Emerge/Crash:",
							"value": "75/100/125/150/175 (+20% of your Magical Power)",
						},
					],
				},
			},
			"Id": 17000,
			"Summary": "The World Serpent",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/the-world-serpent.jpg",
		},
		"Basic Damage": { "Base Damage": 11.2, "Per Level": 0.96, "Scaling": 0.08 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.01,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Kali",
		"HealthPerLevel": 78,
		"ManaPerLevel": 34,
		"Health": 658,
		"Mana": 225,
		"PhysicalProtection": 21,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/kali.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60",
					"description":
						"Kali leaps forward, damaging enemies in the target area. Kali additionally heals herself for a percent of a single enemy's missing Health. Kali always heals from the target that would heal her the most.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "55/12" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "85/135/185/235/285 (+80% of your Physical Power)",
						},
						{
							"description": "Heal:",
							"value": "15% of target's missing Health",
						},
					],
				},
			},
			"Id": 9485,
			"Summary": "Nimble Strike",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/nimble-strike.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Kali throws several blades, that converge upon the target location. Each does damage and causes bleed. Kali gains Physical Lifesteal against targets affected by this Bleed.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Buff, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "141/207/273/349/405 (+90% of your Physical Power)",
						},
						{
							"description": "Bleed:",
							"value": "5/10/15/20/25 (+5% of your Physical Power) every .5s",
						},
						{ "description": "Bleed Duration:", "value": "3s" },
						{
							"description": "Physical Lifesteal:",
							"value": "12/16.4/21/25.5/30%",
						},
					],
				},
			},
			"Id": 9486,
			"Summary": "Lash",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/lash.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "60",
					"description":
						"Kali hurls her incense at her feet, exploding it. Enemies hit are Stunned, while Kali gains a Physical Power bonus.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Stun" },
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{ "description": "Stun Duration:", "value": "1.2s" },
						{
							"description": "Physical Power Buff:",
							"value": "10/15/20/25/30",
						},
						{ "description": "Buff Duration:", "value": "4/4.5/5/5.5/6s" },
					],
				},
			},
			"Id": 9487,
			"Summary": "Incense",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/incense.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "60/70/80/90/100",
					"description":
						"Kali becomes an unstoppable force of destruction, creating a damage aura around her. During this time, she can be reduced to 1 Health, but cannot die. She is Immune to Knockup, Slow effects, and protected from Root, but still vulnerable to Stuns. If Kali is under 15% of her total Health at the end of the duration, she will heal to 15% Health.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value":
								"175/210/280/320/405 (+56/56/72/72/80% of your Physical Power) ",
						},
						{ "description": "Duration:", "value": "3.5/3.75/4/4.25/4.5" },
					],
				},
			},
			"Id": 9520,
			"Summary": "Destruction",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/destruction.jpg",
		},
		"Basic Damage": { "Base Damage": 37.0, "Per Level": 2.32, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.022,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Khepri",
		"HealthPerLevel": 95,
		"ManaPerLevel": 34,
		"Health": 686,
		"Mana": 190,
		"PhysicalProtection": 26.6,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/khepri.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60",
					"description":
						"Khepri lunges forward, dealing damage to enemies he passes through. If he connects with an enemy god he stops, grabs them, and starts pulling them backwards while gaining increased Protections. Enemies are silenced for the duration of the pull.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Dash, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "40" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/130/180/230/280 (40% of your Magical Power)",
						},
						{
							"description": "Pull Duration:",
							"value": "1.5/1.6/1.7/1.8/1.9s",
						},
						{ "description": "Protections:", "value": "10/15/20/25/30" },
					],
				},
			},
			"Id": 11596,
			"Summary": "Abduct",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/abduct.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "50/60/70/80/90",
					"description":
						"Khepri rolls the sun forward, setting ablaze all enemies it touches, reducing physical protections, and dealing damage over time. Allies that are hit take reduced damage from enemies for the duration.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Buff, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "100/140/180/220/260 (+50% of your Magical Power)",
						},
						{ "description": "Protection Debuff:", "value": "5/10/15/20/25%" },
						{ "description": "Damage Mitigation:", "value": "10/15/20/25/30%" },
						{ "description": "Duration:", "value": "3s" },
					],
				},
			},
			"Id": 11731,
			"Summary": "Rising Dawn",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/rising-dawn.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Khepri calls down the sun's ire at the target location, dealing damage and rooting all targets in the area.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Root, Damage" },
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "60/115/170/225/280 (+30% of your Magical Power)",
						},
						{ "description": "Root Duration", "value": "1.5/1.6/1.7/1.8/1.9s" },
					],
				},
			},
			"Id": 11738,
			"Summary": "Solar Flare",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/solar-flare.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "110s",
					"cost": "80/90/100/110/120",
					"description":
						"Khepri blesses an allied god, immediately cleansing them of all crowd control as well as granting them Movement Speed, and immunity to slow effects. If the marked ally would die while blessed, they are instead revived with a percentage of their maximum Health at Khepri's location. Executed allies do not revive.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Target, Buff" },
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{ "description": "Revived Health:", "value": "20/25/30/35/40%" },
						{
							"description": "Movement Speed:",
							"value": "20/22.5/25/27.5/30%",
						},
						{ "description": "Duration:", "value": "5s" },
					],
				},
			},
			"Id": 11597,
			"Summary": "Scarab's Blessing",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/scarabs-blessing.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "King Arthur",
		"HealthPerLevel": 87,
		"ManaPerLevel": 40,
		"Health": 679,
		"Mana": 230,
		"PhysicalProtection": 23.8,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon":
			"https://webcdn.hirezstudios.com/smite/god-icons/king-arthur.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "35/40/45/50/55",
					"description":
						"Standard: King Arthur deals a devastating overhead blow in Melee range that creates a slashing attack that travels forwards. Enemies hit by the Melee strike take bonus damage from the Slicing attack. Combo: King Arthur swipes low, crippling and damaging enemies that are struck.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Slash Damage:",
							"value": "60/110/160/210/260 (60% of your Physical Power)",
						},
						{
							"description": "Melee Bonus Damage:",
							"value": "30/35/40/45/50%",
						},
						{
							"description": "Combo Damage:",
							"value": "70/125/180/235/290 (+60% of your Physical Power)",
						},
						{ "description": "Cripple Duration:", "value": "1.25s" },
						{ "description": "Energy Gain:", "value": "3" },
					],
				},
			},
			"Id": 16596,
			"Summary": "Overhead Slash (Hamstring)",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/overhead-slash.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "40/45/50/55/60",
					"description":
						"Standard: King Arthur stomps on the ground with heavy force, causing enemies around him to take damage and become slowed. Combo: King Arthur charges forward, stopping on first god hit. At the end of the charge King Arthur unleashes an uppercut, knocking up enemies into the air.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Slow, Damage" },
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Stomp Damage:",
							"value": "55/80/105/130/155 (40% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "30/32.5/35/37.5/40%" },
						{ "description": "Slow Duration:", "value": "2.5s" },
						{
							"description": "Uppercut Damage:",
							"value": "50/95/140/185/230 (40% of your Physical Power)",
						},
						{ "description": "Energy Gain:", "value": "4" },
					],
				},
			},
			"Id": 16607,
			"Summary": "Battle Stomp (Uppercut)",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/battle-stomp.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "40/45/50/55/60",
					"description":
						"Standard: King Arthur unleashes two cleave attacks while charging forward. Enemies hit by a cleave take damage and have their protections reduced. Combo: King Arthur swings Excalibur around him, charging forward and damaging enemies 5 times before winding up a final strike that deals more damage. King Arthur is immune to Knockup for the duration.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Debuff, Damage" },
						{ "description": "Range/Radius:", "value": "30/10" },
					],
					"rankitems": [
						{
							"description": "Cleave Damage:",
							"value": "35/60/85/110/135 (30% of your Physical Power)",
						},
						{ "description": "Protection Shred:", "value": "10%" },
						{
							"description": "Spin Damage:",
							"value": "15/35/55/75/95 (+15% of your Physical Power)",
						},
						{
							"description": "Final Damage:",
							"value": "35/90/145/200/255 (40% of your Physical Power)",
						},
						{ "description": "Energy Gain:", "value": "1.5" },
					],
				},
			},
			"Id": 16621,
			"Summary": "Twin Cleave (Bladestorm)",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/twin-cleave.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "20",
					"cost": "35 (80) Energy & 40 Mana",
					"description":
						"35 Energy: King Arthur winds up a massive jab, charging forwards slightly before striking. Enemies hit by this jab are stunned for 1s. 80 Energy: King Arthur charges forward with Excalibur drawn. If King Arthur hits an enemy god, he launches them into the air and unleashes a barrage of 6 attacks, after which he launches them back to the ground dealing damage to the target and any enemy below.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Stun, Damage" },
						{ "description": "Range:", "value": "45" },
					],
					"rankitems": [
						{
							"description": "Jab Damage:",
							"value": "100/155/210/265/320 (+65% of your Physical Power)",
						},
						{
							"description": "Damage Per Hit:",
							"value": "10/25/40/55/70 (+10% of your Physical Power)",
						},
						{ "description": "Max HP Damage:", "value": "2% Per Hit" },
						{
							"description": "Landing Damage:",
							"value": "50/100/150/200/250 (+50% of your Physical Power)",
						},
						{
							"description": "Max HP Damage:",
							"value": "5/6/7/8/9% Landing Hit",
						},
					],
				},
			},
			"Id": 16637,
			"Summary": "Sundering Strike (Excalibur's Wrath)",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/sundering-strike.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.0, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Kukulkan",
		"HealthPerLevel": 79,
		"ManaPerLevel": 45,
		"Health": 532,
		"Mana": 265,
		"PhysicalProtection": 18.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/kukulkan.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "7s",
					"cost": "55/60/65/70/75",
					"description":
						"Kukulkan fires a projectile breath attack that hits the first enemy in its path, doing damage and Slowing all enemies in the area around the impact.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Slow, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "85/130/175/220/265 (+75% of your Magical Power)",
						},
						{ "description": "Slow:", "value": "20/25/30/35/40%" },
						{ "description": "Slow Duration:", "value": "3s" },
					],
				},
			},
			"Id": 7363,
			"Summary": "Zephyr",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/zephyr.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "15/14/13/12/11s",
					"cost": "65",
					"description":
						"Kukulkan channels the wind, allowing him to move faster and cleansing himself of Slows and becoming immune to Slows. This speed boost is strong at first but scales down gradually over the 4s duration.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{ "description": "Movement Speed:", "value": "60/65/70/75/80%" },
						{ "description": "Duration:", "value": "4s" },
					],
				},
			},
			"Id": 7364,
			"Summary": "Slipstream",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/slipstream.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13/12/11/10s",
					"cost": "70/75/80/85/90",
					"description":
						"Kukulkan summons a tornado at his ground target location. A smaller tornado branches off onto any enemies that come within the radius, doing damage every .5s for 2.5s and is refreshed if enemies stay within the radius, for a maximum of 12 ticks.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Damage" },
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "104/208/312/416/520 (+221% of your Magical Power)",
						},
						{ "description": "Tornado Lifetime:", "value": "4s" },
					],
				},
			},
			"Id": 7365,
			"Summary": "Whirlwind",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/whirlwind.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100/110/120/130/140",
					"description":
						"Kukulkan summons the Spirit Of The Nine Winds to breathe down destruction onto his enemies in a path in front of him, doing damage and knocking all of the enemies to the side.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Knockup, Damage",
						},
						{ "description": "Range:", "value": "130" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "400/500/600/700/800 (+120% of your Magical Power)",
						},
					],
				},
			},
			"Id": 7966,
			"Summary": "Spirit Of The Nine Winds",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/spirit-of-the-nine-winds.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 1.45, "Scaling": 0.2 },
		"Attack Speed": 0.87,
		"Attack Speed Per Level": 0.008,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Kumbhakarna",
		"HealthPerLevel": 105,
		"ManaPerLevel": 34,
		"Health": 686,
		"Mana": 200,
		"PhysicalProtection": 25.2,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.5,
		"MagicProtectionPerLevel": 1.6,
		"God Icon":
			"https://webcdn.hirezstudios.com/smite/god-icons/kumbhakarna.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "11s",
					"cost": "60/65/70/75/80",
					"description":
						"Kumbhakarna sleepily runs forward. If he hits an enemy he stops and deals damage. If the enemy is a minion, he throws them, dealing increased damage to each enemy they hit.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Damage" },
						{ "description": "Range:", "value": "45,75" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "95/160/225/290/355 (+50% of your Magical Power)",
						},
						{
							"description": "Flying Minion Damage:",
							"value": "95/165/235/305/375 (+60% of your Magical Power)",
						},
					],
				},
			},
			"Id": 9888,
			"Summary": "Throw Back",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/throw-back.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "50/55/60/65/70",
					"description":
						"Kumbhakarna smashes down, damaging all enemies in front of him, Rooting, and Crippling them.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "40" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/155/210/265/320 (+50% of your Magical Power)",
						},
						{ "description": "Duration:", "value": "2s" },
					],
				},
			},
			"Id": 9951,
			"Summary": "Groggy Strike",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/groggy-strike.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "50/55/60/65/70",
					"description":
						"Kumbhakarna lets out a mighty yawn that Mesmerizes all enemies in range. If awakened early, enemies have their Attack Speed and Movement Speed Slowed. Kumbhakarna may use this ability while asleep.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Mesmerize" },
						{ "description": "Radius:", "value": "40" },
					],
					"rankitems": [
						{ "description": "Mez Duration:", "value": "1/1.5/2/2.5/3s" },
						{ "description": "Slow Duration:", "value": "2s" },
						{ "description": "Slow:", "value": "40%" },
						{
							"description": "Attack Speed Debuff:",
							"value": "30/35/40/45/50%",
						},
					],
				},
			},
			"Id": 9892,
			"Summary": "Mighty Yawn",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/mighty-yawn.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "75s",
					"cost": "100",
					"description":
						"Kumbhakarna moves forward, stops at the first enemy god he encounters, and delivers a massive melee attack that uppercuts the enemy directly into the air. When the enemy lands, it deals area damage and causes Knockup to enemies nearby.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Dash, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "30/20" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "315/430/545/660/775 (+55% of your Magical Power)",
						},
						{
							"description": "Landing:",
							"value": "240/330/420/510/600 (+40% of your Magical Power)",
						},
						{ "description": "Knockup Time:", "value": "2.2s" },
					],
				},
			},
			"Id": 9898,
			"Summary": "Epic Uppercut",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/epic-uppercut.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Kuzenbo",
		"HealthPerLevel": 105,
		"ManaPerLevel": 34,
		"Health": 700,
		"Mana": 200,
		"PhysicalProtection": 25.2,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.5,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/kuzenbo.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "70/75/80/85/90",
					"description":
						"Kuzenbo summons and throws the powerful NeNe Kappa, who can ricochet off of walls. After firing, if the NeNe Kappa bounces off of a wall it will travel 70 units from that point up to a maximum of 2 bounces. After reaching maximum range, or if an Enemy God is hit by the NeNe Kappa, it will burst forth from its shell, slowing and attacking them for 6s. Kuzenbo transfers 20% of his Health and Protections to the NeNe Kappa.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Pet, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/120/160/200/240 (+55% of your Magical Power)",
						},
						{
							"description": "Kappa Damage per Hit:",
							"value": "35/45/55/65/75",
						},
						{
							"description": "Kappa Health:",
							"value": "25/30/35/40/45 (20% of your Maximum Health)",
						},
						{ "description": "Slow:", "value": "20/22.5/25/27.5/30%" },
						{ "description": "Slow Duration:", "value": "3s" },
					],
				},
			},
			"Id": 14148,
			"Summary": "NeNe Kappa",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/nene-kappa.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13.5/13/12.5/12s",
					"cost": "50",
					"description":
						"The spikes on Kuzenbo’s back extend out, damaging enemies who attack Kuzenbo. While active, each time Kuzenbo takes damage, the cooldown on NeNe Kappa and Sumo Slam is reduced. Kuzenbo may activate this ability even while under the effects of Crowd Control.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Buff, Damage" },
					],
					"rankitems": [
						{ "description": "% of Damage Taken:", "value": "15/20/25/30/35%" },
						{
							"description": "Cooldown per Hit:",
							"value": ".5/.7/.9/1.1/1.3s",
						},
						{ "description": "Duration:", "value": "3s" },
					],
				},
			},
			"Id": 14165,
			"Summary": "Shell Spikes",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/shell-spikes.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Kuzenbo charges forward, immune to slows, damaging Enemy minions and silencing using his immense strength to push the first Enemy God he hits along with him. Each subsequent Enemy he hits deals damage to both that Enemy and the god Kuzenbo is pushing. Colliding with a wall will also deal damage to the pushed god. Pushed targets can be hit a maximum of 3 times.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Dash, Crowd Control, Damage",
						},
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "180/285/390/495/600 (+105% of your Magical Power)",
						},
					],
				},
			},
			"Id": 14166,
			"Summary": "Sumo Slam",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/sumo-slam.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "75s",
					"cost": "100",
					"description":
						"Kuzenbo pulls himself inwards under his shell and spins, summoning fierce currents that knock enemies back, increase his Movement Speed, grant him 10% Damage Mitigation, render him immune to Crowd Control, and allow him to move freely in all directions for 2.1s. Each hit after the first on an enemy deals 40% reduced damage.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Radius:", "value": "22.5" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "224/364/504/644/784 (+112% of your Magical Power)",
						},
						{
							"description": "Damage per Hit:",
							"value": "40/65/90/115/140 (20% of your Magical Power)",
						},
						{ "description": "Movement Speed:", "value": "45%" },
						{ "description": "Damage Mitigation:", "value": "20%" },
					],
				},
			},
			"Id": 14302,
			"Summary": "Watery Grave",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/watery-grave.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Lancelot",
		"HealthPerLevel": 81,
		"ManaPerLevel": 40,
		"Health": 644,
		"Mana": 230,
		"PhysicalProtection": 19.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/lancelot.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "50/55/60/65/70",
					"description":
						"Lancelot does a quick dash and thrust forwards with his lance. He deals damage to enemies in his path and those hit by the extending lance. If he hits an enemy he may dash again within 3s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Damage" },
						{ "description": "Range:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "80/160/240/320/400 (+130% of your Physical Power)",
						},
					],
				},
			},
			"Id": 21904,
			"Summary": "Piercing Thrust",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/piercing-thrust.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Lancelot slams his shield into enemies in a small area in front of him, dealing damage and knocking them back. He follows up this attack with a sweep of his lance dealing damage again and bonus damage to enemies that are further away.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Cone, Knockback, Damage",
						},
						{ "description": "Range:", "value": "15/25" },
					],
					"rankitems": [
						{
							"description": "Total Damage",
							"value": "69/115/161/207/253 (+92% of your Physical Power)",
						},
						{
							"description": "Lance:",
							"value": "60/100/140/180/220 (+80% of your Physical Power)",
						},
						{ "description": "Bonus:", "value": "15%" },
					],
				},
			},
			"Id": 21905,
			"Summary": "Skilled Strikes",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/skilled-strikes.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "30/35/40/45/50",
					"description":
						"Lancelot mounts onto his trusty steed charging forwards with increased movement speed. While on his horse Lancelot gains a Health Shield that builds over time and his abilities change.\nLancelot can cancel this ability to dismount normally which will not trigger a Cooldown. If Lancelot's Health Shield is depleted, he is forced off his horse.\nWhile Mounted, Lancelot is immune to CC effects except Stuns and Time Dilation.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{ "description": "Movement Speed:", "value": "20%" },
						{
							"description": "Initial Health Shield:",
							"value": "80/95/110/125/140",
						},
						{
							"description": "Max. Health Shield:",
							"value": "180/320/460/600/740 gained over 3s. ",
						},
					],
				},
			},
			"Id": 21906,
			"Summary": "Mount up",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/mount-up.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80/85/90/95/100",
					"description":
						"Lancelot mounts and rears up his horse as a large jousting list is created, crippling enemies in the area. Lancelot charges ahead, dealing damage to all enemies hit and refreshing his mounted Health Shield.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Cripple, Damage",
						},
						{ "description": "Range:", "value": "80" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "230/290/350/410/470 (120% of your Physical Power)",
						},
					],
				},
			},
			"Id": 21907,
			"Summary": "The Grand Joust",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/the-grand-joust.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 2.3, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.019,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Loki",
		"HealthPerLevel": 79,
		"ManaPerLevel": 35,
		"Health": 553,
		"Mana": 210,
		"PhysicalProtection": 15.4,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/loki.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "70/75/80/85/90",
					"description":
						"Loki disappears in a puff of smoke. While invisible, he moves faster, removes Slow effects, and gains immunity to Slow effects. His next Basic Attack from Stealth (or for 2s after) applies a Bleed to his target, dealing damage every .5s and reveals Loki. If Loki takes damage while in stealth he will be revealed for .33s.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "140/200/260/320/380 (+80% of your Physical Power)",
						},
						{ "description": "Tick Duration:", "value": "2s" },
						{ "description": "Stealth Duration:", "value": "4s" },
						{ "description": "Stealth Movement Speed:", "value": "35%" },
					],
				},
			},
			"Id": 18937,
			"Summary": "Vanish",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/vanish.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "12",
					"cost": "50/55/60/65/70",
					"description":
						"Loki summons a vision of his tortured past at a target location for 4s. Enemies in range of the vision feel the poison themselves, taking damage and having their Damage Dealt reduced. This effect stacks up to 4 times. If an enemy gets 4 stacks they become Blinded, allowing Loki to benefit from Behind You! from any direction for 3s.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Blind, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/25" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "104/144/184/224/264 (+120% of your Physical Power)",
						},
						{ "description": "D Dealt:", "value": "5% for 3s" },
					],
				},
			},
			"Id": 18612,
			"Summary": "Agonizing Visions",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/agonizing-visions.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "12",
					"cost": "50/55/60/65/70",
					"description":
						"Loki unleashes a flurry of 5 dagger strikes quickly in front of him, damaging and slowing enemies by 15% for 3s. After this flurry he winds up for a final heavy strike that deals higher damage and slows enemies by 30% for 3s. Loki cannot be knocked up while firing this ability. This ability can benefit from Behind You!",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Slow, Damage" },
						{ "description": "Range:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value":
								"155/225/295/365/435 (195% of your Physical Power) damage",
						},
						{
							"description": "Final Strike:",
							"value": "55/75/95/115/135 (+70% of your Physical Power)",
						},
					],
				},
			},
			"Id": 18613,
			"Summary": "Flurry Strike",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/flurry-strike.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "60/70/80/90/100",
					"description":
						"Upon activation, Loki teleports to his ground target location. If an enemy god is within the radius, Loki will slice that target doing damage and crippling them for 1s. After he teleports he will wind up a heavier strike, damaging all enemies in front of him and stunning them. ",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Target, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "55,30/10" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "170/250/330/410/490 (+125% of your Physical Power)",
						},
						{
							"description": "Heavy Cone:",
							"value": "100/145/190/235/280 (90% of your Physical Power)",
						},
						{ "description": "Stun:", "value": "1s" },
					],
				},
			},
			"Id": 18921,
			"Summary": "Assassinate",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/assassinate.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 2.4, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.019,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Maman Brigitte",
		"HealthPerLevel": 81,
		"ManaPerLevel": 36,
		"Health": 570,
		"Mana": 240,
		"PhysicalProtection": 16.8,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon":
			"https://webcdn.hirezstudios.com/smite/god-icons/maman-brigitte.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "6s",
					"cost": "20/30/40/50/60",
					"description":
						"Maman Brigitte drinks from her bottle and breathes out fire. Enemies are set aflame, damaged every 0.5s for 1.5s, refreshing if they stay in the area. This damage does not trigger Item effects. Maman Brigitte channels the fire for as long as she has Rum and can cancel at any time. When out of Rum or upon reactivation, she slams her bottle on the ground, damaging and stunning enemies. This ability's cooldown is reduced based on Rum remaining when the slam occurs.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Damage, Stun" },
						{ "description": "Range:", "value": "30/15" },
					],
					"rankitems": [
						{
							"description": "Damage Per Tick:",
							"value": "6/14/22/30/38 (+10% of your Magical Power)",
						},
						{
							"description": "Slam:",
							"value": "40/80/120/160/200 (+35% of your Magical Power)",
						},
						{ "description": "Stun Duration:", "value": "1.2s" },
						{
							"description": "Maximum Cooldown:",
							"value": "14s (Further reduced by CDR)",
						},
					],
				},
			},
			"Id": 24712,
			"Summary": "Party Trick",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/party-trick.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "13/12.5/12/11.5/11s",
					"cost": "55",
					"description":
						"Maman Brigitte's tattoo snake, Madame Fangs, slithers off of her arm and becomes a spectral snake that passes through enemies, damaging and applying Madame's Mark to all enemies hit. Subsequent hits from Madame Fangs deal 15% of the initial damage. Enemies with Madame's Mark take additional damage anytime Maman Brigitte damages them. This bonus damage does not trigger Item effects. Soul Spikes and Item effects do not trigger Madame's Mark.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Projectile, Damage, Debuff",
						},
						{ "description": "Range:", "value": "60" },
					],
					"rankitems": [
						{
							"description": "Initial Damage:",
							"value": "50/75/100/125/150 (+40% of your Magical Power)",
						},
						{ "description": "Madame's Mark:", "value": "2.5% of your Magical Power" },
						{ "description": "Madame's Mark Duration:", "value": "5s" },
					],
				},
			},
			"Id": 24713,
			"Summary": "Madame Fangs",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/madame-fangs.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "50/60/70/80/90",
					"description":
						"Maman Brigitte shrouds herself in ghostly energy as she dashes forward, passing through player made walls and damaging enemies. If she hits an enemy god she possesses them, traveling with them and dealing damage every 0.5s for up to 2s. Maman Brigitte can leave her target early by dashing or canceling to step out. If she remains for the full duration, she will dash out as time expires.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Damage" },
						{ "description": "Range:", "value": "40" },
					],
					"rankitems": [
						{
							"description": "Initial Hit:",
							"value": "60/90/120/150/180 (+10% of your Magical Power)",
						},
						{
							"description": "Possession Tick Damage:",
							"value": "20/25/30/35/40 (+10% of your magical power)",
						},
					],
				},
			},
			"Id": 24714,
			"Summary": "Spirit Seize",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/spirit-seize.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Maman Brigitte gains Crowd Control immunity and gathers a large orb of spiritual energy that she throws at the target location. The orb's size is determined by the amount of Soul Orbs that Maman Brigitte has collected through Soul Spikes. Enemies hit are damaged, knocked up, and receive Madame's Mark for 5s. Maman Brigitte loses all Soul Orbs after using Explosion of Souls.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Damage, Knockup",
						},
						{ "description": "Radius:", "value": "16.5,18,19.5,21,22.5,24" },
						{ "description": "Range:", "value": "45" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "160/210/260/310/360 (+85% of your Magical Power)",
						},
					],
				},
			},
			"Id": 24715,
			"Summary": "Explosion of Souls",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/explosion-of-souls.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 2.4, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.018,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Martichoras",
		"HealthPerLevel": 86,
		"ManaPerLevel": 38,
		"Health": 680,
		"Mana": 240,
		"PhysicalProtection": 22.4,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.3,
		"MagicProtectionPerLevel": 1.6,
		"God Icon":
			"https://webcdn.hirezstudios.com/smite/god-icons/martichoras.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Martichoras fires hundreds of venomous spikes from his wings, creating a circular rain of spikes that deals damage as it rolls forward. As the rain moves, it leaves behind a toxic trail that slows and damages all enemies within the trail.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Slow, Damage" },
						{ "description": "Range/Radius:", "value": "40,60/11" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "116/180/244/308/372 (+130% of your Physical Power)",
						},
						{
							"description": "Trail:",
							"value": "6/10/14/18/22 (10% of your Physical Power every 0.5s)",
						},
						{ "description": "Slow:", "value": "25/27.5/30/32.5/35%" },
						{ "description": "Trail Duration:", "value": "3s" },
					],
				},
			},
			"Id": 23606,
			"Summary": "Acid Rain",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/acid-rain.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "40/45/50/55/60",
					"description":
						"Martichoras shoots a stinger, dealing damage, piercing minions, and stopping on the first enemy god hit. The stinger then persists for 3s attached to the enemy god, reducing their healing, or at a point on the ground. Martichoras can explode it by hitting it with a basic attack or ability. The explosion deals damage, reduces healing, and Roots the god who held the stinger.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Root, Damage" },
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "75/145/215/285/355 (+105% of your Physical Power)",
						},
						{
							"description": "Explosion:",
							"value": "30/65/100/135/170 (50% of your Physical Power)",
						},
						{ "description": "Root Duration:", "value": "1/1.2/1.4/1.6/1.8s" },
						{ "description": "Healing Reduction:", "value": "40% for 5s" },
					],
				},
			},
			"Id": 23607,
			"Summary": "Poisoned Barb",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/poisoned-barb.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "25/24/23/22/21s",
					"cost": "60/65/70/75/80",
					"description":
						"Martichoras creates a patch of stealth grass in which he and all allied gods may hide. While inside and on exiting the patch, Martichoras gains Movement Speed. Martichoras’ Basic Attacks from stealth apply 8 stacks of Venom. Enemies may reveal anyone hidden in the patch by entering it or by placing a ward inside its range.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Buff" },
						{ "description": "Range/Radius:", "value": "55/27" },
					],
					"rankitems": [
						{ "description": "Patch Duration:", "value": "120s" },
						{ "description": "Max Patches:", "value": "3" },
						{
							"description": "Movement Speed",
							"value": "10/15/20/25/30% for 3s",
						},
					],
				},
			},
			"Id": 23608,
			"Summary": "Stalk Prey",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/stalk-prey.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "100s",
					"cost": "100",
					"description":
						"Martichoras becomes Crowd Control immune and untargetable as he soars into the air, raining down 12 bursts of damaging toxins over 3s. Each time an enemy is hit with a burst, their Physical Protections are reduced.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Debuff, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/10" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "360/540/720/900/1080 (+144% of your Physical Power)",
						},
						{
							"description": "Protection Reduction:",
							"value": "3% per stack/ max 8 stacks",
						},
						{ "description": "Debuff Duration:", "value": "4s" },
					],
				},
			},
			"Id": 23609,
			"Summary": "Death From Above",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/death-from-above.jpg",
		},
		"Basic Damage": { "Base Damage": 33.0, "Per Level": 2.6, "Scaling": 0.9 },
		"Attack Speed": 0.92,
		"Attack Speed Per Level": 0.013,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Maui",
		"HealthPerLevel": 100,
		"ManaPerLevel": 36,
		"Health": 693,
		"Mana": 200,
		"PhysicalProtection": 29.4,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.5,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/maui.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13.5/13/12.5/12s",
					"cost": "60/65/70/75/80",
					"description":
						"Maui charges up, spinning his hook and preparing it to go farther the longer he charges. When he refires, the projectile damages enemies and stops on first god hit. If Maui hits an enemy god he reels them in, crippling and vortexing them towards himself for 1.5s. Maui can cancel this ability at any time.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Vortex, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/170/240/310/380 (+50% of your magical power)",
						},
						{ "description": "Minimum Range:", "value": "10" },
						{ "description": "Maximum Range:", "value": "55" },
					],
				},
			},
			"Id": 23182,
			"Summary": "Master Fisherman",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/master-fisherman.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13/12/11/10s",
					"cost": "55",
					"description":
						"Maui throws an Ulua made of magical water that explodes on landing, giving all allied gods within 35 units Protections and Movement Speed for 5s. The Ulua creates a pillar of water that lasts for 10s. If an allied god stands on the water for 1s, a bubble forms and carries them to Maui's location, where they receive Protections and Movement Speed for 5s. If Maui leaves the aura radius and no ally is on the water, it is destroyed.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff" },
						{ "description": "Range/Radius:", "value": "55/35" },
					],
					"rankitems": [
						{ "description": "Protections", "value": "15/20/25/30/35" },
						{ "description": "Movement Speed", "value": "8/9/10/11/12%" },
						{ "description": "Aura Radius", "value": "110" },
					],
				},
			},
			"Id": 23183,
			"Summary": "Mystical Ulua",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/mystical-ulua.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "70/75/80/85/90",
					"description":
						"Maui leaps, latches his hook onto a ray of sunlight, and swings from it. He swings back and forth before he leaps from the rope and slams his hook into the ground, damaging and stunning all enemies in the area. While he swings, Maui can reactivate this ability at any time to leap early.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "55/17.5" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/145/200/255/310 (+60% of your magical power)",
						},
						{ "description": "Stun Duration", "value": "1.1/1.2/1.3/1.4/1.5s" },
					],
				},
			},
			"Id": 23436,
			"Summary": "Solar Swing",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/solar-swing.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "110/105/100/95/90s",
					"cost": "100",
					"description":
						"Maui selects an area, becomes CC immune and leaps into the air. He throws his hook at the target area and pulls up an island, knocking all enemies in the area up into the air and pulls them in front of himself. The island remains on the battleground, blocking player movement for 4s. Maui can reactivate this ability to destroy the island early.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Range/Radius:", "value": "60/22.5" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "275/375/475/575/675 (+80% of your magical power)",
						},
						{ "description": "Minimum Range:", "value": "20" },
						{ "description": "Maximum Range:", "value": "60" },
					],
				},
			},
			"Id": 23185,
			"Summary": "Landfall",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/landfall.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.85,
		"Attack Speed Per Level": 0.01,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Medusa",
		"HealthPerLevel": 81,
		"ManaPerLevel": 34,
		"Health": 658,
		"Mana": 220,
		"PhysicalProtection": 16.8,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/medusa.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "50",
					"description":
						"Medusa gains increased attack speed and her basic attacks become augmented, shooting Vipers that poison the targets hit dealing damage over time.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Ranged Basic, Buff, Damage",
						},
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "240/300/360/420/480 (+120% of your Physical Power)",
						},
						{
							"description": "Attack Speed Increase:",
							"value": "40/50/60/70/80%",
						},
						{ "description": "Viper Shots:", "value": "4" },
					],
				},
			},
			"Id": 11381,
			"Summary": "Viper Shot",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/viper-shot.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s ",
					"cost": "40/45/50/55/60 ",
					"description":
						"Medusa hurls back and spits out acid that damages the first enemy hit and sprays out acid in a cone behind them. Enemies hit by Acid Spray will have their healing taken reduced. Acid Spray will explode on statues Medusa has created.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Debuff, Damage" },
						{ "description": "Range:", "value": "45/35" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/150/200/250/300 (+85% of your physical power)",
						},
						{ "description": "Healing Reduction:", "value": "40%" },
						{ "description": "Healing Reduction Lifetime:", "value": "5s" },
					],
				},
			},
			"Id": 11420,
			"Summary": "Acid Spray",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/acid-spray.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15/14.5/14/13.5/13s",
					"cost": "70",
					"description":
						"Medusa quickly slithers forward damaging enemies she passes through. The first enemy god she encounters causes her to stop before she damages and roots the god hit.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Root, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/130/180/230/280 (+70% of your physical power)",
						},
						{ "description": "Root Duration:", "value": "1s" },
					],
				},
			},
			"Id": 11157,
			"Summary": "Lacerate",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/lacerate.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Medusa removes her mask revealing her true face, delivering a powerful blast from her horrifying Gorgon gaze. Enemies take damage and are stunned if they are looking at Medusa. Enemies not looking at Medusa take 85% damage and are slowed. Enemy gods that are killed during Medusa's gaze will turn to a stone statue and remain behind as a reminder to others.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Stun, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "300/400/500/600/700 (+100% of your physical power)",
						},
						{ "description": "Stun Duration:", "value": "2s" },
						{
							"description": "Movement Speed Slow:",
							"value": "20/25/30/35/40%",
						},
						{ "description": "Slow Duration:", "value": "3s" },
					],
				},
			},
			"Id": 11377,
			"Summary": "Petrify",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/petrify.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 2.05, "Scaling": 1.0 },
		"Attack Speed": 0.95,
		"Attack Speed Per Level": 0.013,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Mercury",
		"HealthPerLevel": 79,
		"ManaPerLevel": 40,
		"Health": 560,
		"Mana": 200,
		"PhysicalProtection": 16.8,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/mercury.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "9s",
					"cost": "50",
					"description":
						"Mercury moves in the blink of an eye, dealing one melee attack to every enemy within the target area. This ability can Critically Hit, and triggers Ability related Item effects, not Basic Attack related Item effects. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Damage" },
						{ "description": "Range:", "value": "50" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/115/150/185/220 (+60% of your Basic Attack Power)",
						},
						{ "description": "Radius:", "value": "7.5/9/10.5/12/13.5" },
					],
				},
			},
			"Id": 9266,
			"Summary": "Made You Look",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/made-you-look.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "18/17/16/15/14s",
					"cost": "60/65/70/75/80",
					"description":
						"Passive: Mercury gains increased movement speed.\n\nActive: Mercury increases his Attack Speed, cleanses himself of Slows and becomes immune to Slows for the duration.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{ "description": "Ground Speed:", "value": "2/4/6/8/10%" },
						{ "description": "Attack Speed:", "value": "30/40/50/60/70%" },
						{ "description": "Duration:", "value": "5s" },
					],
				},
			},
			"Id": 9269,
			"Summary": "Maximum Velocity",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/maximum-velocity.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "60/65/70/75/80",
					"description":
						"Mercury dashes forward, knocking aside minions, grabbing the first enemy god he encounters and spinning them. The enemy god takes damage until the effect ends, and Mercury throws the god in the direction of his choice.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Dash, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Minion Damage:",
							"value": "70/115/160/205/250 (+64% of your Physical Power)",
						},
						{
							"description": "Damage per Tick:",
							"value":
								"10/15/20/25/30 (+16% of your Physical Power) every 0.25s",
						},
						{ "description": "Duration:", "value": "1s" },
					],
				},
			},
			"Id": 9270,
			"Summary": "Special Delivery",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/special-delivery.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "100s",
					"cost": "80/90/100/110/120",
					"description":
						"Mercury gathers energy for a powerful Dash, with the range extending as he does so. He travels the distance faster than the speed of sound, dealing damage to all enemies, stunning them and spinning them around in a random direction.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Dash, Disorient, Damage",
						},
						{ "description": "Range:", "value": "300" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "200/275/350/425/500 (+100% of your Physical Power)",
						},
						{ "description": "Disorient Duration:", "value": "1.5s" },
					],
				},
			},
			"Id": 9308,
			"Summary": "Sonic Boom",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/sonic-boom.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 2.13, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.024,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Merlin",
		"HealthPerLevel": 79,
		"ManaPerLevel": 55,
		"Health": 518,
		"Mana": 250,
		"PhysicalProtection": 14,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/merlin.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60",
					"description":
						"Merlin conjures an orb of condensed celestial energy that grows in size as it travels, dealing damage every 0.4s and marking Enemies hit.\n\nEnemies marked take additional damage if they stay within the outer range of Eclipse.\n\n(Change stance to Fire/Ice for more information)",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Damage" },
						{ "description": "Range/Radius:", "value": "60/15,35" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "80/180/280/380/480 (+119% of your Magical Power)",
						},
						{
							"description": "D per tick:",
							"value": "5/15/25/35/45 (+8% of your magical power)",
						},
						{ "description": "Duration:", "value": "3s when fully deployed" },
					],
				},
			},
			"Id": 16575,
			"Summary": "Eclipse",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/eclipse.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "16/15/14/13/12s",
					"cost": "60/65/70/75/80",
					"description":
						"Merlin deploys a field of arcane energy at a location. After a delay, the Vortex deals damage and pulls Enemies towards the center.\n\n(Change stance to Fire/Ice for more information)",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Range/Radius:", "value": "60/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "50/80/110/140/170 (+60% of your magical power)",
						},
					],
				},
			},
			"Id": 16576,
			"Summary": "Vortex",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/vortex.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "24/23/22/21/20s",
					"cost": "70",
					"description":
						"Merlin quickly teleports a short distance in front of him.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Teleport" },
						{ "description": "Range:", "value": "30" },
					],
					"rankitems": [],
				},
			},
			"Id": 16577,
			"Summary": "Flicker",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/flicker.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "30/27.5/25/22.5/20s",
					"cost": "40/50/60/70/80",
					"description":
						"Merlin taps into his inner potential, exploding with energy in the stance he is currently attuned to. During this time Merlin can choose which stance to enter into next. \n\nAfter the explosion reaches its apex, it collapses in on itself. Enemies are dealt damage from the both the explosion and the implosion and suffer different effects depending on which stance's energy they are being hit by.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Crowd Control, Damage",
						},
						{ "description": "Radius:", "value": "25" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/110/140/170/210 (+15% of your magical power)",
						},
						{
							"description": "Fire Damage per Tick:",
							"value": "5/10/15/20/25 (+5% of your magical power)",
						},
						{ "description": "Ice Slow:", "value": "20%" },
						{ "description": "Slow duration:", "value": "1.5s" },
						{ "description": "Arcane:", "value": "Knockup" },
					],
				},
			},
			"Id": 16578,
			"Summary": "Elemental Mastery",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/elemental-mastery.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.008,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Morgan Le Fay",
		"HealthPerLevel": 81,
		"ManaPerLevel": 55,
		"Health": 602,
		"Mana": 250,
		"PhysicalProtection": 19.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon":
			"https://webcdn.hirezstudios.com/smite/god-icons/morgan-le-fay.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "11s",
					"cost": "50/55/60/65/70",
					"description":
						"Morgan Le Fay summons a crashing magical sword, imbued by a sigil of her choice which is briefly carved into the ground. Enemy gods hit are Marked while the Sigil causes secondary effects.\n\nMark of Mind, fearing enemies from the center of the Sigil.\nMark of Body, creating a slowing field.\nMark of Soul, spawning a decoy that attacks enemy gods hit for 4s.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "105/150/195/240/285 (+80% of your Magical Power)",
						},
						{
							"description": "Area:",
							"value": "40/55/70/85/100 (30% of your Magical Power)",
						},
						{ "description": "Fear Duration:", "value": "1s" },
						{ "description": "Slow Field Duration:", "value": "4s" },
						{ "description": "Slow:", "value": "35%" },
					],
				},
			},
			"Id": 20096,
			"Summary": "Sigil Mastery",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/sigil-mastery.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13.5/13/12.5/12s",
					"cost": "70/75/80/85/90",
					"description":
						"Morgan Le Fay summons a dragon apparition which bursts from the ground in front of her, dealing damage and knocking up enemies hit.\n\nThe dragon then flies forward, dealing damage again and knocking back enemies.\n\nApplies Mark of Spirit to enemy gods hit.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Area, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "60" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "125/170/215/260/305 (+85% of your Magical Power)",
						},
						{
							"description": "Dragon:",
							"value": "75/100/125/150/175 (+50% of your Magical Power)",
						},
					],
				},
			},
			"Id": 20097,
			"Summary": "Dragonflight",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/dragonflight.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "60",
					"description":
						"Morgan Le Fay dons and sends out a cloak of wildfire, damaging enemies and stopping on enemy gods. On expiring the wildfire explodes, leaving a 4s debuff on enemies that continues to deal damage. While the debuff persists, enemies that use a movement ability combust, taking damage again. Morgan Le Fay gains Movement speed for using this ability and can extend the debuff on enemies with continued basic attacks. Applies Mark of Matter to enemy gods hit.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Debuff, Damage" },
						{ "description": "Range/Radius:", "value": "60/12" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "115/180/245/310/375 (+75% of your Magical Power)",
						},
						{
							"description": "Tick:",
							"value": "5/10/15/20/25 (+5% of your magical power)",
						},
						{
							"description": "Bonus:",
							"value": "60/90/120/150/180 (+20% of your magical power)",
						},
						{ "description": "Movement Speed:", "value": "16/18/20/22/24%" },
						{ "description": "Buff Duration:", "value": "4s" },
					],
				},
			},
			"Id": 20098,
			"Summary": "Shroud of Wildfire",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/shroud-of-wildfire.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80/85/90/95/100",
					"description":
						"Morgan Le Fay rises into the air, consuming the Marks on enemies in front of her, dealing damage and empowering her next strikes.\n\nFor a short duration after Morgan Le fay can fire out 3 devastating strikes of dark energy, dealing damage and providing a Missing Health Heal per enemy god hit.\nInitial Marks consumed increase the width of the energy projectiles. Subsequent heals per projectile is reduced by 50%.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Heal, Damage" },
						{ "description": "Range:", "value": "70/100" },
					],
					"rankitems": [
						{
							"description": "Total Damage",
							"value": "395/590/785/980/1175 (+160% of your Magical Power)",
						},
						{
							"description": "Projectiles:",
							"value": "90/130/170/210/250 (+40% of your Magical Power)",
						},
						{
							"description": "Missing Health Heal:",
							"value": "4.5/5/5.5/6/6.5%",
						},
						{ "description": "Duration:", "value": "4s" },
					],
				},
			},
			"Id": 20099,
			"Summary": "Consuming Power",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/consuming-power.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.008,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Mulan",
		"HealthPerLevel": 88,
		"ManaPerLevel": 38,
		"Health": 686,
		"Mana": 220,
		"PhysicalProtection": 25.2,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/mulan.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13.5/13/12.5/12s",
					"cost": "60/65/70/75/80",
					"description":
						"Mulan swings her sword with precision, striking twice and dealing damage to all enemies hit.\n\nSkilled - Mulan gains an Attack Speed increase after using this ability.\nAdept - Mulan strikes a third time in a large cone in front of her.\nMastered - Mulan gains 10% Attack Speed.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Buff, Damage" },
						{ "description": "Range:", "value": "25" },
					],
					"rankitems": [
						{
							"description": "Total Damage",
							"value": "225/285/345/405/465 (+90% of your Physical Power)",
						},
						{ "description": "Attack Speed:", "value": "25%" },
						{ "description": "Duration:", "value": "6s" },
					],
				},
			},
			"Id": 17913,
			"Summary": "Cross Strike",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/cross-strike.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "50/55/60/65/70",
					"description":
						"Mulan brings forth her spear striking in front of her, dealing damage and slowing all enemies hit.\n\nSkilled - Mulan heals for up to 3 enemies hit.\nAdept - Mulan strikes a second time further in front of her, dealing bonus damage if she hits the same enemy.\nMastered - Mulan gains 5% Power.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Slow, Damage" },
						{ "description": "Range:", "value": "25/35" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "220/310/400/490/580 (+80% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "25%" },
						{ "description": "Duration:", "value": "3s" },
						{ "description": "Heal:", "value": "12/23/34/45/56" },
						{
							"description": "Bonus:",
							"value": "20/30/40/50/60 (+10% of your Physical Power)",
						},
					],
				},
			},
			"Id": 17914,
			"Summary": "Spear Thrust",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/spear-thrust.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "60",
					"description":
						"Mulan readies herself and fires an arrow with a rope attached to it. If she hits an enemy god she stuns them, dealing damage and pulling them towards her while dashing and hitting them again for extra damage.\n\nSkilled - Mulan gains a Protection buff after hitting an enemy god.\nAdept - Mulan is able to dash to walls.\nMastered - Mulan gains 5% Movement Speed & 5% Protections.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Stun, Damage" },
						{ "description": "Range:", "value": "60" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "130/185/240/295/350 (+70% of your Physical Power)",
						},
						{ "description": "Stun Duration:", "value": "1s" },
						{
							"description": "Bonus:",
							"value": "40/50/60/70/80 (+20% of your Physical Power)",
						},
						{
							"description": "Protection Increase:",
							"value": "25/30/35/40/45",
						},
						{ "description": "Duration:", "value": "6s" },
					],
				},
			},
			"Id": 17915,
			"Summary": "Grapple",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/grapple.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Mulan brings forth her entire arsenal dashing forwards with sword slashes, dealing damage and rooting enemies for 1s.\nIf she hits an enemy god during the dash, Mulan uses her new divine energy to knock up enemies with her spear before firing a large projectile attack with her bow.\nDealing damage with any part of this ability gains Skill towards the weapon used. Mulan also gains Protections for the duration.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Area, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "65/65/85" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "355/505/655/805/955 (+160% of your Physical Power)",
						},
						{
							"description": "Spear:",
							"value": "100/140/180/220/260 (+40% of your Physical Power)",
						},
						{
							"description": "Arrow:",
							"value": "175/225/275/325/375 (+60% of your Physical Power)",
						},
						{ "description": "Protection Increase:", "value": "30%" },
					],
				},
			},
			"Id": 17916,
			"Summary": "Divine Mastery",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/divine-mastery.jpg",
		},
		"Basic Damage": { "Base Damage": 37.0, "Per Level": 2.0, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.01,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Ne Zha",
		"HealthPerLevel": 79,
		"ManaPerLevel": 35,
		"Health": 560,
		"Mana": 200,
		"PhysicalProtection": 16.8,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/ne-zha.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "50/55/60/65/70",
					"description":
						"Ne Zha throws the Universe Ring, bouncing several times, dealing damage, applying a Physical Protection Debuff for 3s and Slowing by 12.5% for 1s. Each hit also stacks a movement speed buff on Ne Zha for 2s. Subsequent hits on the same target deal 35% less damage and double the Slow's effectiveness.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Slow, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Initial Damage:",
							"value": "80/110/140/170/200 (+40% of your Physical Power)",
						},
						{
							"description": "Damage:",
							"value": "75/100/125/150/175 (+20% of your Physical Power)",
						},
						{ "description": "Bounces:", "value": "4/5/6/7/8" },
						{
							"description": "Protections Debuff:",
							"value": "5/7/9/11/13 per hit",
						},
						{ "description": "Movement Speed:", "value": "5% per hit" },
					],
				},
			},
			"Id": 8798,
			"Summary": "Universe Ring Toss",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/universe-ring-toss.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "55/60/65/70/75",
					"description":
						"Ne Zha empowers himself with fighting spirit, igniting his spear for increased Attack Speed and Critical Strike Chance for a short duration. Upon activation, Ne Zha also heals himself based on each stack of his passive ability.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{ "description": "Attack Speed:", "value": "25/32.5/40/47.5/55%" },
						{ "description": "Critical Strike Chance:", "value": "20%" },
						{ "description": "Duration:", "value": "4/4.5/5/5.5/6s" },
						{ "description": "Healing:", "value": "2/4.5/7/9.5/12" },
					],
				},
			},
			"Id": 8800,
			"Summary": "Flaming Spear",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/flaming-spear.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "75",
					"description":
						"Ne Zha throws out his Armillary Sash hitting the first enemy god in its path. The target is Stunned as Ne Zha yanks himself toward the target, dealing a powerful blow to all enemies in the area as he arrives.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Stun, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/140/190/240/290 (+150% of your Physical Power)",
						},
						{ "description": "Stun:", "value": "1s" },
					],
				},
			},
			"Id": 8799,
			"Summary": "Armillary Sash",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/armillary-sash.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80/90/100/110/120",
					"description":
						"Ne Zha dashes forward, gaining bonus Protections for 4s and becoming CC immune. If he hits an enemy god he lifts them into the sky for 4s, unleashing a 3-hit combo. Successfully timed attacks during the combo result in these hits dealing Critical Damage. They are then smashed back to Earth, slightly knocking up and damaging the target and enemies around the landing location. When Ne Zha lands he gains bonus Protections for 5s and dashes back to where he cast this ability.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Dash, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "169/330/511/652/813 (+265% of your Physical Power)",
						},
						{
							"description": "(Initial/Landing):",
							"value": "50/105/160/215/270 (+65% of your Physical Power)",
						},
						{ "description": "Protections:", "value": "30/35/40/45/50" },
					],
				},
			},
			"Id": 8801,
			"Summary": "Wind Fire Wheels",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/wind-fire-wheels.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.2, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.021,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Neith",
		"HealthPerLevel": 79,
		"ManaPerLevel": 39,
		"Health": 640,
		"Mana": 230,
		"PhysicalProtection": 16.8,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/neith.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "13/12.5/12/11.5/11s",
					"cost": "40/45/50/55/60",
					"description":
						"Neith fires a shot that passes through everything. Each enemy hit takes damage and is Rooted. If the Spirit Arrow hits a Broken Weave, the Weave detonates, dealing an additional 100% of the damage and applying the Root to all enemies in the area.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Root, Damage" },
						{ "description": "Range/Radius:", "value": "70/25" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/155/220/285/350 (+90% of your Physical Power)",
						},
						{ "description": "Root:", "value": "1.6/1.7/1.8/1.9/2s" },
					],
				},
			},
			"Id": 8643,
			"Summary": "Spirit Arrow",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/spirit-arrow.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13.5/13/12.5/12s",
					"cost": "70",
					"description":
						"Neith neatly unravels the world weaves, damaging all enemies in the target area, reducing their Attack Speed while increasing her own, and healing Neith for each enemy hit, up to 3. Any Broken Weaves in the area are removed, healing Neith an additional amount.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Heal, Damage" },
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/110/150/190/230 (+100% of your Physical Power)",
						},
						{ "description": "Attack Speed Buff/Debuff:", "value": "30%" },
						{ "description": "Buff/Debuff Lifetime:", "value": "4s" },
						{ "description": "Heal:", "value": "20/35/50/65/80" },
						{ "description": "Weave Heal:", "value": "40/70/100/130/160" },
					],
				},
			},
			"Id": 8730,
			"Summary": "Unravel",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/unravel.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "60/65/70/75/80",
					"description":
						"Neith backflips through the air, creating a Broken Weave as she leaps while damaging and Slowing enemies in the area in front of her.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Leap, Damage" },
						{ "description": "Range:", "value": "35/60" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/120/160/200/240 (+80% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "30%" },
						{ "description": "Slow Duration:", "value": "2.5/3/3.5/4/4.5s" },
					],
				},
			},
			"Id": 8649,
			"Summary": "Backflip",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/backflip.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80/90/100/110/120",
					"description":
						"Neith charges up and fires an arrow across the world, seeking its target through obstacles. Enemy gods take damage and are Stunned. The arrow can be fired quicker for diminished results.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Target, Stun, Damage" },
						{ "description": "Range:", "value": "Global" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "235/300/365/430/495 (+125% of your Physical Power)",
						},
						{ "description": "Stun:", "value": "1.5s" },
					],
				},
			},
			"Id": 8706,
			"Summary": "World Weaver",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/world-weaver.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 2.3, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.016,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Nemesis",
		"HealthPerLevel": 80,
		"ManaPerLevel": 38,
		"Health": 658,
		"Mana": 210,
		"PhysicalProtection": 15.4,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/nemesis.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "13/12.5/12/11.5/11s",
					"cost": "50",
					"description":
						"Nemesis dashes in a line, dealing damage to enemies in her path and may dash again within 2s. She may use Basic Attacks and Abilities between the dashes.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Damage" },
						{ "description": "Range:", "value": "30" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "50/80/110/140/170 (+35% of your Physical Power)",
						},
					],
				},
			},
			"Id": 9671,
			"Summary": "Swift Vengeance",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/swift-vengeance.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "11s",
					"cost": "60/65/70/75/80",
					"description":
						"Nemesis swings her blade, dealing damage in an area in front of her. Enemies in the center of her swing are struck for 2x damage and Slowed for 2s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Slow, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Center Damage:",
							"value": "110/170/230/290/350 (+80% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "30%" },
					],
				},
			},
			"Id": 9601,
			"Summary": "Slice and Dice",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/slice-and-dice.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Nemesis activates a temporary Shield around herself that protects her from a set amount of damage, or until time expires. A percentage of incoming damage from gods is healed and reflected back to the source. Hard Crowd Control effects remove the Shield.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Buff, Damage" },
					],
					"rankitems": [
						{
							"description": "Damage Reflect:",
							"value": "50% of damage received",
						},
						{ "description": "Healing:", "value": "70% of damage received" },
						{ "description": "Shield Health:", "value": "100/180/260/340/420" },
						{ "description": "Duration:", "value": "2.5s" },
					],
				},
			},
			"Id": 9688,
			"Summary": "Retribution",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/retribution.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "90/95/100/105/110",
					"description":
						"Nemesis chooses a single enemy god, reducing their Health and movement speed and stealing a portion of their Protections for a time period. Her movement speed is also increased during this time.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Target, Debuff, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/10" },
					],
					"rankitems": [
						{
							"description": "D:",
							"value": "15/17.5/20/22.5/25% of current HP",
						},
						{ "description": "Protections:", "value": "25%" },
						{ "description": "Move Speed:", "value": "10/10/15/15/20%" },
						{ "description": "Target Debuff Duration:", "value": "5s" },
						{ "description": "Nemesis Buff Duration:", "value": "5s" },
					],
				},
			},
			"Id": 9686,
			"Summary": "Divine Judgement",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/divine-judgement.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.25, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.022,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Nike",
		"HealthPerLevel": 87,
		"ManaPerLevel": 38,
		"Health": 672,
		"Mana": 220,
		"PhysicalProtection": 21,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/nike.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13.5/13/12.5/12s",
					"cost": "60/65/70/75/80",
					"description":
						"Nike slams the ground three times, sending out fissures that deal damage. If a target is hit twice, that target loses protections for 5 seconds. If a target is hit three times, that target is disarmed. Nike is immune to Knockback for the duration.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Disarm, Damage" },
						{ "description": "Range:", "value": "50" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "60/90/120/150/180 (+40% of your Physical Power)",
						},
						{ "description": "Protections Shred:", "value": "8/12/16/20/24" },
						{
							"description": "Disarm Duration:",
							"value": "1/1.25/1.5/1.75/2s",
						},
					],
				},
			},
			"Id": 13684,
			"Summary": "Rend",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/rend.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "13",
					"cost": "60/65/70/75/80",
					"description":
						"Nike conjures a protective barrier in front of her that blocks ranged Basic Attacks. While focused on the barrier Nike's ability to turn is limited and she is knockback immune. Enemies who get near the barrier are repelled. At any point, Nike can re-fire the ability to collapse the barrier and deal damage to enemies in front of the barrier.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Cone, Knockback, Damage",
						},
						{ "description": "Range:", "value": "25" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/140/200/260/320 (+50% of your Physical Power)",
						},
						{
							"description": "Repel Damage:",
							"value": "10/15/20/25/30 (+5% of your Physical Power)",
						},
						{ "description": "Duration:", "value": "4s" },
					],
				},
			},
			"Id": 17454,
			"Summary": "Barrier Formation",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/barrier-formation.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "55/60/65/70/75",
					"description":
						"Nike leaps into the air, then crashes down at a location dealing damage and knocking up enemies.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/130/180/230/280 (+60% of your Physical Power)",
						},
					],
				},
			},
			"Id": 13682,
			"Summary": "Valiant Leap",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/valiant-leap.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "90/95/100/105/110",
					"description":
						"Nike transforms into an armored sentinel and sends out a shockwave that damages and slows enemies around her. While in this form, she gains a percentage of her max health as a shield that lasts for 10 seconds.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Slow, Damage" },
						{ "description": "Radius:", "value": "40" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "200/250/300/350/400 (+70% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "40%" },
						{
							"description": "Shield:",
							"value": "25/27.5/30/32.5/35% of Max Health",
						},
						{ "description": "Slow Duration:", "value": "4s" },
					],
				},
			},
			"Id": 13649,
			"Summary": "Sentinel of Zeus",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/sentinel-of-zeus.jpg",
		},
		"Basic Damage": { "Base Damage": 37.0, "Per Level": 2.0, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Nox",
		"HealthPerLevel": 79,
		"ManaPerLevel": 38,
		"Health": 511,
		"Mana": 250,
		"PhysicalProtection": 25.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.8,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/nox.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "50/55/60/65/70",
					"description":
						"Nox extends her shadow forward, damaging enemies. If this shadow hits an enemy god it stops, rooting and crippling them in place and dealing damage over time instead. Nox must channel and stay within range to maintain hold on the target, but may cancel this ability early. Nox will continue to channel this ability even if she is hit by Crowd Control effects. While channeling this ability Nox suffers no directional movement penalty.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "65" },
					],
					"rankitems": [
						{
							"description": "Minion Damage:",
							"value": "80/125/170/215/260 (+60% of your magical power)",
						},
						{
							"description": "Damage Over Time:",
							"value": "30/40/50/60/70 (+20% of your magical power) every 0.5s",
						},
						{ "description": "Duration:", "value": "2s" },
					],
				},
			},
			"Id": 11648,
			"Summary": "Shadow Lock",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/shadow-lock.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "70/75/80/85/90",
					"description":
						"Nox creates a void of darkness that silences all enemies within. After a short duration it explodes, dealing damage.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Silence, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/160/230/300/370 (100% of your Magical Power)",
						},
						{ "description": "Duration:", "value": "2s" },
					],
				},
			},
			"Id": 11612,
			"Summary": "Siphon Darkness",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/siphon-darkness.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "90",
					"description":
						"Nox dashes forward, dealing damage to all enemies. If she hits an allied god, she leaps into their shadow, traveling with them. When Nox exits a shadow, she deals damage again in a radius around her. Nox may cancel this ability early to exit shadows.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/110/150/190/230 (+70% of your Magical Power)",
						},
					],
				},
			},
			"Id": 11640,
			"Summary": "Shadow Step",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/shadow-step.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90/85/80/75/70s",
					"cost": "100",
					"description":
						"Nox unleashes a vortex of dark energy that explodes on contact with an enemy god, dealing damage to all enemies in range 20 and applying damage over time. Enemies hit are also weakened, dealing less damage for the duration.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Debuff, Damage" },
						{ "description": "Range/Radius:", "value": "120/20" },
					],
					"rankitems": [
						{
							"description": "Initial Hit:",
							"value": "200/250/300/350/400 (+75% of your Magical Power)",
						},
						{
							"description": "DOT Effect:",
							"value":
								"20/25/30/35/40 (+5% of your magical power) every 1s for 5s",
						},
						{ "description": "Total Damage:", "value": "300/375/450/525/600 (+100% of your Magical Power)" },
					],
				},
			},
			"Id": 11659,
			"Summary": "Night Terror",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/night-terror.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.008,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Nu Wa",
		"HealthPerLevel": 79,
		"ManaPerLevel": 43,
		"Health": 560,
		"Mana": 265,
		"PhysicalProtection": 12.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.9,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/nu-wa.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "60/65/70/75/80",
					"description":
						"Nu Wa condenses moisture into fog at her location which then rolls forward away from her. She and all allies are Stealthed while inside the fog, and have increased movement speed. Attacking breaks the Stealth effect for 1s.\n\nEnemies that run into the fog take damage, and continue to take additional damage again every second they are in the fog.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Range/Radius:", "value": "110/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "50/75/100/125/150 (+50% of your Magical Power)",
						},
						{
							"description": "Damage per Tick:",
							"value": "10/20/30/40/50 (+10% of your magical power)",
						},
						{ "description": "Lifetime:", "value": "6s" },
						{ "description": "Movement Speed:", "value": "10%" },
						{
							"description": "Fog Movement Speed:",
							"value": "300/320/340/360/380",
						},
					],
				},
			},
			"Id": 9438,
			"Summary": "Mysterious Fog",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/mysterious-fog.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "60/70/80/90/100",
					"description":
						"Nu Wa conjures Clay Soldiers from the Earth. If she marked a target while summoning them, they will pursue that target until it dies. If she summoned them with no target, they will attack enemy gods who damage Nu Wa, or closest enemies.\n\nSoldiers live for 10s. First they will dash at enemies within 30 units, applying a stack of protection reduction. Stacks up to 3 times, stacks last 2s. They will basic attack after that. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Pet, Damage" },
						{ "description": "Range/Radius:", "value": "40/10" },
					],
					"rankitems": [
						{
							"description": "Number Conjured:",
							"value": "2/2/2/2/3 Soldiers",
						},
						{
							"description": "Soldier's Health:",
							"value": "200 (20% of your Maximum Health)",
						},
						{
							"description": "Dash Magical Protection Reduction Per Stack:",
							"value": "4/8/12/16/20 ",
						},
						{
							"description": "Basic Attack Damage:",
							"value": "20/30/40/50/60 Per Hit",
						},
					],
				},
			},
			"Id": 9443,
			"Summary": "Clay Soldiers",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/clay-soldiers.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "8s",
					"cost": "50",
					"description":
						"Nu Wa launches a mass of shining metal, damaging all enemies it hits. If it hits one of her Clay Soldiers, it explodes, dealing additional damage and Stunning enemies.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/130/170/210/250 (+75% of your Magical Power)",
						},
						{
							"description": "Minion Explode:",
							"value": "30/60/90/120/150 (+25% of your Magical Power)",
						},
						{ "description": "Minion Stun:", "value": "1/1.1/1.2/1.3/1.4s" },
					],
				},
			},
			"Id": 10335,
			"Summary": "Shining Metal",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/shining-metal.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "110s",
					"cost": "100",
					"description":
						"Nu Wa flies up into the clouds, gaining visibility on all enemy gods, and summoning fire shards from the sky to damage each of them. As she lifts off the ground, she can pass through player-made deployables.",
					"menuitems": [{ "description": "Ability Type:", "value": "Damage" }],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/175/250/325/400 (+30% of your Magical Power)",
						},
					],
				},
			},
			"Id": 10362,
			"Summary": "Fire Shards",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/fire-shards.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.017,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Odin",
		"HealthPerLevel": 87,
		"ManaPerLevel": 35,
		"Health": 658,
		"Mana": 200,
		"PhysicalProtection": 22.4,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/odin.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "16/15/14/13/12s",
					"cost": "45/50/55/60/65",
					"description":
						"Odin lunges to his target location, doing damage to all nearby enemies.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "120/165/210/255/300 (+70% of your Physical Power)",
						},
					],
				},
			},
			"Id": 7598,
			"Summary": "Lunge",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/lunge.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13.5/13/12.5/12s",
					"cost": "50/55/60/65/70",
					"description":
						"Odin summons a flock of Ravens that create a Shield around him. When the Shield expires it explodes outward, dealing damage to nearby enemies based on how much Health it had remaining. If the Shield is at full Health, it deals additional bonus damage. The Shield will not expire while Odin is using Lunge, and will always detonate upon landing.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Shield Health:",
							"value": "100/160/220/280/340 (+50% of your Physical Power)",
						},
						{ "description": "Duration:", "value": "4s" },
						{ "description": "Bonus Damage:", "value": "15%" },
					],
				},
			},
			"Id": 10488,
			"Summary": "Raven Shout",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/raven-shout.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "70",
					"description":
						"Odin begins empowering Gungnir with Runic Magic, becoming immune to knockbacks. Every .7s Gungnir changes runes and Odin pulses out damage around him, slowing enemies for 2s. When Odin releases Gungnir it travels forward, damaging enemies and stopping on the first god hit. The first rune causes allies around Odin to gain Attack Speed for 3s. The second allows Gungnir to home onto enemy gods. The last rune allows Gungnir to stun.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "60/20" },
					],
					"rankitems": [
						{
							"description": "Pulse Damage:",
							"value": "30/50/70/90/110 (+20% of your Physical Power)",
						},
						{ "description": "Pulse Slow:", "value": "20%" },
						{
							"description": "Gungnir Damage:",
							"value": "60/120/180/240/300 (+60% of your Physical Power)",
						},
						{ "description": "Attack Speed:", "value": "30%" },
						{ "description": "Stun Duration:", "value": "1.2s" },
					],
				},
			},
			"Id": 18301,
			"Summary": "Gungnir's Might",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/gungnirs-might.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "110/105/100/95/90s",
					"cost": "100",
					"description":
						"Odin summons a wall of spears. Enemies inside the ring cannot heal and have their power reduced by 15%. Odin is immune to Slows and Roots while in his Ring. A portion of the wall can be destroyed when hit by 5 Basic Attacks. Enemies that leave the ring through or over a wall are chased by Gungnir, taking damage and becoming slowed for 2.5s. Enemies that die inside Ring of Spears grant Odin a permanent bonus to Physical Power.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Buff, Damage" },
						{ "description": "Radius:", "value": "30" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "120/190/260/330/400 (+75% of your Physical Power)",
						},
						{ "description": "Duration:", "value": "5s" },
						{
							"description": "Physical Power:",
							"value": "5 Power per stack/ max 10 stacks.",
						},
						{ "description": "Healing Reduction:", "value": "All Healing" },
						{ "description": "Slow:", "value": "25%" },
					],
				},
			},
			"Id": 18099,
			"Summary": "Ring of Spears",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/ring-of-spears.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 2.0, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.011,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Olorun",
		"HealthPerLevel": 79,
		"ManaPerLevel": 58,
		"Health": 630,
		"Mana": 240,
		"PhysicalProtection": 18.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/olorun.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "50/60/70/80/90",
					"description":
						"Olorun charges an orb of pure energy for up to 2s before firing it in front of him. The longer he charges the farther the projectile goes, passing through and damaging Enemy minions but stopping on colliding with Enemy gods.\n\nThis ability can Critically Hit and can provide stacks of Overflowing Divinity.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "110" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "110/155/200/245/290 (+55% of your Magical Power)",
						},
					],
				},
			},
			"Id": 17182,
			"Summary": "Focused Light",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/focused-light.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Olorun gains amplified Attack Speed. Every successful attack on an Enemy during the buff provides his inner Sun with energy, to a cap of 20 stacks.\nDuring the buff or for 4s after, Olorun can refire this ability to conjure the Sun to damage Enemies in an area. The Sun emits projectiles faster and more randomly with higher ammo. Hitting the same Enemy deals 20% less damage each time, to a maximum of 90% reduction.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Range/Radius:", "value": "65/15" },
					],
					"rankitems": [
						{ "description": "Attack Speed:", "value": "40%" },
						{ "description": "Duration:", "value": "4/4.5/5/5.5/6s" },
						{
							"description": "Damage:",
							"value": "50/70/90/110/130 (+25% of your Magical Power)",
						},
					],
				},
			},
			"Id": 17183,
			"Summary": "Overflowing Divinity",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/overflowing-divinity.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Olorun expends the light within himself knocking back and damaging nearby Enemies as well as slowing them for 2s.\n\nOlorun and allies are bathed in the light, gaining a heal over time that ticks every second for 5s. For every ally god healed, Olorun gains Physical and Magical protections.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockback, Damage",
						},
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "60/80/100/120/140 (+20% of your magical power)",
						},
						{ "description": "Heal per Tick:", "value": "10/15/20/25/30" },
						{
							"description": "Protections:",
							"value": "8/10/12/14/16 per ally god healed",
						},
						{ "description": "Slow:", "value": "30%" },
					],
				},
			},
			"Id": 17184,
			"Summary": "Consecration",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/consecration.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "120/115/110/105/100s",
					"cost": "100",
					"description":
						"Olorun brings forth Olodumare and Olofi who travel outwards, creating a large area of divine energy that distorts the flow of time within.\nAll Enemies caught in the area are negatively affected by the time dilation, attacking, casting and even animating more slowly.\nOlorun himself benefits from the Sanctified Field in a similar way.\nThe strength of the divine field also impacts the effect of buffs, debuffs, projectiles and deployables.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Buff" },
						{ "description": "Range:", "value": "85" },
					],
					"rankitems": [
						{ "description": "Enemy Debuff:", "value": "40% slower" },
						{ "description": "Self Buff:", "value": "30% faster" },
						{ "description": "Area Duration:", "value": "5s" },
					],
				},
			},
			"Id": 17185,
			"Summary": "Sanctified Field",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/sanctified-field.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 2.4, "Scaling": 0.25 },
		"Attack Speed": 1.05,
		"Attack Speed Per Level": 0.016,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Osiris",
		"HealthPerLevel": 92,
		"ManaPerLevel": 40,
		"Health": 679,
		"Mana": 230,
		"PhysicalProtection": 25.2,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/osiris.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "6s",
					"cost": "30",
					"description":
						"Osiris throws his Sickle forward. It passes through minions and stops on the first god hit, dealing damage and Slowing them. If the Sickle hits a god, it remains for the duration of the Slow. Additionally, the Sickle only deals 75% damage to minions.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Slow, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/120/170/220/270 (+45% of your Physical Power)",
						},
						{ "description": "Slow Duration:", "value": "3s" },
						{ "description": "Slow:", "value": "20%" },
					],
				},
			},
			"Id": 9946,
			"Summary": "Sickle Strike",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/sickle-strike.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "11s",
					"cost": "50/55/60/65/70",
					"description":
						"Osiris imbues his flail with spiritual energy, striking at the target ground location. Enemies hit take damage, and Osiris gains movement speed. If an enemy is under the effect of Sickle Strike, the target's Slow is increased in power and duration.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Slow, Damage" },
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/145/200/255/310 (+75% of your Physical Power)",
						},
						{ "description": "Sickle Slow Increase:", "value": "40% for 3s." },
						{ "description": "Speed Buff:", "value": "20% for 3s." },
					],
				},
			},
			"Id": 9947,
			"Summary": "Spirit Flail",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/spirit-flail.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s ",
					"cost": "60/65/70/75/80",
					"description":
						"Osiris flings out mummy wraps, tethering himself to all nearby enemy gods. Targets hit have their Attack Speed reduced and deal reduced damage over the next 4s. The tether can be broken by targets moving far enough away from Osiris. Targets still in range when the duration expires are Stunned.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Stun" },
						{ "description": "Radius:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage Reduction:",
							"value": "10/12.5/15/17.5/20%",
						},
						{
							"description": "Attack Speed Reduction:",
							"value": "20/22.5/25/27.5/30%",
						},
						{ "description": "Stun Duration:", "value": "1.4s " },
					],
				},
			},
			"Id": 9953,
			"Summary": "Judgement Tether",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/judgement-tether.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "70s",
					"cost": "100",
					"description":
						"Osiris sheds any remaining fragments, gaining the benefit of his Passive, and leaps forward. Osiris targets all enemy gods in the landing area, and rips a fragment of their spirits out, dealing damage, afflicting them with negative Cooldown Reduction, and preventing them from healing. Targets are Rooted for 0.4s during the attack. Enemy minions in the target area also take damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "60/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "220/320/420/520/620 (80% of your Physical Power)",
						},
						{ "description": "Negative CDR:", "value": "-20%" },
						{ "description": "Healing Reduction:", "value": "All Healing" },
						{ "description": "Duration:", "value": "6s" },
					],
				},
			},
			"Id": 10000,
			"Summary": "Lord of the Afterlife",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/lord-of-the-afterlife.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.25, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.014,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Pele",
		"HealthPerLevel": 81,
		"ManaPerLevel": 40,
		"Health": 644,
		"Mana": 240,
		"PhysicalProtection": 16.8,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/pele.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "40/45/50/55/60",
					"description":
						"Pele flourishes and fires out a magma orb ahead of her in a line, dealing damage and granting her fuel per enemy hit. Once the fiery projectile reaches maximum distance it hovers for a brief instant, solidifies, and then returns back in pieces, dealing damage to enemies on the way back. The number of shards returning is dependent on the rank of this ability.\n\nPele has 2 charges of this ability.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "60" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "60/100/140/180/220 (+60% of your Physical Power)",
						},
						{
							"description": "Return Damage:",
							"value": "30 (+15% of your Physical Power)",
						},
						{ "description": "Fuel Gain:", "value": "5" },
					],
				},
			},
			"Id": 16201,
			"Summary": "Pyroclast",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/pyroclast.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "60/65/70/75/80",
					"description":
						"Pele fiercely erupts energy into the ground, exploding in an area around her, causing damage and Knockup to all enemies.\n\nAt ranks 3 and 5 the area expands again at a delay, dealing less damage and a smaller Knockup.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Radius:", "value": "15/25/35" },
					],
					"rankitems": [
						{
							"description": "Inner Damage:",
							"value": "70/115/160/205/250 (+80% of your Physical Power)",
						},
					],
				},
			},
			"Id": 16279,
			"Summary": "Eruption",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/eruption.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "0s",
					"cost": "10",
					"description":
						"Pele churns the land around her, dealing damage to nearby enemies and providing constant movement speed while this ability is active.\nToggle this ability again to enter an amplified state, expending more fuel but dealing more damage and providing additional movement speed.\nThis ability has no cooldown but uses fuel and cannot be activated when below 10 fuel.\nThis damage does not trigger Item effects.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Radius:", "value": "10" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "10/15/20/25/30 (+5% of your Physical Power)",
						},
						{ "description": "Speed:", "value": "30%" },
						{
							"description": "Amplified:",
							"value": "20/35/50/65/80 (+20% of your Physical Power)",
						},
						{ "description": "Amplified Speed:", "value": "60%" },
						{ "description": "Initial Fuel Cost:", "value": "5" },
					],
				},
			},
			"Id": 16203,
			"Summary": "Magma Rush",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/magma-rush.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"After a short warm up, Pele dashes forwards dealing massive damage and a slow to the first enemy God hit, and dealing additional damage to enemies behind in a cone.\n\nFor the next 10 seconds or 4 attacks, every time Pele hits an enemy with a basic attack, she instead deals ability damage in a cone originating from that enemy. During this time Pele's basic attacks deal 50% reduced damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Slow, Damage" },
						{ "description": "Range:", "value": "60/35" },
					],
					"rankitems": [
						{
							"description": "Total Damage (Dash + All 4 Enhanced Autos):",
							"value": "580/825/1070/1315/1560 (+220% of your Physical Power)",
						},
						{
							"description": "Cone Autos:",
							"value": "100/140/180/220/260 (+40% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "20/25/30/35/40%" },
						{ "description": "Slow Duration:", "value": "3s" },
					],
				},
			},
			"Id": 16204,
			"Summary": "Volcanic Lightning",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/volcanic-lightning.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.25, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.02,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Persephone",
		"HealthPerLevel": 79,
		"ManaPerLevel": 55,
		"Health": 518,
		"Mana": 280,
		"PhysicalProtection": 12.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.9,
		"MagicProtectionPerLevel": 1.6,
		"God Icon":
			"https://webcdn.hirezstudios.com/smite/god-icons/persephone.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12/11.5/11/10.5/10s",
					"cost": "60/65/70/75/80",
					"description":
						"Persephone calls forth a Skeletal Warrior from the underworld. This warrior charges forward, damaging minions and stopping on gods. Enemy gods hit are slowed for 2.5s. Wherever it stops its skull falls, becoming a Harvest Skull.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Slow, Damage" },
						{ "description": "Range:", "value": "65" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/150/200/250/300 (90% of your Magical Power)",
						},
						{ "description": "Slow:", "value": "20/22.5/25/27.5/30%" },
					],
				},
			},
			"Id": 19948,
			"Summary": "Bone Rush",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/bone-rush.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "60/65/70/75/80",
					"description":
						"Persephone summons an explosion at a target location that places 3 Harvest Skulls. She can activate these Harvest plants with her Basic Attacks. When the Skulls are activated she restores health to herself. After 4s the Skulls turn into Harvest Flowers. When activated these Flowers charge forward in the direction hit, biting any target that gets close. Enemies recently bitten take reduced damage from other bites, stacking 3 times. She can have up to (5/5/6/6/7) Harvest Plants out at any time.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Damage" },
						{ "description": "Range/Radius:", "value": "50/12.5" },
					],
					"rankitems": [
						{
							"description": "Explosion:",
							"value": "90/140/190/240/290 (+70% of your Magical Power)",
						},
						{ "description": "Heal:", "value": "18/30/42/54/66" },
						{
							"description": "Bite:",
							"value": "40/75/110/145/180 (+30% of your Magical Power)",
						},
						{ "description": "Reduced Damage:", "value": "50/75/87.5%" },
					],
				},
			},
			"Id": 20205,
			"Summary": "Harvest",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/harvest.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15/14.5/14/13.5/13s",
					"cost": "70",
					"description":
						"Persephone floods the ground with necrotic energy that propels her from the ground directly forwards or backwards; based on the direction she is moving. Harvest plants inside the area immediately become Harvest Flowers and activate, charging in the direction Persephone is facing. Enemies caught in this area take damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "45/20" },
					],
					"rankitems": [
						{
							"description": "Explosion:",
							"value": "65/105/145/185/225 (+55% of your Magical Power)",
						},
						{ "description": "Range:", "value": "45" },
					],
				},
			},
			"Id": 20175,
			"Summary": "Flourish",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/flourish.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90",
					"cost": "100/110/120/130/140",
					"description":
						"Persephone conjures Entrapping Vines that she throws forwards, entrapping the first enemy god or wall it touches. Entrapped gods are crippled and rooted. Vines then spawn from the Entrapped target, seeking nearby enemy gods. Gods bound are crippled, can no longer further than 55 units away, and are slowed while running away from the center. Entrapping Vines are destroyed if hit by 5 Basic Attacks (3 if it trapped a Wall), ending all effects.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "Global/55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "175/245/315/385/455 (+85% of your Magical Power)",
						},
						{
							"description": "Vine Damage:",
							"value": "65/90/115/140/165 (30% of your Magical Power)",
						},
						{ "description": "Slow:", "value": "15/17.5/20/22.5/25%" },
						{ "description": "Duration:", "value": "5s" },
					],
				},
			},
			"Id": 20135,
			"Summary": "Grasp of Death",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/grasp-of-death.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.95,
		"Attack Speed Per Level": 0.009,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Poseidon",
		"HealthPerLevel": 70,
		"ManaPerLevel": 40,
		"Health": 532,
		"Mana": 245,
		"PhysicalProtection": 11.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.8,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/poseidon.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "60/65/70/75/80",
					"description":
						"Poseidon summons forth a wave that travels in a line, dealing damage and pushing back all enemies in its path.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Knockback, Damage",
						},
						{ "description": "Range:", "value": "80" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/140/180/220/260 (+70% of your Magical Power)",
						},
						{ "description": "Tidal Meter:", "value": "-15% Tide" },
					],
				},
			},
			"Id": 8701,
			"Summary": "Tidal Surge",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/tidal-surge.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "55/60/65/70/75",
					"description":
						"Poseidon activates his Trident, granting additional Attack Speed, Movement Speed and increases his Basic Attack damage by 25% for 6s. While this effect is active, Poseidon's Basic Attacks also fire two additional shots that apply ability damage and trigger ability on-hit effects. All shots increase Poseidon's Tide on successful hit.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Ranged Basic, Buff" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage per Hit:",
							"value": "20/30/40/50/60 (+25% of your Magical Power)",
						},
						{ "description": "Attack Speed:", "value": "5/7.5/10/12.5/15%" },
						{
							"description": "Movement Speed:",
							"value": "10/12.5/15/17.5/20%",
						},
						{ "description": "Lifetime:", "value": "6s" },
					],
				},
			},
			"Id": 8698,
			"Summary": "Trident",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/trident.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15/14/13/12/11s",
					"cost": "60/65/70/75/80",
					"description":
						"Poseidon summons a whirlpool at his ground target location that Cripples targets, preventing movement abilities, and creating a Vortex which drags targets toward the center dealing damage every .5s for 3s.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "15/25/35/45/55 (+20% of your Magical Power)",
						},
						{ "description": "Tidal Meter:", "value": "-15% Tide" },
					],
				},
			},
			"Id": 8703,
			"Summary": "Whirlpool",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/whirlpool.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Poseidon releases the Kraken, damaging and Slowing targets in its radius. Enemies in the center of the effect when it spawns take additional damage, are Knocked Up and Stunned.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "45/30" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "175/210/245/280/315 (+45% of your Magical Power)",
						},
						{
							"description": "Damage (Center):",
							"value": "175/210/245/280/315 (+45% of your Magical Power)",
						},
						{ "description": "Slow:", "value": "30%" },
						{ "description": "Stun (Center):", "value": "1/1.25/1.5/1.75/2s" },
						{ "description": "Tidal Meter:", "value": "-20% Tide" },
					],
				},
			},
			"Id": 8705,
			"Summary": "Release the Kraken!",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/release-the-kraken.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.87,
		"Attack Speed Per Level": 0.01,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Ra",
		"HealthPerLevel": 71,
		"ManaPerLevel": 48,
		"Health": 539,
		"Mana": 255,
		"PhysicalProtection": 14,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/ra.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "60/65/70/75/80",
					"description":
						"Ra summons a moving beam of intense light from the sky, doing damage to anyone caught under the beam.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "80" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "95/155/215/275/335 (+100% of your Magical Power)",
						},
					],
				},
			},
			"Id": 7665,
			"Summary": "Celestial Beam",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/celestial-beam.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Light starts to emanate from Ra, Stacking a Slow every .5s on enemies near him, and twice as fast on enemies facing him. After 2s, the light detonates, doing damage, applying another Slow stack, and increasing the Slow duration. Any enemies facing Ra at the time of the explosion are also Blinded. Additionally, Ra cleanses himself of slows and becomes immune to Slows for 0.6s when activated.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Crowd Control, Damage",
						},
						{ "description": "Radius:", "value": "30" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/120/170/220/270 (+60% of your Magical Power)",
						},
						{ "description": "Slow per Stack:", "value": "5%" },
						{ "description": "Detonate Lifetime:", "value": "3s" },
					],
				},
			},
			"Id": 7663,
			"Summary": "Divine Light",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/divine-light.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "50/60/70/80/90",
					"description":
						"Ra summons a pillar of blessed light that persists for 6s. Allies inside the blessing have increased Protections and Power and are Healed every second. Enemies are damaged every second.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Damage per Tick:",
							"value": "20/32/44/56/68 (+20% of your Magical Power)",
						},
						{ "description": "Heal per Tick:", "value": "12/24/36/48/60" },
						{ "description": "Protections:", "value": "10/15/20/25/30" },
						{ "description": "Physical Power:", "value": "10/15/20/25/30" },
						{ "description": "Magical Power:", "value": "20/25/30/35/40" },
					],
				},
			},
			"Id": 7661,
			"Summary": "Solar Blessing",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/solar-blessing.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "80/75/70/65/60s",
					"cost": "90",
					"description":
						"Ra calls on the power of the sun to decimate his foes in an extreme blast of heat in front of him, doing damage to all enemies unlucky enough to find themselves in the path. Enemy gods take additional damage based on their maximum Health as True Damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "120" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "400/475/550/625/700 (110% of your Magical Power)",
						},
						{
							"description": "Additional Damage:",
							"value": "5% of target's maximum Health",
						},
					],
				},
			},
			"Id": 7662,
			"Summary": "Searing Pain",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/searing-pain.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.88,
		"Attack Speed Per Level": 0.009,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Raijin",
		"HealthPerLevel": 84,
		"ManaPerLevel": 43,
		"Health": 539,
		"Mana": 255,
		"PhysicalProtection": 12.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.3,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/raijin.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "50/55/60/65/70",
					"description":
						"Raijin pounds his drums sending forth a peal of thunder in a line, then another, then two at once, each growing wider as it travels. The thunder deals Magical Damage to Enemies it hits.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "65" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "120/180/240/300/360 (+120% of your Magical Power)",
						},
					],
				},
			},
			"Id": 14746,
			"Summary": "Percussive Storm",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/percussive-storm.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "15/14/13/12/11s",
					"cost": "60/65/70/75/80",
					"description":
						"Raijin marks a target enemy by dismissing his ally Raiju, who deals damage as he hides in the enemy's navel. While asleep, Raiju slows and reveals the target to Raijin's team on the minimap. The next time Raijin hits the target, Raiju awakens and claws his way out, doubling the slow and damaging the target and 5 nearby enemies every .5s for 2.5s in his attempt to flee. Enemies hit by the bouncing Raiju take decreased damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Target, Slow, Damage" },
						{ "description": "Range/Radius:", "value": "55/12.5" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "120/180/240/300/360 (+90% of your Magical Power)",
						},
						{
							"description": "D per Tick:",
							"value": "20/30/40/50/60 (/+15% of your Magical Power)",
						},
						{
							"description": "Bounce D per Tick:",
							"value": "14/21/28/35/42 (+10% of your Magical Power)",
						},
						{ "description": "Mark Duration:", "value": "4s" },
						{ "description": "Slow:", "value": "15%" },
					],
				},
			},
			"Id": 14747,
			"Summary": "Raiju",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/raiju.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "17/16.5/16/15.5/15s",
					"cost": "70/75/80/85/90",
					"description":
						"Raijin sends a bolt of lightning crashing down at his ground target location mesmerizing enemies, while Raijin himself ascends into the sky. Shortly thereafter he crashes down at that location, doing a burst of damage to all enemies in the area. ",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Mesmerize, Damage",
						},
						{ "description": "Range/Radius:", "value": "60/25" },
					],
					"rankitems": [
						{
							"description": "Thunder Damage:",
							"value": "60/75/90/105/120 (+50% of your Magical Power)",
						},
						{ "description": "Mesmerize Duration:", "value": ".3s" },
					],
				},
			},
			"Id": 14748,
			"Summary": "Thunder Crash",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/thunder-crash.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "100s",
					"cost": "90",
					"description":
						"Passive: Raijin gains increased Attack Speed.\nActive: Raijin flies above the battlefield, beating his drums 4 times to summon peals of thunder. With each hit, he has a choice of three beats:\n\nBeat one: 100% damage.\nBeat two: Taunt and 30% Damage\nBeat three: Fear and 30% Damage\n\nWhile in the air, Raijin suffers a 20% Movement Speed Slow.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "100" },
					],
					"rankitems": [
						{
							"description": "Damage per Hit:",
							"value": "400/540/680/820/960 (+160% of your Magical Power)",
						},
						{ "description": "Taunt Duration per Hit:", "value": ".5s" },
						{ "description": "Fear Duration per Hit:", "value": ".5s" },
						{ "description": "Attack Speed:", "value": "5/10/15/20/25%" },
					],
				},
			},
			"Id": 14745,
			"Summary": "Taiko Drums",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/taiko-drums.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.87,
		"Attack Speed Per Level": 0.008,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Rama",
		"HealthPerLevel": 80,
		"ManaPerLevel": 34,
		"Health": 644,
		"Mana": 205,
		"PhysicalProtection": 16.8,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/rama.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "",
					"cost": "15 + 1 arrow per shot",
					"description":
						"Rama switches to a more powerful arrow that Pierces and Slows enemies. This ability consumes 1 of Rama's Astral Arrows and deals bonus damage with every shot. Damage from this ability is reduced to 80% for each enemy hit after the first. Rama cannot toggle this ability if he has no Astral Arrows. The Slow can be Stacked up to 3 times.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Slow, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{ "description": "Slow %:", "value": "10% " },
						{ "description": "Time Slowed:", "value": "1.5s" },
						{ "description": "Bonus Damage:", "value": "10/20/30/40/50" },
					],
				},
			},
			"Id": 10160,
			"Summary": "Astral Strike",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/astral-strike.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "15/14/13/12/11s",
					"cost": "40/45/50/55/60",
					"description":
						"Rama focuses his mind and gains increased Attack Speed. While this buff is active, every 3rd successful hit on an enemy god will immediately generate an Astral Arrow.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{
							"description": "Attack Speed Increase:",
							"value": "40/45/50/55/60% for 5s.",
						},
					],
				},
			},
			"Id": 10162,
			"Summary": "Infinite Arrows",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/infinite-arrows.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "11s",
					"cost": "50/55/60/65/70",
					"description":
						"Rama performs a roll in the direction he is currently traveling. After performing a dodge roll, for 5s Rama's next Basic Attack will consume an Astral Arrow that Cripples the target and deals bonus damage. Rama incurs no movement penalty during this shot. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Cripple" },
						{ "description": "Range:", "value": "45" },
					],
					"rankitems": [
						{
							"description": "Cripple Duration:",
							"value": "1/1.25/1.5/1.75/2s",
						},
						{
							"description": "Bonus Damage:",
							"value": "20/40/60/80/100 (+30% of your Physical Power)",
						},
					],
				},
			},
			"Id": 10038,
			"Summary": "Rolling Assault",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/rolling-assault.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80",
					"description":
						"Rama launches into the air and shoots 3 powerful arrows at the ground, each successive shot increasing in damage (70%, 85%, 100%) and decreasing in AoE size (15, 10, 7.5). Every time Rama generates or picks up an Astral Arrow the cooldown of this ability is reduced by 0.4s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Damage" },
						{ "description": "Range/Radius:", "value": "200/15,10,7.5" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "190/280/370/460/550 (+55% of your Physical Power)",
						},
					],
				},
			},
			"Id": 10116,
			"Summary": "Astral Barrage",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/astral-barrage.jpg",
		},
		"Basic Damage": { "Base Damage": 40.0, "Per Level": 2.5, "Scaling": 1.0 },
		"Attack Speed": 0.95,
		"Attack Speed Per Level": 0.016,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Ratatoskr",
		"HealthPerLevel": 77,
		"ManaPerLevel": 41,
		"Health": 588,
		"Mana": 240,
		"PhysicalProtection": 16.8,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/ratatoskr.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "50/55/60/65/70 ",
					"description":
						"Ratatoskr dashes forward, damaging and slowing enemies for 3s. Dart pierces through minions and stops at the first god hit. Also, Dart's cooldown is reduced by 1s for each enemy god hit by Flurry or Acorn Blast.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Slow, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/105/140/175/210 (+70% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "20/25/30/35/40%" },
					],
				},
			},
			"Id": 18784,
			"Summary": "Dart",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/dart.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Ratatoskr spins around in a flurry of attacks, damaging nearby enemies and reducing their Physical Protections up to 4 times. ",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Debuff, Damage",
						},
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Damage Per Hit:",
							"value": "25/40/55/70/85 (25% of your Physical Power)",
						},
						{
							"description": "Physical Protection Reduced Per Stack:",
							"value": "2/3/4/5/6",
						},
					],
				},
			},
			"Id": 18785,
			"Summary": "Flurry",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/flurry.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Ratatoskr shoots a blast of three acorns forward in a cone, each dealing damage. Enemies hit by multiple acorns take 40% less damage on each acorn, down to a minimum of 20% damage. Enemies hit by 3 acorns are stunned. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Stun, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage Per Acorn:",
							"value": "70/90/110/130/150 (+55% of your Physical Power)",
						},
					],
				},
			},
			"Id": 18786,
			"Summary": "Acorn Blast",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/acorn-blast.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "110/105/100/95/90s",
					"cost": "100",
					"description":
						"Ratatoskr charges up then leaps from the ground to a branch above his head. He may jump to 2 more branches before choosing a landing location. Upon landing he deals damage and Knocks up enemies. Through the Cosmos can be canceled or timed out from any of the branches, causing Ratatoskr to strike down at the current target location.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Range/Radius:", "value": "90/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "200/260/320/380/440 (90% of your Physical Power)",
						},
					],
				},
			},
			"Id": 11492,
			"Summary": "Through the Cosmos",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/through-the-cosmos.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.25, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.02,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Ravana",
		"HealthPerLevel": 79,
		"ManaPerLevel": 37,
		"Health": 560,
		"Mana": 230,
		"PhysicalProtection": 18.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/ravana.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "9s",
					"cost": "30/38/45/53/60",
					"description":
						"Ravana throws a powerful punch, projecting his prana with it to damage and slow all enemies in front of him.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Slow, Damage" },
						{ "description": "Range:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/145/200/255/310 (/+95% of your physical power)",
						},
						{ "description": "Slow Percentage:", "value": "25%" },
						{ "description": "Slow Duration:", "value": "2.5s" },
					],
				},
			},
			"Id": 12646,
			"Summary": "Prana Onslaught",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/prana-onslaught.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "16/15.5/15/14.5/14s",
					"cost": "60/65/70/75/80",
					"description":
						"Ravana performs a high kick, sending a shockwave forward to damage all enemies in a line, increasing his Movement Speed and rendering him CC and damage immune for the duration.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Buff, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/105/140/175/210 (+70% of your physical power)",
						},
						{ "description": "Movement Speed:", "value": "50%" },
						{ "description": "Lifetime:", "value": "1s" },
					],
				},
			},
			"Id": 11528,
			"Summary": "Overhead kick",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/overhead-kick.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "55/60/65/70/75",
					"description":
						"Ravana's fists fly forward, damaging and passing through minions and damaging and rooting the first god hit. Ravana heals for each enemy hit - with maximum damage sources of one god and up to three minions.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Root, Damage" },
						{ "description": "Range:", "value": "45" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/130/170/210/250 (+85% of your physical power)",
						},
						{ "description": "Root Duration:", "value": "1.25s" },
						{ "description": "Healing:", "value": "6/17/28/39/50" },
					],
				},
			},
			"Id": 11530,
			"Summary": "10-Hand Shadow Fist",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/10-hand-shadow-fist.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "110/105/100/95/90s",
					"cost": "80/90/100/110/120",
					"description":
						"Ravana leaps to a target location, damaging all enemies in the area and applying a debuff to enemy gods that increases the damage they take from all sources. After landing, Ravana receives a buff that reduces the damage he takes from all sources.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{ "description": "Range:", "value": "55" },
						{
							"description": "Damage:",
							"value": "200/275/350/425/500 (+110% of your physical power)",
						},
						{ "description": "Damage Increase:", "value": "10%" },
						{ "description": "Damage Mitigation:", "value": "10/15/20/25/30%" },
						{ "description": "Duration:", "value": "5s" },
					],
				},
			},
			"Id": 11639,
			"Summary": "Mystic Rush",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/mystic-rush.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.2, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.017,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Scylla",
		"HealthPerLevel": 79,
		"ManaPerLevel": 56,
		"Health": 511,
		"Mana": 298,
		"PhysicalProtection": 12.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.8,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/scylla.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s ",
					"cost": "60/70/80/90/100",
					"description":
						"Scylla sends two hounds forward, damaging, Rooting, and Crippling the first enemy hit.\n\nAt max rank, two additional enemies nearby the first target will also be hit.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "65/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "60/110/160/210/260 (+75% of your magical power)",
						},
						{ "description": "Root Duration:", "value": "1.75s " },
					],
				},
			},
			"Id": 9657,
			"Summary": "Sic 'Em",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/sic-em.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "70/75/80/85/90",
					"description":
						"Scylla creates a Magical field that Slows enemies. After 5s it detonates and damages enemies, dealing 20% increased damage to Minions and Jungle Camps. Scylla may activate the ability again to detonate it early.\n\nAt max rank, enemies in the area also have their Magical Protection reduced, and targets hit by the damage retain the debuff and are Slowed for 1s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Slow, Damage" },
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/155/210/265/320 (85% of your Magical Power)",
						},
						{ "description": "Slow:", "value": "30%" },
						{
							"description": "Max Rank Debuff:",
							"value": "isrank5/15% Magical Protection Reduced",
						},
					],
				},
			},
			"Id": 9663,
			"Summary": "Crush",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/crush.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "70/75/80/85/90",
					"description":
						"Passive: Scylla gains MP5.\n\nActive: Scylla summons a sentinel to the target area, granting vision of enemies for 5s. Scylla may activate the ability again within 5s to move to the sentinel location.\n\nAt max rank, the vision is granted through line of sight blockers, and placement range increases.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Teleport, Buff" },
						{ "description": "Range/Radius:", "value": "65/70" },
					],
					"rankitems": [
						{ "description": "Passive MP5:", "value": "4/6/8/10/12" },
						{ "description": "Vision Range:", "value": "40/50/60/70/80" },
						{ "description": "Summon Range:", "value": "65/65/65/65/70" },
					],
				},
			},
			"Id": 9662,
			"Summary": "Sentinel",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/sentinel.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Scylla reveals her true nature, becoming immune to Crowd Control for the next 6s, and gaining movement speed. She may make one powerful attack during this time. If she kills an enemy god with the attack, she gains another 6s and may attack again.\n\nAt max rank, the movement speed bonus doubles.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Range/Radius:", "value": "60/15" },
					],
					"rankitems": [
						{
							"description": "Damage per Hit:",
							"value": "400/500/600/700/800 (120% of your Magical Power)",
						},
						{ "description": "Movement Speed:", "value": "35/35/35/35/70%" },
					],
				},
			},
			"Id": 9682,
			"Summary": "I'm a Monster",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/im-a-monster.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 1.45, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.008,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Serqet",
		"HealthPerLevel": 78,
		"ManaPerLevel": 40,
		"Health": 560,
		"Mana": 240,
		"PhysicalProtection": 19.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/serqet.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "60",
					"description":
						"Serqet dashes three times from side to side, dealing damage and applying Deathbane Poison to each enemy hit. This ability can Critical Hit, and Serqet is immune to Knockup while dashing.\n\nDeathbane Poison reduces a target's Physical Protection for a short time, and remains in a lingering dormant state for 20s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Debuff, Damage" },
						{ "description": "Range:", "value": "50" },
					],
					"rankitems": [
						{
							"description": "Damage Per Dash:",
							"value": "50/70/90/110/130 (+50% of your Physical Power)",
						},
						{
							"description": "Total Damage:",
							"value": "150/210/270/330/390 (+150% of your Physical Power)",
						},
						{ "description": "Protection Reduction:", "value": "5% for 3s." },
					],
				},
			},
			"Id": 10187,
			"Summary": "Deathbane",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/deathbane.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "70/75/80/85/90",
					"description":
						"Serqet launches her two blades forward, dealing damage and applying the Cobra's Kiss Poison. Cobra's Kiss Poison drives gods to madness, forcing them to attack nearby allies dealing this damage again, or walk harmlessly towards Serqet. Cobra's Kiss remains in a lingering dormant state for 20s.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "40" },
					],
					"rankitems": [
						{
							"description": "Damage Per Blade:",
							"value": "40/55/70/85/100 (+75% of your Physical Power)",
						},
						{
							"description": "Total Damage:",
							"value": "80/110/140/170/200 (+150% of your Physical Power)",
						},
						{ "description": "Madness Duration:", "value": "1.2s" },
					],
				},
			},
			"Id": 10213,
			"Summary": "Cobra's Kiss",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/cobras-kiss.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "70",
					"description":
						"Serqet vanishes, Rooting herself in place. She may leap once, revealing herself and dealing damage to enemies. She will stay hidden until she leaps or cancels this ability. Enemy gods within range 12.5 will also reveal her.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/125/170/215/260 (+90% of your Physical Power)",
						},
					],
				},
			},
			"Id": 10215,
			"Summary": "Ambush",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/ambush.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Passive: Serqet gains increased Critical Strike Chance.\nActive: Serqet leaps to an enemy, Stunning them and gaining 50% damage mitigation. She applies the Last Breath poison and pushes them 30 units away. The poison deals true damage to the target over the next 5s, and prevents them from healing. If an enemy dies while infected with Last Breath, they explode, applying the poison to all enemies within 20 units.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Target, Debuff, Damage",
						},
						{ "description": "Radius:", "value": "10" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value":
								"102/150/198/252/300 (+120% of your Physical Power as True Damage)",
						},
						{ "description": "Stun Duration:", "value": "1s" },
						{ "description": "Healing Reduction:", "value": "All Healing" },
						{
							"description": "Critical Strike Chance:",
							"value": "0/5/10/15/20%",
						},
					],
				},
			},
			"Id": 10223,
			"Summary": "Last Breath",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/last-breath.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.25, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.022,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Set",
		"HealthPerLevel": 79,
		"ManaPerLevel": 38,
		"Health": 609,
		"Mana": 210,
		"PhysicalProtection": 18.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/set.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "9s",
					"cost": "40/45/50/55/60",
					"description":
						"Set amasses his hatred, throwing it forward. Enemies caught in its path are damaged and slowed for 3s.\n\nSet's spawn are commanded when Set fires this attack, dashing towards a location Set determines. Enemies hit by a Spawn's dash take damage and are slowed for 3s. Any dash after the first will deal 40% damage. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Slow, Damage" },
						{ "description": "Range:", "value": "60" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "75/120/165/210/255 (+85% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "25%" },
						{ "description": "Dash Range:", "value": "60 ft" },
					],
				},
			},
			"Id": 17066,
			"Summary": "Skewer",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/skewer.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "11s",
					"cost": "30",
					"description":
						"Set conjures a Spawn of himself made of sand. These spawn will stand where summoned and attack nearby enemies. Set can have up to 2 charges of this ability, allowing him to conjure spawn in quick succession. Set can interact with these Spawn with his other abilities, commanding them to attack or teleporting to them. Set can only have 8 Spawn at any given time. This ability does not trigger Item effects.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Pet, Damage" },
						{ "description": "Range/Radius:", "value": "70/12" },
					],
					"rankitems": [
						{
							"description": "Attack Damage:",
							"value": "20 (+25% of your Physical Power)",
						},
						{ "description": "Attack Range:", "value": "12 ft" },
						{
							"description": "Dash Damage:",
							"value": "40/45/50/55/60% of Skewer",
						},
						{ "description": "Duration:", "value": "8/9/10/11/12s" },
					],
				},
			},
			"Id": 17065,
			"Summary": "Spawn of Set",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/spawn-of-set.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "50/55/60/65/70",
					"description":
						"Set conjures a Sandstorm around him, protecting him from Damage and causing him to be immune to Slows. Enemies near Set are damaged every .4s for 6s and have their vision obscured by the sands.\n\nIf Set is targeting a spawn when this ability is cast he will immediately teleport to the spawn. Otherwise, he can reactivate this ability to teleport. Set can only teleport once per Sandstorm.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Teleport, Damage",
						},
						{ "description": "Range/Radius:", "value": "65/16" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "120/180/240/300/360 (+105% of your Physical Power)",
						},
						{ "description": "Mitigation:", "value": "15%" },
						{ "description": "Teleport Range:", "value": "65 ft" },
					],
				},
			},
			"Id": 17205,
			"Summary": "Sandstorm",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/sandstorm.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80/85/90/95/100",
					"description":
						"Set enrages, channeling his rage towards his enemies, gaining increased Movement Speed. Each time Set's attacks damage a god they gain a Mark of Set. At 4 Marks the target erupts. Enemies take a burst of damage on each explosion while Set becomes empowered, restoring Health and immediately gaining a charge of Spawn of Set. Excess charges are immediately consumed, causing a Spawn to appear near Set.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "25/35/45/55/65 (30% of your Physical Power)",
						},
						{ "description": "Heal:", "value": "25/40/55/70/85" },
						{
							"description": "Movement Speed:",
							"value": "20/22.5/25/27.5/30%",
						},
						{ "description": "Duration:", "value": "12s" },
					],
				},
			},
			"Id": 17147,
			"Summary": "Kingslayer",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/kingslayer.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.4, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.019,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Shiva",
		"HealthPerLevel": 87,
		"ManaPerLevel": 36,
		"Health": 665,
		"Mana": 210,
		"PhysicalProtection": 22.4,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/shiva.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Shiva’s trident is emblazoned with the fire of Agni as he spins it around dealing damage, pulling in enemies and leaving behind a firewall at the edge.\n\nBliss - Allies gain a Movement Speed buff on passing the firewall.\nDestruction - Enemies suffer a Protection Reduction debuff on passing the firewall.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockback, Damage",
						},
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Spin Damage:",
							"value": "65/120/175/230/285 (+55% of your Physical Power)",
						},
						{
							"description": "Fire:",
							"value": "10/20/30/40/50 (+5% of your Physical Power)",
						},
						{ "description": "Movement Speed Buff:", "value": "25% for 3s" },
						{
							"description": "Protection Reduction:",
							"value": "5/10/15/20/25 for 3s",
						},
						{ "description": "Fire Persist Time:", "value": "4s" },
					],
				},
			},
			"Id": 21215,
			"Summary": "Emblazoned Sweep",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/emblazoned-sweep.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "70/75/80/85/90",
					"description":
						"Shiva hits the butt of his trident down into the ground, shaking the damaru drum and causing energy to dissipate and damage enemies. Depending on the selection, enemies in the chosen segment are knocked up as well.\n\nBliss - Allies gain an Attack Speed buff if the energy passes through them.\nDestruction - Enemies suffer an Attack Speed debuff if the energy passes through them.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Cone, Knockup, Damage",
						},
						{ "description": "Range:", "value": "45" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/150/200/250/300 (+65% of your Physical Power)",
						},
						{ "description": "Attack Speed Buff:", "value": "30% for 4s" },
						{ "description": "Attack Speed Debuff:", "value": "30% for 4s" },
					],
				},
			},
			"Id": 21216,
			"Summary": "Damaru’s Tempo",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/damaru’s-tempo.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "18s",
					"cost": "65/70/75/80/85",
					"description":
						"Shiva dashes into a pillar of fire where he meditates for a short duration, taking reduced damage and becoming immune to CC except for Stuns and Time Dilation, before being able to dash out again. Each dash deals damage to enemies and as he meditates the pillar emits an aura.\n\nBliss - Allies in the aura gain a block stack while Shiva gains up to 3 after leaving.\nDestruction - Enemies in the aura suffer constant damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Buff, Damage" },
						{ "description": "Range/Radius:", "value": "30/30" },
					],
					"rankitems": [
						{
							"description": "Dash Damage (2x):",
							"value": "130/190/250/310/370 (+60% of your Physical Power)",
						},
						{
							"description": "Aura:",
							"value": "7/11/15/19/23 (+4% of your Physical Power) every 0.25s",
						},
						{ "description": "Damage:", "value": "30%" },
					],
				},
			},
			"Id": 21217,
			"Summary": "Pillar of Dawn",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/pillar-of-dawn.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Shiva performs his Tandava, channeling for the next 6 seconds with CC Immunity. Every 1.5s he performs a step that can be preselected.\n\nStep one - Ally Healing and Mana restore.\nStep two - 50% Damage and Healing and also amplification of next step radius and effects.\nStep three - Damage and Shield reduction to Enemies.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Radius:", "value": "25/35" },
					],
					"rankitems": [
						{ "description": "Healing:", "value": "55/70/85/100/115" },
						{ "description": "Mana Restore:", "value": "15%" },
						{ "description": "Amplification Effects:", "value": "50%" },
						{
							"description": "Total Damage (ALL 4 Damage Dances):",
							"value": "500/700/900/1100/1300 (+160% of your Physical Power) ",
						},
						{ "description": "Shield:", "value": "50%" },
					],
				},
			},
			"Id": 21218,
			"Summary": "Shiva Tandava",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/shiva-tandava.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.0, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Skadi",
		"HealthPerLevel": 82,
		"ManaPerLevel": 35,
		"Health": 658,
		"Mana": 220,
		"PhysicalProtection": 15.4,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/skadi.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "70/75/80/85/90",
					"description":
						"Skadi throws an icy spear forward, dealing damage to enemies and Slowing them for 3s. Kaldr's basic attacks deal double damage to targets afflicted by Piercing Cold. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Slow, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/145/200/255/310 (/+80% of your Physical Power)",
						},
						{ "description": "Slow: ", "value": "20/25/30/35/40%" },
					],
				},
			},
			"Id": 12699,
			"Summary": "Piercing Cold",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/piercing-cold.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": ".5 s",
					"cost": "None",
					"description":
						"Toggle: Skadi marks an enemy for Kaldr to hunt. While toggled on, Kaldr assumes Beast form, chasing and attacking the marked enemy. If a marked enemy dies Kaldr attacks other enemies nearby. When toggled off, Kaldr stops attacking and returns to Skadi, reverting to his Elemental form on the way. This ability can be activated at rank 0 and Kaldr gains new skills as it ranks up. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Target, Debuff" },
						{ "description": "Range/Radius:", "value": "70/10" },
					],
					"rankitems": [
						{
							"description": "Basic Attack:",
							"value": "50/57.5/65/72.5/80% of Skadi's",
						},
						{
							"description": "Rank 1:",
							"value":
								"isrank1/2/3/4/5/Kaldr gains a dash attack dealing 70/85/100/115/130% isrank1/2/3/4/5/Basic Attack Damage",
						},
						{
							"description": "Rank 3:",
							"value": "isrank3/4/5/Kaldr's kills heal him",
						},
						{
							"description": "Rank 5:",
							"value":
								"isrank5/Kaldr's basic attacks give Skadi 10% increased movement speed",
						},
					],
				},
			},
			"Id": 12017,
			"Summary": "Rune of the Hunt",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/rune-of-the-hunt.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s ",
					"cost": "70/75/80/85/90 ",
					"description":
						"Skadi freezes the ground for 5s at a target location. The icy area deals damage to enemies that touch it and continues to deal additional damage every .5s they stay on it. Gods who step on the ice are slowed and lose control of their movement while sliding across. Also, Skadi gains Movement Speed and Slow immunity while standing on the area and persists for 3s after it fades or she leaves.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Initial Damage:",
							"value": "70/100/130/160/190 (+50% of your physical power)",
						},
						{
							"description": "Damage Per Tick:",
							"value": "5/10/15/20/25 (+5% of your physical power)",
						},
						{
							"description": "Total Damage:",
							"value": "115/190/265/340/415 (+95% of your Physical Power)",
						},
						{ "description": "Movement Speed:", "value": "20/25/30/35/40%" },
						{ "description": "Slow:", "value": "15%" },
						{ "description": "Radius:", "value": "16/16/18/18/20 " },
					],
				},
			},
			"Id": 12018,
			"Summary": "Permafrost",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/permafrost.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s ",
					"cost": "80/90/100/110/120 ",
					"description":
						"A snowstorm surrounds Skadi as she chooses a location for Kaldr to attack. If Kaldr is too far he will leap there.\n\nUpon reaching the location a snowstorm also surrounds Kaldr. The initial hit of either snowstorm damages and Roots enemies in the area and Kaldr is restored to full health. The storms persist for 4s while dealing damage to enemies every .5s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Root, Damage" },
						{ "description": "Range/Radius:", "value": "60/20" },
					],
					"rankitems": [
						{
							"description": "Initial Damage:",
							"value": "45/85/125/165/205 (+35% of your Physical Power)",
						},
						{
							"description": "Damage Per Tick:",
							"value": "5/10/15/20/25 (+5% of your Physical Power)",
						},
						{
							"description": "Total Damage (Both Snowstorms Max Duration):",
							"value": "170/330/490/650/810 (+140% of your Physical Power)",
						},
						{ "description": "Root Duration:", "value": "1/1.25/1.5/1.75/2s" },
					],
				},
			},
			"Id": 12019,
			"Summary": "Winter's Grasp",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/winters-grasp.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 2.5, "Scaling": 1.0 },
		"Attack Speed": 0.95,
		"Attack Speed Per Level": 0.015,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Sobek",
		"HealthPerLevel": 100,
		"ManaPerLevel": 35,
		"Health": 686,
		"Mana": 210,
		"PhysicalProtection": 26.6,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/sobek.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "70/75/80/85/90",
					"description":
						"Sobek charges forward at a frenzied pace. If Sobek hits an enemy, he does damage, becomes briefly CC Immune, and throws the enemy behind him. Sobek is immune to Knockups while dashing.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Dash, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/110/150/190/230 (+50% of your Magical Power)",
						},
					],
				},
			},
			"Id": 7946,
			"Summary": "Charge Prey",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/charge-prey.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Sobek whips around in a circle, knocking enemies back and doing damage.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/135/180/225/270 (+40% of your Magical Power)",
						},
					],
				},
			},
			"Id": 7949,
			"Summary": "Tail Whip",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/tail-whip.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Sobek does an axe attack that damages all enemies in front of him and lowers their healing received. In addition, Sobek heals for each enemy hit, up to 3.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Heal, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/125/160/195/230 (+30% of your Magical Power)",
						},
						{ "description": "Healing Reduction:", "value": "40%" },
						{ "description": "Healing Reduction Lifetime:", "value": "5s" },
						{ "description": "Heal:", "value": "22/29/36/43/50" },
					],
				},
			},
			"Id": 7951,
			"Summary": "Sickening Strike",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/sickening-strike.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80/90/100/110/120",
					"description":
						"Sobek submerges himself, where he gains 20% protections, regenerates Mana, is immune to Crowd Control and he Slows all enemies. When Sobek emerges, he damages all enemies in the radius. Cancelling the ability decreases the damage.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Debuff, Damage",
						},
						{ "description": "Radius:", "value": "30" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "300/450/600/750/900 (+80% of your Magical Power)",
						},
						{ "description": "Submerge Slow:", "value": "30/32.5/35/37.5/40%" },
						{ "description": "Submerge Lifetime:", "value": "5s" },
						{
							"description": "Submerge Mana Regen:",
							"value": "10% per second",
						},
					],
				},
			},
			"Id": 7947,
			"Summary": "Lurking in the Waters",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/lurking-in-the-waters.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.85,
		"Attack Speed Per Level": 0.012,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Sol",
		"HealthPerLevel": 79,
		"ManaPerLevel": 57,
		"Health": 560,
		"Mana": 300,
		"PhysicalProtection": 12.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.8,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/sol.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "11s",
					"cost": "60/70/80/90/100",
					"description":
						"Sol burns bright, gaining a large amount of Heat, Healing herself over time, and igniting the ground around her. Enemies that walk onto the fire take damage over time. The damaging area persists for 3s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Heal, Damage" },
						{ "description": "Radius:", "value": "15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "30/50/70/90/110 (+25% of your magical power) every 1s",
						},
						{
							"description": "Heal:",
							"value": "18% of missing Health over 5s",
						},
						{ "description": "Heat:", "value": "30/40/50/60/70%" },
					],
				},
			},
			"Id": 11970,
			"Summary": "Radiance",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/radiance.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "70/75/80/85/90",
					"description":
						"Sol's next basic attack explodes, creating a shockwave that travels out, dealing damage. At full size, the wave retracts, dealing damage again and slowing enemies.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Area Basic, Slow, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "40/65/90/115/140 (40% of your magical power)",
						},
						{ "description": "Slow:", "value": "15/20/25/30/35% for 1.5s" },
						{ "description": "Heat:", "value": "10%" },
					],
				},
			},
			"Id": 11917,
			"Summary": "Stellar Burst",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/stellar-burst.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "60",
					"description":
						"Sol burns down her manifestation, gaining movement speed and immunity to Slows while leaving a trail of fire behind her that damages enemies. After 3s Sol loses corporeal form for a short time. Sol may leave her incorporeal form early.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Buff, Damage" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value":
								"20/40/60/80/100 (+25% of your magical power) every 0.5s",
						},
						{
							"description": "Movement Speed:",
							"value": "20/22.5/25/27.5/30%",
						},
						{ "description": "Heat:", "value": "10%" },
					],
				},
			},
			"Id": 11911,
			"Summary": "Disapparate",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/disapparate.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Sol unleashes all her flame and fury from the sky, striking 8 times along a moveable ground target location. Enemies hit are knocked back on the first strike, and take only 30% damage on successive hits.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Range/Radius:", "value": "55/12" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "150/200/250/300/350 (50% of your magical power)",
						},
						{ "description": "Heat:", "value": "40%" },
					],
				},
			},
			"Id": 11912,
			"Summary": "Supernova",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/supernova.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 1.45, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.018,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Sun Wukong",
		"HealthPerLevel": 89,
		"ManaPerLevel": 35,
		"Health": 672,
		"Mana": 205,
		"PhysicalProtection": 25.2,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon":
			"https://webcdn.hirezstudios.com/smite/god-icons/sun-wukong.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "50/55/60/65/70",
					"description":
						"Sun Wukong's Magic Cudgel grows in length, and he slams it down, damaging all enemies in front of him. Minions and Jungle Camps take an extra +30% damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/140/180/220/260 (+60% of your Physical Power)",
						},
					],
				},
			},
			"Id": 9297,
			"Summary": "The Magic Cudgel",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/the-magic-cudgel.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "11s",
					"cost": "60",
					"description":
						"Sun Wukong strikes around him, damaging, Slowing, and Slowing the Attack Speed of all enemies hit.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Slow, Damage" },
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/140/190/240/290 (+65% of your Physical Power)",
						},
						{ "description": "Movement Slow:", "value": "30% for 3s" },
						{ "description": "Attack Speed Slow:", "value": "30% for 3s" },
					],
				},
			},
			"Id": 9382,
			"Summary": "Master's Will",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/masters-will.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16/15.5/15/14.5/14s",
					"cost": "65/70/75/80/85",
					"description":
						"Sun Wukong transforms into an Eagle, Tiger, or Ox, and charges forward. Eagle: Is the fastest of the three forms. Immune to Slow and Root effects. Tiger: Mauls the first enemy runs into, Stunning and causing damage. Ox: Knocks aside all enemies in his path and causes damage. Immune to Slow, Root, and Knockup effects.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Dash, Crowd Control, Damage",
						},
					],
					"rankitems": [
						{
							"description": "Tiger Damage:",
							"value": "100/170/240/310/380 (+80% of your Physical Power)",
						},
						{ "description": "Tiger Stun:", "value": "1.4s" },
						{
							"description": "Ox:",
							"value": "70/105/140/175/210 (+60% of your Physical Power)",
						},
					],
				},
			},
			"Id": 9313,
			"Summary": "72 Transformations",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/72-transformations.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "110/105/100/95/90s",
					"cost": "100",
					"description":
						"Sun Wukong leaps onto his cloud for up to 5s, leaving a Pet behind to fight. While on the cloud Sun Wukong is invisible, and regenerates Health. He may leap off before the duration expires, dealing damage. The Pet inherits 100% of Sun Wukong's Health and Protections and 50% of his Basic Attack Power. The Pet is killed instantly if hit by a hard Crowd Control excluding Banishes and Knockbacks. If the Pet dies, Sun Wukong is revealed on his cloud.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Heal, Damage" },
						{ "description": "Range/Radius:", "value": "60/25" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "200/275/350/425/500 (100% of your Physical Power)",
						},
						{ "description": "Healing:", "value": "3.5% per second" },
					],
				},
			},
			"Id": 9324,
			"Summary": "Somersault Cloud",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/somersault-cloud.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.0, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.009,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Surtr",
		"HealthPerLevel": 88,
		"ManaPerLevel": 35,
		"Health": 670,
		"Mana": 230,
		"PhysicalProtection": 25.2,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/surtr.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13/12/11/10s",
					"cost": "50 ",
					"description":
						"Surtr sets his sword ablaze gaining Haste while this buff is active. Surtr's next successful Basic Attack will deal bonus magical damage, ignite the target causing them to take damage over time as well as spawning a Fiery Imp.\n\nThis ability's bonus damage increases per stack (max. of 200) when an enemy dies while the burning effect is active.",
					"menuitems": [
						{ "description": "Ability:", "value": "Buff" },
						{ "description": "Affects:", "value": "Self" },
						{ "description": "Damage:", "value": "Physical and Magical" },
						{ "description": "Duration:", "value": "5s" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value":
								"30/75/120/165/210 (30% of your Physical Power) every second for 3s.",
						},
						{
							"description": "Passive:",
							"value": "35 + 5 per stack (Magical Damage)",
						},
						{
							"description": "Imp:",
							"value": "10/15/20/25/30 (10% of your Physical Power)",
						},
						{ "description": "Imp Health:", "value": "50 + 50 per rank" },
						{ "description": "Imp Lifetime:", "value": "10s" },
					],
				},
			},
			"Id": 23397,
			"Summary": "Flames of Muspell",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/flames-of-muspell.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "60/65/70/75/80 ",
					"description":
						"Surtr pulls the closest target to him, either an enemy lane minion, a Fiery Imp or a magma rock if neither are in range. Surtr then hurls the object forwards dealing damage and stunning enemies ahead.\n\nMagma Rock - Stops on first enemy\nLane Minion - Passes through minions, stopping on first enemy god.\nFiery Imp - Passes through minions, stopping on first enemy god and exploding in an area",
					"menuitems": [
						{ "description": "Ability:", "value": "Circle & Line" },
						{ "description": "Affects:", "value": "Enemies" },
						{ "description": "Damage:", "value": "Physical" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/145/200/255/310 (70% of your Physical Power)",
						},
						{
							"description": "AoE Damage:",
							"value": "30/60/90/120/150 (30% of your Physical Power)",
						},
						{ "description": "Stun Duration:", "value": "1.2s" },
					],
				},
			},
			"Id": 23398,
			"Summary": "Giant's Grasp",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/giants-grasp.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "65/70/75/80/85 ",
					"description":
						"Surtr's fury creates a ring of embers around him providing a Movement Speed buff that increases for hitting enemies, while the ability is active.\nThe ring deals damage and slows enemies once as it expands or when fully formed and again when it contracts.\nWhile formed, the outer ring deals continuous damage to enemies inside. The ring also picks up Obsidian Flesh fragments.",
					"menuitems": [
						{ "description": "Ability:", "value": "Buff" },
						{ "description": "Affects:", "value": "Self and Enemies" },
						{ "description": "Damage:", "value": "Physical" },
						{ "description": "Radius:", "value": "25" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "35/55/75/95/115 (20% of your Physical Power)",
						},
						{
							"description": "Bonus Damage:",
							"value": "10/15/20/25/30 (+5% of your Physical Power)",
						},
						{
							"description": "Movement Speed:",
							"value": "10% + 5% per enemy hit (max. 3 stacks)",
						},
						{ "description": "Slow:", "value": "15% for 2s" },
						{ "description": "Duration:", "value": "4s" },
					],
				},
			},
			"Id": 23399,
			"Summary": "Emberwalk",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/emberwalk.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "100s",
					"cost": "100 ",
					"description":
						"After a short buildup, Surtr surges into the air infusing into a large Meteor. While in the air, Surtr is immune to damage and can choose where to come crashing down.\n\nBefore landing, Meteorites split off, targeting enemies on the ground, dealing damage and spawning Fiery Imps.\n\nSurtr's Meteor deals increased damage and knocks up enemies hit.",
					"menuitems": [
						{ "description": "Ability:", "value": "Ground Target" },
						{ "description": "Affects:", "value": "Enemies" },
						{ "description": "Damage:", "value": "Physical" },
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "210/285/360/435/510 (60% of your Physical Power)",
						},
						{
							"description": "Meteorite Damage:",
							"value": "50/75/100/125/150 (+15% of your Physical Power)",
						},
					],
				},
			},
			"Id": 23400,
			"Summary": "End of Days",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/end-of-days.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.2, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Susano",
		"HealthPerLevel": 80,
		"ManaPerLevel": 38,
		"Health": 609,
		"Mana": 225,
		"PhysicalProtection": 19.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/susano.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "16/15/14/13/12s",
					"cost": "60/65/70/75/80",
					"description":
						"Susano moves thrice in quick succession; after each attack he has up to 3s to fire the next one. First Attack: 100% Damage to all Enemies in a cone. Second Attack: 100% Damage to all Enemies in a circle. Third Attack: 50% Damage while Dashing forward.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Damage" },
						{ "description": "Range/Radius:", "value": "30,40/30" },
					],
					"rankitems": [
						{
							"description": "Total Damage (All Three Hits):",
							"value": "100/163/225/278/350 (+125% of your Physical Power)",
						},
					],
				},
			},
			"Id": 12813,
			"Summary": "Storm Kata",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/storm-kata.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "80/75/70/65/60",
					"description":
						"Susano commands the winds to blow, dealing damage in a cone in front of him. Enemies in the center of the attack are pulled towards him.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Cone, Knockback, Damage",
						},
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/120/150/180/210 (+70% of your Physical Power)",
						},
					],
				},
			},
			"Id": 12797,
			"Summary": "Wind Siphon",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/wind-siphon.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "45/50/55/60/65",
					"description":
						"Susano throws forward a gust of air which creates a whirlwind, dealing damage every .75s for 3s. He may activate this ability again to teleport to the whirlwind. If the initial gust hits an Enemy, the whirlwind surrounds and travels with them, and teleporting to the Enemy reduces this cooldown to 10s.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Teleport, Damage",
						},
						{ "description": "Range/Radius:", "value": "45/10" },
					],
					"rankitems": [
						{
							"description": "Total Damage (4 Ticks):",
							"value": "100/140/180/220/260 (+100% of your Physical Power)",
						},
					],
				},
			},
			"Id": 12869,
			"Summary": "Jet Stream",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/jet-stream.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "100s",
					"cost": "80/85/90/95/100",
					"description":
						"Susano summons a hurricane at his location, creating a Vortex that drags enemies towards the center while growing to up to twice its size, increasing the damage as it grows. Upon reaching full size, the storm is launched in the direction he is facing, knocking up opponents in its path. Susano may re-activate this ability early to fire the storm at it's current size for reduced damage. If fired at less than half of its maximum size, he also foregoes the knock-up.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Range/Radius:", "value": "70/15-30" },
					],
					"rankitems": [
						{
							"description": "Max Damage:",
							"value": "235/300/365/430/495 (/+115% of your Physical Power)",
						},
					],
				},
			},
			"Id": 12801,
			"Summary": "Typhoon",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/typhoon.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 2.2, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.022,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Sylvanus",
		"HealthPerLevel": 100,
		"ManaPerLevel": 34,
		"Health": 714,
		"Mana": 190,
		"PhysicalProtection": 30,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.7,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/sylvanus.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "15/14/13/12/11s",
					"cost": "60/65/70/75/80",
					"description":
						"Sylvanus throws a seed to a target location. If it hits an enemy they will take damage, lose Protections, and become Rooted. If the seed lands on the ground, after 5s it will grow into a flower providing MP5 to nearby allies. The pod can be destroyed by Basic Attacks (maximum 3 pods), exploding and releasing poisonous spores that reduce Protections of nearby enemies.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Root, Damage" },
						{ "description": "Range/Radius:", "value": "45/10" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/120/160/200/240 (+50% of your Magical Power)",
						},
						{ "description": "MP5 Increase:", "value": "20" },
						{
							"description": "Protections Reduced:",
							"value": "5/10/15/20/25 + 5% for 5s",
						},
						{ "description": "Root Duration:", "value": "1.5s" },
					],
				},
			},
			"Id": 20903,
			"Summary": "Verdant Growth",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/verdant-growth.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Sylvanus releases wisps that seek out nearby allies and enemies. Allied gods are Protected and all allies are Healed while enemies take damage over time.\n\nThe initial wisp heals allied gods and damages enemy gods for twice the normal amount. This ability does not create seed pods when hitting minions.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Target, Heal, Damage" },
						{ "description": "Radius:", "value": "30" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "84/120/156/192/228 (+60% of your Magical Power)",
						},
						{
							"description": "Heal:",
							"value": "10/14/18/22/26 every 1s for 5s",
						},
						{
							"description": "Protections Gained:",
							"value": "10/15/20/25/30 for 5s",
						},
						{
							"description": "Minion effectiveness:",
							"value": "35% Healing and damage",
						},
					],
				},
			},
			"Id": 10554,
			"Summary": "Wisps",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/wisps.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14/13.5/13/12.5/12s",
					"cost": "70/65/60/55/50",
					"description":
						"Sylvanus's treant launches his rooty hand out in front of him. The hand stops at the first enemy god hit, Stunning them with no diminishing returns and pulling them back towards Sylvanus.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Grab" },
						{ "description": "Range:", "value": "60" },
					],
					"rankitems": [{ "description": "Stun Duration:", "value": "1s" }],
				},
			},
			"Id": 20904,
			"Summary": "Nature's Grasp",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/natures-grasp.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Sylvanus's treant slams his large trunks into the ground causing large thorny roots to break out of the ground around him. Enemies hit are knocked up and poisoned.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Radius:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "300/375/450/525/600 (+125% of your Magical Power)",
						},
					],
				},
			},
			"Id": 10573,
			"Summary": "Wrath of Terra",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/wrath-of-terra.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.9,
		"Attack Speed Per Level": 0.007,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Terra",
		"HealthPerLevel": 100,
		"ManaPerLevel": 35,
		"Health": 700,
		"Mana": 200,
		"PhysicalProtection": 28,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.5,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/terra.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "11s",
					"cost": "50 ",
					"description":
						"Terra gains momentum, causing her to charge forward and deal damage to enemies she passes through.\n\nTerra may charge through her own Standing Stones to Shatter them. If she does she may charge one more time within the next 3s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "60/110/160/210/260 (+30% of your Magical Power)",
						},
					],
				},
			},
			"Id": 13315,
			"Summary": "Force of Nature",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/force-of-nature.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "60/65/70/75/80",
					"description":
						"Terra raises up two Standing Stone walls on either side of a target location. As long as both stones stand, Terra may activate this ability again to slam the stones together, damaging and Stunning enemies in between for 1.5s.\n\nThese stones can be Shattered into a cone of shrapnel with Force of Nature, damaging enemies in the area. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Stun, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{ "description": "Wall Duration:", "value": "5s" },
						{
							"description": "Damage Per Wall:",
							"value": "50/85/120/155/190 (+35% of your Magical Power)",
						},
						{
							"description": "Shatter Damage:",
							"value": "60/110/160/210/260 (+35% of your Magical Power)",
						},
					],
				},
			},
			"Id": 13148,
			"Summary": "Crushing Earth",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/crushing-earth.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "60/65/70/75/80",
					"description":
						"Terra summons a Standing Stone monolith that persists for up to 10s. The monolith heals nearby allied gods every .5s for the duration and provides Protections but can be destroyed early if hit by 5 enemy basic attacks.\n\nTerra can Shatter this stone with Force of Nature to Root enemies in the area for 1s and create a damaging area that lasts 5s. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Heal, Damage" },
						{ "description": "Range/Radius:", "value": "55/30" },
					],
					"rankitems": [
						{ "description": "Heal Per Tick:", "value": "2/4/6/8/10" },
						{ "description": "Protections:", "value": "10/15/20/25/30" },
						{
							"description": "Shatter Damage:",
							"value": "90/120/150/180/210 (+50% of your Magical Power)",
						},
						{ "description": "Root:", "value": "1s" },
						{
							"description": "Damage Per Tick",
							"value": "10/12/14/16/18 (+5% of your Magical Power)",
						},
					],
				},
			},
			"Id": 13158,
			"Summary": "Monolith",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/monolith.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Terra channels her strength into the world around her, buffing her allies and debuffing enemies for 10s.\nAllies gain 10% damage mitigation and protective stones that heal the ally if all 4 are activated.\nEnemies receive 5% more damage from all sources and harmful stones that damage the enemy if all 4 are activated. Stones are activated when an ally or enemy receives damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Radius:", "value": "55" },
					],
					"rankitems": [
						{ "description": "Heal:", "value": "70/105/140/175/210" },
						{
							"description": "Damage:",
							"value": "200/250/300/350/400 (60% of your Magical Power)",
						},
					],
				},
			},
			"Id": 13164,
			"Summary": "Earthen Fury",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/earthen-fury.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 1.55, "Scaling": 0.2 },
		"Attack Speed": 0.9,
		"Attack Speed Per Level": 0.013,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Thanatos",
		"HealthPerLevel": 79,
		"ManaPerLevel": 38,
		"Health": 546,
		"Mana": 240,
		"PhysicalProtection": 19.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/thanatos.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "25/35/45/55/65",
					"description":
						"Thanatos flings his scythe at an enemy, dealing damage and an additional 10% of the target's maximum Health against enemy gods. Enemies hit are slowed for 3s and heal Thanatos based on damage dealt. Consumes 4% of Thanatos' current HP when used.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Slow, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/170/240/310/380 (+60% of your Physical Power)",
						},
						{ "description": "Bonus D (Gods):", "value": "10% of max HP" },
						{ "description": "Healing:", "value": "50% of damage dealt" },
						{ "description": "Slow:", "value": "20%" },
					],
				},
			},
			"Id": 9299,
			"Summary": "Death Scythe",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/death-scythe.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "20/25/30/35/40",
					"description":
						"Thanatos senses death, gaining immunity to Slow effects and additional move speed and Physical Penetration for 6s. His speed bonus increases up to double when moving toward an enemy god within the instant kill Health threshold of his Ultimate. Consumes 4% of Thanatos' current HP when used.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{ "description": "Penetration:", "value": "15/20/25/30/35" },
						{ "description": "Move Speed:", "value": "10/15/20/25/30%" },
						{
							"description": "Bonus Speed (Low Health):",
							"value": "10/15/20/25/30%",
						},
					],
				},
			},
			"Id": 9304,
			"Summary": "Scent of Death",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/scent-of-death.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "25/30/35/40/45",
					"description":
						"Thanatos swings his scythe, dealing Physical damage and Silencing enemies he hits. Thanatos moves at a reduced rate while swinging. Consumes 4% of Thanatos' current HP when used.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Cone, Silence, Damage",
						},
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "100/150/200/250/300 (+70% of your Physical Power)",
						},
						{ "description": "Silence Duration:", "value": "1s" },
					],
				},
			},
			"Id": 9228,
			"Summary": "Soul Reap",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/soul-reap.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "40/50/60/70/80",
					"description":
						"Thanatos flaps his wings and ascends for 5s, unable to be hit. While airborne, he moves unimpeded at an increased speed before diving to his target location, dealing damage. Enemies below a Health threshold are instantly killed. All others are Stunned. Consumes 8% of Thanatos' current HP when used.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Stun, Damage" },
						{ "description": "Range/Radius:", "value": "55/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "110/145/180/215/250 (+80% of your Physical Power)",
						},
						{ "description": "Kill HP Threshold:", "value": "24/28/32/36/40%" },
						{ "description": "Stun Duration:", "value": "1.5s" },
						{ "description": "Bonus Move Speed:", "value": "150%" },
					],
				},
			},
			"Id": 9272,
			"Summary": "Hovering Death",
			"URL":
				"https://webcdn.hirezstudiosThe Morrigan.com/smite/god-abilities/hovering-death.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.3, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.017,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "The Morrigan",
		"HealthPerLevel": 79,
		"ManaPerLevel": 38,
		"Health": 560,
		"Mana": 250,
		"PhysicalProtection": 16.8,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon":
			"https://webcdn.hirezstudios.com/smite/god-icons/the-morrigan.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"When activated, The Morrigan begins combining the power from all three of her forms. When activated again, they simultaneously damage and stun enemies in front of them. Jungle Camps take an extra +15% damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Stun, Damage" },
						{ "description": "Range:", "value": "30" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/135/190/245/300 (+75% of your Magical Power)",
						},
						{ "description": "Stun Duration:", "value": "1s" },
					],
				},
			},
			"Id": 14102,
			"Summary": "Deadly Aspects",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/deadly-aspects.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "7s",
					"cost": "60/65/70/75/80",
					"description":
						"The Morrigan launches a wave of dark magic at her enemies that deals damage, deals bonus damage to minions, and applies an Omen to enemy gods for 8 seconds. Gods with an Omen will take bonus damage the next time they are hit by any damaging ability. ",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Initial Damage:",
							"value": "40/70/100/130/160 (40% of your Magical Power)",
						},
						{
							"description": "Minion Bonus Damage:",
							"value": "40/70/100/130/160 (+20% of your Magical Power)",
						},
						{
							"description": "God Bonus Damage:",
							"value": "40/70/100/130/160 (+40% of your Magical Power)",
						},
					],
				},
			},
			"Id": 13785,
			"Summary": "Dark Omen",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/dark-omen.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "60/65/70/75/80",
					"description":
						"The Morrigan creates a phantom of herself while becoming stealthed and increasing her Movement Speed. The phantom runs to the targeted area, deals no damage, and will die if it takes any damage. If The Morrigan attacks or takes damage, she will be revealed and lose her increased Movement Speed.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Buff" },
						{ "description": "Range:", "value": "80" },
					],
					"rankitems": [
						{ "description": "Duration:", "value": "3/3.5/4/4.5/5s " },
						{
							"description": "Movement Speed:",
							"value": "30/32.5/35/37.5/40%",
						},
					],
				},
			},
			"Id": 14001,
			"Summary": "Confusion",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/confusion.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "140/130/120/110/100s",
					"cost": "100",
					"description":
						"The Morrigan selects a God from the current match to become a copy of and cleanses herself of all effects. She copies all of their current stats and may use all of their abilities for the duration. She retains her own Relics and cannot use Consumables.\n\nThe Rank of her abilities will transfer to the skills of the god she copies. This ability's cooldown will be increased to match the target God's ultimate ability cooldown. You may hover over a target and cancel to pre-select them, so you do not need to use the cursor on activation. ",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [{ "description": "Duration:", "value": "10s" }],
				},
			},
			"Id": 13690,
			"Summary": "Changeling",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/changeling.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 2.4, "Scaling": 0.2 },
		"Attack Speed": 0.87,
		"Attack Speed Per Level": 0.009,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Thor",
		"HealthPerLevel": 80,
		"ManaPerLevel": 38,
		"Health": 665,
		"Mana": 240,
		"PhysicalProtection": 19.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/thor.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "55/60/65/70/75 ",
					"description":
						"Thor throws Mjolnir forward, doing damage to all enemies in its path. If hit twice, minions will take 100% damage while gods take 200% damage from the return. While the hammer is flying, pressing the button again will teleport Thor to his hammer.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Teleport, Damage",
						},
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "120/240/360/480/600 (+90% of your Physical Power)",
						},
					],
				},
			},
			"Id": 8260,
			"Summary": "Mjolnir's Attunement",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/mjolnirs-attunement.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "17/16.5/16/15.5/15s",
					"cost": "60 ",
					"description":
						"Thor slams his hammer on the ground, causing a fissure to appear in front of him, Stunning and damaging enemies, and blocking movement.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Stun, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "30/50/70/90/110 (+20% of your Physical Power)",
						},
						{ "description": "Stun:", "value": "1.2/1.3/1.4/1.5/1.6s" },
						{ "description": "Fissure Lifetime:", "value": "3.7s" },
					],
				},
			},
			"Id": 8261,
			"Summary": "Tectonic Rift",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/tectonic-rift.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "55/60/65/70/75 ",
					"description":
						"Thor spins his hammer around him dealing damage to Enemies in front of him up to 3 times and those behind him up to 2 times. The final swing deals extra damage. Thor is immune to Knockup for the duration.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Damage" },
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "D per Tick:",
							"value": "30/50/70/90/110 (+40% of your Physical Power)",
						},
						{
							"description": "Full Combo Damage:",
							"value": "105/165/225/285/345 (+140% of your Physical Power)",
						},
					],
				},
			},
			"Id": 17473,
			"Summary": "Berserker Barrage",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/berserker-barrage.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "110/105/100/95/90s",
					"cost": "80/90/100/110/120 ",
					"description":
						"After a short buildup, Thor leaps into the air. While in the air, Thor can target a great distance away to come crashing down in the area, dealing damage and Stunning all enemies in the radius. For 6 seconds after landing, when Thor deals damage to a god lightning will arc, damaging the enemy hit and up to two additional enemies within 35 units. Subsequent lighting hits deal 50% damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Stun, Damage" },
						{ "description": "Range/Radius:", "value": "200/20" },
					],
					"rankitems": [
						{
							"description": "Damage Landing Plus 1 Arc:",
							"value": "120/195/270/345/420 (100% of your Physical Power)",
						},
						{ "description": "Stun:", "value": "1.5s" },
						{
							"description": "Arc D:",
							"value": "20/30/40/50/60 (10% of your Physical Power)",
						},
					],
				},
			},
			"Id": 8310,
			"Summary": "Anvil of Dawn",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/anvil-of-dawn.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.4, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.014,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Thoth",
		"HealthPerLevel": 79,
		"ManaPerLevel": 49,
		"Health": 511,
		"Mana": 245,
		"PhysicalProtection": 12.6,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.8,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/thoth.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "8s",
					"cost": "50/55/60/65/70",
					"description":
						"Thoth conjures three Hieroglyphs around him, ignoring the Basic Attack Movement penalty. His next 3 Basic Attacks pass through Enemies and apply Ability Damage instead. Additionally, these Basic Attacks deal an additional 25% damage to jungle minions. If these attacks pass through the Glyph of Pain, their range is increased by 30. Hitting an Enemy God with this ability increases the damage they take from each subsequent shot by 15% and reduces the cooldown by 0.5s (this can only occur once per shot).",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "55/85" },
					],
					"rankitems": [
						{
							"description": "Damage per Shot:",
							"value": "45/65/85/105/125 (+25% of your Magical Power)",
						},
						{ "description": "Glyphs Spawned:", "value": "3" },
					],
				},
			},
			"Id": 13561,
			"Summary": "Hieroglyphic Assault",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/hieroglyphic-assault.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "16/15/14/13/12s",
					"cost": "70/75/80/85/90",
					"description":
						"Thoth dashes in the direction he is currently traveling. After dashing, for 5s Thoth's next basic attack is enhanced.\n\nThis projectile roots the first Enemy god hit while slowing all other Enemies, and also deals Ability Damage.\n\nIf either the Dash or Attack passes through the Glyph of Pain, their respective range is increased by 30.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Root, Damage" },
						{ "description": "Range:", "value": "45,55/75,85" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/110/150/190/230 (+60% of your Magical Power)",
						},
						{ "description": "Root Duration:", "value": "1.5s" },
						{ "description": "Slow:", "value": "30%" },
						{ "description": "Slow Duration:", "value": "1.5s" },
					],
				},
			},
			"Id": 13740,
			"Summary": "Evade and Punish",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/evade-and-punish.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "5s",
					"cost": "25/30/35/40/45",
					"description":
						"From his book, Thoth conjures forth a Hieroglyph in front of him. Thoth's ability projectiles passing through the glyph receive increased damage, and a range increase of 30. This damage does not trigger Item effects. \n\nThoth and allies' Basic Attack projectiles also receive a lesser damage bonus, but no range increase.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Buff, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Ability Bonus Damage:",
							"value": "15/25/35/45/55 (+5% of your Magical Power)",
						},
						{
							"description": "Basic Attack Damage:",
							"value": "30/35/40/45/50 (+5% of your Magical Power)",
						},
					],
				},
			},
			"Id": 13566,
			"Summary": "Glyph of Pain",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/glyph-of-pain.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Thoth conjures a large glyph from his book, and then inscribes three more at its corners. When all four have been summoned, he sends them forward damaging all Enemies in their path.\n\nThoth may activate this ability again to fire the ability early, doing a reduced amount of damage based on the number of glyphs currently summoned. Alternately he may cancel this ability at a cost of 30 mana.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "100,130" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "420/480/540/600/660 (+125% of your Magical Power)",
						},
					],
				},
			},
			"Id": 13575,
			"Summary": "Final Judgement",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/final-judgement.jpg",
		},
		"Basic Damage": { "Base Damage": 32.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Tiamat",
		"HealthPerLevel": 81,
		"ManaPerLevel": 55,
		"Health": 560,
		"Mana": 300,
		"PhysicalProtection": 18.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.9,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/tiamat.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "55/60/65/70/75",
					"description":
						"Tiamat gathers power, allowing her to fire orbs of energy at the end of the channel. Each orb damages enemies and stops on enemy gods.\n\nHitting the same enemy deals 15% less damage each time, to a maximum of 70% reduction.\n\nThis ability can fire additional projectiles at ranks 3 and 5.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "148/166/280/310/380 (+123% of your Magical Power)",
						},
					],
				},
			},
			"Id": 19332,
			"Summary": "Primordial Onslaught",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/primordial-onslaught.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "16/15/14/13/12s",
					"cost": "65/70/75/80/85",
					"description":
						"Tiamat creates an energy field dealing low damage to enemies in the entire area and then a larger amount in the inner area. The inner area of the field also stuns enemies for a short duration.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Stun, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Area Damage:",
							"value": "40/55/70/85/100 (+40% of your Magical Power)",
						},
						{
							"description": "Inner Damage:",
							"value": "100/150/200/250/300 (+90% of your Magical Power)",
						},
						{ "description": "Stun Duration:", "value": "1s" },
					],
				},
			},
			"Id": 19335,
			"Summary": "Ruination",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/ruination.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "20/18.5/17/15.5/14s",
					"cost": "40",
					"description":
						"Tiamat dives into the fight landing on all fours, dealing damage and switching to her Ground stance. This ability also provides Tiamat one Hardened Scale.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "50/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "40/80/120/160/200 (+40% of your Magical Power)",
						},
					],
				},
			},
			"Id": 19336,
			"Summary": "Grounding Dive",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/grounding-dive.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "0s",
					"cost": "0",
					"description":
						"Tiamat is able to summon one of her children onto the battlefield.\n\nSummon Serpents: Serpents that travel down lanes and act as minions.\n\nSummon Beast: Kusarikku who stands guard waiting for enemy gods.\n\nSummon Storm: Umu Dabrutu, the storm that chases enemies.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Pet, Damage" },
						{ "description": "Range:", "value": "50" },
					],
					"rankitems": [],
				},
			},
			"Id": 19337,
			"Summary": "Children of Creation",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/children-of-creation.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.88,
		"Attack Speed Per Level": 0.009,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Tsukuyomi",
		"HealthPerLevel": 82,
		"ManaPerLevel": 35,
		"Health": 637,
		"Mana": 205,
		"PhysicalProtection": 18.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/tsukuyomi.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "50/60/70/80/90",
					"description":
						"Tsukuyomi throws a Dark Moon Shuriken that damages enemies and stops on gods, sticking into them. If Tsukuyomi gets close to the god he retrieves the Shuriken and reduces its cooldown. <font color='#b18cd9'>After casting this ability Shingetsu's next Basic Attack becomes ranged. This attack steals Movement Speed from the enemy hit.</font>",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Slow, Damage" },
						{ "description": "Range:", "value": "65" },
					],
					"rankitems": [
						{
							"description": "Shuriken Damage:",
							"value": "85/135/185/235/285 (+80% of your Physical Power)",
						},
						{ "description": "Cooldown Reduction:", "value": "4s" },
						{ "description": "Movement Speed Steal:", "value": "25%" },
					],
				},
			},
			"Id": 18663,
			"Summary": "Dark Moon Shuriken",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/dark-moon-shuriken.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "70/75/80/85/90",
					"description":
						"Shingetsu and Mangetsu form themselves into a Kusarigama. Tsukuyomi swings the weapon to his left and right, damaging and disarming enemies hit. He then swings the weapon forward with more force stunning enemies hit. While channeling Tsukuyomi gains 25% Movement Speed and is immune to Knockups.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Area, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "30/20" },
					],
					"rankitems": [
						{
							"description": "Swing:",
							"value": "35/60/85/110/135 (+40% of your Physical Power)",
						},
						{ "description": "Disarm Duration:", "value": "1s" },
						{
							"description": "Total Damage (Both Swing + Stun):",
							"value": "130/235/340/445/550 (+160% of your Physical Power)",
						},
						{ "description": "Stun Duration:", "value": "1/1.1/1.2/1.3/1.4s" },
					],
				},
			},
			"Id": 18664,
			"Summary": "Kusarigama",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/kusarigama.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "40/45/50/55/60",
					"description":
						"Tsukuyomi scatters Caltrops on the ground which damage enemies in the area and slow them for 1.5s. Enemies who move inside this Caltrop field take damage and are slowed again. <font color='#DFEAFA'>After casting this ability Mangetsu's next Basic Attack becomes ranged. This attack deals bonus Physical Damage.</font>",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Slow, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Total Damage (Initial Damage + Three Ticks):",
							"value": "35/50/65/80/95 (+110% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "20/22.5/25/27.5/30%" },
						{
							"description": "Bonus:",
							"value": "5 (+30% of your Physical Power)",
						},
					],
				},
			},
			"Id": 18665,
			"Summary": "Silver Moon Caltrops",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/silver-moon-caltrops.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80/90/100/110/120",
					"description":
						"Tsukuyomi channels the power of the Full Moon, gaining Crowd Control immunity and 20% Damage Reduction. He fires forward 4 powerful piercing beams of moonlight. Enemy gods damaged become marked. Each beam can hit up to 3 enemy gods. After firing all beams Tsukuyomi charges forward at light speed, dashing through all enemies in the order they were hit, dealing heavy damage. Tsukuyomi will end his dashing at the final enemy hit. If Tsukuyomi kills an enemy god with this ability Tsukuyomi he will gain both of his ranged basic attacks.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Buff, Damage" },
						{ "description": "Range:", "value": "90" },
					],
					"rankitems": [
						{
							"description": "Total Damage (All 4 Beams + Dashes):",
							"value": "400/600/800/1000/1200 (+260% of your Physical Power)",
						},
						{
							"description": "Dash:",
							"value": "70/100/130/160/190 (+50% of your Physical Power)",
						},
					],
				},
			},
			"Id": 18666,
			"Summary": "Piercing Moonlight",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/piercing-moonlight.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 2.4, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.013,
		"Role": "Assassin",
		"Type": "Physical",
	},
	{
		"Name": "Tyr",
		"HealthPerLevel": 87,
		"ManaPerLevel": 40,
		"Health": 679,
		"Mana": 230,
		"PhysicalProtection": 25.2,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/tyr.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "15/14.5/14/13.5/13s",
					"cost": "50/55/60/65/70",
					"description":
						"Tyr charges forward, immune to Knockup, damaging enemies. Assault Stance: Tyr pushes all enemies along with him, hitting them 2 times and knocking them up in the air. Guard Stance: Tyr hits each enemy only once, passing through and knocking them up in the air.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Dash, Knockup, Damage",
						},
						{ "description": "Range:", "value": "40" },
					],
					"rankitems": [
						{
							"description": "Assault Damage (Both Hits):",
							"value": "80/180/280/380/480 (+110% of your Physical Power)",
						},
						{
							"description": "Guard Damage:",
							"value": "70/120/170/220/270 (+50% of your Physical Power)",
						},
					],
				},
			},
			"Id": 9004,
			"Summary": "Fearless",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/fearless.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "12/11/10/9/8s",
					"cost": "50",
					"description":
						"Tyr makes a massive melee attack, hitting all enemies within a 180 degree cone.\n\nAssault Stance: Enemies that are knocked up in the air are knocked away.\n\nGuard Stance: Tyr heals himself for each enemy hit (max 3).",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Heal, Damage" },
						{ "description": "Range:", "value": "15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/115/150/185/220 (+65% of your Physical Power)",
						},
						{ "description": "Healing:", "value": "15/35/55/75/95" },
					],
				},
			},
			"Id": 9013,
			"Summary": "Power Cleave",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/power-cleave.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "0",
					"description":
						"Tyr changes between Assault and Guard stances. Changing stances refreshes the cooldown on Fearless and Power Cleave. Tyr gains benefits depending on his current stance, and also gains half the benefits of the opposing stance. \n\nAssault Stance: Gain Physical Power.\n\nGuard Stance: Gain Protections.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{
							"description": "Assault Stance:",
							"value": "12/20/28/36/44 Physical Power",
						},
						{
							"description": "Defense Stance:",
							"value": "12/20/28/36/44 Protections",
						},
					],
				},
			},
			"Id": 9025,
			"Summary": "Change Stance",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/change-stance.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "80/90/100/110/120",
					"description":
						"Tyr leaps through the air, bringing indiscriminate justice upon all enemies in the target area, and Slowing them with additional effects depending on what stance he is in.\n\nAssault Stance: Deal additional damage.\n\nGuard Stance: Stun enemies hit.",
					"menuitems": [
						{ "description": "Ability:", "value": "Leap" },
						{ "description": "Affects:", "value": "Enemy" },
						{ "description": "Damage:", "value": "Physical" },
						{ "description": "Radius:", "value": "25" },
					],
					"rankitems": [
						{
							"description": "Assault Damage:",
							"value": "250/375/500/625/750 (120% of your Physical Power)",
						},
						{
							"description": "Guard Damage:",
							"value": "200/300/400/500/600 (120% of your Physical Power)",
						},
						{ "description": "Slow:", "value": "25%" },
						{ "description": "Slow Duration:", "value": "3s" },
						{ "description": "Guard Stun:", "value": "1s" },
					],
				},
			},
			"Id": 9173,
			"Summary": "Lawbringer",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/lawbringer.jpg",
		},
		"Basic Damage": { "Base Damage": 39.0, "Per Level": 2.0, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.009,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Ullr",
		"HealthPerLevel": 84,
		"ManaPerLevel": 40,
		"Health": 672,
		"Mana": 230,
		"PhysicalProtection": 18.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/ullr.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "50/55/60/65/70",
					"description":
						"Ranged: Ullr fires a bladed arrow in a line, dealing damage and passing through all targets it hits. Melee: Ullr throws an axe in a line, hitting a single target dealing damage and Stunning it.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Stun, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Damage (Bow):",
							"value": "60/110/160/210/260 (+70% of your Physical Power)",
						},
						{
							"description": "Damage (Axe):",
							"value": "50/80/110/140/170 (+70% of your Physical Power)",
						},
						{
							"description": "Stun Duration (Axe):",
							"value": "1/1.1/1.2/1.3/1.4s",
						},
					],
				},
			},
			"Id": 9807,
			"Summary": "Bladed Arrow (Thrown Axe)",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/bladed-arrow.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "50",
					"description":
						"Ranged: Ullr gains bonus Attack Speed for 5s.\n\nMelee: Ullr gains bonus move speed for 5s.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{
							"description": "Attack Speed (Bow):",
							"value": "20/25/30/35/40%",
						},
						{
							"description": "Move Speed (Axe):",
							"value": "20/22.5/25/27.5/30%",
						},
						{ "description": "Duration:", "value": "5s" },
					],
				},
			},
			"Id": 9896,
			"Summary": "Expose Weakness (Invigorate)",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/expose-weakness.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "60/65/70/75/80",
					"description":
						"Ranged: Ullr fires a volley at his target location, dealing damage.\n\nMelee: Ullr leaps to his target location, dealing damage in an AoE on arrival.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Leap, Damage" },
						{ "description": "Range/Radius:", "value": "80,55/10,15" },
					],
					"rankitems": [
						{
							"description": "Damage (Bow):",
							"value": "80/120/160/200/240 (0% of your Physical Power)",
						},
						{
							"description": "Damage (Axe):",
							"value": "50/80/110/140/170 (+50% of your Physical Power)",
						},
					],
				},
			},
			"Id": 9893,
			"Summary": "Hail of Arrows (Glory Bound)",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/hail-of-arrows.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "1s",
					"cost": "0",
					"description":
						"Ullr changes stance and gains benefits depending on which stance he is in. Ullr also gains half the benefits of the opposing stance. \n\nRanged: Ullr uses his yew bow, removing Disarms and gaining additional Physical Power.\n\nMelee: Ullr uses his axes, removing Disarms and gaining additional Physical Lifesteal.",
					"menuitems": [{ "description": "Ability Type:", "value": "Buff" }],
					"rankitems": [
						{
							"description": "Physical Power (Bow):",
							"value": "20/26/32/38/44",
						},
						{
							"description": "Physical Lifesteal (Axe):",
							"value": "15/22.5/30/37.5/45%",
						},
					],
				},
			},
			"Id": 9915,
			"Summary": "Wield Axes (Wield Bow)",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/wield-axes.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 2.4, "Scaling": 1.0 },
		"Attack Speed": 0.95,
		"Attack Speed Per Level": 0.014,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Vamana",
		"HealthPerLevel": 92,
		"ManaPerLevel": 39,
		"Health": 686,
		"Mana": 200,
		"PhysicalProtection": 25.2,
		"MagicProtection": 32,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/vamana.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "70",
					"description":
						"Vamana opens his umbrella in front of him and sprints forward, doing damage to all enemies and knocking them into the air.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Dash, Knockup, Damage",
						},
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/110/150/190/230 (+60% of your Physical Power)",
						},
					],
				},
			},
			"Id": 7719,
			"Summary": "Clear the Path",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/clear-the-path.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "13/12.5/12/11.5/11s",
					"cost": "60/65/70/75/80",
					"description":
						"Vamana infuses his umbrella with his armor, reinforcing it while he strikes forth, doing damage to all enemies in a cone.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "85/135/185/235/285 (+70% of your Physical Power)",
						},
					],
				},
			},
			"Id": 7721,
			"Summary": "Armored Umbrella",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/armored-umbrella.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "60/65/70/75/80",
					"description":
						"Vamana spins an umbrella out in front of him, hitting everyone in its path for damage and slowing your enemies' attack and movement speeds. After reaching its destination, the umbrella returns back to Vamana, hitting everyone in its path again.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Slow, Damage" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "55/90/125/160/195 (+50% of your Physical Power)",
						},
						{ "description": "Attack / Movement Speed Slow:", "value": "25%" },
						{ "description": "Speed Slow Duration:", "value": "3s" },
					],
				},
			},
			"Id": 7722,
			"Summary": "Umbrellarang",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/umbrellarang.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Vamana grows to an enormous giant for 5s gaining immunity to Crowd Control, Protections, Physical Power, Physical Lifesteal, a stacking shield that cannot exceed 1000 Health, and his Basic Attacks now damage all nearby enemies. His Movement Penalty for Attacking, Backpedaling, and Strafing are reduced by 20% while in this state.\nSuccessful attacks on enemies also provide stacking Movement Speed for 3s. When Vamana is in Colossal form, taking damage from gods increases the duration to a max of 9s and Vamana can pass through player made walls.\nYou may cancel his giant form early.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area Basic, Buff" },
						{ "description": "Range:", "value": "16" },
					],
					"rankitems": [
						{ "description": "Protections:", "value": "25/30/35/40/45" },
						{ "description": "Physical Power:", "value": "35/45/55/65/75" },
						{ "description": "Physical Lifesteal:", "value": "37.5%" },
						{
							"description": "Shield:",
							"value": "0.75% of Max. Health per .2 second",
						},
						{
							"description": "Movement Speed:",
							"value": "3% stacking 5 times",
						},
					],
				},
			},
			"Id": 7723,
			"Summary": "Colossal Fury",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/colossal-fury.jpg",
		},
		"Basic Damage": { "Base Damage": 37.0, "Per Level": 2.0, "Scaling": 1.0 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.014,
		"Role": "Warrior",
		"Type": "Physical",
	},
	{
		"Name": "Vulcan",
		"HealthPerLevel": 75,
		"ManaPerLevel": 40,
		"Health": 532,
		"Mana": 245,
		"PhysicalProtection": 18.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/vulcan.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "8/7.5/7/6.5/6s",
					"cost": "40/45/50/55/60",
					"description":
						"Vulcan blasts a fireball out of his Forge, pushing him back and dealing damage to all enemies in its path, marking the first god that is hit. The Inferno Cannon prioritizes the marked target and deals 15% more damage to that god.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Damage" },
						{ "description": "Range:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/130/170/210/250 (+70% of your Magical Power)",
						},
						{ "description": "Mark Lifetime:", "value": "4s" },
					],
				},
			},
			"Id": 8614,
			"Summary": "Backfire",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/backfire.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "50/55/60/65/70",
					"description":
						"Vulcan constructs an Inferno Cannon that shoots fireballs in a cone that deal damage to the target every second. The Inferno Cannon lasts until destroyed or another is placed. This inherits Vulcan's penetrations but does not apply on-hit effects. Inferno Cannon takes 50% additional damage from non-god sources. Inferno Cannon ignores 25% of the target's Magical Protection.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Pet, Damage" },
						{ "description": "Range:", "value": "60" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "45/70/95/120/145 (+40% of your Magical Power)",
						},
					],
				},
			},
			"Id": 8609,
			"Summary": "Inferno Cannon",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/inferno-cannon.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "50/55/60/65/70",
					"description":
						"Vulcan tosses a bomb that explodes in a radius on impact with the ground, damaging and knocking back nearby enemies.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Range/Radius:", "value": "60/15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/130/190/230/280 (+80% of your Magical Power)",
						},
					],
				},
			},
			"Id": 9444,
			"Summary": "Magma Bomb",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/magma-bomb.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90/85/80/75/70s",
					"cost": "80/90/100/110/120",
					"description":
						"Vulcan launches a rocket that explodes on impact with the ground. The rocket starts at 80% strength, and increases damage the further it travels from Vulcan.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Damage" },
						{ "description": "Range/Radius:", "value": "120/30" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "400/520/640/760/880 (+130% of your Magical Power)",
						},
					],
				},
			},
			"Id": 9540,
			"Summary": "Earthshaker",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/earthshaker.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.9,
		"Attack Speed Per Level": 0.01,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Xbalanque",
		"HealthPerLevel": 79,
		"ManaPerLevel": 37,
		"Health": 637,
		"Mana": 220,
		"PhysicalProtection": 16.8,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.1,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/xbalanque.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": ".5s",
					"cost": "5/8/11/14/17 per shot",
					"description":
						"When Xbalanque toggles on this ability, his Basic Attacks deal additional damage. When the bola hits, it splits into 2 that hit enemies up to 30 units behind the target for 37.5% damage (on-hit effects do not apply). Pressing the ability again cancels toggle.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area Basic, Damage" },
						{ "description": "Range:", "value": "55/30" },
					],
					"rankitems": [
						{ "description": "D:", "value": "10/20/30/40/50" },
					],
				},
			},
			"Id": 8521,
			"Summary": "Branching Bola",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/branching-bola.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "16/15.5/15/14.5/14s",
					"cost": "60/65/70/75/80",
					"description":
						"Xbalanque shoots 15 darts in a cone in front of him, dealing damage with each one. An enemy can be hit by 5 darts, with the other 4 doing 30% damage. Enemies hit are poisoned, taking additional damage every .5s and are Slowed.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Slow, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "D:",
							"value": "30/45/60/75/90 (+40% of your Physical Power)",
						},
						{
							"description": "Total Damage:",
							"value": "126/189/252/315/378 (+148% of your Physical Power)",
						},
						{ "description": "Poison Slow:", "value": "20%" },
						{ "description": "Poison Duration:", "value": "3s" },
					],
				},
			},
			"Id": 8524,
			"Summary": "Poison Darts",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/poison-darts.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16s",
					"cost": "60/65/70/75/80",
					"description":
						"Xbalanque rushes forward and then jumps into the air, becoming immune to Crowd Control. While in the air, he fires darts at all nearby enemies, dealing damage to all in the area. Any enemies that were poisoned by Xbalanque take additional damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Dash, Damage" },
						{ "description": "Range/Radius:", "value": "25/30" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/130/180/230/280 (+50% of your Physical Power)",
						},
						{ "description": "Bonus Poisoned D:", "value": "40%" },
					],
				},
			},
			"Id": 8530,
			"Summary": "Rising Jaguar",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/rising-jaguar.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Xbalanque shrouds enemies in darkness for 3s. During this time, Xbalanque's Basic Attack range, Attack Speed, and Movement Speed are increased.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Buff" },
						{ "description": "Range/Radius:", "value": "95/35" },
					],
					"rankitems": [
						{ "description": "Attack Speed:", "value": "20/30/40/50/60%" },
						{ "description": "Movement Speed:", "value": "20/30/40/50/60%" },
						{ "description": "Basic Attack Range Increase:", "value": "40ft" },
					],
				},
			},
			"Id": 8528,
			"Summary": "Darkest of Nights",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/darkest-of-nights.jpg",
		},
		"Basic Damage": { "Base Damage": 40.0, "Per Level": 2.5, "Scaling": 1.0 },
		"Attack Speed": 0.95,
		"Attack Speed Per Level": 0.014,
		"Role": "Hunter",
		"Type": "Physical",
	},
	{
		"Name": "Xing Tian",
		"HealthPerLevel": 95,
		"ManaPerLevel": 40,
		"Health": 693,
		"Mana": 200,
		"PhysicalProtection": 29.4,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.7,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/xing-tian.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "55/60/65/70/75",
					"description":
						"Xing Tian shouts from his chest with great force, damaging enemies and reducing their Basic Attack damage. Enemies also take damage over time based on their maximum health.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Debuff, Damage" },
						{ "description": "Range:", "value": "45" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/115/150/185/220 (+60% of your magical power)",
						},
						{
							"description": "DoT Damage:",
							"value": "1.5/2/2.5/3/3.5% per second",
						},
						{
							"description": "Damage Reduction:",
							"value": "20/27.5/35/42.5/50%",
						},
						{ "description": "Duration:", "value": "4s" },
					],
				},
			},
			"Id": 11824,
			"Summary": "Furious Roar",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/furious-roar.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "14s",
					"cost": "50/55/60/65/70",
					"description":
						"Xing Tian first launches an attack with his axe, knocking the opponents into the air before slamming them into the ground and rooting them.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Area, Crowd Control, Damage",
						},
						{ "description": "Range/Radius:", "value": "25/20" },
					],
					"rankitems": [
						{
							"description": "Axe Damage:",
							"value": "35/50/65/80/95 (+25% of your magical power)",
						},
						{
							"description": "Slam Damage:",
							"value": "55/85/115/145/175 (+45% of your magical power)",
						},
						{ "description": "Root Duration:", "value": "1.6/1.7/1.8/1.9/2s" },
					],
				},
			},
			"Id": 11829,
			"Summary": "Hook Slam",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/hook-slam.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "15s",
					"cost": "60/65/70/75/80",
					"description":
						"Xing Tian leaps forward, dealing damage to enemies when he lands, and he may leap again within 3s. While in the air, Xing Tian has increased protections, which are refreshed if he connects with a target.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Leap, Circle, Damage" },
						{ "description": "Range/Radius:", "value": "35/12" },
					],
					"rankitems": [
						{
							"description": "Both Hit Damage:",
							"value": "120/160/200/240/280 (60% of your magical power)",
						},
						{ "description": "Protections:", "value": "20/25/30/35/40 " },
						{ "description": "Duration on hit:", "value": "4s" },
					],
				},
			},
			"Id": 13553,
			"Summary": "Sky-Cutting Axe",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/sky-cutting-axe.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "70/80/90/100/110",
					"description":
						"Xing Tian spins grabbing and hitting enemies with his axe before throwing them in the direction he is facing.\n\nDamage is dealt to enemies once each on the grab and throw as well as three times during the spin.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "125/225/325/425/525 (+175% of your Magical Power)",
						},
					],
				},
			},
			"Id": 11823,
			"Summary": "Whirlwind of Rage and Steel",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/whirlwind-of-rage-and-steel.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 1.55, "Scaling": 0.2 },
		"Attack Speed": 0.9,
		"Attack Speed Per Level": 0.011,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Yemoja",
		"HealthPerLevel": 100,
		"ManaPerLevel": 0,
		"Health": 686,
		"Mana": 0,
		"PhysicalProtection": 26.6,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/yemoja.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "",
					"cost": "2 Omi",
					"description":
						"Bubble: Yemoja tosses out a bubble that bounces twice, dealing damage and slowing enemies by 30% before exploding into smaller bubbles that deal 50% damage. Enemies hit by both bubble bounces take 50% damage on the second hit.\n\nMoonstrike: Yemoja calls upon the Moon to deal damage to enemies below. The inner strike is the largest, dealing full damage and stunning all enemies and enemy structures hit.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Slow, Damage" },
						{ "description": "Range/Radius:", "value": "70/14" },
					],
					"rankitems": [
						{
							"description": "Bubble Damage:",
							"value": "40/75/110/145/180 (+30% of your Magical Power)",
						},
						{ "description": "Slow Duration:", "value": "1s" },
						{
							"description": "Inner Damage:",
							"value": "50/90/130/170/210 (+40% of your Magical Power)",
						},
						{
							"description": "Outer Damage:",
							"value": "20/40/60/80/100 (+15% of your Magical Power)",
						},
						{ "description": "Stun Duration:", "value": "1s" },
					],
				},
			},
			"Id": 17633,
			"Summary": "Bouncing Bubble (Moonstrike)",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/bouncing-bubble.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "",
					"cost": "3 Omi",
					"description":
						"Yemoja sends out a wave of water that damages all enemies it passes through, dealing extra unmitigated damage to their shields. Once the wave reaches an ally it bounces to all nearby allies healing and shielding them for 3s.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Heal, Damage" },
						{ "description": "Range:", "value": "60" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "65/95/125/155/185 (+40% of your Magical Power)",
						},
						{
							"description": "Bonus damage to Shields:",
							"value": "2x/2x/2x/2x/3x",
						},
						{ "description": "Heal:", "value": "20/40/60/80/100" },
						{
							"description": "Shield:",
							"value": "30/60/90/120/150 (+15% of your Magical Power)",
						},
					],
				},
			},
			"Id": 17634,
			"Summary": "Mending Waters",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/mending-waters.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "",
					"cost": "3 Omi",
					"description":
						"Yemoja creates a water ring that Knocks Up everyone that enters it. Allies are pushed further and gain both Movement Speed and Protections for 3s. Enemies go a shorter distance and are Slowed. After entering a ring you are briefly locked out of entering another. Yemoja can place the ring at a maximum distance to reverse the direction.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Knockup" },
						{ "description": "Range:", "value": "80" },
					],
					"rankitems": [
						{
							"description": "Movement Speed:",
							"value": "10/12.5/15/17.5/20%",
						},
						{
							"description": "Protections:",
							"value": "20/25/30/35/40 Physical and Magical Protections",
						},
						{ "description": "Slow:", "value": "10% for 2s" },
						{ "description": "Ring Duration:", "value": "3s" },
					],
				},
			},
			"Id": 17635,
			"Summary": "Riptide",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/riptide.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "140s",
					"cost": "",
					"description":
						"Yemoja unleashes her full power creating two large walls of water that block enemy movement and projectiles. After a delay the river cascades down, damaging, trembling and slowing enemies.\n\nYemoja gains a buff to her Omi regeneration while she is in the river field that lingers briefly after she leaves it.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Buff, Damage" },
						{ "description": "Range:", "value": "100" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "240/305/370/435/500 (+70% of your Magical Power)",
						},
						{
							"description": "Initial Slow:",
							"value": "60% decreasing by 20% each second",
						},
						{ "description": "Slow Duration:", "value": "3s" },
						{
							"description": "Omi Regeneration:",
							"value": "1 extra every 2 seconds",
						},
						{
							"description": "Buff Duration:",
							"value": "4s after leaving the area",
						},
					],
				},
			},
			"Id": 17636,
			"Summary": "River's Rebuke",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/rivers-rebuke.jpg",
		},
		"Basic Damage": { "Base Damage": 34.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Ymir",
		"HealthPerLevel": 109,
		"ManaPerLevel": 32,
		"Health": 714,
		"Mana": 200,
		"PhysicalProtection": 32.2,
		"MagicProtection": 35,
		"PhysicalProtectionPerLevel": 3.6,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/ymir.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "13/12.5/12/11.5/11s",
					"cost": "60/65/70/75/80",
					"description":
						"Ymir summons a wall of ice out of the ground that blocks player movement.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Wall" },
						{ "description": "Range:", "value": "70" },
					],
					"rankitems": [
						{ "description": "Lifetime:", "value": "2.5/3/3.5/4/4.5ss" },
					],
				},
			},
			"Id": 7305,
			"Summary": "Ice Wall",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/ice-wall.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "8s",
					"cost": "55/60/65/70/75",
					"description":
						"Ymir smashes his club, doing damage to all enemies in front of him and Slowing them. Applies Frostbite.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Slow, Damage" },
						{ "description": "Range:", "value": "45" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "90/160/230/300/370 (+70% of your Magical Power)",
						},
						{ "description": "Slow:", "value": "35%" },
						{ "description": "Slow Duration:", "value": "4s" },
					],
				},
			},
			"Id": 7927,
			"Summary": "Glacial Strike",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/glacial-strike.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "16/15.5/15/14.5/14s",
					"cost": "60/65/70/75/80",
					"description":
						"Ymir uses his breath to freeze enemies in blocks of ice, doing damage and Stunning them. Applies Frostbite.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Stun, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "50/90/130/170/210 (+50% of your Magical Power)",
						},
						{ "description": "Stun:", "value": "1.25/1.5/1.75/2/2.25s" },
					],
				},
			},
			"Id": 7307,
			"Summary": "Frost Breath",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/frost-breath.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90/85/80/75/70s",
					"cost": "80/90/100/110/120",
					"description":
						"Ymir begins to freeze the air around him, causing shards of ice to grow on his back and Slowing enemies. After a 3s channel, Ymir erupts out of his frozen state, causing shards of ice to do damage to all enemies in his range. Applies Frostbite. Cancelling the ability decreases the damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Slow, Damage" },
						{ "description": "Radius:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "500/650/800/950/1100 (+150% of your Magical Power)",
						},
						{ "description": "Slow:", "value": "40%" },
					],
				},
			},
			"Id": 7308,
			"Summary": "Shards of Ice",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/shards-of-ice.jpg",
		},
		"Basic Damage": { "Base Damage": 38.0, "Per Level": 1.55, "Scaling": 0.2 },
		"Attack Speed": 0.85,
		"Attack Speed Per Level": 0.01,
		"Role": "Guardian",
		"Type": "Magical",
	},
	{
		"Name": "Yu Huang",
		"HealthPerLevel": 81,
		"ManaPerLevel": 55,
		"Health": 560,
		"Mana": 280,
		"PhysicalProtection": 16.8,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 3.2,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/yu-huang.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "9s",
					"cost": "60/65/70/75/80",
					"description":
						"Yu Huang conjures four cinders of the phoenix, spreading them in an X shape. The cinders rush inward, dealing damage once as they travel. When the cinders meet, they explode in a field of flames that persists for 3s, burning enemies inside. If Yu Huang is Attuned, when the cinders explode, all enemies in the area have their Magical Protections reduced.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Area, Debuff, Damage" },
						{ "description": "Range/Radius:", "value": "55/12.5" },
					],
					"rankitems": [
						{
							"description": "Total Damage (All 4 Cinders No Burn)",
							"value": "125/177/229/291/333 (+100% of your Magical Power)",
						},
						{
							"description": "Initial:",
							"value": "70/100/130/160/190 (+45% of your Magical Power)",
						},
						{
							"description": "Burn:",
							"value": "5/6/7/8/9 (+5% of your Magical Power) every 0.5s",
						},
						{ "description": "Burn Duration:", "value": "2s " },
						{
							"description": "Protection Reduction:",
							"value": "4/6/8/10/12 for 3s ",
						},
					],
				},
			},
			"Id": 21702,
			"Summary": "Flames of the Phoenix",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/flames-of-the-phoenix.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "13/12.5/12/11.5/11s",
					"cost": "60/65/70/75/80",
					"description":
						"Yu Huang begins cultivating his Dao before firing a projectile that damages and slows enemies it passes through. As it travels, it leaves behind a trail that explodes, damaging and rooting all enemies. Yu Huang can also continue charging up to 3s to earn more Dao on firing.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Line, Crowd Control, Damage",
						},
						{ "description": "Range:", "value": "60" },
					],
					"rankitems": [
						{
							"description": "Projectile:",
							"value": "50/70/90/110/130 (+35% of your Magical Power)",
						},
						{
							"description": "Total Damage (Both Hits):",
							"value": "100/165/230/295/360 (+100% of your Magical Power)",
						},
						{ "description": "Slow:", "value": "20% for 1s " },
						{ "description": "Root Duration:", "value": "1s " },
						{ "description": "Max Dao Gain:", "value": "6 " },
					],
				},
			},
			"Id": 21703,
			"Summary": "Dao Cultivation",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/dao-cultivation.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "20/19.5/19/18.5/18s",
					"cost": "70",
					"description":
						"Yu Huang calls forth the Pearl Dragon from beneath him, banishing himself into the air and becoming untargetable. He then gracefully floats back down to the ground in a controlled flight, damaging enemies where he lands. While Yu Huang is floating, he may refire this ability to increase his downward momentum, causing him to fall faster. If Yu Huang is Attuned, the Pearl Dragon follows him as he descends, knocking back any enemies beneath him.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Circle, Knockup, Damage",
						},
						{ "description": "Radius:", "value": "15" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "70/120/170/220/270 (+50% of your Magical Power)",
						},
						{ "description": "Movement Speed:", "value": "15% " },
					],
				},
			},
			"Id": 21704,
			"Summary": "Celestial Flight",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/celestial-flight.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Yu Huang manifests a huge surge of dragon-shaped energy, becoming CC immune and summoning the Pearl Dragon to oppose him. He then has 3s to aim his dragon of energy toward the Pearl Dragon, who will charge directly at it. Both dragons damage and push enemies caught in the blast. If the dragons collide, a damaging explosion occurs in the area. If Yu Huang is Attuned, the width of the dragons is increased by 50%.",
					"menuitems": [
						{
							"description": "Ability Type:",
							"value": "Area, Knockback, Damage",
						},
						{ "description": "Range/Radius:", "value": "100/18" },
					],
					"rankitems": [
						{
							"description": "Push + Explosion Damage:",
							"value": "250/365/480/595/710 (+100% of your Magical Power)",
						},
						{
							"description": "Explosion:",
							"value": "100/140/180/220/260 (+50% of your Magical Power)",
						},
					],
				},
			},
			"Id": 21705,
			"Summary": "Dueling Dragons",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/dueling-dragons.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 1,
		"Attack Speed Per Level": 0.012,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Zeus",
		"HealthPerLevel": 75,
		"ManaPerLevel": 44,
		"Health": 532,
		"Mana": 245,
		"PhysicalProtection": 11.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.9,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/zeus.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "50/55/60/65/70",
					"description":
						"Zeus fires a bolt of lightning that arcs between enemies, doing damage and applying a charge on each hit.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Slow, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "40/70/100/130/160 (+50% of your Magical Power)",
						},
						{ "description": "Arcs:", "value": "4" },
						{ "description": "Slow:", "value": "20% for 2s" },
					],
				},
			},
			"Id": 8635,
			"Summary": "Chain Lightning",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/chain-lightning.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Zeus throws his shield forward dealing damage to nearby enemies. The shield remains for 5s, and Zeus may target it with Basic Attacks or Chain Lightning. Each Basic Attack or first Chain Lightning arc that hits the shield will deal additional static damage and apply a charge in the area. Additionally, while Zeus' shield is deployed, he gains Attack and Movement Speed.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Range/Radius:", "value": "55/20" },
					],
					"rankitems": [
						{
							"description": "Initial Damage:",
							"value": "60/105/150/195/240 (+50% of your magical power)",
						},
						{
							"description": "Static:",
							"value": "55/65/75/85/95 (+30% of your magical power)",
						},
						{ "description": "Attack Speed:", "value": "15/20/25/30/35%" },
						{
							"description": "Movement Speed:",
							"value": "15/17.5/20/22.5/25%",
						},
					],
				},
			},
			"Id": 11918,
			"Summary": "Aegis Assault",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/aegis-assault.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "60",
					"description":
						"Zeus detonates any charges that have accumulated on enemies, doing damage, multiplied by 1/1.7/2.4 depending on the number of charges.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Target, Damage" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "50/80/110/140/170 (+25% of your Magical Power)",
						},
					],
				},
			},
			"Id": 7311,
			"Summary": "Detonate Charge",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/detonate-charge.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Zeus conjures a lightning storm, striking enemies in the area every second. Applies a charge with each hit.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Damage" },
						{ "description": "Range/Radius:", "value": "55/30" },
					],
					"rankitems": [
						{
							"description": "Total Damage:",
							"value": "500/725/950/1175/1400 (+275% of your Magical Power)",
						},
						{ "description": "Lifetime:", "value": "5s" },
					],
				},
			},
			"Id": 7313,
			"Summary": "Lightning Storm",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/lightning-storm.jpg",
		},
		"Basic Damage": { "Base Damage": 35.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.95,
		"Attack Speed Per Level": 0.009,
		"Role": "Mage",
		"Type": "Magical",
	},
	{
		"Name": "Zhong Kui",
		"HealthPerLevel": 89,
		"ManaPerLevel": 47,
		"Health": 630,
		"Mana": 250,
		"PhysicalProtection": 15.2,
		"MagicProtection": 30,
		"PhysicalProtectionPerLevel": 2.8,
		"MagicProtectionPerLevel": 1.6,
		"God Icon": "https://webcdn.hirezstudios.com/smite/god-icons/zhong-kui.jpg",
		"Ability One": {
			"Description": {
				"itemDescription": {
					"cooldown": "12s",
					"cost": "60/65/70/75/80",
					"description":
						"Zhong Kui pastes a card on all enemies in front of him, marking them as a demon, Slowing and damaging them each second while they are marked. If the card is removed, 75% of the remaining damage is done instantly.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Line, Slow, Damage" },
						{ "description": "Range:", "value": "55" },
					],
					"rankitems": [
						{
							"description": "Damage per Tick:",
							"value": "20/30/40/50/60 (+20% of your Magical Power)",
						},
						{
							"description": "Total Damage (No Removal):",
							"value": "100/150/200/250/300 (+100% of your Magical Power)",
						},
						{ "description": "Slow:", "value": "20%" },
						{ "description": "Card Lifetime:", "value": "5s" },
					],
				},
			},
			"Id": 9092,
			"Summary": "Expose Evil",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/expose-evil.jpg",
		},
		"Ability Two": {
			"Description": {
				"itemDescription": {
					"cooldown": "10s",
					"cost": "60/65/70/75/80",
					"description":
						"Zhong Kui drives out the demons of his enemies, dealing damage as they leave the body. Demons exorcised from Enemies marked by Expose Evil will be absorbed by Zhong Kui, healing him per demon (up to 3), and will remove the card.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Cone, Heal, Damage" },
						{ "description": "Range:", "value": "35" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "75/125/175/225/275 (+50% of your Magical Power)",
						},
						{ "description": "Heal:", "value": "15/40/65/90/115" },
					],
				},
			},
			"Id": 9212,
			"Summary": "Exorcism",
			"URL": "https://webcdn.hirezstudios.com/smite/god-abilities/exorcism.jpg",
		},
		"Ability Three": {
			"Description": {
				"itemDescription": {
					"cooldown": "13s",
					"cost": "60/65/70/75/80",
					"description":
						"When fired, the Book of Demons deals damage and Stuns enemies, stunning marked enemies for 2x the duration and removing the card. Once this ability has been ranked, the Book of Demons flies nearby Zhong Kui, firing for 50% of Zhong Kui's basic damage.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Stun, Damage" },
						{ "description": "Radius:", "value": "20" },
					],
					"rankitems": [
						{
							"description": "Damage:",
							"value": "80/135/190/245/300 (+50% of your Magical Power)",
						},
						{ "description": "Stun:", "value": "1s (2x for marked targets)" },
					],
				},
			},
			"Id": 9248,
			"Summary": "Book of Demons",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/book-of-demons.jpg",
		},
		"Ability Four": {
			"Description": {
				"itemDescription": {
					"cooldown": "90s",
					"cost": "100",
					"description":
						"Upon activation, demons pulse out from his bag at nearby players every second for 5s. They chase and accelerate over time, doing damage to enemies as they enter the body. Zhong Kui is immune to Knockback and Slows for the duration.",
					"menuitems": [
						{ "description": "Ability Type:", "value": "Circle, Buff, Damage" },
						{ "description": "Radius:", "value": "40" },
					],
					"rankitems": [
						{
							"description": "Damage Per Soul:",
							"value": " 80/95/110/125/140 (+25% of your Magical Power)",
						},
						{
							"description": "Total Damage (All 5 Souls):",
							"value": "400/475/550/625/700 (+125% of your Magical Power)",
						},
					],
				},
			},
			"Id": 9096,
			"Summary": "Recall Demons",
			"URL":
				"https://webcdn.hirezstudios.com/smite/god-abilities/recall-demons.jpg",
		},
		"Basic Damage": { "Base Damage": 33.0, "Per Level": 1.5, "Scaling": 0.2 },
		"Attack Speed": 0.86,
		"Attack Speed Per Level": 0.009,
		"Role": "Mage",
		"Type": "Magical",
	},
];

export const itemData = [
	{
		"Name": "Curseweaver",
		"ChildItem": "Sorcerer's Staff",
		"Price": 1150,
		"ActiveFlag": "y",
		"Type": "Item",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/curseweaver.jpg",
		"Magical Power": "+60",
		"Health": "+250",
		"Mana": "+250",
		"Restriction": "Magical",
	},
	{
		"Name": "Duality",
		"ChildItem": "Balanced Blade",
		"Price": 1450,
		"ActiveFlag": "y",
		"Type": "Item",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/duality.jpg",
		"Physical Power": "+55",
		"Attack Speed": "+15%",
		"Restriction": "Physical",
	},
	{
		"Name": "Equinox",
		"ChildItem": "Thousand Fold Blade",
		"Price": 950,
		"ActiveFlag": "y",
		"Type": "Item",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/equinox.jpg",
		"Physical Power": "+25",
		"Attack Speed": "+20%",
		"Restriction": "Physical",
	},
	{
		"Name": "Stormseeker",
		"ChildItem": "Hunter's Bow",
		"Price": 900,
		"ActiveFlag": "y",
		"Type": "Item",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/stormseeker.jpg",
		"Physical Power": "+30",
		"Attack Speed": "+20%",
		"Physical Penetration": "+10",
		"Restriction": "Physical",
	},
	{
		"Name": "Iron Mail",
		"Item Icon":"https://webcdn.hirezstudios.com/smite/item-icons/iron-mail.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+75",
		"Physical Protection": "+10",
		"Restriction": "None",
	},
	{
		"Name": "Steel Mail",
		"ChildItem": "Iron Mail",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/steel-mail.jpg",
		"Price": 750,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+200",
		"Physical Protection": "+20",
		"Restriction": "None",
	},
	{
		"Name": "Qin's Sais",
		"ChildItem": "Balanced Blade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/qins-sais.jpg",
		"Price": 1350,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+30",
		"Attack Speed": "+25%",
		"Restriction": "Physical",
	},
	{
		"Name": "Flameforged Hammer",
		"ChildItem": "Runeforged Hammer",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/flameforged-hammer.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+40",
		"Health": "+150",
		"HP5": "+15",
		"MP5": "+20",
		"Restriction": "Physical",
	},
	{
		"Name": "Runebreaking Hammer",
		"ChildItem": "Runeforged Hammer",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/runebreaking-hammer.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+40",
		"Health": "+150",
		"HP5": "+15",
		"MP5": "+20",
		"Restriction": "Physical",
	},
	{
		"Name": "Round Shield",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/round-shield.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+10",
		"HP5": "+10",
		"Restriction": "None",
	},
	{
		"Name": "Tower Shield",
		"ChildItem": "Round Shield",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/tower-shield.jpg",
		"Price": 550,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+25",
		"HP5": "+10",
		"Restriction": "None",
	},
	{
		"Name": "Spiked Shield",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/spiked-shield.jpg",
		"Price": 750,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+20",
		"Physical Protection": "+30",
		"Health": "+50",
		"Restriction": "Physical",
	},
	{
		"Name": "Fortress Shield",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/shifters-shield.jpg",
		"Price": 800,
		"ChildItem": "Rebound Buckler",
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+200",
		"Physical Protection": "+20",
		"HP5": "+20",
		"Restriction": "None",
	},

	{
		"Name": "Rebound Buckler",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/shifters-shield.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "100",
		"HP5": "+10",
		"Restriction": "None",
	},

	{
		"Name": "Shield of the Phoenix",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/shield-of-the-phoenix.jpg",
		"Price": 950,
		"ChildItem": "Fortress Shield",
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+250",
		"Physical Protection": "+30",
		"HP5": "+20",
		"Restriction": "None",
	},

	{
		"Name": "Shifter's Shield",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/shifters-shield.jpg",
		"Price": 1000,
		"ChildItem": "Fortress Shield",
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+20",
		"Health":  "+250",
		"Magical Power": "+30",
		"Physical Protection": "+30",
		"Magical Protection": "+30",
		"HP5": "+20",
		"Restriction": "None",
	},
	{
		"Name": "Void Shield",
		"ChildItem": "Tower Shield",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/void-shield.jpg",
		"Price": 1250,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+55",
		"Health": "+150",
		"HP5": "+25",
		"Restriction": "None",
	},

	{
		"Name": "Berserker's Shield",
		"ChildItem": "Tower Shield",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/berserkers-shield.jpg",
		"Price": 1100,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+50",
		"Health": "+150",
		"Attack Speed": "+25%",
		"HP5": "+20",
		"Restriction": "None",
	},
	{
		"Name": "Gladiator's Shield",
		"ChildItem": "Tower Shield",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/gladiators-shield.jpg",
		"Price": 1150,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+40",
		"Health": "+200",
		"HP5": "+25",
		"Cooldown Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Phalanx",
		"ChildItem": "Tower Shield",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/phalanx.jpg",
		"Price": 1000,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+50",
		"Health": "+200",
		"HP5": "+20",
		"Crowd Control Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Asi",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/y10-asi.jpg",
		"Price": 1150,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+45",
		"Physical Lifesteal": "+12%",
		"Attack Speed": "+20%",
		"Restriction": "Physical",
	},
	{
		"Name": "Breastplate",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/breastplate.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+20",
		"Restriction": "None",
	},
	{
		"Name": "Silver Breastplate",
		"ChildItem": "Breastplate",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/silver-breastplate.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+25",
		"Cooldown Reduction": "+10%",
		"Mana": "+200",
		"MP5": "+10",
		"Restriction": "None",
	},
	{
		"Name": "Hide of the Nemean Lion",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/hide-of-the-nemean-lion.jpg",
		"Price": 1150,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Protection": "+70",
		"Mana": "+200",
		"MP5": "+20",
		"Restriction": "None",
	},
	{
		"Name": "Breastplate of Valor",
		"ChildItem": "Silver Breastplate",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/breastplate-of-valor.jpg",
		"Price": 1200,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+50",
		"Mana": "+300",
		"MP5": "+15",
		"Cooldown Reduction": "+20%",
		"Restriction": "None",
	},
	{
		"Name": "Spectral Armor *old*",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/spectral-armor-*old*.jpg",
		"Price": 1050,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Protection": "+60",
		"Health": "+200",
		"Mana": "+300",
		"MP5": "+10",
		"Restriction": "None",
	},
	{
		"Name": "Contagion",
		"ChildItem": "Silver Breastplate",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/contagion.jpg",
		"Price": 1200,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+50",
		"Health": "+200",
		"HP5": "+25",
		"Restriction": "None",
	},
	{
		"Name": "Spectral Armor",
		"ChildItem": "Silver Breastplate",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/spectral-armor.jpg",
		"Price": 1250,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+50",
		"Health": "+250",
		"HP5": "+20",
		"Restriction": "None",
	},
	{
		"Name": "Breastplate of Regrowth",
		"ChildItem": "Silver Breastplate",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/breastplate-of-regrowth.jpg",
		"Price": 1200,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+50",
		"Mana": "+300",
		"MP5": "+15",
		"Cooldown Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Breastplate of Determination",
		"ChildItem": "Breastplate of Valor",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/breastplate-of-determination.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+50",
		"Mana": "+300",
		"MP5": "+15",
		"Cooldown Reduction": "+20%",
		"Restriction": "None",
	},
	{
		"Name": "Breastplate of Vigilance",
		"ChildItem": "Breastplate of Valor",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/breastplate-of-vigilance.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+50",
		"Mana": "+300",
		"MP5": "+15",
		"Cooldown Reduction": "+20%",
		"Restriction": "None",
	},
	{
		"Name": "Asi",
		"ChildItem": "Balanced Blade",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/asi.jpg",
		"Price": 1150,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+40",
		"Physical Penetration": "+10",
		"Physical Lifesteal": "+18%",
		"Attack Speed": "+20%",
		"Restriction": "Physical",
	},
	{
		"Name": "Evolved Gauntlet of Thebes",
		"ChildItem": "Gauntlet of Thebes",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evolved-gauntlet-of-thebes.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+200",
		"Physical Protection": "+45",
		"Magical Protection": "+45",
		"HP5": "+15",
		"Restriction": "None",
	},
	{
		"Name": "Cloak",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/cloak.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+10",
		"Magical Protection": "+10",
		"Restriction": "None",
	},
	{
		"Name": "Cloak of Concentration",
		"ChildItem": "Cloak",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/cloak-of-concentration.jpg",
		"Price": 800,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+30",
		"Magical Protection": "+30",
		"Cooldown Reduction": "+5%",
		"Restriction": "None",
	},
	{
		"Name": "Cleric's Cloak",
		"ChildItem": "Cloak",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/clerics-cloak.jpg",
		"Price": 550,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+15",
		"Magical Protection": "+15",
		"Cooldown Reduction": "+5%",
		"Restriction": "None",
	},
	{
		"Name": "Armored Cloak",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/armored-cloak.jpg",
		"Price": 900,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Protection": "+25",
		"Magical Protection": "+25",
		"Health": "+125",
		"Mana": "+125",
		"Restriction": "None",
	},
	{
		"Name": "Magi's Cloak",
		"ChildItem": "Cleric's Cloak",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/magis-cloak.jpg",
		"Price": 1000,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+25",
		"Magical Protection": "+25",
		"Cooldown Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Hide of the Urchin",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/hide-of-the-urchin.jpg",
		"Price": 900,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Protection": "+30",
		"Magical Protection": "+30",
		"Health": "+250",
		"Mana": "+250",
		"Restriction": "None",
	},
	{
		"Name": "Spirit Robe",
		"ChildItem": "Cloak of Concentration",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/spirit-robe.jpg",
		"Price": 900,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+35",
		"Magical Protection": "+35",
		"Cooldown Reduction": "+10%",
		"Crowd Control Reduction": "+20%",
		"Restriction": "None",
	},
	{
		"Name": "Mantle of Discord",
		"ChildItem": "Cloak of Concentration",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/mantle-of-discord.jpg",
		"Price": 1150,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+45",
		"Magical Protection": "+45",
		"Cooldown Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Prophetic Cloak",
		"ChildItem": "Cleric's Cloak",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/prophetic-cloak.jpg",
		"Price": 1200,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+25",
		"Magical Protection": "+25",
		"Health": "+100",
		"Cooldown Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "The Ferocious Executioner",
		"ChildItem": "The Executioner",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/the-ferocious-executioner.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+30",
		"Attack Speed": "+20%",
		"Restriction": "Physical",
	},
	{
		"Name": "Magi's Shelter",
		"ChildItem": "Magi's Cloak",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/magis-shelter.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+25",
		"Magical Protection": "+25",
		"Cooldown Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Magi's Revenge",
		"ChildItem": "Magi's Cloak",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/magis-revenge.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+25",
		"Magical Protection": "+25",
		"Cooldown Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Evolved Prophetic Cloak",
		"ChildItem": "Prophetic Cloak",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evolved-prophetic-cloak.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+40",
		"Magical Protection": "+40",
		"Health": "+100",
		"Cooldown Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Evolved Hide of the Urchin",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evolved-hide-of-the-urchin.jpg",
		"Price": 1,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Protection": "+51",
		"Magical Protection": "+51",
		"Health": "+250",
		"Mana": "+250",
		"Restriction": "None",
	},
	{
		"Name": "Talisman",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/talisman.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+75",
		"Magical Protection": "+15",
		"Restriction": "None",
	},
	{
		"Name": "Silver Talisman",
		"ChildItem": "Talisman",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/silver-talisman.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+125",
		"Magical Protection": "+45",
		"Restriction": "None",
	},
	{
		"Name": "Bulwark of Hope",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/bulwark-of-hope.jpg",
		"Price": 1050,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Protection": "+70",
		"Health": "+250",
		"Crowd Control Reduction": "+20%",
		"Restriction": "None",
	},
	{
		"Name": "Pestilence (old)",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/pestilence-old.jpg",
		"Price": 1000,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Protection": "+80",
		"Health": "+250",
		"Restriction": "None",
	},
	{
		"Name": "Heartward Amulet",
		"ChildItem": "Silver Talisman",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/heartward-amulet.jpg",
		"Price": 850,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Protection": "+45",
		"Health": "+200",
		"Restriction": "None",
	},
	{
		"Name": "Talisman of Energy",
		"ChildItem": "Silver Talisman",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/talisman-of-energy.jpg",
		"Price": 900,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Protection": "+50",
		"Health": "+250",
		"Restriction": "None",
	},
	{
		"Name": "Envenomed Executioner",
		"ChildItem": "The Executioner",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/envenomed-executioner.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+30",
		"Attack Speed": "+20%",
		"Restriction": "Physical",
	},
	{
		"Name": "Absolution",
		"ChildItem": "Silver Talisman",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/absolution.jpg",
		"Price": 1000,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Protection": "+60",
		"Health": "+250",
		"Crowd Control Reduction": "+20%",
		"Restriction": "None",
	},
	{
		"Name": "Pestilence",
		"ChildItem": "Silver Talisman",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/pestilence.jpg",
		"Price": 1050,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Protection": "+70",
		"Health": "+200",
		"HP5": "+15",
		"Restriction": "None",
	},
	{
		"Name": "Amulet of Silence",
		"ChildItem": "Heartward Amulet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/amulet-of-silence.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Protection": "+45",
		"Health": "+200",
		"Restriction": "None",
	},
	{
		"Name": "Amulet of the Stronghold",
		"ChildItem": "Heartward Amulet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/amulet-of-the-stronghold.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Protection": "+45",
		"Health": "+200",
		"Restriction": "None",
	},
	{
		"Name": "Emerald Ring",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/emerald-ring.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+20",
		"Attack Speed": "+5%",
		"Restriction": "Magical",
	},
	{
		"Name": "Enchanted Ring",
		"ChildItem": "Emerald Ring",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/enchanted-ring.jpg",
		"Price": 800,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+35",
		"Attack Speed": "+15%",
		"Restriction": "Magical",
	},
	{
		"Name": "Demonic Grip",
		"ChildItem": "Enchanted Ring",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/demonic-grip.jpg",
		"Price": 1000,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+65",
		"Attack Speed": "+30%",
		"Restriction": "Magical",
	},
	{
		"Name": "Y10 Telkhines Ring",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-telkhines-ring.jpg",
		"Price": 950,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+45",
		"Attack Speed": "+15%",
		"Magical Lifesteal": "+6%",
		"Restriction": "Magical",
	},
	{
		"Name": "Hastened Fatalis",
		"ChildItem": "Fatalis",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/hastened-ring.jpg",
		"Price": 1100,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+100",
		"Magical Penetration": "+10",
		"Physical Penetration": "+10",
		"Attack Speed": "+20%",
		"Movement Speed": "+7%",
		"Restriction": "None",
	},
	{
		"Name": "Fatalis",
		"ChildItem": "Ancient Blade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/hastened-ring.jpg",
		"Price": 850,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+10",
		"Magical Penetration": "+10",
		"Physical Penetration": "+10",
		"Attack Speed": "+20%",
		"Movement Speed": "+7%",
		"Restriction": "None",
	},
	{
		"Name": "Cyclopean Ring",
		"ChildItem": "Enchanted Ring",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/cyclopean-ring.jpg",
		"Price": 1300,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+60",
		"Attack Speed": "+25%",
		"Cooldown Reduction": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Y10 Tiny Trinket",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-tiny-trinket.jpg",
		"Price": 600,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+25",
		"Magical Lifesteal": "+4%",
		"Restriction": "Magical",
	},
	{
		"Name": "Telkhines Ring",
		"ChildItem": "Enchanted Ring",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/telkhines-ring.jpg",
		"Price": 950,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+45",
		"Attack Speed": "+15%",
		"Magical Lifesteal": "+9%",
		"Restriction": "Magical",
	},
	{
		"Name": "Magic Focus",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/magic-focus.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+20",
		"Restriction": "Magical",
	},
	{
		"Name": "Spell Focus",
		"ChildItem": "Magic Focus",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/spell-focus.jpg",
		"Price": 850,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+55",
		"Magical Penetration": "+5%",
		"Restriction": "Magical",
	},
	{
		"Name": "Enchanted Spear",
		"ChildItem": "Magic Focus",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/enchanted-spear.jpg",
		"Price": 700,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+45",
		"Restriction": "Magical",
	},
	{
		"Name": "S9 Divine Ruin",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/s9-divine-ruin.jpg",
		"Price": 800,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+100",
		"Magical Penetration": "+15",
		"Restriction": "Magical",
	},
	{
		"Name": "Spear of Desolation",
		"ChildItem": "Enchanted Spear",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/spear-of-desolation.jpg",
		"Price": 1000,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+80",
		"Magical Penetration": "+15",
		"Cooldown Reduction": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Obsidian Shard",
		"ChildItem": "Spell Focus",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/obsidian-shard.jpg",
		"Price": 1000,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+65",
		"Magical Penetration": "+20%",
		"Restriction": "Magical",
	},
	{
		"Name": "Y10 Spear of the Magus",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-spear-of-the-magus.jpg",
		"Price": 950,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+75",
		"Magical Lifesteal": "+8%",
		"Magical Penetration": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Divine Ruin",
		"ChildItem": "Enchanted Spear",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/divine-ruin.jpg",
		"Price": 1100,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+75",
		"Magical Penetration": "+15",
		"Restriction": "Magical",
	},
	{
		"Name": "Spear of the Magus",
		"ChildItem": "Spell Focus",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/spear-of-the-magus.jpg",
		"Price": 950,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+75",
		"Magical Lifesteal": "+12%",
		"Magical Penetration": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Y10 Enchanted Trinket",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-enchanted-trinket.jpg",
		"Price": 550,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+30",
		"Health": "+100",
		"Magical Lifesteal": "+6%",
		"Restriction": "Magical",
	},
	{
		"Name": "Traveler's Cloak",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/travelers-cloak.jpg",
		"Price": 590,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Protection": "+40",
		"Magical Protection": "+10",
		"Health": "+125",
		"Restriction": "None",
	},
	{
		"Name": "Uncommon Staff",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/uncommon-staff.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+15",
		"Health": "+75",
		"Restriction": "Magical",
	},
	{
		"Name": "Sorcerer's Staff",
		"ChildItem": "Uncommon Staff",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/sorcerers-staff.jpg",
		"Price": 700,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+45",
		"Health": "+100",
		"Mana": "+100",
		"Restriction": "Magical",
	},
	{
		"Name": "Fortified Staff",
		"ChildItem": "Uncommon Staff",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/fortified-staff.jpg",
		"Price": 700,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+50",
		"Health": "+150",
		"Crowd Control Reduction": "+5%",
		"Restriction": "Magical",
	},
	{
		"Name": "Gem of Isolation",
		"ChildItem": "Fortified Staff",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/gem-of-isolation.jpg",
		"Price": 1150,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+65",
		"Health": "+200",
		"Crowd Control Reduction": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Y10 Warlock's Staff",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-warlocks-staff.jpg",
		"Price": 1150,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+65",
		"Health": "+150",
		"Mana": "+200",
		"Restriction": "Magical",
	},
	{
		"Name": "Ethereal Staff",
		"ChildItem": "Sorcerer's Staff",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/ethereal-staff.jpg",
		"Price": 1250,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+70",
		"Health": "+150",
		"Crowd Control Reduction": "+20%",
		"Restriction": "Magical",
	},
	{
		"Name": "Warlock's Staff",
		"ChildItem": "Sorcerer's Staff",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/warlocks-staff.jpg",
		"Price": 1150,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+55",
		"Health": "+100",
		"Mana": "+200",
		"Restriction": "Magical",
	},
	{
		"Name": "Y10 Evolved Warlock's Staff",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-evolved-warlocks-staff.jpg",
		"Price": 1,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+110",
		"Health": "+250",
		"Mana": "+200",
		"Magical Penetration": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Evolved Warlock's Staff",
		"ChildItem": "Warlock's Staff",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evolved-warlocks-staff.jpg",
		"Price": 1,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+80",
		"Health": "+500",
		"Mana": "+200",
		"Magical Penetration": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Y10 Talon Trinket",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-talon-trinket.jpg",
		"Price": 800,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+55",
		"Mana": "+100",
		"Magical Lifesteal": "+5%",
		"Restriction": "Magical",
	},
	{
		"Name": "Spellbook",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/spellbook.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+20",
		"Mana": "+75",
		"Restriction": "Magical",
	},
	{
		"Name": "Book of Souls",
		"ChildItem": "Spellbook",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/book-of-souls.jpg",
		"Price": 700,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+55",
		"Mana": "+150",
		"Restriction": "Magical",
	},
	{
		"Name": "Y10 Book of Thoth",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-book-of-thoth.jpg",
		"Price": 1150,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+70",
		"Mana": "+250",
		"MP5": "+20",
		"Restriction": "Magical",
	},
	{
		"Name": "Y10 Polynomicon",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-polynomicon.jpg",
		"Price": 950,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+65",
		"Mana": "+300",
		"Magical Lifesteal": "+8%",
		"Restriction": "Magical",
	},
	{
		"Name": "Soul Reaver",
		"ChildItem": "Book of Souls",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/soul-reaver.jpg",
		"Price": 1300,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+65",
		"Mana": "+300",
		"Restriction": "Magical",
	},
	{
		"Name": "Book of the Dead",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/book-of-the-dead.jpg",
		"Price": 1250,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+120",
		"Mana": "+200",
		"Crowd Control Reduction": "+20%",
		"Restriction": "Magical",
	},
	{
		"Name": "Tablet of Destinies",
		"ChildItem": "Book of Souls",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/tablet-of-destinies.jpg",
		"Price": 1200,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+65",
		"Health": "+100",
		"Mana": "+300",
		"Restriction": "Magical",
	},
	{
		"Name": "Book of Thoth",
		"ChildItem": "Book of Souls",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/book-of-thoth.jpg",
		"Price": 1150,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+60",
		"Mana": "+200",
		"MP5": "+20",
		"Restriction": "Magical",
	},
	{
		"Name": "Polynomicon",
		"ChildItem": "Book of Souls",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/polynomicon.jpg",
		"Price": 950,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+65",
		"Mana": "+300",
		"Magical Lifesteal": "+12%",
		"Restriction": "Magical",
	},
	{
		"Name": "Y10 Evolved Book of Thoth",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-evolved-book-of-thoth.jpg",
		"Price": 1,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+70",
		"Magical Penetration": "+10",
		"Mana": "+775",
		"MP5": "+20",
		"Restriction": "Magical",
	},
	{
		"Name": "Y10 Pythagorem's Piece",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-pythagorems-piece.jpg",
		"Price": 1200,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+35",
		"Health": "+150",
		"Magical Lifesteal": "+6%",
		"Cooldown Reduction": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Evolved Book of Thoth",
		"ChildItem": "Book of Thoth",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evolved-book-of-thoth.jpg",
		"Price": 1,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+60",
		"Magical Penetration": "+10",
		"Mana": "+800",
		"MP5": "+20",
		"Restriction": "Magical",
	},
	{
		"Name": "Lost Artifact",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/lost-artifact.jpg",
		"Price": 550,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+20",
		"MP5": "+5",
		"Restriction": "Magical",
	},
	{
		"Name": "Cursed Orb",
		"ChildItem": "Lost Artifact",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/cursed-orb.jpg",
		"Price": 950,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+71",
		"MP5": "+15",
		"Magical Penetration": "+5",
		"Movement Speed": "+6%",
		"Restriction": "Magical",
	},
	{
		"Name": "Restored Artifact",
		"ChildItem": "Lost Artifact",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/restored-artifact.jpg",
		"Price": 850,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+60",
		"MP5": "+15",
		"Restriction": "Magical",
	},
	{
		"Name": "Rod of Tahuti",
		"ChildItem": "Restored Artifact",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/rod-of-tahuti.jpg",
		"Price": 1450,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+125",
		"MP5": "+30",
		"Magical Penetration": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Chronos' Pendant",
		"ChildItem": "Restored Artifact",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/chronos-pendant.jpg",
		"Price": 1200,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+70",
		"MP5": "+20",
		"Cooldown Reduction": "+20%",
		"Restriction": "Magical",
	},
	{
		"Name": "Doom Orb",
		"ChildItem": "Cursed Orb",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/doom-orb.jpg",
		"Price": 1100,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+95",
		"MP5": "+25",
		"Magical Penetration": "+10",
		"Movement Speed": "+6%",
		"Restriction": "Magical",
	},
	{
		"Name": "Charon's Coin",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/charons-coin.jpg",
		"ChildItem": "Restored Artifact",
		"Price": 1000,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+75",
		"Magical Penetration": "+20%",
		"HP5": "+7",
		"MP5": "+20",
		"Restriction": "Magical",
	},
	{
		"Name": "Evolved Charon's Coin",
		"ChildItem": "Charon's Coin",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evolved-charons-coin.jpg",
		"Price": 1,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+75",
		"HP5 & MP5": "+35",
		"Magical Penetration": "+20%",
		"Movement Speed": "+8%",
		"Restriction": "Magical",
	},
	{
		"Name": "Calamitous Rod of Tahuti",
		"ChildItem": "Rod of Tahuti",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/calamitous-rod-of-tahuti.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+125",
		"MP5": "+30",
		"Magical Penetration": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Y10 Bancroft's Talon",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-bancrofts-talon.jpg",
		"Price": 1100,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+80",
		"Mana": "+200",
		"Magical Lifesteal": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Perfected Rod of Tahuti",
		"ChildItem": "Rod of Tahuti",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/perfected-rod-of-tahuti.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+125",
		"MP5": "+30",
		"Magical Penetration": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Enchanted Buckler",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/enchanted-buckler.jpg",
		"Price": 650,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+7",
		"Magical Protection": "+10",
		"Restriction": "Physical",
	},
	{
		"Name": "Warded Shield",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/warded-shield.jpg",
		"Price": 600,
		"ChildItem":"Rebound Buckler",
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+150",
		"Magical Protection": "+35",
		"Restriction": "None",
	},
	{
		"Name": "Runic Shield",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/runic-shield.jpg",
		"Price": 1000,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+30",
		"Magical Protection": "+50",
		"Health": "+150",
		"Restriction": "Physical",
	},
	{
		"Name": "Ancile",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/ancile.jpg",
		"Price": 1100,
		"ActiveFlag": "y",
		"ChildItem":"Warded Shield",
		"Type": "Item",
		"Magical Power": "+35",
		"Physical Power": "+20",
		"Magical Protection": "+45",
		"Health": "+200",
		"HP5": "+20",
		"Restriction": "None",
	},
	{
		"Name": "Imperial Helmet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/imperial-helmet.jpg",
		"Price": 600,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+10",
		"Physical Protection": "+15",
		"Restriction": "Magical",
	},
	{
		"Name": "Jade Mountain Helm",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/jade-mountain-helm.jpg",
		"Price": 600,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+20",
		"Physical Protection": "+20",
		"Restriction": "Magical",
	},
	{
		"Name": "Dynasty Plate Helm",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/dynasty-plate-helm.jpg",
		"Price": 1000,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+40",
		"Physical Protection": "+20",
		"Health": "+50",
		"Restriction": "Magical",
	},
	{
		"Name": "Celestial Legion Helm",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/celestial-legion-helm.jpg",
		"Price": 950,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+55",
		"Physical Protection": "+30",
		"MP5": "+20",
		"Restriction": "Magical",
	},
	{
		"Name": "Jade Emperor's Crown",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/jade-emperors-crown.jpg",
		"Price": 1400,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+30",
		"Physical Protection": "+50",
		"Health": "+300",
		"Crowd Control Reduction": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Sovereignty",
		"ChildItem": "Steel Mail",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/sovereignty.jpg",
		"Price": 700,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+200",
		"Physical Protection": "+35",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Typhon's Fang",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-typhons-fang.jpg",
		"Price": 1250,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+60",
		"Mana": "+200",
		"Magical Lifesteal": "+10%",
		"Magical Penetration": "+20%",
		"Restriction": "Magical",
	},
	{
		"Name": "Tyrannical Plate Helm",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/tyrannical-plate-helm.jpg",
		"Price": 800,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+70",
		"Physical Protection": "+30",
		"Health": "+100",
		"Crowd Control Reduction": "+20%",
		"Restriction": "Magical",
	},
	{
		"Name": "Short Bow",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/short-bow.jpg",
		"Price": 550,
		"ActiveFlag": "y",
		"Type": "Item",
		"Attack Speed": "+15%",
		"Restriction": "Shortbow",
	},
	{
		"Name": "Charged Bow",
		"ChildItem": "Short Bow",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/charged-bow.jpg",
		"Price": 450,
		"ActiveFlag": "y",
		"Type": "Item",
		"Attack Speed": "+20%",
		"Restriction": "Physical",
	},
	{
		"Name": "Hunter's Bow",
		"ChildItem": "Short Bow",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/hunters-bow.jpg",
		"Price": 700,
		"ActiveFlag": "y",
		"Type": "Item",
		"Attack Speed": "+20%",
		"Physical Power": "+10",
		"Physical Penetration": "+5",
		"Restriction": "Physical",
	},
	{
		"Name": "Odysseus' Bow",
		"ChildItem": "Charged Bow",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/odysseus-bow.jpg",
		"Price": 900,
		"ActiveFlag": "y",
		"Type": "Item",
		"Attack Speed": "+35%",
		"Restriction": "Physical",
	},
	{
		"Name": "Ichaival",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/ichaival.jpg",
		"Price": 1250,
		"ActiveFlag": "n",
		"Type": "Item",
		"Attack Speed": "+30%",
		"Physical Power": "+35",
		"Restriction": "Physical",
	},
	{
		"Name": "Silverbranch Bow",
		"ChildItem": "Hunter's Bow",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/silverbranch-bow.jpg",
		"Price": 1350,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+25",
		"Attack Speed": "+30%",
		"Physical Penetration": "+10%",
		"Restriction": "Physical",
	},
	{
		"Name": "Atalanta's Bow",
		"ChildItem": "Hunter's Bow",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/atalantas-bow.jpg",
		"Price": 1100,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+35",
		"Attack Speed": "+25%",
		"Physical Penetration": "+10",
		"Restriction": "Physical",
	},
	{
		"Name": "*Bluestone Pendant",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/*bluestone-pendant.jpg",
		"Price": 800,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+15",
		"Mana": "+50",
		"MP5": "+5",
		"Restriction": "Physical",
	},
	{
		"Name": "Soul Stone",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/soul-stone.jpg",
		"Price": 800,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+20",
		"Mana": "+100",
		"Restriction": "Magical",
	},
	{
		"Name": "Y10 Soul Gem",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-soul-gem.jpg",
		"Price": 1200,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+70",
		"Health": "+100",
		"Magical Lifesteal": "+8%",
		"Cooldown Reduction": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Relic",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/relic.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "*Hand of the Gods",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/*hand-of-the-gods.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Hand of the Gods Upgrade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/hand-of-the-gods-upgrade.jpg",
		"Price": 500,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Glowing Emerald",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/glowing-emerald.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+100",
		"HP5": "+10",
		"Restriction": "None",
	},
	{
		"Name": "Emerald Talisman",
		"ChildItem": "Glowing Emerald",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/emerald-talisman.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+200",
		"HP5": "+15",
		"MP5": "+10",
		"Restriction": "None",
	},
	{
		"Name": "Emerald Mail",
		"ChildItem": "Glowing Emerald",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/emerald-mail.jpg",
		"Price": 750,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+200",
		"HP5": "+10",
		"Restriction": "None",
	},
	{
		"Name": "Stone of Gaia",
		"ChildItem": "Emerald Talisman",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/stone-of-gaia.jpg",
		"Price": 700,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+350",
		"HP5": "+25",
		"MP5": "+15",
		"Restriction": "None",
	},
	{
		"Name": "Shield of Regrowth (Deprecated)",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/shield-of-regrowth-deprecated.jpg",
		"Price": 750,
		"ActiveFlag": "n",
		"Type": "Item",
		"Health": "+300",
		"HP5": "+15",
		"MP5": "+15",
		"Cooldown Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Mail of Renewal (old)",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/mail-of-renewal-old.jpg",
		"Price": 1000,
		"ActiveFlag": "n",
		"Type": "Item",
		"Health": "+400",
		"HP5": "+10 ",
		"Cooldown Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Gauntlet of Thebes",
		"ChildItem": "Emerald Mail",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/gauntlet-of-thebes.jpg",
		"Price": 1100,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+200",
		"HP5": "+15",
		"Restriction": "None",
	},
	{
		"Name": "Healing Potion",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/healing-potion.jpg",
		"Price": 50,
		"ActiveFlag": "y",
		"Type": "Consumable",
		"Restriction": "None",
	},
	{
		"Name": "Mail of Renewal",
		"ChildItem": "Emerald Mail",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/mail-of-renewal.jpg",
		"Price": 950,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+300",
		"HP5": "+20",
		"Physical Protection": "+15",
		"Magical Protection": "+15",
		"Restriction": "None",
	},
	{
		"Name": "Cannoneer's Cuirass",
		"ChildItem": "Emerald Mail",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/cannoneers-cuirass.jpg",
		"Price": 750,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+25",
		"Magical Protection": "+25",
		"Health": "+250",
		"HP5": "+20",
		"Restriction": "None",
	},
	{
		"Name": "Shuriken",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/shuriken.jpg",
		"Price": 650,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+7",
		"Attack Speed": "+5%",
		"Restriction": "Physical",
	},
	{
		"Name": "8-Pointed Shuriken",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/8-pointed-shuriken.jpg",
		"Price": 750,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+25",
		"Attack Speed": "+7%",
		"Restriction": "Physical",
	},
	{
		"Name": "Poisoned Star ",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/poisoned-star-.jpg",
		"Price": 950,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+35",
		"Attack Speed": "+10%",
		"Critical Strike Chance": "+15%",
		"Restriction": "Physical",
	},
	{
		"Name": "Shadowsteel Shuriken",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/shadowsteel-shuriken.jpg",
		"Price": 1000,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+40",
		"Attack Speed": "+25%",
		"Critical Strike Chance": "+20%",
		"Restriction": "Physical",
	},
	{
		"Name": "Katana",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/katana.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+7",
		"Movement Speed": "+3%",
		"Restriction": "Physical",
	},
	{
		"Name": "Thousand Fold Blade",
		"ChildItem": "Katana",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/thousand-fold-blade.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+20",
		"Movement Speed": "+5%",
		"Restriction": "Physical",
	},
	{
		"Name": "Hastened Katana",
		"ChildItem": "Thousand Fold Blade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/hastened-katana.jpg",
		"Price": 1200,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+20",
		"Attack Speed": "+15%",
		"Movement Speed": "+7%",
		"Restriction": "Physical",
	},
	{
		"Name": "Golden Blade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/golden-blade.jpg",
		"Price": 900,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+25",
		"Attack Speed": "+20%",
		"Movement Speed": "+7%",
		"Restriction": "Physical",
	},
	{
		"Name": "Mana Potion",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/mana-potion.jpg",
		"Price": 50,
		"ActiveFlag": "y",
		"Type": "Consumable",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Serrated Edge",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-serrated-edge.jpg",
		"Price": 1250,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+25",
		"Physical Lifesteal": "+10%",
		"Physical Penetration": "+20%",
		"Movement Speed": "+7%",
		"Restriction": "Physical",
	},
	{
		"Name": "Shadowdrinker",
		"ChildItem": "Thousand Fold Blade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/shadowdrinker.jpg",
		"Price": 950,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+45",
		"Physical Penetration": "+10",
		"Movement Speed": "+7%",
		"Restriction": "Physical",
	},
	{
		"Name": "Serrated Edge",
		"ChildItem": "Thousand Fold Blade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/serrated-edge.jpg",
		"Price": 1250,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+25",
		"Physical Lifesteal": "+15%",
		"Physical Penetration": "+20%",
		"Movement Speed": "+7%",
		"Restriction": "Physical",
	},
	{
		"Name": "Stone Cutting Sword",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/stone-cutting-sword.jpg",
		"Price": 950,
		"ChildItem": "Thousand Fold Blade",
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+35",
		"Movement Speed": "+7%",
		"Restriction": "Physical",
	},
	{
		"Name": "Enchanted Kusari",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/enchanted-kusari.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Protection": "+20",
		"MP5": "+5",
		"Restriction": "None",
	},
	{
		"Name": "Spellbound Kusari",
		"ChildItem": "Enchanted Kusari",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/spellbound-kusari.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Protection": "+40",
		"MP5": "+15",
		"Restriction": "None",
	},
	{
		"Name": "Void Doumaru",
		"ChildItem": "Spellbound Kusari",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/void-doumaru.jpg",
		"Price": 1050,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Protection": "+60",
		"Health": "+150",
		"MP5": "+35",
		"Crowd Control Reduction": "+20%",
		"Restriction": "None",
	},
	{
		"Name": "Genji's Guard",
		"ChildItem": "Spellbound Kusari",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/genjis-guard.jpg",
		"Price": 950,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+100",
		"Magical Protection": "+60",
		"MP5": "+40",
		"Cooldown Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Oni Hunter's Garb",
		"ChildItem": "Spellbound Kusari",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/oni-hunters-garb.jpg",
		"Price": 850,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+150",
		"Magical Protection": "+50",
		"MP5": "+30",
		"Crowd Control Reduction": "+20%",
		"Restriction": "None",
	},
	{
		"Name": "Shogun's Kusari",
		"ChildItem": "Spellbound Kusari",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/shoguns-kusari.jpg",
		"Price": 950,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Protection": "+45",
		"Health": "+150",
		"MP5": "+20",
		"Attack Speed": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Ward",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/ward.jpg",
		"Price": 50,
		"ActiveFlag": "y",
		"Type": "Consumable",
		"Restriction": "None",
	},
	{
		"Name": "Scare Tactics",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/scare-tactics.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Consumable",
		"Restriction": "None",
	},
	{
		"Name": "Chalice of Healing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/chalice-of-healing.jpg",
		"Price": 300,
		"ActiveFlag": "y",
		"Type": "Consumable",
		"Restriction": "None",
	},
	{
		"Name": "Chalice of Mana",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/chalice-of-mana.jpg",
		"Price": 300,
		"ActiveFlag": "n",
		"Type": "Consumable",
		"Restriction": "None",
	},
	{
		"Name": "Chalice of the Oracle",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/chalice-of-the-oracle.jpg",
		"Price": 400,
		"ActiveFlag": "y",
		"Type": "Consumable",
		"Restriction": "None",
	},
	{
		"Name": "Druid Stone",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/druid-stone.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+15",
		"Magical Protection": "+15",
		"Health": "+50",
		"Restriction": "None",
	},
	{
		"Name": "Ward Stone",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/ward-stone.jpg",
		"Price": 750,
		"ActiveFlag": "n",
		"Type": "Item",
		"Health": "+50",
		"Magical Power": "+20",
		"Magical Protection": "+30",
		"Restriction": "Magical",
	},
	{
		"Name": "Sage's Stone",
		"ChildItem": "Druid Stone",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/sages-stone.jpg",
		"Price": 750,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+25",
		"magical Protection": "+25",
		"Health": "+100",
		"Restriction": "None",
	},
	{
		"Name": "Stone of Fal (old)",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/stone-of-fal-old.jpg",
		"Price": 1200,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+80",
		"Magical Protection": "+40",
		"Cooldown Reduction": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Stone of Binding",
		"ChildItem": "Sage's Stone",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/stone-of-binding.jpg",
		"Price": 900,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Protection": "+35",
		"Physical Protection": "+35",
		"Health": "+200",
		"Restriction": "None",
	},
	{
		"Name": "Archdruid's Fury",
		"ChildItem": "Sage's Stone",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/archdruids-fury.jpg",
		"Price": 900,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+35",
		"Magical Protection ": "+35",
		"Health": "+250",
		"MP5": "+15",
		"Restriction": "None",
	},
	{
		"Name": "Elixir of Power",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/elixir-of-power.jpg",
		"Price": 3000,
		"ActiveFlag": "y",
		"Type": "Consumable",
		"Restriction": "None",
	},
	{
		"Name": "Abyssal Stone",
		"ChildItem": "Sage's Stone",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/abyssal-stone.jpg",
		"Price": 950,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+35",
		"Magical Protection": "+40",
		"Health": "+250",
		"Restriction": "None",
	},
	{
		"Name": "Erosion",
		"ChildItem": "Sage's Stone",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/erosion.jpg",
		"Price": 800,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+25",
		"Magical Protection": "+25",
		"Health": "+300",
		"Restriction": "None",
	},
	{
		"Name": "*War Flag",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/*war-flag.jpg",
		"Price": 800,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+10",
		"Health": "+100",
		"MP5": "+5 ",
		"Restriction": "Physical",
	},
	{
		"Name": "Sands of Time",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/sands-of-time.jpg",
		"Price": 800,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+20",
		"MP5": "+5",
		"Cooldown Reduction": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Swift Wing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/swift-wing.jpg",
		"Price": 800,
		"ActiveFlag": "n",
		"Type": "Item",
		"Health": "+100",
		"HP5": "+10",
		"Movement Speed": "+5%",
		"Restriction": "None",
	},
	{
		"Name": "Evolved Lono's Mask",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evolved-lonos-mask.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Item",
		"Health": "+150",
		"HP5": "+5",
		"Restriction": "None",
	},
	{
		"Name": "Guardian's Blessing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/guardians-blessing.jpg",
		"Price": 700,
		"ActiveFlag": "n",
		"Type": "Item",
		"Restriction": "None",
	},
	{
		"Name": "Evolved Guardian's Blessing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evolved-guardians-blessing.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Item",
		"Restriction": "None",
	},
	{
		"Name": "Warrior's Blessing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/warriors-blessing.jpg",
		"Price": 700,
		"ActiveFlag": "n",
		"Type": "Item",
		"Restriction": "None",
	},
	{
		"Name": "Evolved Warrior's Blessing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evolved-warriors-blessing.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Item",
		"Restriction": "None",
	},
	{
		"Name": "Elixir of Defense",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/elixir-of-defense.jpg",
		"Price": 3000,
		"ActiveFlag": "y",
		"Type": "Consumable",
		"Restriction": "None",
	},
	{
		"Name": "Mage's Blessing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/mages-blessing.jpg",
		"Price": 700,
		"ActiveFlag": "n",
		"Type": "Item",
		"Restriction": "None",
	},
	{
		"Name": "Evolved Mage's Blessing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evolved-mages-blessing.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Item",
		"Restriction": "None",
	},
	{
		"Name": "Assassin's Blessing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/assassins-blessing.jpg",
		"Price": 700,
		"ActiveFlag": "n",
		"Type": "Item",
		"Restriction": "None",
	},
	{
		"Name": "Evolved Assassin's Blessing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evolved-assassins-blessing.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Item",
		"Restriction": "None",
	},
	{
		"Name": "Hunter's Blessing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/hunters-blessing.jpg",
		"Price": 700,
		"ActiveFlag": "n",
		"Type": "Item",
		"Restriction": "None",
	},
	{
		"Name": "Evolved Hunter's Blessing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evolved-hunters-blessing.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Item",
		"Restriction": "None",
	},
	{
		"Name": "Specialist's Blessing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/specialists-blessing.jpg",
		"Price": 700,
		"ActiveFlag": "n",
		"Type": "Item",
		"Restriction": "None",
	},
	{
		"Name": "Evolved Specialist's Blessing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evolved-specialists-blessing.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Item",
		"Restriction": "None",
	},
	{
		"Name": "Attacker's Blessing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/attackers-blessing.jpg",
		"Price": 700,
		"ActiveFlag": "n",
		"Type": "Item",
		"Restriction": "None",
	},
	{
		"Name": "Evolved Attacker's Blessing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evolved-attackers-blessing.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Item",
		"Restriction": "None",
	},
	{
		"Name": "Mace",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/mace.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+10",
		"Restriction": "Physical",
	},
	{
		"Name": "Defender's Blessing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/defenders-blessing.jpg",
		"Price": 700,
		"ActiveFlag": "n",
		"Type": "Item",
		"Restriction": "None",
	},
	{
		"Name": "Evolved Defender's Blessing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evolved-defenders-blessing.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Item",
		"Restriction": "None",
	},
	{
		"Name": "Baron's Brew",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/barons-brew.jpg",
		"Price": 150,
		"ActiveFlag": "y",
		"Type": "Consumable",
		"Restriction": "None",
	},
	{
		"Name": "Bumba's Mask",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/bumbas-mask.jpg",
		"Price": 1300,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+30",
		"Magical Power ": "+65",
		"Cooldown Reduction": "+10%",
		"Restriction": "Physical",
	},
	{
		"Name": "Lono's Mask (deprecated)",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/lonos-mask-deprecated.jpg",
		"Price": 1100,
		"ActiveFlag": "n",
		"Type": "Item",
		"Health": "+300",
		"Physical Protection": "+40",
		"Magical Protection": "+40",
		"Crowd Control Reduction": "+20%",
		"Restriction": "None",
	},
	{
		"Name": "Fighter's Mask",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/fighters-mask.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+10",
		"Magical Power": "+25",
		"HP5": "+10",
		"MP5": "+10",
		"Restriction": "None",
	},
	{
		"Name": "Rangda's Mask",
		"ChildItem": "Fighter's Mask",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/rangdas-mask.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+50",
		"Magical Power": "+70",
		"HP5": "+20",
		"Cooldown Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Gem Of Fate",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/gem-of-fate.jpg",
		"Price": 750,
		"ActiveFlag": "y",
		"Type": "Item",
		"Cooldown Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Honed Edge",
		"ChildItem": "Gem Of Fate",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/honed-edge.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+30",
		"Cooldown Reduction": "+10%",
		"Restriction": "Physical",
	},
	{
		"Name": "Knight's Shield",
		"ChildItem": "Gem Of Fate",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/knights-shield.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+25",
		"Magical protection": "+25",
		"Cooldown Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Warrior's Bane",
		"ChildItem": "Mace",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/warriors-bane.jpg",
		"Price": 850,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+25",
		"Physical Penetration": "+5%",
		"Restriction": "Physical",
	},
	{
		"Name": "Apprentice Staff",
		"ChildItem": "Gem Of Fate",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/apprentice-staff.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+50",
		"Cooldown Reduction": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "S7 Staff of Myrddin",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/s7-staff-of-myrddin.jpg",
		"Price": 1200,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+110",
		"Magical Penetration": "+10%",
		"Cooldown Reduction": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Pridwen",
		"ChildItem": "Knight's Shield",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/pridwen.jpg",
		"Price": 800,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+25",
		"Magical Protection": "+25",
		"Cooldown Reduction": "+20%",
		"Restriction": "None",
	},
	{
		"Name": "Arondight",
		"ChildItem": "Honed Edge",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/arondight.jpg",
		"Price": 9000,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+50",
		"Cooldown Reduction": "+10%",
		"Movement Speed": "+7%",
		"Restriction": "Physical",
	},
	{
		"Name": "Fail-not",
		"ChildItem": "Honed Edge",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/fail-not.jpg",
		"Price": 1050,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+30",
		"Critical Strike Chance": "+20%",
		"Cooldown Reduction": "+20%",
		"Physical Penetration": "+10%",
		"Restriction": "Physical",
	},
	{
		"Name": "Staff of Myrddin",
		"ChildItem": "Apprentice Staff",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/staff-of-myrddin.jpg",
		"Price": 950,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+75",
		"Magical Penetration": "+10%",
		"Cooldown Reduction": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Glorious Pridwen",
		"ChildItem": "Pridwen",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/glorious-pridwen.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+25",
		"Magical Protection": "+25",
		"Cooldown Reduction": "+20%",
		"Restriction": "None",
	},
	{
		"Name": "Reverent Pridwen",
		"ChildItem": "Pridwen",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/reverent-pridwen.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+25",
		"Magical Protection": "+25",
		"Cooldown Reduction": "+20%",
		"Restriction": "None",
	},
	{
		"Name": "Ring of Hecate",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/ring-of-hecate.jpg",
		"Price": 1200,
		"ActiveFlag": "y",
		"Type": "Item",
		"ChildItem": "Mystic Ring",
		"Magical Power": "+55",
		"Attack Speed": "+20%",
		"Magical Penetration": "+15",
		"Restriction": "Magical",
	},
	{
		"Name": "Mystic Ring",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/mystic-ring.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"ChildItem": "Emerald Ring",
		"Magical Power": "+40",
		"Attack Speed": "+20%",
		"Restriction": "Magical",
	},


	{
		"Name": "Potion of Power",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/potion-of-power.jpg",
		"Price": 500,
		"ActiveFlag": "y",
		
		"Type": "Consumable",
		"Restriction": "None",
	},
	{
		"Name": "Heavy Mace",
		"ChildItem": "Mace",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/heavy-mace.jpg",
		"Price": 800,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+30",
		"Restriction": "Physical",
	},
	{
		"Name": "Hand of the Gods",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/hand-of-the-gods.jpg",
		"Price": 100,
		"ActiveFlag": "n",
		"Type": "Consumable",
		"Restriction": "None",
	},
	{
		"Name": "S8 Meditation Cloak",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/s8-meditation-cloak.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "S8 Magic Shell",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/s8-magic-shell.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "z* S7 Sundering Spear",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/z*-s7-sundering-spear.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "S8 Phantom Veil",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/s8-phantom-veil.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Bracer of Undoing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/bracer-of-undoing.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "S8 Meditation Cloak Upgrade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/s8-meditation-cloak-upgrade.jpg",
		"Price": 500,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "S8 Phantom Veil Upgrade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/s8-phantom-veil-upgrade.jpg",
		"Price": 500,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "S8 Magic Shell Upgrade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/s8-magic-shell-upgrade.jpg",
		"Price": 500,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "z* Sundering Spear Upgrade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/z*-sundering-spear-upgrade.jpg",
		"Price": 500,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Mystical Mail",
		"ChildItem": "Steel Mail",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/mystical-mail.jpg",
		"Price": 1000,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+200",
		"Physical Protection": "+40",
		"Crowd Control Reduction": "+20%",
		"Restriction": "None",
	},
	{
		"Name": "Titan's Bane",
		"ChildItem": "Warrior's Bane",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/titans-bane.jpg",
		"Price": 1000,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+40",
		"Physical Penetration": "+20%",
		"Restriction": "Physical",
	},
	{
		"Name": "Bracer of Undoing Upgrade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/bracer-of-undoing-upgrade.jpg",
		"Price": 500,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Magic Acorn",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/magic-acorn.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Item",
		"Movement Speed": "+2%",
		"Restriction": "Physical",
	},
	{
		"Name": "Lively Acorn",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/lively-acorn.jpg",
		"Price": 700,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+15",
		"Movement Speed": "+4%",
		"Restriction": "Physical",
	},
	{
		"Name": "Nettle Acorn",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/nettle-acorn.jpg",
		"Price": 700,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+15",
		"Movement Speed": "+4%",
		"Restriction": "Physical",
	},
	{
		"Name": "Bristlebush Acorn",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/bristlebush-acorn.jpg",
		"Price": 1350,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+40",
		"Movement Speed": "+6%",
		"Critical Strike Chance": "+25%",
		"Restriction": "Physical",
	},
	{
		"Name": "Thistlethorn Acorn",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/thistlethorn-acorn.jpg",
		"Price": 1350,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+40",
		"Movement Speed": "+6%",
		"Restriction": "Physical",
	},
	{
		"Name": "Evergreen Acorn",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evergreen-acorn.jpg",
		"Price": 1350,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+35",
		"Movement Speed": "+6%",
		"Maximum Health": "+15%",
		"Restriction": "Physical",
	},
	{
		"Name": "Thickbark Acorn",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/thickbark-acorn.jpg",
		"Price": 1350,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+35",
		"Movement Speed": "+6%",
		"Protections": "+10%",
		"Restriction": "Physical",
	},
	{
		"Name": "Death's Toll",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/deaths-toll.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+18",
		"Magical Power": "+35",
		"Health": "+75",
		"Restriction": "None",
	},
	{
		"Name": "Death's Embrace",
		"ChildItem": "Death's Toll",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/deaths-embrace.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+45",
		"Magical Power": "+80",
		"Health": "+150",
		"Restriction": "None",
	},
	{
		"Name": "Jotunn's Wrath",
		"ChildItem": "Heavy Mace",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/jotunns-wrath.jpg",
		"Price": 850,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+40",
		"Mana": "+150",
		"Physical Penetration": "+10",
		"Cooldown Reduction": "+20%",
		"Restriction": "Physical",
	},
	{
		"Name": "Death's Temper",
		"ChildItem": "Death's Toll",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/deaths-temper.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+35",
		"Magical power": "+50",
		"Health": "+75",
		"Attack Speed": "+30%",
		"Restriction": "Physical",
	},
	{
		"Name": "Gilded Arrow",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/gilded-arrow.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Basic Attack Damage": "+20",
		"Health": "+50",
		"MP5": "+7",
		"Restriction": "None",
	},
	{
		"Name": "Diamond Arrow",
		"ChildItem": "Gilded Arrow",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/diamond-arrow.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Attack Speed": "+75%",
		"Basic Attack Damage": "+70",
		"Health": "+100",
		"Penetration": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Ornate Arrow",
		"ChildItem": "Gilded Arrow",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/ornate-arrow.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Basic Attack Damage": "+60",
		"Health": "+100",
		"Attack Speed": "+35%",
		"Critical Strike Chance": "+35%",
		"Restriction": "None",
	},
	{
		"Name": "Warrior's Axe",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/warriors-axe.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+20",
		"Magical Power": "+15",
		"Physical Protection": "+10",
		"Magical Protection": "+10",
		"Restriction": "None",
	},
	{
		"Name": "Sundering Axe",
		"ChildItem": "Warrior's Axe",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/sundering-axe.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+30",
		"Magical Power": "+45",
		"Physical Protection": "+25",
		"Magical Protection": "+25",
		"Restriction": "None",
	},
	{
		"Name": "Axe of Animosity",
		"ChildItem": "Balanced Blade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/axe-of-animosity.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+30",
		"Magical Protection": "+30",
		"Health": "+300",
		"Crowd Control Reduction": "+30%",
		"Restriction": "None",
	},
	{
		"Name": "Manikin Scepter",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/manikin-scepter.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Basic Attack Damage": "+10",
		"Attack Speed": "+7%",
		"Restriction": "None",
	},
	{
		"Name": "Manikin Mace",
		"ChildItem": "Manikin Scepter",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/manikin-mace.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Basic Attack Damage": "+50",
		"Physical Protection": "+25",
		"Health": "+100",
		"Attack Speed": "+20%",
		"Restriction": "None",
	},
	{
		"Name": "Manikin Hidden Blade",
		"ChildItem": "Manikin Scepter",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/manikin-hidden-blade.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+95",
		"Physical Power": "+70",
		"Physical Protection": "+25",
		"Attack Speed": "+15%",
		"Restriction": "None",
	},
	{
		"Name": "The Crusher",
		"ChildItem": "Warrior's Bane",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/the-crusher.jpg",
		"Price": 1000,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+35",
		"Attack Speed": "+20%",
		"Physical Penetration": "+10%",
		"Restriction": "Physical",
	},
	{
		"Name": "Bumba's Dagger",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/bumbas-dagger.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+13",
		"Magical Power": "+25",
		"Health": "+50",
		"Mana": "+50",
		"Restriction": "None",
	},
	{
		"Name": "Bumba's Spear",
		"ChildItem": "Bumba's Dagger",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/bumbas-spear.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+50",
		"Magical Power": "+75",
		"Magical Penetration": "+10%",
		"Physical Penetration": "+10%",
		"Cooldown Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Bumba's Hammer",
		"ChildItem": "Bumba's Dagger",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/bumbas-hammer.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+45",
		"Magical Power": "+60",
		"Health": "+100",
		"Cooldown Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Sands of Time",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/sands-of-time.jpg",
		"Price": 700,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+25",
		"MP5": "+10",
		"Cooldown Reduction": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Pendulum of Ages",
		"ChildItem": "Sands of Time",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/pendulum-of-ages.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+60",
		"MP5": "+20",
		"Cooldown Reduction": "+20%",
		"Restriction": "Magical",
	},
	{
		"Name": "The Alternate Timeline",
		"ChildItem": "Sands of Time",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/the-alternate-timeline.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+50",
		"Physical Protection": "+40",
		"Magical Protections": "+40",
		"Cooldown Reduction": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Sentinel's Gift",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/sentinels-gift.jpg",
		"Price": 550,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+10",
		"Magical Protection": "+10",
		"Health": "+75",
		"MP5": "+7",
		"Restriction": "None",
	},
	{
		"Name": "Sentinel's Boon",
		"ChildItem": "Sentinel's Gift",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/sentinels-boon.jpg",
		"Price": 1250,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+40",
		"Magical Protection": "+40",
		"Health": "+250",
		"MP5": "+20",
		"Restriction": "None",
	},
	{
		"Name": "Sentinel's Embrace",
		"ChildItem": "Sentinel's Gift",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/sentinels-embrace.jpg",
		"Price": 1250,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+25",
		"Magical Protection": "+25",
		"Health": "+150",
		"MP5": "+20",
		"Restriction": "None",
	},
	{
		"Name": "Benevolence",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/benevolence.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+75",
		"MP5": "+10",
		"HP5": "+10",
		"Restriction": "None",
	},
	{
		"Name": "Brawler's Beat Stick",
        "ChildItem":"Heavy Mace",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/brawlers-beat-stick.jpg",
		"Price": 950,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+45",
		"Physical Penetration": "+15",
		"Restriction": "Physical",
	},
	{
		"Name": "Compassion",
		"ChildItem": "Benevolence",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/compassion.jpg",
		"Price": 1250,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Protection": "+50",
		"Health": "+250",
		"HP5": "+45",
		"MP5": "+15",
		"Restriction": "None",
	},
	{
		"Name": "Heroism",
		"ChildItem": "Benevolence",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/heroism.jpg",
		"Price": 1250,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+350",
		"HP5": "+20",
		"MP5": "+20",
		"Restriction": "None",
	},
	{
		"Name": "Tainted Steel",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/tainted-steel.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+15",
		"Magical Power": "+25",
		"Physical Protection": "+15",
		"Magical Protection": "+15",
		"Restriction": "None",
	},
	{
		"Name": "Tainted Amulet",
		"ChildItem": "Tainted Steel",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/tainted-amulet.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+20",
		"Magical Power": "+35",
		"Physical Protection": "+25",
		"Magical Protection": "+75",
		"Restriction": "None",
	},
	{
		"Name": "Tainted Breastplate",
		"ChildItem": "Tainted Steel",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/tainted-breastplate.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+35",
		"Magical Power": "+55",
		"Physical Protection": "+70",
		"Magical Protection": "+25",
		"Restriction": "None",
	},
	{
		"Name": "Conduit Gem",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/conduit-gem.jpg",
		"Price": 700,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+25",
		"Mana": "+100",
		"MP5": "+10",
		"Restriction": "Magical",
	},
	{
		"Name": "Archmage's Gem",
		"ChildItem": "Conduit Gem",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/archmages-gem.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+120",
		"Mana": "+200",
		"MP5": "+25",
		"Restriction": "Magical",
	},
	{
		"Name": "Gem of Focus",
		"ChildItem": "Conduit Gem",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/gem-of-focus.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+70",
		"Health": "+100",
		"MP5": "+15",
		"Restriction": "Magical",
	},
	{
		"Name": "Eye of the Jungle",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/eye-of-the-jungle.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+15",
		"Magical Power": "+30",
		"Physical Protection": "+7",
		"HP5": "+10",
		"Restriction": "None",
	},
	{
		"Name": "Seer of the Jungle",
		"ChildItem": "Eye of the Jungle",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/seer-of-the-jungle.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+50",
		"Magical Power": "+70",
		"Physical Protection": "+35",
		"Attack Speed": "+25%",
		"Restriction": "None",
	},
	{
		"Name": "Jotunn's Cunning",
		"ChildItem": "Jotunn's Wrath",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/jotunns-cunning.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+40",
		"Mana": "+150",
		"Physical Penetration": "+10",
		"Cooldown Reduction": "+20%",
		"Restriction": "Physical",
	},
	{
		"Name": "Protector of the Jungle",
		"ChildItem": "Eye of the Jungle",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/protector-of-the-jungle.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+50",
		"Magical Power": "+70",
		"Physical Protection": "+25",
		"Magical Protection": "+25",
		"Restriction": "None",
	},
	{
		"Name": "Warding Sigil",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/warding-sigil.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+15",
		"Physical Protection": "+10",
		"Magical Protection": "+15",
		"Magical Power": "+20",
		"Restriction": "None",
	},
	{
		"Name": "Sigil of The Old Guard",
		"ChildItem": "Warding Sigil",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/sigil-of-the-old-guard.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+25",
		"Physical Protection": "+40",
		"Magical Protection": "+65",
		"Magical Power": "+35",
		"Restriction": "None",
	},
	{
		"Name": "Infused Sigil",
		"ChildItem": "Warding Sigil",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/infused-sigil.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+35",
		"Physical Protection": "+30",
		"Magical Protection": "+30",
		"Health": "+300",
		"Restriction": "None",
	},
	{
		"Name": "War Flag (OLD)",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/war-flag-old.jpg",
		"Price": 600,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Protection": "+10",
		"Magical Protection": "+10",
		"Health": "+100",
		"MP5": "+10",
		"Restriction": "None",
	},
	{
		"Name": "Bracer of Illumination",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/bracer-of-illumination.jpg",
		"Price": 500,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Bracer of Brilliance",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-bracer-of-brilliance.jpg",
		"Price": 500,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Drowned Ankh",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/drowned-ankh.jpg",
		"Price": 500,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Hastened Wings",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/hastened-wings.jpg",
		"Price": 500,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Emblem of Increasing Peril",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-emblem-of-increasing-peril.jpg",
		"Price": 500,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Jotunn's Vigor",
		"ChildItem": "Jotunn's Wrath",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/jotunns-vigor.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+40",
		"Mana": "+150",
		"Physical Penetration": "+10",
		"Cooldown Reduction": "+20%",
		"Restriction": "Physical",
	},
	{
		"Name": "Cloak of the Avatar",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/cloak-of-the-avatar.jpg",
		"Price": 500,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Protector's Mask",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/protectors-mask.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+125",
		"Mana": "+100",
		"Restriction": "None",
	},
	{
		"Name": "Lono's Mask",
		"ChildItem": "Protector's Mask",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/lonos-mask.jpg",
		"Price": 1250,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+250",
		"Mana": "+200",
		"Crowd Control Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Mystical Earring",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/mystical-earring.jpg",
		"Price": 400,
		"ActiveFlag": "y",
		"Type": "Item",
		"MP5": "+15",
		"Restriction": "None",
	},
	{
		"Name": "Gleaming Ear Cuffs",
		"ChildItem": "Mystical Earring",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/gleaming-ear-cuffs.jpg",
		"Price": 900,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+20",
		"Magical Power": "+30",
		"Attack Speed": "+15%",
		"MP5": "+15",
		"Restriction": "None",
	},
	{
		"Name": "Rose Spike Earrings",
		"ChildItem": "Mystical Earring",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/rose-spike-earrings.jpg",
		"Price": 800,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Protection": "+25",
		"Health": "+250",
		"MP5": "+15",
		"Restriction": "None",
	},
	{
		"Name": "Jeweled Studs",
		"ChildItem": "Mystical Earring",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/jeweled-studs.jpg",
		"Price": 1000,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+20",
		"Magical power": "+30",
		"Cooldown Reduction": "+10%",
		"MP5": "+20",
		"Restriction": "Physical",
	},
	{
		"Name": "Fae-Blessed Hoops",
		"ChildItem": "Rose Spike Earrings",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/fae-blessed-hoops.jpg",
		"Price": 1100,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Protections": "+40",
		"Health": "+250",
		"MP5": "+40",
		"Cooldown Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Sphinx's Baubles",
		"ChildItem": "Jeweled Studs",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/sphinxs-baubles.jpg",
		"Price": 1050,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+40",
		"Magical Power": "+60",
		"MP5": "+20",
		"Cooldown Reduction": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Manticore's Spikes",
		"ChildItem": "Rose Spike Earrings",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/manticores-spikes.jpg",
		"Price": 1100,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+30",
		"Magical Protection": "+30",
		"Health": "+300",
		"MP5": "+20",
		"Restriction": "None",
	},
	{
		"Name": "Morningstar",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/morningstar.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+7",
		"Mana": "+50",
		"Restriction": "Physical",
	},
	{
		"Name": "Griffonwing Earrings",
		"ChildItem": "Gleaming Ear Cuffs",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/griffonwing-earrings.jpg",
		"Price": 900,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+40",
		"Magical Power": "+60",
		"Attack Speed": "+30%",
		"MP5": "+15",
		"Restriction": "None",
	},
	{
		"Name": "Shard Relic",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/shard-relic.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Vision Shard",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/vision-shard.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Horn Shard",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/horn-shard.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Wing Shard",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/wing-shard.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Golden Shard",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/golden-shard.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Vibrant Shard",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/vibrant-shard.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Sturdy Shard",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/sturdy-shard.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Aegis Amulet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-aegis-amulet.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Belt of Frenzy",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/belt-of-frenzy.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Charged Morningstar",
		"ChildItem": "Morningstar",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/charged-morningstar.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+20",
		"Mana": "+150",
		"MP5": "+7",
		"Restriction": "Physical",
	},
	{
		"Name": "Y10 Blink Rune",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-blink-rune.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Bracer of Radiance",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-bracer-of-radiance.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Cursed Ankh",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/cursed-ankh.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Heavenly Wings",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-heavenly-wings.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Horrific Emblem",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-horrific-emblem.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Purification Beads",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-purification-beads.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Shield of Thorns",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-shield-of-thorns.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Teleport Fragment",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-teleport-fragment.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Purification Beads",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/purification-beads.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Heavenly Wings",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/heavenly-wings.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Hydra's Star",
		"ChildItem": "Morningstar",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/hydras-star.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+20",
		"Cooldown Reduction": "+5%",
		"Mana": "+100",
		"Restriction": "Physical",
	},
	{
		"Name": "Horrific Emblem",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/horrific-emblem.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Magic Shell",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/magic-shell.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Blink Rune",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/blink-rune.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Sundering Spear",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/sundering-spear.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Teleport Fragment",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/teleport-fragment.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Cloak of Meditation",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/cloak-of-meditation.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Bracer of Radiance",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/bracer-of-radiance.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Aegis Amulet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/aegis-amulet.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Shield of Thorns",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/shield-of-thorns.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Divine Barrier",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/divine-barrier.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Transcendence",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-transcendence.jpg",
		"Price": 1300,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+25",
		"Mana": "+300",
		"MP5": "+10",
		"Restriction": "Physical",
	},
	{
		"Name": "Runic Bomb",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/runic-bomb.jpg",
		"Price": 50,
		"ActiveFlag": "y",
		"Type": "Consumable",
		"Restriction": "None",
	},
	{
		"Name": "Bluestone Pendant",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/bluestone-pendant.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+15",
		"HP5": "+15",
		"MP5": "+10",
		"Restriction": "Physical",
	},
	{
		"Name": "Bluestone Brooch",
		"ChildItem": "Bluestone Pendant",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/bluestone-brooch.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+30",
		"Health": "+150",
		"HP5": "+30",
		"MP5": "+30",
		"Restriction": "Physical",
	},
	{
		"Name": "Corrupted Bluestone",
		"ChildItem": "Bluestone Pendant",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/corrupted-bluestone.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+35",
		"Health": "+100",
		"HP5": "+20",
		"MP5": "+20",
		"Restriction": "Physical",
	},
	{
		"Name": "Y10 Greater Aegis Amulet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-greater-aegis-amulet.jpg",
		"Price": 300,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Greater Belt of Frenzy",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/greater-belt-of-frenzy.jpg",
		"Price": 300,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Greater Blink Rune",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-greater-blink-rune.jpg",
		"Price": 300,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Greater Bracer of Radiance",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-greater-bracer-of-radiance.jpg",
		"Price": 300,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Greater Cursed Ankh",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/greater-cursed-ankh.jpg",
		"Price": 300,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Greater Heavenly Wings",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-greater-heavenly-wings.jpg",
		"Price": 300,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Midgardian Mail",
		"ChildItem": "Steel Mail",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/midgardian-mail.jpg",
		"Price": 900,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+250",
		"Physical Protection": "+40",
		"Restriction": "None",
	},
	{
		"Name": "Hydra's Lament",
		"ChildItem": "Hydra's Star",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/hydras-lament.jpg",
		"Price": 1100,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+30",
		"Physical Penetration": "+10%",
		"Cooldown Reduction": "+10%",
		"Mana": "+200",
		"Restriction": "Physical",
	},
	{
		"Name": "Y10 Greater Horrific Emblem",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-greater-horrific-emblem.jpg",
		"Price": 300,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Greater Purification Beads",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-greater-purification-beads.jpg",
		"Price": 300,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Greater Shield of Thorns",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-greater-shield-of-thorns.jpg",
		"Price": 300,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Greater Teleport Fragment",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-greater-teleport-fragment.jpg",
		"Price": 300,
		"ActiveFlag": "n",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "War Flag",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/war-flag.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+10",
		"Magical Protection": "+10",
		"Health": "+100",
		"MP5": "+10",
		"Restriction": "None",
	},
	{
		"Name": "Spartan Flag",
		"ChildItem": "War Flag",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/spartan-flag.jpg",
		"Price": 1250,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+35",
		"Magical Protection": "+35",
		"Health": "+250",
		"MP5": "+15",
		"Restriction": "None",
	},
	{
		"Name": "War Banner",
		"ChildItem": "War Flag",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/war-banner.jpg",
		"Price": 1250,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+35",
		"Magical Protection": "+35",
		"Health": "+250",
		"MP5": "+15",
		"Restriction": "None",
	},
	{
		"Name": "Restoring Wand",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/restoring-wand.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+15",
		"Health": "+50",
		"Mana": "+50",
		"Restriction": "Magical",
	},
	{
		"Name": "Rod of Healing",
		"ChildItem": "Restoring Wand",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/rod-of-healing.jpg",
		"Price": 700,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+55",
		"Health": "+75",
		"Mana": "+75",
		"Restriction": "Magical",
	},
	{
		"Name": "Rod of Asclepius",
		"ChildItem": "Rod of Healing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/rod-of-asclepius.jpg",
		"Price": 1250,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+60",
		"Health": "+200",
		"Mana": "+250",
		"Restriction": "Magical",
	},
	{
		"Name": "Heartseeker",
		"ChildItem": "Charged Morningstar",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/heartseeker.jpg",
		"Price": 1550,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+45",
		"Mana": "+200",
		"MP5": "+20",
		"Physical Penetration": "+10%",
		"Restriction": "Physical",
	},
	{
		"Name": "Last Gasp",
		"ChildItem": "Rod of Healing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/last-gasp.jpg",
		"Price": 1050,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+70",
		"Health": "+150",
		"Mana": "+200",
		"Magical Penetration": "+15",
		"Restriction": "Magical",
	},
	{
		"Name": "Rejuvenating Heart",
		"ChildItem": "Rod of Healing",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/rejuvenating-heart.jpg",
		"Price": 1100,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+55",
		"Health": "+200",
		"Mana": "+300",
		"Lifesteal": "+15%",
		"Restriction": "Magical",
	},
	{
		"Name": "Blessed Scepter",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/blessed-scepter.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+10",
		"Health": "+50",
		"MP5": "+5",
		"Restriction": "Physical",
	},
	{
		"Name": "Splendid Scepter",
		"ChildItem": "Blessed Scepter",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/splendid-scepter.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+20",
		"Health": "+100",
		"MP5": "+10",
		"Restriction": "Physical",
	},
	{
		"Name": "Caduceus Club",
		"ChildItem": "Splendid Scepter",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/caduceus-club.jpg",
		"Price": 1100,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+20",
		"Health": "+200",
		"MP5": "+20",
		"Cooldown Reduction": "+10%",
		"Restriction": "Physical",
	},
	{
		"Name": "Vital Amplifier",
		"ChildItem": "Splendid Scepter",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/vital-amplifier.jpg",
		"Price": 1150,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+30",
		"Health": "+150",
		"MP5": "+15",
		"Attack Speed": "+20%",
		"Restriction": "Physical",
	},
	{
		"Name": "Sekhmet's Scepter",
		"ChildItem": "Splendid Scepter",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/sekhmets-scepter.jpg",
		"Price": 1100,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+35",
		"Health": "+150",
		"MP5": "+15",
		"Cooldown Reduction": "+10%",
		"Restriction": "Physical",
	},
	{
		"Name": "Greater Purification Beads",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/greater-purification-beads.jpg",
		"Price": 300,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Greater Heavenly Wings",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/greater-heavenly-wings.jpg",
		"Price": 300,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Greater Horrific Emblem",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/greater-horrific-emblem.jpg",
		"Price": 300,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Dominance",
		"ChildItem": "Charged Morningstar",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/dominance.jpg",
		"Price": 1300,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+40",
		"Mana": "+200",
		"MP5": "+20",
		"Attack Speed": "+15%",
		"Restriction": "Physical",
	},
	{
		"Name": "Greater Magic Shell",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/greater-magic-shell.jpg",
		"Price": 300,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Greater Blink Rune",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/greater-blink-rune.jpg",
		"Price": 300,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Greater Sundering Spear",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/greater-sundering-spear.jpg",
		"Price": 300,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Greater Teleport Fragment",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/greater-teleport-fragment.jpg",
		"Price": 300,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Greater Cloak of Meditation",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/greater-cloak-of-meditation.jpg",
		"Price": 300,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Greater Bracer of Radiance",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/greater-bracer-of-radiance.jpg",
		"Price": 300,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Greater Aegis Amulet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/greater-aegis-amulet.jpg",
		"Price": 300,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Greater Shield of Thorns",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/greater-shield-of-thorns.jpg",
		"Price": 300,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Greater Divine Barrier",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/greater-divine-barrier.jpg",
		"Price": 300,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Temporal Beads",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/temporal-beads.jpg",
		"Price": 500,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Transcendence",
		"ChildItem": "Charged Morningstar",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/transcendence.jpg",
		"Price": 1300,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+25",
		"Mana": "+300",
		"MP5": "+10",
		"Restriction": "Physical",
	},
	{
		"Name": "Entangling Wings",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/entangling-wings.jpg",
		"Price": 500,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Emblem of Increasing Peril",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/emblem-of-increasing-peril.jpg",
		"Price": 500,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Phantom Shell",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/phantom-shell.jpg",
		"Price": 500,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Scorching Blink Rune",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/scorching-blink-rune.jpg",
		"Price": 500,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Sundering Blast",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/sundering-blast.jpg",
		"Price": 500,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Persistent Teleport",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/persistent-teleport.jpg",
		"Price": 500,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Cloak of the Ascetic",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/cloak-of-the-ascetic.jpg",
		"Price": 500,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Bracer of Brilliance",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/bracer-of-brilliance.jpg",
		"Price": 500,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Aegis of Acceleration",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/aegis-of-acceleration.jpg",
		"Price": 500,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Thorns of Judgement",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/thorns-of-judgement.jpg",
		"Price": 500,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Bewitched Dagger",
		"ChildItem": "Relic Dagger",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/bewitched-dagger.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+300",
		"Cooldown Reduction": "+10%",
		"Crowd Control Reduction": "+10%",
		"Movement Speed": "+7%",
		"Restriction": "None",
	},
	{
		"Name": "Spiked Gauntlet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/spiked-gauntlet.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+7",
		"Physical Lifesteal": "+3%",
		"Restriction": "Physical",
	},
	{
		"Name": "Cursed Gauntlet",
		"ChildItem": "Spiked Gauntlet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/cursed-gauntlet.jpg",
		"Price": 800,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+25",
		"Physical Lifesteal": "+9%",
		"Restriction": "Physical",
	},
	{
		"Name": "Bound Gauntlet",
		"ChildItem": "Spiked Gauntlet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/bound-gauntlet.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+20",
		"Physical Lifesteal": "+9%",
		"Restriction": "Physical",
	},
	{
		"Name": "Devourer's Gauntlet",
		"ChildItem": "Cursed Gauntlet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/devourers-gauntlet.jpg",
		"Price": 1000,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+30",
		"Physical Lifesteal": "+15%",
		"Restriction": "Physical",
	},
	{
		"Name": "Soul Eater",
		"ChildItem": "Bound Gauntlet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/soul-eater.jpg",
		"Price": 1200,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+25",
		"Physical Lifesteal": "+9%",
		"Cooldown Reduction": "+10%",
		"Restriction": "Physical",
	},
	{
		"Name": "Bloodforge",
		"ChildItem": "Cursed Gauntlet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/bloodforge.jpg",
		"Price": 1100,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+50",
		"Physical Lifesteal": "+15%",
		"Movement Speed": "+7%",
		"Restriction": "Physical",
	},
	{
		"Name": "Crimson Claws",
		"ChildItem": "Cursed Gauntlet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/crimson-claws.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+50",
		"Attack Speed": "+20%",
		"Physical Lifesteal": "+15%",
		"Restriction": "Physical",
	},
	{
		"Name": "Evolved Devourer's Gauntlet",
		"ChildItem": "Devourer's Gauntlet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evolved-devourers-gauntlet.jpg",
		"Price": 1,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+50",
		"Physical Lifesteal": "+22.5%",
		"Physical Penetration": "+15",
		"Restriction": "Physical",
	},
	{
		"Name": "Evolved Soul Eater",
		"ChildItem": "Soul Eater",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evolved-soul-eater.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+50",
		"Physical Lifesteal": "+15%",
		"Physical Penetration": "+10",
		"Cooldown Reduction": "+10%",
		"Restriction": "Physical",
	},
	{
		"Name": "Tiny Trinket",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/tiny-trinket.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+25",
		"Magical Lifesteal": "+6%",
		"Restriction": "Magical",
	},
	{
		"Name": "Eldritch Dagger",
		"ChildItem": "Relic Dagger",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/eldritch-dagger.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+300",
		"Cooldown Reduction": "+10%",
		"Crowd Control Reduction": "+10%",
		"Movement Speed": "+7%",
		"Restriction": "None",
	},
	{
		"Name": "Talon Trinket",
		"ChildItem": "Tiny Trinket",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/talon-trinket.jpg",
		"Price": 800,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+45",
		"Mana": "+100",
		"Magical Lifesteal": "+5%",
		"Restriction": "Magical",
	},
	{
		"Name": "Enchanted Trinket",
		"ChildItem": "Tiny Trinket",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/enchanted-trinket.jpg",
		"Price": 550,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+30",
		"Health": "+100",
		"Magical Lifesteal": "+9%",
		"Restriction": "Magical",
	},
	{
		"Name": "Soul Gem",
		"ChildItem": "Enchanted Trinket",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/soul-gem.jpg",
		"Price": 1200,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+70",
		"Health": "+100",
		"Magical Lifesteal": "+12%",
		"Cooldown Reduction": "+10%",
		"Restriction": "Magical",
	},
	{
		"Name": "Bancroft's Talon",
		"ChildItem": "Talon Trinket",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/bancrofts-talon.jpg",
		"Price": 1100,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+80",
		"Mana": "+200",
		"Magical Lifesteal": "+15%",
		"Restriction": "Magical",
	},
	{
		"Name": "Typhon's Fang",
		"ChildItem": "Talon Trinket",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/typhons-fang.jpg",
		"Price": 1250,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+55",
		"Mana": "+200",
		"Magical Lifesteal": "+15%",
		"Magical Penetration": "+20%",
		"Restriction": "Magical",
	},
	{
		"Name": "Pythagorem's Piece",
		"ChildItem": "Enchanted Trinket",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/pythagorems-piece.jpg",
		"Price": 1200,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+40",
		"Health": "+200",
		"Magical Lifesteal": "+9%",
		"Restriction": "Magical",
	},
	{
		"Name": "Bancroft's Claw",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/bancrofts-claw.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+80",
		"Mana": "+200",
		"Magical Lifesteal": "+15%",
		"Restriction": "Magical",
	},
	{
		"Name": "Nimble Bancroft's Talon",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/nimble-bancrofts-talon.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+80",
		"Mana": "+200",
		"Magical Lifesteal": "+15%",
		"Restriction": "Magical",
	},
	{
		"Name": "Vampiric Shroud",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/vampiric-shroud.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+25",
		"MP5": "+10",
		"Magical Lifesteal": "+6%",
		"Restriction": "Magical",
	},
	{
		"Name": "Blood-soaked Shroud",
		"ChildItem": "Vampiric Shroud",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/blood-soaked-shroud.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+70",
		"Health": "+300",
		"MP5": "+15",
		"Magical Lifesteal": "+18%",
		"Restriction": "Magical",
	},
	{
		"Name": "OLD Vampiric Shroud",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/old-vampiric-shroud.jpg",
		"Price": 800,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+20",
		"Health": "+100",
		"Physical Protection": "+10",
		"Restriction": "Magical",
	},
	{
		"Name": "Sacrificial Shroud",
		"ChildItem": "Vampiric Shroud",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/sacrificial-shroud.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Power": "+95",
		"Physical Protection": "+40",
		"MP5": "+15",
		"Magical Lifesteal": "+18%",
		"Restriction": "Magical",
	},
	{
		"Name": "Leather Cowl",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/leather-cowl.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical power": "+15",
		"MP5": "+5",
		"Physical Lifesteal": "+6%",
		"Attack Speed": "+10%",
		"Restriction": "None",
	},
	{
		"Name": "Hunter's Cowl",
		"ChildItem": "Leather Cowl",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/hunters-cowl.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+50",
		"MP5": "+15",
		"Physical Lifesteal": "+15%",
		"Attack Speed": "+20%",
		"Restriction": "Physical",
	},
	{
		"Name": "Leader's Cowl",
		"ChildItem": "Leather Cowl",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/leaders-cowl.jpg",
		"Price": 1500,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+50",
		"Health": "+250",
		"Attack Speed": "+20%",
		"Physical Lifesteal": "+15%",
		"Restriction": "Physical",
	},
	{
		"Name": "Raven Ward",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/raven-ward.jpg",
		"Price": 75,
		"ActiveFlag": "y",
		"Type": "Consumable",
		"Restriction": "None",
	},
	{
		"Name": "Blessed Barrier",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/blessed-barrier.jpg",
		"Price": 500,
		"ActiveFlag": "y",
		"Type": "Active",
		"Restriction": "None",
	},
	{
		"Name": "Proximity Ward",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/proximity-ward.jpg",
		"Price": 75,
		"ActiveFlag": "y",
		"Type": "Consumable",
		"Restriction": "None",
	},
	{
		"Name": "Death's Toll",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/deaths-toll.jpg",
		"Price": 800,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+10",
		"Health": "+100",
		"Restriction": "Physical",
	},
	{
		"Name": "Mark of the Vanguard",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/mark-of-the-vanguard.jpg",
		"Price": 800,
		"ActiveFlag": "n",
		"Type": "Item",
		"Health": "+100",
		"Physical Protection": "+10",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Evolved Transcendence",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-evolved-transcendence.jpg",
		"Price": 1,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+25",
		"Mana": "+1050",
		"MP5": "+10",
		"Cooldown Reduction": "+10%",
		"Restriction": "Physical",
	},
	{
		"Name": "Emperor's Armor",
		"ChildItem": "Steel Mail",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/emperors-armor.jpg",
		"Price": 850,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+50",
		"Health": "+250",
		"Restriction": "None",
	},
	{
		"Name": "Evolved Transcendence",
		"ChildItem": "Transcendence",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evolved-transcendence.jpg",
		"Price": 1,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+25",
		"Mana": "+750",
		"MP5": "+10",
		"Physical Penetration": "+10",
		"Restriction": "Physical",
	},
	{
		"Name": "Sentry Ward",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/sentry-ward.jpg",
		"Price": 120,
		"ActiveFlag": "y",
		"Type": "Consumable",
		"Restriction": "None",
	},
	{
		"Name": "Watcher's Gift",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/watchers-gift.jpg",
		"Price": 800,
		"ActiveFlag": "n",
		"Type": "Item",
		"Health": "+100",
		"Physical Protection": "+5",
		"Magical Protection": "+5",
		"MP5": "+5",
		"Restriction": "None",
	},
	{
		"Name": "Boots",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/boots.jpg",
		"Price": 500,
		"ActiveFlag": "n",
		"Type": "Item",
		"Movement Speed": "+6%",
		"Restriction": "None",
	},
	{
		"Name": "Combat Boots",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/combat-boots.jpg",
		"Price": 400,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+10",
		"Movement Speed": "+12%",
		"Restriction": "Physical",
	},
	{
		"Name": "Warrior Tabi",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/warrior-tabi.jpg",
		"Price": 700,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+40",
		"Mana": "+100",
		"Movement Speed": "+18%",
		"Restriction": "Physical",
	},
	{
		"Name": "Ninja Tabi",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/ninja-tabi.jpg",
		"Price": 650,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+20",
		"Mana": "+100",
		"Attack Speed": "+25%",
		"Movement Speed": "+18%",
		"Restriction": "Physical",
	},
	{
		"Name": "Reinforced Greaves",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/reinforced-greaves.jpg",
		"Price": 650,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+10",
		"Health": "+150",
		"Crowd Control Reduction": "+10%",
		"Movement Speed": "+18%",
		"Restriction": "Physical",
	},
	{
		"Name": "Talaria Boots",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/talaria-boots.jpg",
		"Price": 700,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+15",
		"MP5": "+15",
		"Movement Speed": "+22%",
		"Restriction": "Physical",
	},
	{
		"Name": "Shoes",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/shoes.jpg",
		"Price": 500,
		"ActiveFlag": "n",
		"Type": "Item",
		"Movement Speed": "+6%",
		"Restriction": "None",
	},
	{
		"Name": "Light Blade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/light-blade.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+5",
		"Attack Speed": "+10%",
		"Restriction": "Physical",
	},
	{
		"Name": "Magic Shoes",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/magic-shoes.jpg",
		"Price": 400,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+20",
		"Movement Speed": "+12%",
		"Restriction": "Magical",
	},
	{
		"Name": "Shoes of the Magi",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/shoes-of-the-magi.jpg",
		"Price": 650,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+75",
		"Mana": "+100",
		"Magical Lifesteal": "+8%",
		"Movement Speed": "+18%",
		"Restriction": "Magical",
	},
	{
		"Name": "Shoes of Focus",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/shoes-of-focus.jpg",
		"Price": 700,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+55",
		"Mana": "+250",
		"Cooldown Reduction": "+10%",
		"Movement Speed": "+18%",
		"Restriction": "Magical",
	},
	{
		"Name": "Reinforced Shoes",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/reinforced-shoes.jpg",
		"Price": 650,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+20",
		"Health": "+150",
		"Crowd Control Reduction": "+10%",
		"Movement Speed": "+18%",
		"Restriction": "Magical",
	},
	{
		"Name": "Traveler's Shoes",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/travelers-shoes.jpg",
		"Price": 700,
		"ActiveFlag": "n",
		"Type": "Item",
		"Magical Power": "+25",
		"MP5": "+15",
		"Movement Speed": "+22%",
		"Restriction": "Magical",
	},
	{
		"Name": "Multi Potion",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/multi-potion.jpg",
		"Price": 50,
		"ActiveFlag": "y",
		"Type": "Consumable",
		"Restriction": "None",
	},
	{
		"Name": "Hidden Dagger",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/hidden-dagger.jpg",
		"Price": 700,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+15",
		"Restriction": "Physical",
	},
	{
		"Name": "Short Sword",
		"ChildItem": "Hidden Dagger",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/short-sword.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+25",
		"Restriction": "Physical",
	},
	{
		"Name": "Deathbringer",
		"ChildItem": "Short Sword",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/deathbringer.jpg",
		"Price": 1550,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+30",
		"Critical Strike Chance": "+30%",
		"Restriction": "Physical",
	},
	{
		"Name": "Rage",
		"ChildItem": "Short Sword",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/rage.jpg",
		"Price": 1150,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+30",
		"Critical Strike Chance": "+35%",
		"Restriction": "Physical",
	},
	{
		"Name": "Balanced Blade",
		"ChildItem": "Light Blade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/balanced-blade.jpg",
		"Price": 800,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+15",
		"Attack Speed": "+15%",
		"Restriction": "Physical",
	},
	{
		"Name": "Malice",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/malice.jpg",
		"Price": 1300,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+40",
		"Critical Strike Chance": "+25%",
		"Cooldown Reduction": "+10%",
		"Restriction": "Physical",
	},
	{
		"Name": "Demon Blade",
		"ChildItem": "Short Sword",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/demon-blade.jpg",
		"Price": 1050,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+30",
		"Attack Speed": "+15%",
		"Critical Strike Chance": "+20%",
		"Restriction": "Physical",
	},
	{
		"Name": "Bladed Boomerang",
		"ChildItem": "Short Sword",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/bladed-boomerang.jpg",
		"Price": 1000,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+30",
		"Attack Speed": "+20%",
		"Critical Strike Chance": "+20%",
		"Restriction": "Physical",
	},
	{
		"Name": "Evolved Rage",
		"ChildItem": "Rage",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/evolved-rage.jpg",
		"Price": 0,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+45",
		"Critical Strike Chance": "+45%",
		"Restriction": "Physical",
	},
	{
		"Name": "Malicious Deathbringer",
		"ChildItem": "Deathbringer",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/malicious-deathbringer.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+30",
		"Critical Strike Chance": "+30%",
		"Restriction": "Physical",
	},
	{
		"Name": "Devoted Deathbringer",
		"ChildItem": "Deathbringer",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/devoted-deathbringer.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+30",
		"Critical Strike Chance": "+30%",
		"Restriction": "Physical",
	},
	{
		"Name": "Y10 Spiked Gauntlet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-spiked-gauntlet.jpg",
		"Price": 600,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+7",
		"Physical Lifesteal": "+2%",
		"Restriction": "Physical",
	},
	{
		"Name": "Y10 Cursed Gauntlet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-cursed-gauntlet.jpg",
		"Price": 800,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+25",
		"Physical Lifesteal": "+4%",
		"Restriction": "Physical",
	},
	{
		"Name": "Y10 Bound Gauntlet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-bound-gauntlet.jpg",
		"Price": 450,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+20",
		"Physical Lifesteal": "+6%",
		"Restriction": "Physical",
	},
	{
		"Name": "Y10 Soul Eater",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-soul-eater.jpg",
		"Price": 1200,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+25",
		"Physical Lifesteal": "+6%",
		"Physical Penetration": "+10",
		"Cooldown Reduction": "+10%",
		"Restriction": "Physical",
	},
	{
		"Name": "*Asi",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/*asi.jpg",
		"Price": 1100,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Lifesteal": "+15%",
		"Attack Speed": "+25%",
		"Physical Penetration": "+10",
		"Restriction": "None",
	},
	{
		"Name": "Y10 Devourer's Gauntlet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-devourers-gauntlet.jpg",
		"Price": 1000,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+30",
		"Physical Lifesteal": "+10%",
		"Restriction": "Physical",
	},
	{
		"Name": "Y10 Bloodforge",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-bloodforge.jpg",
		"Price": 1200,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+50",
		"Physical Lifesteal": "+10%",
		"Movement Speed": "+7%",
		"Restriction": "Physical",
	},
	{
		"Name": "Y10 Evolved Devourer's Gauntlet",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-evolved-devourers-gauntlet.jpg",
		"Price": 1,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+50",
		"Physical Lifesteal": "+15%",
		"Physical Penetration": "+15",
		"Restriction": "Physical",
	},
	{
		"Name": "Y10 Evolved Soul Eater",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/y10-evolved-soul-eater.jpg",
		"Price": 0,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+40",
		"Physical Lifesteal": "+10%",
		"Physical Penetration": "+10",
		"Cooldown Reduction": "+10%",
		"Restriction": "Physical",
	},
	{
		"Name": "Ancient Blade",
		"Item Icon":"https://webcdn.hirezstudios.com/smite/item-icons/ancient-blade.jpg",
		"Price": 550,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+50",
		"Movement Speed": "+5%",
		"Restriction": "None",
	},
	{
		"Name": "Adventurer's Blade",
		"ChildItem": "Ancient Blade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/adventurers-blade.jpg",
		"Price": 600,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+100",
		"Movement Speed": "+7%",
		"Restriction": "None",
	},
	{
		"Name": "Cursed Blade",
		"ChildItem": "Ancient Blade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/cursed-blade.jpg",
		"Price": 700,
		"ActiveFlag": "n",
		"Type": "Item",
		"Health": "+75",
		"Attack Speed": "+10%",
		"Movement Speed": "+5%",
		"Restriction": "None",
	},
	{
		"Name": "Witchblade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/witchblade.jpg",
		"Price": 900,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Protection": "+30",
		"Health": "+250",
		"Cooldown Reduction": "+10%",
		"Movement Speed": "+7%",
		"Restriction": "None",
	},
	{
		"Name": "Relic Dagger",
		"ChildItem": "Adventurer's Blade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/relic-dagger.jpg",
		"Price": 700,
		"ActiveFlag": "y",
		"Type": "Item",
		"Health": "+300",
		"Cooldown Reduction": "+10%",
		"Crowd Control Reduction": "+10%",
		"Movement Speed": "+7%",
		"Restriction": "None",
	},
	{
		"Name": "Winged Blade",
		"ChildItem": "Adventurer's Blade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/winged-blade.jpg",
		"Price": 700,
		"ActiveFlag": "y",
		"Type": "Item",
		"Magical Protection": "+20",
		"Health": "+150",
		"Crowd Control Reduction": "+10%",
		"Movement Speed": "+7%",
		"Restriction": "None",
	},
	{
		"Name": "The Executioner",
		"ChildItem": "Balanced Blade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/the-executioner.jpg",
		"Price": 950,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+30",
		"Attack Speed": "+20%",
		"Restriction": "Physical",
	},
	{
		"Name": "Toxic Blade",
		"ChildItem": "Cursed Blade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/toxic-blade.jpg",
		"Price": 1050,
		"ActiveFlag": "n",
		"Type": "Item",
		"Health": "+100",
		"Attack Speed": "+15%",
		"Penetration": "+15",
		"Movement Speed": "+7%",
		"Restriction": "None",
	},
	{
		"Name": "Lotus Sickle",
		"ChildItem": "Adventurer's Blade",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/lotus-sickle.jpg",
		"Price": 850,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Protection": "+25",
		"Health": "+250",
		"Cooldown Reduction": "+10%",
		"Movement Speed": "+7%",
		"Restriction": "None",
	},
	{
		"Name": "Cudgel",
		"Item Icon": "https://webcdn.hirezstudios.com/smite/item-icons/cudgel.jpg",
		"Price": 650,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+10",
		"Health": "+75",
		"Restriction": "Physical",
	},
	{
		"Name": "Heavy Hammer",
		"ChildItem": "Cudgel",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/heavy-hammer.jpg",
		"Price": 750,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+20",
		"Health": "+150",
		"Restriction": "Physical",
	},
	{
		"Name": "Shillelagh",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/shillelagh.jpg",
		"Price": 650,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+15",
		"Health": "+200",
		"Mana": "+100",
		"Restriction": "Physical",
	},
	{
		"Name": "The Sledge",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/the-sledge.jpg",
		"Price": 1000,
		"ActiveFlag": "n",
		"Type": "Item",
		"Physical Power": "+40",
		"Health": "+250",
		"Mana": "+150",
		"Crowd Control Reduction": "+30%",
		"Restriction": "Physical",
	},
	{
		"Name": "Blackthorn Hammer",
		"ChildItem": "Heavy Hammer",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/blackthorn-hammer.jpg",
		"Price": 1000,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+35",
		"Health": "+350",
		"Mana": "+200",
		"Restriction": "Physical",
	},
	{
		"Name": "Dawnbringer",
		"ChildItem": "Heavy Hammer",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/dawnbringer.jpg",
		"Price": 1050,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+40",
		"Health": "+150",
		"HP5": "+15",
		"Crowd Control Reduction": "+20%",
		"Restriction": "Physical",
	},
	{
		"Name": "Frostbound Hammer",
		"ChildItem": "Heavy Hammer",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/frostbound-hammer.jpg",
		"Price": 900,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+35",
		"Health": "+200",
		"HP5": "+25",
		"MP5": "+15",
		"Restriction": "Physical",
	},
	{
		"Name": "Runeforged Hammer",
		"ChildItem": "Heavy Hammer",
		"Item Icon":
			"https://webcdn.hirezstudios.com/smite/item-icons/runeforged-hammer.jpg",
		"Price": 1000,
		"ActiveFlag": "y",
		"Type": "Item",
		"Physical Power": "+40",
		"Health": "+150",
		"HP5": "+15",
		"MP5": "+20",
		"Restriction": "Physical",
	},
];
