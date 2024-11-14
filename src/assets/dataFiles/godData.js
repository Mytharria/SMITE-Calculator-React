export const godData = [
	{
		abilities: {
			A01: {
				details: [{
					key: "Heal",
					text: "<KeywordName>Heal Per Tick</>: {0}"
				}, {
					key: "HealScaling_Scaling",
					text: "<KeywordName>Heal Scaling Per Tick</>: {0}"
				}, {
					key: "HealthShield",
					text: "<KeywordName>Shield Health</>: {0}% of your HP"
				}, {
					key: "MovespeedBuff",
					text: "<KeywordName>Movement Speed</>: {0}%"
				}, {
					key: "AttackSpeed",
					text: "<KeywordName>Attack Speed</>: {0}%"
				}, {
					key: "STRBuff",
					text: "<KeywordName>Strength</>: {0}"
				}, {
					key: "STRBuffScaling_Scaling",
					text: "<KeywordName>Strength Scaling</>: {0}"
				}, {
					key: "INTBuff",
					text: "<KeywordName>Intelligence</>: {0}"
				}, {
					key: "INTBuffScaling_Scaling",
					text: "<KeywordName>Intelligence Scaling</>: {0}"
				}, {
					key: "RadiusCheat",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Heal_Formula: "{Heal} + {HealScaling_Scaling}",
					Heal_FormulaTotal: "({Heal} + {HealScaling_Scaling}) * 4",
					INT_Formula: "{INTBuff} + {INTBuffScaling_Scaling}",
					STR_Formula: "{STRBuff} + {STRBuffScaling_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/amaOne.webp",
				key: "Amaterasu.A01.InGame.Short",
				name: "Divine Presence",
				scaling: {
					HealScaling_Scaling: [{
						stat: "MagicalPower",
						values: [.05, .05, .05, .05, .05]
					}],
					INTBuffScaling_Scaling: [{
						stat: "MagicalPower",
						values: [.1, .1, .1, .1, .1]
					}],
					STRBuffScaling_Scaling: [{
						stat: "MagicalPower",
						values: [.1, .1, .1, .1, .1]
					}]
				},
				shortDesc: `Heal yourself for[20% INT]</> over 4s, and alternate between the Gold and Red buff effects. 
			
	  • Gold buff provides a Health Shield for 6s on activation, and a persistent Movement Speed Buff 
	  • Red buff provides an Attack Speed buff for 6s on activation, and a persistent [5% INT] Strength and [5% INT] Intelligence Buff \n`,
				valueKeys: {
					AttackSpeed: [10, 12, 14, 16, 18],
					"BuffDuration ": [6, 6, 6, 6, 6],
					Cooldown: [12, 12, 12, 12, 12],
					Cost: [30, 30, 30, 30, 30],
					Heal: [15, 25, 35, 45, 55],
					HealScaling: [],
					HealthShield: [4, 5, 6, 7, 8],
					INTBuff: [18, 26, 34, 42, 50],
					INTBuffScaling: [],
					MovespeedBuff: [5, 7, 9, 11, 13],
					RadiusCheat: [5.6],
					STRBuff: [14, 18, 22, 26, 30],
					STRBuffScaling: []
				}
			},
			A02: {
				details: [{
					key: "",
					text: "Projectile passes through and damages all enemies, and passes through walls"
				}, {
					key: "",
					text: "Projectile passes through and damages all enemies, and passes through walls"
				}, {
					key: "damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "damagescaling_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "MitBuff",
					text: "<KeywordName>Damage Taken Reduction</>: {0}%"
				}, {
					key: "MitBuffScaling_Scaling",
					text: "<KeywordName>Damage Reduction Scaling</>: {0}"
				}, {
					key: "BuffDur",
					text: "<KeywordName>Buff Duration</>: {0}s"
				}, {
					key: "Range",
					text: "<KeywordName>Projectile Range:</> {0}m"
				}, {
					key: "RadiusCheat",
					text: "<KeywordName>Projectile Radius:</> {0}m"
				}],
				formulas: {
					buff_formula: "{MitBuff} + {MitBuffScaling_Scaling}",
					damage_Formula: "{damage} + {damagescaling_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/amaTwo.webp",
				key: "Amaterasu.A02.InGame.Short",
				name: "Heavenly Reflection",
				scales: {
					Damage_Scaling: [{
						stat: "PhysicalPower",
						values: [.65, .65, .65, .65, .65]
					}, {
						stat: "MagicalPower",
						values: [.85, .85, .85, .85, .85]
					}]
				},
				shortDesc: `Charge your Mirror for 5s and decrease all damage you take while charging by [5% INT]. Reactivate the ability to fire a projectile that deals [65% STR + 85% INT] Physical Damage to enemies, increased by the Mirror's charge amount. \r
		\r
	  • Deal and take damage to charge the Mirror \r
	  • Base Damage is doubled when Mirror is fully charged (Automatically calculated as fully charged)`,
				valueKeys: {
					BuffDur: [5],
					Cooldown: [10, 10, 10, 10, 10],
					Cost: [60, 65, 70, 75, 80],
					MitBuff: [7, 9, 11, 13, 15],
					MitBuffScaling: [],
					RadiusCheat: [.8],
					Range: [8.8, 8.8, 8.8, 8.8, 8.8],
					Damage: [110, 160, 210, 260, 310],
					damagescaling: []
				}
			},
			A03: {
				details: [{
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "SilenceDur",
					text: "<KeywordName>Silence Duration</>: {0}s"
				}, {
					key: "Range",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "RadiusCheat",
					text: "<KeywordName>Range:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/amaThree.webp",
				key: "Amaterasu.A03.InGame.Short",
				name: "Glorious Charge",
				scales: {
					Damage_Scaling: [{
						stat: "PhysicalPower",
						values: [.65, .65, .65, .65, .65]
					}]
				},
				shortDesc: `Silence enemies in front of you for 1s, then dash forward and deal  [65% STR] Physical Damage.  \r
		\r
	  • Pierces through and damages minions but stops on first god hit `,
				valueKeys: {
					Cooldown: [15, 15, 15, 15, 15],
					Cost: [40, 45, 50, 55, 60],
					Damage: [60, 105, 150, 195, 240],
					RadiusCheat: [3.2],
					Range: [8.8, 8.8, 8.8, 8.8, 8.8],
					SilenceDur: [1, 1, 1, 1, 1]
				}
			},
			A04: {
				details: [{
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "Slow",
					text: "<KeywordName>Slow</>: {0}%"
				}, {
					key: "SlowDur",
					text: "<KeywordName>Slow Duration</>: {0}s"
				}, {
					key: "Stun",
					text: "<KeywordName>Stun Duration</>: {0}s"
				}, {
					key: "RadiusCheat",
					text: "<KeywordName>Radius:</> {0}m"
				}, {
					key: "ConeAngle",
					text: "<KeywordName>Cone Angle:</> {0} degrees"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/amaFour.webp",
				key: "Amaterasu.A04.InGame.Short",
				name: "Dazzling Offensive",
				scales: {
					Damage_Scaling: [{
						stat: "PhysicalPower",
						values: [.5, .5, .5, .5, .5]
					}, {
						stat: "MagicalPower",
						values: [.45, .45, .45, .45, .45]
					}]
				},
				shortDesc: `Become CC Immune and then attack 3 times to deal [50% STR + 45% INT] Physical Damage to enemies in front of you each time. \r
		\r
	  • Attacks deal more damage and have bonus effects on each subsequent successful hit \r
	  • 2nd hit deals 1.2x damage and Slows by 30% for 2s\r
	  • 3rd hit deals 1.4x damage and Stuns for 1.5s`,
				valueKeys: {
					ConeAngle: [110],
					Cooldown: [110, 105, 100, 95, 90],
					Cost: [60, 65, 70, 75, 80],
					Damage: [100, 140, 180, 220, 260],
					RadiusCheat: [5.6],
					Slow: [30, 30, 30, 30, 30],
					SlowDur: [2, 2, 2, 2, 2],
					Stun: [1.5, 1.5, 1.5, 1.5, 1.5]
				}
			}
		},
		baseStats: {
			"AttackSpeedPercent": {
				1: 1.442,
				20: 28.84,
				rate: 1.442
			},
			"BaseAttackSpeed": {
				1: 1,
				20: 1,
				rate: 0
			},
			"HealthPerTime": {
				1: 1.7,
				20: 5.5,
				rate: .19999999999999998
			},
			"InhandPower": {
				1: 43.068,
				20: 87.3,
				rate: 2.328
			},
			"MagicalPower": {
				1: 0,
				20: 0,
				rate: 0
			},
			"MagicalProtection": {
				1: 28.3,
				20: 57.7,
				rate: 1.5473684210526317
			},
			"ManaPerTime": {
				1: 2.18,
				20: 6.79,
				rate: .2426315789473684
			},
			"MaxHealth": {
				1: 632.2,
				20: 2369,
				rate: 91.41052631578947
			},
			"MaxMana": {
				1: 287,
				20: 1061,
				rate: 40.73684210526316
			},
			"MovementSpeed": {
				1: 442,
				20: 442,
				rate: 0
			},
			"PhysicalPower": {
				1: 43,
				20: 87,
				rate: 2.3157894736842106
			},
			"PhysicalProtection": {
				1: 19.6,
				20: 78.3,
				rate: 3.089473684210526
			}
		},
		
		basic: {
			details: [{
				key: "",
				text: "If multiple enemies are in the area, the enemy closest to the center of the area will be hit. "
			}, {
				key: "",
				text: "Has a 3 hit chain. Attacks in order of 1, 0.5, 1x damage and swing time."
			}, {
				key: "Damage_Scaling",
				text: "<KeywordName>Damage Scaling</>: {0}"
			}, {
				key: "RangeCheat",
				text: "<KeywordName>Range:</> {0}m"
			}, {
				key: "ConeAngle",
				text: "<KeywordName>Cone Angle:</> {0} degrees"
			}],
			formulas: {
				Damage_Formula: "{Damage} + {Damage_Scaling}"
			},
			icon: "/assets/gods/Amaterasu/Icon_BasicAttack_Physical.webp",
			key: "Basic.MeleePhys.InGame.Short",
			name: "Amaterasu Basic Attack",
			scales: {
				Damage_Scaling: [{
					stat: "PhysicalPower",
					values: [1]
				}, {
					stat: "MagicalPower",
					values: [.2]
				}]
			},
			shortDesc: "Deal  Physical Damage</> to an enemy in front of you. ",
			valueKeys: {
				ConeAngle: [120],
				Damage: [0],
				RangeCheat: [1.92]
			}
		},

		internalName: "Amaterasu_Item",
		key: "God.Amaterasu",
		name: "Amaterasu",
		icon: "/src/assets/icons/amaImage.webp",

		passive: {
			details: [{
				key: "DebuffAmt",
				text: "<KeywordName>Increased Damage Taken</>: {0}%"
			}, {
				key: "DebuffDur",
				text: "<KeywordName>Debuff Duration</>: {0}s"
			}, {
				key: "RadiusCheat",
				text: "<KeywordName>Radius:</> {0}m"
			}],
			icon: "/assets/gods/Amaterasu/PSV.webp",
			key: "Amaterasu.PSV.InGame.Short",
			name: "Illuminating Strike",
			shortDesc: `Basic attack an enemy 3 times to illuminate their weaknesses, causing them and other nearby enemies to take more damage from all sources. \n \r• Damage increase: 10%
			\n \r• NOT IMPLEMENTED YET`,
			valueKeys: {
				DebuffAmt: [10],
				DebuffDur: [6],
				RadiusCheat: [4.8]
			}
		},
	},
	{
		abilities: {
			A01: {
				details: [{
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "Range",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "CheatRadius",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/raOne.webp",
				key: "Ra.A01.InGame.Short",
				name: "Celestial Beam",
				scales: {
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [1, 1, 1, 1, 1]
					}]
				},
				shortDesc: "Summon a moving beam of intense light, dealing [100% INT] Magical Damage to enemies.",
				valueKeys: {
					CheatRadius: [.72],
					Cooldown: [10, 10, 10, 10, 10],
					Cost: [60, 65, 70, 75, 80],
					Damage: [95, 155, 215, 275, 335],
					Range: [12.799999, 12.799999, 12.799999, 12.799999, 12.799999]
				}
			},
			A02: {
				details: [{
					key: "",
					text: "A Slow stack is applied every 0.5 seconds."
				}, {
					key: "",
					text: "The explosion occurs after 2s."
				}, {
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "Solar Ray Damage",
					text: "<KeywordName>Solar Ray Damage</>: {0}"
				}, {
					key: "Solar Ray Damage_Scaling",
					text: "<KeywordName>Solar Ray Damage Scaling</>: {0}"
				}, {
					key: "Solar Ray Duration",
					text: "<KeywordName>Solar Ray Duration</>: {0}"
				}, {
					key: "Slow ",
					text: "<KeywordName>Slow</>: {0}%"
				}, {
					key: "Slow Duration",
					text: "<KeywordName>Slow Duration</>: {0}s"
				}, {
					key: "RadiusCheat",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}",
					"Solar Ray Damage_Formula": "{Solar Ray Damage} + {Solar Ray Damage_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/raTwo.webp",
				key: "Ra.A02.InGame.Short",
				name: "Divine Light",
				scales: {
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [.6, .6, .6, .6, .6]
					}],
					"Solar Ray Damage_Scaling": [{
						stat: "MagicalPower",
						values: [.3, .3, .3, .3, .3]
					}]
				},
				shortDesc: `Emanate light in the area around you that repeatedly Slows enemies before exploding dealing  [60% INT] Magical Damage</>.\r
	\r
	  • For a period after activation, basic attacking fires solar rays, dealing Magical Damage\r
	  • The solar rays count as abilities, trigger ability effects, and pierce targets\r
	  • Enemies looking at you gain additional Slow stacks and are Blinded by the explosion`,
				valueKeys: {
					Cooldown: [12, 12, 12, 12, 12],
					Cost: [60, 65, 70, 75, 80],
					Damage: [60, 110, 140, 190, 240],
					"Deployable Duration": [0, 0, 0, 0, 0],
					Radius: [4.8, 4.8, 4.8, 4.8, 4.8],
					RadiusCheat: [4.8, 4.8, 4.8, 4.8, 4.8],
					"Slow ": [5, 5, 5, 5, 5],
					"Slow Duration": [3],
					"Solar Ray Damage": [60, 95, 125, 155, 185],
					"Solar Ray Duration": [3, 3.5, 4, 4.5, 5]
				}
			},
			A03: {
				details: [{
					key: "",
					text: "The pillar of light ticks 6 times over 6 seconds"
				}, {
					key: "Damage",
					text: "<KeywordName>Damage Per Tick</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling Per Tick</>: {0}"
				}, {
					key: "Heal",
					text: "<KeywordName>Heal Per Tick</>: {0}"
				}, {
					key: "StrengthBuff",
					text: "<KeywordName>Strength</>: {0}"
				}, {
					key: "IntBuff",
					text: "<KeywordName>Intelligence</>: {0}"
				}, {
					key: "PhysProtBuff",
					text: "<KeywordName>Physical Protection</>: {0}"
				}, {
					key: "MagProtBuff",
					text: "<KeywordName>Magical Protection</>: {0}"
				}, {
					key: "Range",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "Radius",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}",
					Heal_Formula: "{Heal}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/raThree.webp",
				key: "Ra.A03.InGame.Short",
				name: "Solar Blessing",
				scales: {
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [.2, .2, .2, .2, .2]
					}]
				},
				shortDesc: `Summon a pillar of blessed light repeatedly dealing  [20% INT] Magical Damage and Healing allies for  Health.\r
	\r
	 • The light empowers you and allied gods in the area, granting Strength, Intelligence, Physical Protection, and Magical Protection`,
				valueKeys: {
					Cooldown: [15, 14.5, 14, 13.5, 13],
					Cost: [65, 75, 85, 95, 105],
					Damage: [20, 32, 44, 56, 68],
					Heal: [12, 24, 36, 48, 60],
					IntBuff: [20, 25, 30, 35, 40],
					MagProtBuff: [10, 15, 20, 25, 30],
					PhysProtBuff: [10, 15, 20, 25, 30],
					Radius: [3.2, 3.2, 3.2, 3.2, 3.2],
					Range: [8.8, 8.8, 8.8, 8.8, 8.8],
					StrengthBuff: [10, 15, 20, 25, 30]
				}
			},
			A04: {
				details: [{
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "True Damage",
					text: "<KeywordName>True Damage</>: {0}% Target's Max HP"
				}, {
					key: "Range",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "CheatRadius",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}",
					"True Damage_Formula": "{True Damage} + {True Damage_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/raFour.webp",
				key: "Ra.A04.InGame.Short",
				name: "Searing Pain",
				scales: {
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [1.1, 1.1, 1.1, 1.1, 1.1]
					}]
				},
				shortDesc: `Blast enemies in front of you with a wave of extreme heat, dealing [110% INT] Magical Damage.\r
	\r
	• Deals bonus damage to gods based on their maximum Health`,
				valueKeys: {
					CheatRadius: [1.6],
					Cooldown: [80, 75, 70, 65, 60],
					Cost: [90, 90, 90, 90, 90],
					Damage: [400, 475, 550, 625, 700],
					Range: [19.2, 19.2, 19.2, 19.2, 19.2],
					"True Damage": [5, 5, 5, 5, 5]
				}
			}
		},
		baseStats: {
			"AttackSpeedPercent": {
				1: 1.4,
				20: 28,
				rate: 1.4000000000000001
			},
			"BaseAttackSpeed": {
				1: .93,
				20: .93,
				rate: 0
			},
			"HealthPerTime": {
				1: 1.7,
				20: 5.5,
				rate: .19999999999999998
			},
			"InhandPower": {
				1: 43.068,
				20: 87.3,
				rate: 2.328
			},
			"MagicalPower": {
				1: 0,
				20: 0,
				rate: 0
			},
			"MagicalProtection": {
				1: 26.675,
				20: 54.32,
				rate: 1.455
			},
			"ManaPerTime": {
				1: 2.3175,
				20: 7.21,
				rate: .2575
			},
			"MaxHealth": {
				1: 595.3375,
				20: 2231,
				rate: 86.08749999999999
			},
			"MaxMana": {
				1: 296,
				20: 1094,
				rate: 42
			},
			"MovementSpeed": {
				1: 365,
				20: 365,
				rate: 0
			},
			"PhysicalProtection": {
				1: 18.43,
				20: 73.72,
				rate: 2.91
			}
		},
		basic: {
			details: [{
				key: "",
				text: "Projectile stops on first target hit, and does not pass through walls. "
			}, {
				key: "Damage_Scaling",
				text: "<KeywordName>Damage Scaling</>: {0}"
			}, {
				key: "RangeCheat",
				text: "<KeywordName>Range:</> {0}m"
			}, {
				key: "RadiusCheat",
				text: "<KeywordName>Radius:</> {0}m"
			}],
			formulas: {
				Damage_Formula: "{Damage} + {Damage_Scaling}"
			},
			icon: "/assets/gods/Ra/Icon_BasicAttack_Magical.webp",
			key: "Basic.RangedMag.InGame.Short",
			name: "Ra Basic Attack",
			scales: {
				Damage_Scaling: [{
					stat: "PhysicalPower",
					values: [1]
				}, {
					stat: "MagicalPower",
					values: [.2]
				}]
			},
			shortDesc: "Fire a projectile that deals Magical Damage to the first enemy hit. ",
			valueKeys: {
				Damage: [5, 5, 5, 5, 5],
				RadiusCheat: [.48],
				RangeCheat: [8.8]
			}
		},
		internalName: "Ra_Item",
		key: "God.Ra",
		name: "Ra",
		icon: "/src/assets/icons/raImage.webp",
		passive: {
			details: [{
				key: "Movement Speed Buff",
				text: "<KeywordName>Movement Speed</>: {0}% Per Stack"
			}, {
				key: "Movement Speed Duration",
				text: "<KeywordName>Buff Duration</>: {0}s"
			}],
			icon: "/assets/gods/Ra/Passive.webp",
			key: "Ra.PSV.InGame.Short",
			name: "Speed of Light",
			shortDesc: `After using an ability gain Movement Speed.\r
			\r\n• This buff stacks up to 3 times`,
			valueKeys: {
				"Movement Speed Buff": [5],
				"Movement Speed Duration": [15]
			}
		}
	},
	{
		abilities: {
			A01: {
				details: [{
					key: "",
					text: "Sobek has a 0s Postfire on a missed charge or a 0.3s postfire when he attempts to throw. This 0.3s postfire occurs both after a throw and if the enemy frees themselves with CC Immunity."
				}, {
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "StunDuration",
					text: "<KeywordName>Stun Duration</>: {0}s"
				}, {
					key: "CheatRange",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "Radius",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/sobekOne.webp",
				key: "Sobek.A01.OutOfGame",
				name: "Charge Prey",
				scales: {
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [.5, .5, .5, .5, .5]
					}]
				},
				shortDesc: `Dash forward. The first enemy hit takes Magical Damage and stops the dash. Sobek displaces the enemy behind him.\r
	\r
	  • Damaged enemies are Stunned before being thrown\r
	  • You are Displacement Immune while dashing and CC Immune while throwing`,
				valueKeys: {
					CheatRange: [8.8, 8.8, 8.8, 8.8, 8.8],
					Cooldown: [12, 12, 12, 12, 12],
					Cost: [70, 75, 80, 85, 90],
					Damage: [70, 110, 150, 190, 230],
					Radius: [.48, .48, .48, .48, .48],
					StunDuration: [.47, .47, .47, .47, .47]
				}
			},
			A02: {
				details: [{
					key: "",
					text: "The spin begins to displace 0.4s after being cast, and remains displacing for 0.6s afterwards."
				}, {
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "CheatRadius",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/sobekTwo.webp",
				key: "Sobek.A02.InGame.Short",
				name: "Tail Whip",
				scales: {
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [.4, .4, .4, .4, .4]
					}]
				},
				shortDesc: `Spin your tail, dealing [40% INT] Magical Damage in an area around Sobek.\r
	\r
	  • Damaged enemies are also Displaced away from Sobek`,
				valueKeys: {
					CheatRadius: [3.2, 3.2, 3.2, 3.2, 3.2],
					Cooldown: [12, 12, 12, 12, 12],
					Cost: [60, 65, 70, 75, 80],
					Damage: [80, 125, 170, 215, 260]
				}
			},
			A03: {
				details: [{
					key: "",
					text: "The disease will spread to enemies within 3.2m of someone currently diseased."
				}, {
					key: "",
					text: "The Damage over Time does not trigger item effects."
				}, {
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "Heal",
					text: "<KeywordName>Heal</>: {0}"
				}, {
					key: "GodDot",
					text: "<KeywordName>God DoT Damage</>: {0}% HP over 2.5s"
				}, {
					key: "MinionDot",
					text: "<KeywordName>Minion DoT Damage</>: {0} over 2.5s"
				}, {
					key: "HealingReduction",
					text: "<KeywordName>Healing Reduction</>: {0}%"
				}, {
					key: "CheatAngle",
					text: "<KeywordName>Cone Angle:</> {0} degrees"
				}, {
					key: "CheatRadius",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}",
					Heal_Formula: "{Heal} + {Heal_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/sobekThree.webp",
				key: "Sobek.A03.InGame.Short",
				name: "Sickening Strike",
				scales: {
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [.3, .3, .3, .3, .3]
					}]
				},
				shortDesc: `Strike in front of you. This strike deals [30% INT] Magical Damage in a cone and applies Disease, reducing healing received for 5s.\r
	\r
	  • Enemies diseased take Bonus Magical Damage, take Reduced Healing, and can spread the disease for 2.5s\r
	  • Gods take 5-7% of their Maximum Health over the duration of the disease. \r
	  • Each enemy hit by the cone reduces this ability's cooldown by 1s and Heals you, up to 4`,
				valueKeys: {
					CheatAngle: [110, 110, 110, 110, 110],
					CheatRadius: [5.6, 5.6, 5.6, 5.6, 5.6],
					Cooldown: [12, 12, 12, 12, 12],
					Cost: [60, 65, 70, 75, 80],
					Damage: [70, 105, 140, 175, 215],
					GodDot: [5, 5.5, 6, 6.5, 7],
					Heal: [22, 29, 36, 43, 50],
					HealingReduction: [40, 40, 40, 40, 40],
					MinionDot: [30, 45, 60, 75, 90]
				}
			},
			A04: {
				details: [{
					key: "",
					text: "Lurking in the Water's deals <Damage>25%</> of its potential damage if emerging instantly."
				}, {
					key: "",
					text: "Sobek can pass through enemies and spawned walls while submerged."
				}, {
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Int_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "ManaPerSecond",
					text: "<KeywordName>Mana Per Second</>: {0}%"
				}, {
					key: "Protections",
					text: "<KeywordName>Protections</>: {0}%"
				}, {
					key: "Range",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "CheatRadius",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Int_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/sobekFour.webp",
				key: "Sobek.A04.InGame.Short",
				name: "Lurking in the Waters",
				scales: {
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [.8, .8, .8, .8, .8]
					}]
				},
				shortDesc: `Submerge, Slowing enemies nearby and granting you CC Immunity, Protections, and Mana Regen. After 4 seconds, emerge dealing [80% INT] Magical Damage to enemies in range.\r
	\r
	  • You may cancel this ability early, dealing less damage\r
	  • Executes enemies below 10% to 25% HP, scaling with time submerged. <Damage>Executed or killed enemies Heal you and grants 25 permanent bonus Health`,
				valueKeys: {
					CheatRadius: [4.8, 4.8, 4.8, 4.8, 4.8],
					Cooldown: [90, 90, 90, 90, 90],
					Cost: [80, 90, 100, 110, 120],
					Damage: [300, 450, 600, 750, 900],
					Int: [],
					ManaPerSecond: [10, 10, 10, 10, 10],
					Protections: [20, 20, 20, 20, 20]
				}
			}
		},
		baseStats: {
			"AttackSpeedPercent": {
				1: 1.4,
				20: 28,
				rate: 1.4000000000000001
			},
			"BaseAttackSpeed": {
				1: .96,
				20: .96,
				rate: 0
			},
			"HealthPerTime": {
				1: 1.75,
				20: 5.67,
				rate: .2063157894736842
			},
			"InhandPower": {
				1: 43,
				20: 87,
				rate: 2.3157894736842106
			},
			"MagicalPower": {
				1: 0,
				20: 0,
				rate: 0
			},
			"MagicalProtection": {
				1: 27.5,
				20: 56.9,
				rate: 1.5473684210526315
			},
			"ManaPerTime": {
				1: 2.25,
				20: 7,
				rate: .25
			},
			"MaxHealth": {
				1: 616.4,
				20: 2353.3,
				rate: 91.41578947368421
			},
			"MaxMana": {
				1: 296,
				20: 1094,
				rate: 42
			},
			"MovementSpeed": {
				1: 375,
				20: 375,
				rate: 0
			},
			"PhysicalProtection": {
				1: 19.6,
				20: 78.3,
				rate: 3.089473684210526
			}
		},
		basic: {
			details: [{
				key: "",
				text: "If multiple enemies are in the area, the enemy closest to the center of the area will be hit. "
			}, {
				key: "Damage_Scaling",
				text: "<KeywordName>Damage Scaling</>: {0}"
			}, {
				key: "RangeCheat",
				text: "<KeywordName>Range:</> {0}m"
			}, {
				key: "ConeAngle",
				text: "<KeywordName>Cone Angle:</> {0} degrees"
			}],
			formulas: {
				Damage_Formula: "{Damage} + {Damage_Scaling}"
			},
			icon: "/assets/gods/Sobek/Icon_BasicAttack_Magical.webp",
			key: "Basic.MeleeMagical.InGame.Short",
			name: "Sobek Basic Attack",
			scales: {
				Damage_Scaling: [{
					stat: "PhysicalPower",
					values: [1]
				}, {
					stat: "MagicalPower",
					values: [.2]
				}]
			},
			shortDesc: "Deal Magical Damage to an enemy in front of you. ",
			valueKeys: {
				ConeAngle: [120],
				Damage: [0],
				RangeCheat: [1.92]
			}
		},
		internalName: "Sobek_Item",
		key: "God.Sobek",
		name: "Sobek",
		icon: "/src/assets/icons/sobekImage.webp",
		passive: {
			details: [{
				key: "Protections",
				text: "<KeywordName>Protections</>: {0}"
			}, {
				key: "PerLevelProtections",
				text: "<KeywordName>Protection Per Level</>: {0}"
			}],
			icon: "/assets/gods/Sobek/Passive.webp",
			key: "Sobek.Passive.InGame.Short",
			name: "Blessing of the Nile",
			shortDesc: `When Sobek deals damage he gains a stack of Protections.\r
	\r
	  • This effect stacks 3 times and lasts for 10s\r
	  • An ability can only provide one stack per cast`,
			valueKeys: {
				PerLevelProtections: [.4],
				Protections: [2]
			}
		}
	},
	{
		abilities: {
			A01: {
				details: [{
					key: "",
					text: "Enemies take reduced damage if hit by both large bubbles."
				}, {
					key: "",
					text: "Allies hit will also gain Omi Healing."
				}, {
					key: "",
					text: "This ability changes to Moonstrike when used."
				}, {
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "Damage_Small",
					text: "<KeywordName>Small Bubble Damage</>: {0}"
				}, {
					key: "Damage_Small_Scaling",
					text: "<KeywordName>Small Bubble Damage Scaling</>: {0} "
				}, {
					key: "Slow",
					text: "<KeywordName>Slow</>: {0}%"
				}, {
					key: "Slow_Duration",
					text: "<KeywordName>Slow Duration</>: {0}s"
				}, {
					key: "Range",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "CheatRadius",
					text: "<KeywordName>Radius:</> {0}m"
				}, {
					key: "CheatRadius_Small",
					text: "<KeywordName>Small Bubble Radius:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}",
					Damage_Small_Formula: "{Damage_Small} + {Damage_Small_Scaling}",
					HealLarge_Formula: "{HealLarge} + {HealLarge_Scaling}",
					Heal_Formula: "{Heal} + {Heal_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/yemOneBubble.webp",
				key: "Yemoja.A01.InGame.Short",
				name: "Bouncing Bubble (Moonstrike)",
				scales: {
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [.3, .3, .3, .3, .3]
					}],
					Damage_Small_Scaling: [{
						stat: "MagicalPower",
						values: [.15, .15, .15, .15, .15]
					}]
				},
				shortDesc: `Toss a bubble that bounces twice, dealing [30% INT] Magical Damage and Slows enemies before exploding into smaller bubbles.\r
	   • Small bubbles deal [15% INT] Magical Damage
	   • This is being calculated as both big bubble bounce hits, with the 50% DR on the 2nd hit`,
				valueKeys: {
					CheatRadius: [2.24],
					CheatRadius_Small: [1],
					Cooldown: [0, 0, 0, 0, 0],
					Cost: [2, 2, 2, 2, 2],
					Damage: [55, 90, 125, 160, 195],
					Damage_Small: [27.5, 45, 62.5, 80, 97.5],
					Range: [5.6, 5.6, 5.6, 5.6, 5.6],
					Slow: [30, 30, 30, 30, 30],
					Slow_Duration: [1, 1, 1, 1, 1]
				}
			},
			A02: {
				details: [{
					key: "",
					text: "Projectile stops on walls or first allied god hit"
				}, {
					key: "",
					text: "Allies hit will also gain Omi Healing."
				}, {
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "Heal",
					text: "<KeywordName>Heal</>: {0}"
				}, {
					key: "Shield",
					text: "<KeywordName>Shield Health</>: {0} "
				}, {
					key: "Shield_Scaling_Scaling",
					text: "<KeywordName>Shield Health Scaling</>: {0}"
				}, {
					key: "BonusShieldMulti",
					text: "<KeywordName>Bonus Damage to Shields</>: {0}x"
				}, {
					key: "Range",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "CheatRadius",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}",
					Shield_Formula: "{Shield} + {Shield_Scaling_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/yemTwo.webp",
				key: "Yemoja.A02.InGame.Short",
				name: "Mending Waters",
				scales: {
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [.4, .4, .4, .4, .4]
					}],
					Shield_Scaling_Scaling: [{
						stat: "MagicalPower",
						values: [.15, .15, .15, .15, .15]
					}]
				},
				shortDesc: `Fire a water wave, dealing [40% INT] Magical Damage to enemies. This wave stops and bounces between allied gods, Healing them for Health and providing them a  [15% INT] Health Shield.\r
	  • This ability also does bonus damage to enemy Health Shields.`,
				valueKeys: {
					BonusShieldMulti: [2, 2, 2, 2, 3],
					CheatRadius: [1.12],
					Cooldown: [0, 0, 0, 0, 0],
					Cost: [3, 3, 3, 3, 3],
					Damage: [65, 95, 125, 155, 180],
					Heal: [20, 40, 60, 80, 100],
					Range: [9.6, 9.6, 9.6, 9.6, 9.6],
					Shield: [30, 60, 90, 120, 150],
					Shield_Scaling: []
				}
			},
			A03: {
				details: [{
					key: "",
					text: "Allies that use the ring also gain Omi Healing."
				}, {
					key: "MS_Buff",
					text: "<KeywordName>Movement Speed</>: {0}%"
				}, {
					key: "Protection_Buff",
					text: "<KeywordName>Protections</>: {0}"
				}, {
					key: "Slow",
					text: "<KeywordName>Slow</>: {0}%"
				}, {
					key: "Range",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "CheatRadius",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}",
					HealLarge_Formula: "{HealLarge} + {HealLarge_Scaling}",
					Heal_Formula: "{Heal} + {Heal_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/yemThree.webp",
				key: "Yemoja.A03.InGame.Short",
				name: "Riptide",
				shortDesc: `Create a water ring that Knock Backs anyone entering it.\r
	  • Allies travel further and gain Movement Speed and Protections for 3s. \r
	  • Enemies are Slowed for 2s.\r
	  • Placing the ring at the maximum distance reverses it's direction.`,
				valueKeys: {
					CheatRadius: [2.24],
					Cooldown: [0, 0, 0, 0, 0],
					Cost: [3, 3, 3, 3, 3],
					MS_Buff: [10, 12.5, 15, 17.5, 20],
					Protection_Buff: [20, 25, 30, 35, 40],
					Range: [9.6, 9.6, 9.6, 9.6, 9.6],
					Slow: [15, 15, 15, 15, 15]
				}
			},
			A04: {
				details: [{
					key: "",
					text: "Enemies are slowed by 60%, decreasing to normal over 3s."
				}, {
					key: "",
					text: "You gain half of your missing Omi immediately but the duration of the regeneration buff is decreased based on the amount restored."
				}, {
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "Range",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "CheatRadius",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}",
					HealLarge_Formula: "{HealLarge} + {HealLarge_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/yemFour.webp",
				key: "Yemoja.A04.InGame.Short",
				name: "River's Rebuke",
				scales: {
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [.7, .7, .7, .7, .7]
					}]
				},
				shortDesc: `Conjure two large walls of water that block enemy movement and projectiles. After a delay they crash down dealing [70% INT] Magical Damage, Trembling and Slowing enemies hit.\r
	  • Allies impacted by the crashing waves gain Omi Healing and Moonstrike's buff\r
	  • You gain a buff of increased Omi over time on using this ability`,
				valueKeys: {
					CheatRadius: [4.5],
					Cooldown: [140, 135, 130, 125, 120],
					Damage: [250, 320, 390, 460, 530],
					Range: [15, 15, 15, 15, 15],
					Slow_Duration: [3, 3, 3, 3, 3],
					Slow_Strength: []
				}
			}
		},
		baseStats: {
			"AttackSpeedPercent": {
				1: 1.4,
				20: 28,
				rate: 1.4000000000000001
			},
			"BaseAttackSpeed": {
				1: .93,
				20: .93,
				rate: 0
			},
			"HealthPerTime": {
				1: 1.8,
				20: 5.83,
				rate: .21210526315789474
			},
			"InhandPower": {
				1: 0,
				20: 0,
				rate: 0
			},
			"MagicalPower": {
				1: 0,
				20: 0,
				rate: 0
			},
			"MagicalProtection": {
				1: 29.2,
				20: 59.4,
				rate: 1.5894736842105264
			},
			"ManaPerTime": {
				1: 2.25,
				20: 7,
				rate: .25
			},
			"MaxHealth": {
				1: 650.6,
				20: 2438,
				rate: 94.07368421052632
			},
			"MaxMana": {
				1: 296,
				20: 1094,
				rate: 42
			},
			"MovementSpeed": {
				1: 375,
				20: 375,
				rate: 0
			},
			"PhysicalPower": {
				1: 43,
				20: 87,
				rate: 2.3157894736842106
			},
			"PhysicalProtection": {
				1: 20.1,
				20: 80.6,
				rate: 3.184210526315789
			}
		},
		basic: {
			details: [{
				key: "",
				text: "Projectile stops on first target hit, and does not pass through walls. "
			}, {
				key: "",
				text: "Yemoja basic attacks can hit allies with an increased radius, applying Omi Healing."
			}, {
				key: "Damage_Scaling",
				text: "<KeywordName>Damage Scaling</>: {0}"
			}, {
				key: "RangeCheat",
				text: "<KeywordName>Range:</> {0}m"
			}, {
				key: "RadiusCheat",
				text: "<KeywordName>Radius:</> {0}m"
			}, {
				key: "RadiusCheat_Ally",
				text: "<KeywordName>Ally Radius:</> {0}m"
			}],
			formulas: {
				Damage_Formula: "{Damage} + {Damage_Scaling}"
			},
			icon: "/assets/gods/Yemoja/Icon_BasicAttack_Magical.webp",
			key: "Basic.RangedMag.InGame.Short",
			name: "Yemoja Basic Attack",
			scales: {
				Damage_Scaling: [{
					stat: "PhysicalPower",
					values: [1]
				}, {
					stat: "MagicalPower",
					values: [.2]
				}]
			},
			shortDesc: "Fire a projectile that deals  Magical Damage</> to the first enemy hit. ",
			valueKeys: {
				Damage: [0],
				RadiusCheat: [.48],
				RadiusCheat_Ally: [.8],
				RangeCheat: [8.8]
			}
		},
		internalName: "Yemoja_Item",
		key: "God.Yemoja",
		name: "Yemoja",
		Type:'Magical',
		icon: "/src/assets/icons/yemImage.webp",
		passive: {
			details: [{
				key: "",
				text: "Additional Omi is gained at levels 5, 10 and 15."
			}, {
				key: "",
				text: "Cooldown Reduction increases Omi regeneration."
			}],
			icon: "/assets/gods/Yemoja/Passive.webp",
			key: "Yemoja.PSV.InGame.Short",
			name: "Omi",
			shortDesc: `Yemoja uses Omi to cast spells instead of Mana.\r
	   • Starting with 7, earning up to 10\r
	Yemoja's water based attacks and abilities can hit allies, providing them a <Heal>Heal for 1 + 0.2 per Level</> every 0.5s for 6s.`
		}
	},
	{
		abilities: {
			A01: {
				details: [{
					key: "",
					text: "Vivid Gaze will trigger its <Hysteria>Hysteria</> effect if its own damage bring targets above the <Hysteria>Hysteria</> Threshold."
				}, {
					key: "Initial_Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Initial_Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "Initial_Damage",
					text: "<KeywordName>Power Reduction</>: 30%"
				}, {
					key: "Initial_Damage",
					text: "<KeywordName>Attack Speed Reduction</>: 30%"
				}, {
					key: "Hysteria",
					text: "<KeywordName>Hysteria Applied Per Hit</>: {0}"
				}, {
					key: "Range",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "Radius",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Initial_Damage_Formula: "{Initial_Damage} + {Initial_Damage_Scaling}",
					Reduction_Formula: "{FlatReduction} + {FlatReduction_Scaling}",
					Secondary_Damage_Formula: "({Initial_Damage} + {Initial_Damage_Scaling}) * 0.25"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/baronOne.webp",
				key: "BaronSamedi.A01.InGame.Short",
				name: "Vivid Gaze",
				scales: {
					FlatReduction_Scaling: [{
						stat: "PhysicalProtection",
						values: [.05, .05, .05, .05, .05]
					}, {
						stat: "MagicalProtection",
						values: [.05, .05, .05, .05, .05]
					}],
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [.75, .75, .75, .75, .75]
					}]
				},
				shortDesc: `Summon skulls that deal [70% INT] Magical Damage in an X shape.\r
	\r
	  • Deals a bonus 25% Magical Damage to enemies hit by the overlap (automatically applied here)\r
	  • Hitting a god above 30 Hysteria applies a 30% + [5% Protections] Strength, Intelligence, and Attack Speed Reduction`,
				valueKeys: {
					Cooldown: [9, 9, 9, 9, 9],
					Cost: [55, 60, 65, 70, 75],
					FlatReduction: [30.000002, 30.000002, 30.000002, 30.000002, 30.000002],
					Hysteria: [15, 15, 15, 15, 15],
					Damage: [85, 145, 235, 270, 330],
					Radius: [1.28, 1.28, 1.28, 1.28, 1.28],
					Range: [9.6, 9.6, 9.6, 9.6, 9.6]
				}
			},
			A02: {
				details: [{
					key: "",
					text: "Allies within 8.8m of Baron Samedi or the center of Consign Spirits will receive the heal."
				}, {
					key: "Initial_Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Initial_Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "Healing",
					text: "<KeywordName>Heal</>: {0}"
				}, {
					key: "Missing_Health",
					text: "<KeywordName>Heal</>: {0}% Missing Health"
				}, {
					key: "Missing_Health_Scaling",
					text: "<KeywordName>% Missing Scaling</>: 20% Cooldown Rate"
				}, {
					key: "MovementSpeed",
					text: "<KeywordName>Movement Speed</>: {0}%"
				}, {
					key: "Hysteria",
					text: "<KeywordName>Hysteria Applied Per Hit</>: {0}"
				}, {
					key: "Range",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "Radius",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Healing_Formula: "{Healing}",
					Initial_Damage_Formula: "{Initial_Damage} + {Initial_Damage_Scaling}",
					Missing_Health_Formula: "{Missing_Health} + {Missing_Health_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/baronTwo.webp",
				key: "BaronSamedi.A02.InGame.Short",
				name: "Consign Spirits",
				scales: {
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [.8, .8, .8, .8, .8]
					}],
					Missing_Health_Scaling: [{
						stat: "CooldownReductionPercent",
						values: [.2, .2, .2, .2, .2]
					}]
				},
				shortDesc: `Call spirits that deal [80% INT] Magical Damage to enemies in an area.\r
	\r
	  • Hitting a god Heals nearby allies for  5% + [20% CDR] Missing Health</>\r
	  • Hitting a god above 30 Hysteria makes the healapply a 25% Speed Buff and Slow Immunity`,
				valueKeys: {
					Cooldown: [14, 13.5, 13, 12.5, 12],
					Cost: [60, 60, 60, 60, 60],
					Healing: [30, 60, 90, 120, 150],
					Hysteria: [20, 20, 20, 20, 20],
					Damage: [75, 135, 195, 255, 315],
					Missing_Health: [5, 5, 5, 5, 5],
					MovementSpeed: [25, 25, 25, 25, 25],
					Radius: [2.88, 2.88, 2.88, 2.88, 2.88],
					Range: [8.8, 8.8, 8.8, 8.8, 8.8]
				}
			},
			A03: {
				details: [{
					key: "",
					text: "Enemies must be at or above <Hysteria>30 Hysteria</> when Wrap It Up hits to trigger its <Hysteria>Hysteria</> effect."
				}, {
					key: "",
					text: "The snake deals damage every 0.4375s, for a total of 5 ticks."
				}, {
					key: "Initial_Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Initial_Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "SlowDuration",
					text: "<KeywordName>Slow Duration</>: {0}s"
				}, {
					key: "RootDuration",
					text: "<KeywordName>Root Duration</>: {0}s"
				}, {
					key: "MesmerizeDuration",
					text: "<KeywordName>Mesmerize Duration</>: {0}s"
				}, {
					key: "HysteriaPerTick",
					text: "<KeywordName>Hysteria Applied Per Tick</>: {0}"
				}, {
					key: "HysteriaPerExplosion",
					text: "<KeywordName>Hysteria Applied on Explosion</>: {0}"
				}, {
					key: "Range",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "Radius",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Initial_Damage_Formula: "{Initial_Damage} + {Initial_Damage_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/baronThree.webp",
				key: "BaronSamedi.A03.InGame.Short",
				name: "Wrap It Up",
				scales: {
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [.5, .5, .5, .5, .5]
					}]
				},
				shortDesc: `Throw a snake that constricts enemy gods, <Slow>Slowing</> them to a <Rooted>Root</>.\r
	\r
	  • Constricted gods take [50% INT] Magical Damageover 1.75s\r
	  • Minions take a tick of Magical Damage when the snake passes through them\r
	  • <Hysteria>Hitting a god above 30 Hysteria causes the snake to explode when it </><Rooted>Roots</><Hysteria>, applying a </><Mesmerize>Mesmerize</><Hysteria> to nearby enemies</>`,
				valueKeys: {
					Cooldown: [14, 13.5, 13, 12.5, 12],
					Cost: [60, 65, 70, 75, 80],
					HysteriaPerExplosion: [25, 25, 25, 25, 25],
					HysteriaPerTick: [5, 5, 5, 5, 5],
					Damage: [70, 125, 180, 235, 290],
					MesmerizeDuration: [2.25, 2.25, 2.25, 2.25, 2.25],
					Radius: [.8, .8, .8, .8, .8],
					Range: [9.6, 9.6, 9.6, 9.6, 9.6],
					RootDuration: [.75, .75, .75, .75, .75],
					SlowDuration: [1.75, 1.75, 1.75, 1.75, 1.75]
				}
			},
			A04: {
				details: [{
					key: "Tick_Damage",
					text: "<KeywordName>Vortex Damage</>: {0}"
				}, {
					key: "Tick_Damage_Scaling",
					text: "<KeywordName>Vortex Scaling</>: {0}"
				}, {
					key: "Slam_Damage",
					text: "<KeywordName>Slam Damage</>: {0}"
				}, {
					key: "Slam_Damage_Scaling",
					text: "<KeywordName>Slam Scaling</>: {0}"
				}, {
					key: "SlamMaxHealth_Damage",
					text: "<KeywordName>Slam Health Damage</>: {0}%"
				}, {
					key: "SlamMaxHealth_Damage_Scaling",
					text: "<KeywordName>% Health Scaling</>: {0}"
				}, {
					key: "StunDuration",
					text: "<KeywordName>Stun Duration</>: {0}s"
				}, {
					key: "HysteriaPerTick",
					text: "<KeywordName>Hysteria Applied Per Tick</>: {0}"
				}, {
					key: "HysteriaPerSlam",
					text: "<KeywordName>Hysteria Applied on Slam</>: {0}"
				}, {
					key: "ConeRange",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "Angle",
					text: "<KeywordName>Cone Angle:</> {0} degrees"
				}],
				formulas: {
					"": "",
					SlamMaxHealth_Damage_Formula: "{SlamMaxHealth_Damage} + {SlamMaxHealth_Damage_Scaling}",
					Slam_Damage_Formula: "{Slam_Damage} + {Slam_Damage_Scaling}",
					Tick_Damage_Formula: "{Tick_Damage} + {Tick_Damage_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/baronFour.webp",
				key: "BaronSamedi.A04.InGame.Short",
				name: "Life of the Party",
				scales: {
					SlamMaxHealth_Damage_Scaling: [{
						stat: "PhysicalProtection",
						values: [.05, .05, .05, .05, .05]
					}, {
						stat: "MagicalProtection",
						values: [.05, .05, .05, .05, .05]
					}],
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [1.25, 1.25, 1.25, 1.25, 1.25]
					}],
					Tick_Damage_Scaling: [{
						stat: "MagicalPower",
						values: [.07, .07, .07, .07, .07]
					}]
				},
				shortDesc: `Open a Coffin that Vortexes enemies towards Baron Samedi. Gods Vortexed into the Coffin take  [55% INT] + (10% + [5% of protections]) of their max health  as Magical Damage and are Stunned.\r
	\r
	  • The Vortex deals [7% INT] Magical Damage every 0.5s\r
	  • Gods above 30 Hysteria are Vortexed with more intensity
	  • This is being calculated as 10 Vortex ticks + the coffin slam damage.`,
				valueKeys: {
					Angle: [120, 120, 120, 120, 120],
					ConeRange: [6, 6, 6, 6, 6],
					Cooldown: [90, 85, 80, 75, 70],
					Cost: [70, 75, 80, 85, 90],
					HysteriaPerSlam: [30, 30, 30, 30, 30],
					HysteriaPerTick: [5, 5, 5, 5, 5],
					SlamMaxHealth_Damage: [10, 10, 10, 10, 10],
					Damage: [275, 410, 545, 680, 815],
					StunDuration: [1.5, 1.5, 1.5, 1.5, 1.5],
					Tick_Damage: [15, 20, 25, 30, 35]
				}
			}
		},
		baseStats: {
			"AttackSpeedPercent": {
				1: 1.358,
				20: 27.16,
				rate: 1.3579999999999999
			},
			"BaseAttackSpeed": {
				1: .93,
				20: .93,
				rate: 0
			},
			"HealthPerTime": {
				1: 1.7,
				20: 5.5,
				rate: .19999999999999998
			},
			"InhandPower": {
				1: 0,
				20: 0,
				rate: 0
			},
			"MagicalPower": {
				1: 0,
				20: 0,
				rate: 0
			},
			"MagicalProtection": {
				1: 26.675,
				20: 54.32,
				rate: 1.455
			},
			"ManaPerTime": {
				1: 2.25,
				20: 7,
				rate: .25
			},
			"MaxHealth": {
				1: 613.75,
				20: 2300,
				rate: 88.75
			},
			"MaxMana": {
				1: 304.88,
				20: 1126.82,
				rate: 43.26
			},
			"MovementSpeed": {
				1: 365,
				20: 365,
				rate: 0
			},
			"PhysicalPower": {
				1: 43.068,
				20: 87.3,
				rate: 2.328
			},
			"PhysicalProtection": {
				1: 19,
				20: 76,
				rate: 3
			}
		},
		basic: {
			details: [{
				key: "",
				text: "Projectile stops on first target hit, and does not pass through walls. "
			}, {
				key: "Damage_Scaling",
				text: "<KeywordName>Damage Scaling</>: {0}"
			}, {
				key: "RangeCheat",
				text: "<KeywordName>Range:</> {0}m"
			}, {
				key: "RadiusCheat",
				text: "<KeywordName>Radius:</> {0}m"
			}],
			formulas: {
				Damage_Formula: "{Damage} + {Damage_Scaling}"
			},
			icon: "/assets/gods/BaronSamedi/Icon_BasicAttack_Magical.webp",
			key: "Basic.RangedMag.InGame.Short",
			name: "Baron Basic Attack",
			scales: {
				Damage_Scaling: [{
					stat: "PhysicalPower",
					values: [1]
				}, {
					stat: "MagicalPower",
					values: [.2]
				}]
			},
			shortDesc: "Fire a projectile that deals  Magical Damage</> to the first enemy hit. ",
			valueKeys: {
				Damage: [0],
				HysteriaAmount: [5],
				RadiusCheat: [.48],
				RangeCheat: [8.8]
			}
		},
		internalName: "BaronSamedi_Item",
		key: "God.BaronSamedi",
		name: "Baron Samedi",
		Type:'Magical',
		icon: "/src/assets/icons/baronImage.webp",
		passive: {
			details: [{
				key: "",
				text: "<Hysteria>Hysteria</> drains at a rate of 2/s. This drain stops on the target for 5s when Baron Samedi applies <Hysteria>Hysteria</> to them."
			}],
			icon: "/assets/gods/BaronSamedi/Baron_Passive.webp",
			key: "BaronSamedi.Passive.InGame.Short",
			name: "Hysteria",
			shortDesc: `Damage applies <Hysteria>Hysteria</>, granting your abilities bonus effects when enough is applied. Your team can also purchase Baron's Brew from the item store.\r
	\r
	 • <Hysteria>Gods at Max Hysteria [70] deal 20% Reduced Damage to Baron Samedi</>\r
	 • Baron's Brew can be thrown at enemies to apply Magical Damage and <Hysteria>Hysteria</>`
		}
	},
		
	 {
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "The Slow stacks with an additional Slow when closer to the Pillar.",
					},
					{
						"key": "",
						"text": "Reactivate to destroy the Pillar early.",
					},
					{
						"key": "Slow",
						"text": "<KeywordName>Slow: {0}%",
					},
					{
						"key": "Additional Slow",
						"text": "<KeywordName>Additional Slow: {0}%",
					},
					{
						"key": "DamageIncrease",
						"text": "<KeywordName>Increased Damage Taken: {0}%",
					},
					{
						"key": "Lifetime",
						"text": "<KeywordName>Lifetime: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "RadiusCheat",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"DamageIncrease_Formula": "{DamageIncrease} + {DamageIncrease_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/5b63a004-625e-42be-854c-d2140299b300/public",
				"key": "Anhur.A01.InGame.Short",
				"name": "Shifting Sands",
				"shortDesc":
					"Summon an obelisk, surrounded by shifting sands.\r\n\r\n  • Enemies in the sands are Slowed and take additional damage from your basic attacks\r\n  • The obelisk acts as a Wall",
				"valueKeys": {
					"Additional Slow": [15, 15, 15, 15, 15],
					"Cooldown": [14, 14, 14, 14, 14],
					"Cost": [40, 50, 60, 70, 80],
					"DamageIncrease": [8, 11, 14, 17, 20],
					"Lifetime": [7.5, 7.5, 7.5, 7.5, 7.5],
					"RadiusCheat": [9.6],
					"Range": [10.4, 10.4, 10.4, 10.4, 10.4],
					"Slow": [15, 15, 15, 15, 15],
				},
			},
			"A02": {
				"details": [
					{
						"key": "",
						"text": "The projectile passes through and damages minions, but stops on walls.",
					},
					{
						"key": "",
						"text": "The enemy god displaced by this ability deal damage to enemies it collides with. ",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Stun Duration",
						"text": "<KeywordName>Stun Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "RadiusCheat",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/95c91c52-d425-463b-e251-6ef54c66ca00/public",
				"key": "Anhur.A02.InGame.Short",
				"name": "Impale",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.75, 0.75, 0.75, 0.75, 0.75],
						},
					],
				},
				"shortDesc":
					"Throw a large spear, dealing  [75% STR] Physical Damage in a line.\r\n\r\n  • The first God hit is Pushed\r\n  • If the God hits a Wall, they are Stunned",
				"valueKeys": {
					"Cooldown": [12, 12, 12, 12, 12],
					"Cost": [50, 60, 70, 80, 90],
					"Damage": [55, 105, 155, 205, 255],
					"RadiusCheat": [0.48],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
					"Stun Duration": [0.85, 0.95, 1.05, 1.15, 1.25],
				},
			},
			"A03": {
				"details": [
					{
						"key": "",
						"text": "Enemies are Displaced up and away from your landing location.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/823f4a5b-2ded-4267-508b-540168ab8b00/public",
				"key": "Anhur.A03.InGame.Short",
				"name": "Disperse",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.55, 0.55, 0.55, 0.55, 0.55],
						},
					],
				},
				"shortDesc":
					"Leap forward, dealing  [55% STR] Physical Damage where you land.\r\n\r\n  • Knock Back all enemies from your landing point",
				"valueKeys": {
					"Cooldown": [15, 14.5, 14, 13.5, 13],
					"Cost": [40, 50, 60, 70, 80],
					"Damage": [35, 70, 105, 140, 175],
					"Radius": [2.4, 2.4, 2.4, 2.4, 2.4],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
				},
			},
			"A04": {
				"details": [
					{
						"key": "",
						"text": "Ability fires {AttackCount} times, plus the final projectile, over {Channel Duration} seconds.",
					},
					{
						"key": "",
						"text": "These projectiles pass through and damage all enemies, and pass through walls.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage Per Tick: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling Per Tick: {0}",
					},
					{
						"key": "FinalDamage",
						"text": "<KeywordName>Final Damage: {0}",
					},
					{
						"key": "FinalDamage_Scaling",
						"text": "<KeywordName>Final Damage Scaling: {0}",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "RadiusCheat",
						"text": "<KeywordName>Radius: {0}m",
					},
					{
						"key": "FinalRadiusCheat",
						"text": "<KeywordName>Final Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"FinalDamage_Formula": "{FinalDamage} + {FinalDamage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/f5c8fd5c-b601-4cac-0343-a98b934f8500/public",
				"key": "Anhur.A04.InGame.Short",
				"name": "Desert Fury",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [2.4, 2.4, 2.4, 2.4, 2.4],
						},
					],
					"FinalDamage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.8, 0.8, 0.8, 0.8, 0.8],
						},
					],
				},
				"shortDesc":
					"Hurl a series of empowered spears, each dealing  [40% STR] Physical Damage.\r\n\r\n  • The final spear deals a burst of {FinalDamage_Formula} [80% STR] Physical Damage\r\n  • These spears pass through everything\r\n  • You are CC Immune while using this ability",
				"valueKeys": {
					"Channel Duration": [1.5, 1.5, 1.5, 1.5, 1.5],
					"ChannelDuration": [1.54, 1.54, 1.54, 1.54, 1.54],
					"Cooldown": [90, 85, 80, 75, 70],
					"Cost": [80, 85, 90, 95, 100],
					"Damage": [310,455,600,745,890],
					"FinalDamage": [90, 135, 180, 225, 270],
					"FinalRadiusCheat": [0.72],
					"Radius": [0.56, 0.56, 0.56, 0.56, 0.56],
					"RadiusCheat": [0.56],
					"Range": [12.799999, 12.799999, 12.799999, 12.799999, 12.799999],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.484,
				"20": 29.68,
				"rate": 1.484,
			},
			"BaseAttackSpeed": {
				"1": 0.99,
				"20": 0.99,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.7,
				"20": 5.5,
				"rate": 0.19999999999999998,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 26.7,
				"20": 54.3,
				"rate": 1.4526315789473683,
			},
			"ManaPerTime": {
				"1": 2.25,
				"20": 7,
				"rate": 0.25,
			},
			"MaxHealth": {
				"1": 595.3,
				"20": 2231,
				"rate": 86.08947368421053,
			},
			"MaxMana": {
				"1": 296,
				"20": 1094,
				"rate": 42,
			},
			"MovementSpeed": {
				"1": 430,
				"20": 430,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 47,
				"20": 95,
				"rate": 2.526315789473684,
			},
			"PhysicalProtection": {
				"1": 18.4,
				"20": 73.7,
				"rate": 2.910526315789474,
			},
		},
		basic: {
			details: [{
				key: "",
				text: "Projectile stops on first target hit, and does not pass through walls. "
			}, {
				key: "Damage_Scaling",
				text: "<KeywordName>Damage Scaling</>: {0}"
			}, {
				key: "RangeCheat",
				text: "<KeywordName>Range:</> {0}m"
			}, {
				key: "RadiusCheat",
				text: "<KeywordName>Radius:</> {0}m"
			}],
			formulas: {
				Damage_Formula: "{Damage} + {Damage_Scaling}"
			},
			icon: "/assets/gods/Anhur/Icon_BasicAttack_Physical.webp",
			key: "Basic.RangedPhys.InGame.Short",
			name: "Anhur Basic Attack",
			scales: {
				Damage_Scaling: [{
					stat: "PhysicalPower",
					values: [1]
				}, {
					stat: "MagicalPower",
					values: [.2]
				}]
			},
			shortDesc: "Fire a projectile that deals  Physical Damage</> to the first enemy hit. ",
			valueKeys: {
				Damage: [0],
				RadiusCheat: [.48],
				RangeCheat: [8.8]
			}
		},
		internalName: "Anhur_Item",
		key: "God.Anhur",
		name: "Anhur",
		icon: "/src/assets/icons/anhurImage.webp",
		passive: {
			NamedValuesDuplicates: !0,
			details: [{
				key: "ProtDebuff",
				text: "<KeywordName>Physical Protections Reduced</>: {0}"
			}, {
				key: "EffectDuration",
				text: "<KeywordName>Debuff Duration</>: {0}s"
			}],
			icon: "/assets/gods/Anhur/Passive.webp",
			key: "Anhur.PSV.InGame.Short",
			name: "Enfeeble",
			shortDesc: "Dealing Damage to enemies reduces their Physical Protection. \n\r • Reduction: 10 \n\r • Duration: 4s \n\r • Max Stacks: 2",
			valueKeys: {
				EffectDuration: [4],
				ProtDebuff: [10]
			}
		}
	},

	{
		abilities: {
			A01: {
				details: [{
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "TickDamage",
					text: "<KeywordName>Damage Per Tick</>: {0}"
				}, {
					key: "TickDamage_Scaling",
					text: "<KeywordName>Damage Scaling Per Tick</>: {0}"
				}, {
					key: "Movement_Speed",
					text: "<KeywordName>Movement Speed</>: {0}%"
				}, {
					key: "MovementSpeedDuration",
					text: "<KeywordName>Buff Duration</>: {0}s"
				}, {
					key: "CheatRange",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "CheatRadius",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}",
					TickDamage_Formula: "{TickDamage} + {TickDamage_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/nuWaOne.webp",
				key: "NuWa.A01.InGame.Short",
				name: "Mysterious Fog",
				scales: {
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [.5, .5, .5, .5, .5]
					}],
					TickDamage_Scaling: [{
						stat: "MagicalPower",
						values: [.1, .1, .1, .1, .1]
					}]
				},
				shortDesc: `Send a dense fog slowly forward that deals  [50% INT] Magical Damage</> when it touches an enemy. Enemies that remain in the fog take additional damage every second. You and Allied Gods are Stealthed when inside the fog.\r
	\r
	  • Gain Strength of Water, which gives you <Buff>Movement Speed</>. Allied gods that enter the fog gain Strength of Water.`,
				valueKeys: {
					CheatRadius: [3.2],
					CheatRange: [25],
					Cooldown: [10, 10, 10, 10, 10],
					Cost: [60, 65, 70, 75, 80],
					Damage: [50, 75, 100, 125, 150],
					MovementSpeedDuration: [5, 5, 5, 5, 5],
					Movement_Speed: [10, 10, 10, 10, 10],
					TickDamage: [10, 20, 30, 40, 50]
				}
			},
			A02: {
				details: [{
					key: "",
					text: "If you have not chosen a target, Clay Soldiers will attack the nearest enemy or an enemy god that damages Nu Wa. "
				}, {
					key: "DashDamage",
					text: "<KeywordName>Dash Damage</>: {0}"
				}, {
					key: "DashDamage_Scaling",
					text: "<KeywordName>Dash Damage Scaling</>: {0}"
				}, {
					key: "BasicDamage",
					text: "<KeywordName>Basic Attack Damage</>: {0}"
				}, {
					key: "PenBuff",
					text: "<KeywordName>Flat Penetration</>: {0}"
				}, {
					key: "PenBuffDuration",
					text: "<KeywordName>Buff Duration</>: {0}s"
				}, {
					key: "CheatRange",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "CheatRadius",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					BasicDamage_Formula: "{BasicDamage} + {BasicDamage_Scaling}",
					DashDamage_Formula: "{DashDamage} + {DashDamage_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/nuWaTwo.webp",
				key: "NuWa.A02.InGame.Short",
				name: "Clay Soldiers",
				scales: {
					BasicDamage_Scaling: [{
						stat: "MagicalPower",
						values: [0, 0, 0, 0, 0]
					}],
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [.1, .1, .1, .1, .15]
					}]
				},
				shortDesc: `Summon Clay Soldiers to attack the chosen target. Clay Soldiers will dash at enemes within 4.8m, dealing Magical Damage, then begin to basic attack. Clay Soldiers last for 10s.\r
	\r
	  • Gain Strength of Earth, which gives you Magical Penetration.`,
				valueKeys: {
					BasicDamage: [20, 30, 40, 50, 60],
					CheatRadius: [1.6],
					CheatRange: [6.4],
					Cooldown: [15, 15, 15, 15, 15],
					Cost: [60, 65, 70, 75, 80],
					Damage: [40, 60, 80, 100, 180],
					PenBuff: [10, 14, 18, 22, 26],
					PenBuffDuration: [5, 5, 5, 5, 5],
					Range: [3.2, 3.2, 3.2, 3.2, 3.2]
				}
			},
			A03: {
				details: [{
					key: "",
					text: "Projectile passes through and damages all enemies, and passes through walls."
				}, {
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "ExplosionDamage",
					text: "<KeywordName>Explosion Damage</>: {0}"
				}, {
					key: "ExplosionDamage_Scaling",
					text: "<KeywordName>Explosion Damage Scaling</>: {0}"
				}, {
					key: "MetalInhand_Scaling",
					text: "<KeywordName>Basic Attack Area Damage</>: {0}"
				}, {
					key: "StunDuration",
					text: "<KeywordName>Stun Duration</>: {0}s"
				}, {
					key: "Range",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "CheatRadius",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}",
					ExplosionDamage_Formula: "{ExplosionDamage} + {ExplosionDamage_Scaling}",
					MetalInhand_Formula: "{MetalInhand} + {MetalInhand_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/nuWaThree.webp",
				key: "NuWa.A03.InGame.Short",
				name: "Shining Metal",
				scales: {
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [1.5, 1.5, 1.5, 1.5, 1.5]
					}],
					ExplosionDamage_Scaling: [{
						stat: "MagicalPower",
						values: [.75, .75, .75, .75, .75]
					}],
					MetalInhand_Scaling: [{
						stat: "PhysicalPower",
						values: [.75]
					}, {
						stat: "MagicalPower",
						values: [.15]
					}]
				},
				shortDesc: `Launch a projectile that pierces all enemies and walls, dealing  [75% INT] Magical Damage</> to enemies it passes through.\r
	\r
	  • If the projectile hits a Clay Soldier it explodes, dealing damage in an area and <Stun>Stunning</> enemies and towers.\r
	  • Gain Strength of Metal, causing your Basic Attacks to deal <DamageMagical>Magical Damage</> in an area when you hit an enemy. (Calculated as explosion + initial projectile hit)`,
				valueKeys: {
					CheatRadius: [.56],
					Cooldown: [11, 11, 11, 11, 11],
					Cost: [50, 50, 50, 50, 50],
					Damage: [120, 190, 260, 330, 400],
					ExplosionDamage: [30, 60, 90, 120, 150],
					MetalInhand: [0],
					Range: [10.4, 10.4, 10.4, 10.4, 10.4],
					StunDuration: [1, 1.1, 1.2, 1.3, 1.4]
				}
			},
			A04: {
				details: [{
					key: "",
					text: "While beginning to ascend, you cannot be Impeded."
				}, {
					key: "",
					text: "When buffed by Strength of Fire, Nu Wa's Basic Attack range is increased to 12.8m"
				}, {
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}"
				},
				icon: "/SMITE-Damage-Calculator/static/buffIcons/nuWaFour.webp",
				key: "/SMITE-Damage-Calculator/static/buffIcons/nuWaFour.webp",
				name: "Fire Shards",
				scales: {
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [.3, .3, .3, .3, .3]
					}]
				},
				shortDesc: `Become <Immunity>CC Immune</> and ascend into the air. You and your team gain visibility on all enemy gods. Summon Fire Shards that deal  [30% INT] Magical Damage</> to each enemy god.\r
	\r
	  • Gain Strength of Fire, which causes your Basic Attacks to go farther and faster.`,
				valueKeys: {
					Cooldown: [110, 110, 110, 110, 110],
					Cost: [100, 100, 100, 100, 100],
					Damage: [100, 175, 250, 325, 400]
				}
			}
		},
		baseStats: {
			"AttackSpeedPercent": {
				1: 1.358,
				20: 27.16,
				rate: 1.3579999999999999
			},
			"BaseAttackSpeed": {
				1: .93,
				20: .93,
				rate: 0
			},
			"HealthPerTime": {
				1: 1.75,
				20: 5.67,
				rate: .2063157894736842
			},
			"InhandPower": {
				1: 0,
				20: 0,
				rate: 0
			},
			"MagicalPower": {
				1: 0,
				20: 0,
				rate: 0
			},
			"MagicalProtection": {
				1: 26.7,
				20: 54.3,
				rate: 1.4526315789473683
			},
			"ManaPerTime": {
				1: 2.32,
				20: 7.21,
				rate: .25736842105263164
			},
			"MaxHealth": {
				1: 586.9,
				20: 2061.3,
				rate: 77.60000000000001
			},
			"MaxMana": {
				1: 317,
				20: 1171,
				rate: 44.94736842105263
			},
			"MovementSpeed": {
				1: 430,
				20: 430,
				rate: 0
			},
			"PhysicalPower": {
				1: 42,
				20: 86,
				rate: 2.3157894736842106
			},
			"PhysicalProtection": {
				1: 19,
				20: 76,
				rate: 3
			}
		},
		basic: {
			details: [{
				key: "",
				text: "Projectile stops on first target hit, and does not pass through walls. "
			}, {
				key: "Damage_Scaling",
				text: "<KeywordName>Damage Scaling</>: {0}"
			}, {
				key: "RangeCheat",
				text: "<KeywordName>Range:</> {0}m"
			}, {
				key: "RadiusCheat",
				text: "<KeywordName>Radius:</> {0}m"
			}],
			formulas: {
				Damage_Formula: "{Damage} + {Damage_Scaling}"
			},
			icon: "/assets/gods/NuWa/Icon_BasicAttack_Magical.webp",
			key: "Basic.RangedMag.InGame.Short",
			name: "Nu Wa Basic Attack",
			scales: {
				Damage_Scaling: [{
					stat: "PhysicalPower",
					values: [1]
				}, {
					stat: "MagicalPower",
					values: [.2]
				}]
			},
			shortDesc: "Fire a projectile that deals  Magical Damage</> to the first enemy hit. ",
			valueKeys: {
				Damage: [0],
				RadiusCheat: [.48],
				RangeCheat: [8.8]
			}
		},
		internalName: "Nu_Wa_Item",
		key: "God.NuWa",
		name: "Nu Wa",
		icon: "/src/assets/icons/nuWaImage.webp",
		passive: {
			details: [{
				key: "RootDuration",
				text: "<KeywordName>Root Duration</>: {0}s"
			}],
			icon: "/assets/gods/NuWa/Passive.webp",
			key: "NuWa.PSV.InGame.Short",
			name: "Strength of Wood",
			shortDesc: "Every 15s your next Basic Attack will <Rooted>Root</> all targets hit. Damaging an enemy with a Basic Attack reduces this cooldown by 1s.",
			valueKeys: {
				RootDuration: [1]
			}
		}
	},

			
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "This ability hits {AttackCount} times over {Channel Duration} seconds.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage Per Tick: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling Per Tick: {0}",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
					{
						"key": "ConeAngle",
						"text": "<KeywordName>Cone Angle: {0} degrees",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/b75d7842-4306-46a4-bf4d-f394020ad800/public",
				"key": "Anubis.A01.InGame.Short",
				"name": "Plague Of Locusts",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.18, 0.19, 0.2, 0.21, 0.22],
						},
					],
				},
				"shortDesc":
					"Locusts fly from your mouth, repeatedly dealing  [18-22% INT] Magical Damage in an area in front of you.\r\n\r\n  • This is a Channeled ability\r\n  • You are Displacement Immune and move at {Self Slow}% Movement Speed while Channeling",
				"valueKeys": {
					"AttackCount": [12, 12, 12, 12, 12],
					"Channel Duration": [2.5, 2.5, 2.5, 2.5, 2.5],
					"ConeAngle": [110],
					"Cooldown": [10, 9.5, 9, 8.5, 8],
					"Cost": [30, 40, 50, 60, 70],
					"Damage": [15, 22, 29, 36, 43],
					"Duration": [2.5, 2.5, 2.5, 2.5, 2.5],
					"Radius": [5.6, 5.6, 5.6, 5.6, 5.6],
					"Self Slow": [35],
				},
			},
			"A02": {
				"details": [
					{
						"key": "",
						"text": "Projectile ignores minions, and stops on walls.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Stun Duration",
						"text": "<KeywordName>Stun Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "RadiusCheat",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/b2a6f034-f4b9-4382-f3fe-3c1548a26c00/public",
				"key": "Anubis.A02.InGame.Short",
				"name": "Mummify",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.55, 0.55, 0.55, 0.55, 0.55],
						},
					],
				},
				"shortDesc":
					"Fire a bandage projectile, mummifying and Stunningthe first god hit.\r\n\r\n  • This ability deals  [55% INT] Magical Damage, only to gods",
				"valueKeys": {
					"Cooldown": [16, 15.5, 15, 14.5, 14],
					"Cost": [50, 55, 60, 65, 70],
					"Damage": [60, 85, 110, 135, 160],
					"Radius": [0.56, 0.56, 0.56, 0.56, 0.56],
					"RadiusCheat": [0.56],
					"Range": [11.2, 11.2, 11.2, 11.2, 11.2],
					"Stun Duration": [0.85, 0.95, 1.05, 1.15, 1.25],
				},
			},
			"A03": {
				"details": [
					{
						"key": "",
						"text": "This ability hits {AttackCount} times over {Deployable Duration} seconds.",
					},
					{
						"key": "",
						"text": "Slow is refreshed on each hit, and does not stack.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage Per Tick: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling Per Tick: {0}",
					},
					{
						"key": "Slow ",
						"text": "<KeywordName>Slow: {0}%",
					},
					{
						"key": "Slow Duration",
						"text": "<KeywordName>Slow Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "RadiusCheat",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/28e2fb8d-fd81-41be-cfae-0a48695dc300/public",
				"key": "Anubis.A03.InGame.Short",
				"name": "Grasping Hands",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.35, 0.35, 0.35, 0.35, 0.35],
						},
					],
				},
				"shortDesc":
					"Summon allies from the underworld, dealing  [35% INT] Magical Damage repeatedly to enemies in an area.\r\n\r\n   • This also Slows enemies in the area",
				"valueKeys": {
					"AttackCount": [4, 4, 4, 4, 4],
					"Cooldown": [14, 13, 12, 11, 10],
					"Cost": [40, 50, 60, 70, 80],
					"Damage": [25, 45, 65, 85, 105],
					"Deployable Duration": [1.5, 1.5, 1.5, 1.5, 1.5],
					"Radius": [-0.01, -0.01, -0.01, -0.01, -0.01],
					"RadiusCheat": [3.2],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
					"Slow ": [25, 25, 25, 25, 25],
					"Slow Duration": [2, 2, 2, 2, 2],
				},
			},
			"A04": {
				"details": [
					{
						"key": "",
						"text": "Ability hits {AttackCount} times, plus the initial burst, over {Channel Duration} seconds.",
					},
					{
						"key": "",
						"text": "You are Rooted while Channeling.",
					},
					{
						"key": "InitialDamage",
						"text": "<KeywordName>Initial Damage: {0}",
					},
					{
						"key": "InitialDamage_Scaling",
						"text": "<KeywordName>Initial Damage Scaling: {0}",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage Per Tick: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling Per Tick: {0}",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "RadiusCheat",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"InitialDamage_Formula": "{InitialDamage} + {InitialDamage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/3b979d92-b07c-446f-5f54-c75e14a9ae00/public",
				"key": "Anubis.A04.InGame.Short",
				"name": "Death Gaze",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [6.28, 6.28,6.28,6.28,6.28],
						},
					],
					"InitialDamage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [1, 1, 1, 1, 1],
						},
					],
				},
				"shortDesc":
					"Your piercing gaze burns enemies in a line.\r\n\r\n  • This deals an initial burst of  [100% INT] Magical Damage\r\n  • Then Channels to repeatedly deal  [22% INT] Magical Damage (24 times)\r\n  • You are CC Immune while using this ability",
				"valueKeys": {
					"Channel Duration": [2.4, 2.4, 2.4, 2.4, 2.4],
					"Cooldown": [90, 85, 80, 75, 70],
					"Cost": [90, 90, 90, 90, 90],
					"Damage": [740,890,1040,1190,1340],
					"InitialDamage": [140, 170, 200, 230, 260],
					"Radius": [0.71999997, 0.71999997, 0.71999997, 0.71999997, 0.71999997],
					"RadiusCheat": [0.72],
					"Range": [11.2, 11.2, 11.2, 11.2, 11.2],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.358,
				"20": 27.16,
				"rate": 1.3579999999999999,
			},
			"BaseAttackSpeed": {
				"1": 0.93,
				"20": 0.93,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.75,
				"20": 5.67,
				"rate": 0.2063157894736842,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 26.7,
				"20": 54.3,
				"rate": 1.4526315789473683,
			},
			"ManaPerTime": {
				"1": 2.32,
				"20": 7.21,
				"rate": 0.25736842105263164,
			},
			"MaxHealth": {
				"1": 595.3,
				"20": 2231,
				"rate": 86.08947368421053,
			},
			"MaxMana": {
				"1": 314,
				"20": 1160,
				"rate": 44.526315789473685,
			},
			"MovementSpeed": {
				"1": 430,
				"20": 430,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 42,
				"20": 86,
				"rate": 2.3157894736842106,
			},
			"PhysicalProtection": {
				"1": 19,
				"20": 76,
				"rate": 3,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "Projectile stops on first target hit, and does not pass through walls. ",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "RadiusCheat",
					"text": "<KeywordName>Radius: {0}m",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Anubis/Icon_BasicAttack_Magical.webp",
			"key": "Basic.RangedMag.InGame.Short",
			"name": "Anubis Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Fire a projectile that deals  Magical Damage to the first enemy hit. ",
			"valueKeys": {
				"Damage": [0],
				"RadiusCheat": [0.48],
				"RangeCheat": [8.8],
			},
		},
		"internalName": "Anubis_Item",
		"key": "God.Anubis",
		"name": "Anubis",
		icon: "/src/assets/icons/anubisImage.webp",
		'Type': 'Magical',
		"passive": {
			"details": [
				{
					"key": "Cost",
					"text": "Gain 1 Stack of this buff for each 10% Health missing. ",
				},
				{
					"key": "Lifesteal",
					"text": "<KeywordName>Lifesteal: {0}% Per Stack",
				},
				{
					"key": "PhysicalProts",
					"text": "<KeywordName>Physical Protection: {0}% Per Stack",
				},
				{
					"key": "MagicalProts",
					"text": "<KeywordName>Magical Protection: {0}% Per Stack",
				},
				{
					"key": "MaxStacks",
					"text": "<KeywordName>Max Buff Stacks: {0}",
				},
			],
			"icon": "/assets/gods/Anubis/Passive.webp",
			"key": "Anubis.PSV.InGame.Short",
			"name": "The Scales",
			"shortDesc": "As your health declines, gain additional Lifesteal, Physical Protection, and Magical Protection",
			"valueKeys": {
				"Lifesteal": [3],
				"MagicalProts": [3],
				"MaxStacks": [8],
				"PhysicalProts": [3],
			},
		},
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "This projectile passes through and damages non-god enemies, and passes through walls. It stops on gods. ",
					},
					{
						"key": "",
						"text": "Movement Speed buff stacks for each uniquely shackled god.",
					},
					{
						"key": "",
						"text": "You have 2 seconds to fire another Shackle after successfully hitting an enemy god. ",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Initial Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Initial Damage Scaling: {0}",
					},
					{
						"key": "DotDamage",
						"text": "<KeywordName>Damage Per Tick: {0}",
					},
					{
						"key": "DotDamage_Scaling",
						"text": "<KeywordName>Damage Scaling Per Tick: {0}",
					},
					{
						"key": "Slow",
						"text": "<KeywordName>Slow: {0}%",
					},
					{
						"key": "SlowDuration",
						"text": "<KeywordName>Slow Duration: {0}s",
					},
					{
						"key": "CrippleDuration",
						"text": "<KeywordName>Cripple Duration: {0}s",
					},
					{
						"key": "SpeedBuff",
						"text": "<KeywordName>Movement Speed: {0}%",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"DotDamage_Formula": "{DotDamage} + {DotDamage_Scaling}",
					"MinionDamage_Formula": "{MinionDamage} + {MinionDamage_Scaling}",
				},
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/aresOne.webp",
				"key": "Ares.A01.InGame.Short",
				"name": "Shackles",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.9, 0.9, 0.9, 0.9, 0.9],
						},
						{
							"stat": "MagicalPower",
							"values": [1.2, 1.2, 1.2, 1.2, 1.2],
						},

					],
					"DotDamage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.15, 0.15, 0.15, 0.15, 0.15],
						},
					],
					"MinionDamage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.15, 0.15, 0.15, 0.15, 0.15],
						},
					],
				},
				"shortDesc":
					"Fire a Shackle projectile that deals   [30% STR] Magical Damage and Slows.\r\n\r\n  • You can refire after hitting an enemy god\r\n  • Three Shackles may be out at one time\r\n  • Gain Movement Speed for each Shackled god\r\n  • Shackled gods take repeating  [15% INT] Magical Damage and are Crippled \n (Calculated as all 3 chains on 1 god, at max duration, so 8 ticks.)",
				"valueKeys": {
					"Cooldown": [15, 15, 15, 15, 15],
					"Cost": [70, 75, 80, 85, 90],
					"CrippleDuration": [4],
					"Damage": [30, 55, 80, 105, 130],
					"DotDamage": [20, 40, 60, 80, 100],
					"MinionDamage": [70, 90, 110, 130, 150],
					"Radius": [2.4, 2.4, 2.4, 2.4, 2.4],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
					"Slow": [15, 15, 15, 15, 15],
					"SlowDuration": [4],
					"SpeedBuff": [15, 15, 15, 15, 15],
				},
			},
			"A02": {
				"details": [
					{
						"key": "",
						"text": "The buff is extended by 4 seconds after hitting an enemy god 3 times.",
					},
					{
						"key": "PhysProtBuff",
						"text": "<KeywordName>Physical Protection: {0}",
					},
					{
						"key": "MagProtBuff",
						"text": "<KeywordName>Magical Protection: {0}",
					},
					{
						"key": "InhandBuff",
						"text": "<KeywordName>Basic Attack Damage: {0}",
					},
					{
						"key": "BuffDuration",
						"text": "<KeywordName>Buff Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "BuffRadius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/aresTwo.webp",
				"key": "Ares.A02.OutOfGame",
				"name": "Call To Arms",
				"shortDesc":
					"You and nearby allied gods gain Magical and Physical Protections and Basic Attack Damage.\r\n\r\n  • Damaging enemy gods increases the duration and the effects of this buff",
				"valueKeys": {
					"BuffDuration": [6],
					"BuffRadius": [5.6],
					"Cooldown": [15, 15, 15, 15, 15],
					"Cost": [40, 45, 50, 55, 60],
					"InhandBuff": [8, 12, 16, 20, 24],
					"MagProtBuff": [10, 15, 20, 25, 30],
					"PhysProtBuff": [10, 15, 20, 25, 30],
				},
			},
			"A03": {
				"details": [
					{
						"key": "",
						"text": "You can fire your Shackles ability while channeling this ability, but no other attacks. ",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage Per Tick: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling Per Tick: {0}",
					},
					{
						"key": "MinionDamage",
						"text": "<KeywordName>Minion Damage Per Tick: {0}",
					},
					{
						"key": "MinionDamage_Scaling",
						"text": "<KeywordName>Minion Damage Scaling Per Tick: {0}",
					},
					{
						"key": "RangeCheat",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "ConeAngle ",
						"text": "<KeywordName>Cone Angle: {0} degrees",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"MinionDamage_Formula": "{MinionDamage} + {MinionDamage_Scaling}",
				},
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/aresThree.webp",
				"key": "Ares.A03.InGame.Short",
				"name": "Searing Flesh",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.07, 0.07, 0.07, 0.07, 0.07],
						},
						{
							"stat": "MaxHealth",
							"values": [0.01, 0.01, 0.02, 0.02, 0.03],
						},
					],
					"MinionDamage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.07, 0.07, 0.07, 0.07, 0.07],
						},
						{
							"stat": "MaxHealth",
							"values": [0.04, 0.04, 0.04, 0.04, 0.04],
						},
					],
				},
				"shortDesc":
					"Flames pour from your shield, dealing  [7% INT] Magical Damage repeatedly to enemies in front of you.\r\n\r\n  • This is a Channeled ability, but you can fire Shackles\r\n  • Deals bonus damage based on the enemies' maximum Health\r\n  • You are Displacement Immune while Channeling",
				"valueKeys": {
					"ConeAngle ": [45],
					"Cooldown": [12, 12, 12, 12, 12],
					"Cost": [55, 60, 65, 70, 75],
					"Damage": [15, 20, 25, 30, 35],
					"MinionDamage": [15, 20, 25, 30, 35],
					"RangeCheat": [5.6],
				},
			},
			"A04": {
				"details": [
					{
						"key": "",
						"text": "Channel lasts 2.5 seconds. Enemy gods are Displaced toward you after 2.17 seconds of channeling.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Initial Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Initial Damage Scaling: {0}",
					},
					{
						"key": "FinalDamage",
						"text": "<KeywordName>Final Damage: {0}",
					},
					{
						"key": "FinalDamage_Scaling",
						"text": "<KeywordName>Final Damage Scaling: {0}",
					},
					{
						"key": "StunDuration",
						"text": "<KeywordName>Stun Duration: {0}s",
					},
					{
						"key": "DamageMit",
						"text": "<KeywordName>Damage Mitigation: {0}%",
					},
					{
						"key": "ChainRange ",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "StunRange",
						"text": "<KeywordName>Final Range: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"FinalDamage_Formula": "{FinalDamage} + {FinalDamage_Scaling}",
				},
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/aresFour.webp",
				"key": "Ares.A04.InGame.Short",
				"name": "No Escape",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.9, 0.9, 0.9, 0.9, 0.9],
						},
					],
					"FinalDamage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.6, 0.6, 0.6, 0.6, 0.6],
						},
					],
				},
				"shortDesc":
					"Attach a chain to nearby gods, then Pull the gods toward you, and finally Stun enemies around you.\r\n\r\n  • Deal  [30% STR] Magical Damage when Chains attach\r\n  • Deal {FinalDamage_Formula} [60% STR] Magical Damage to nearby enemies while Stunning\r\n  • You are CC Immune and gain Damage Mitigation while using this ability",
				"valueKeys": {
					"ChainRange ": [5.6],
					"Cooldown": [90, 90, 90, 90, 90],
					"Cost": [80, 85, 90, 95, 100],
					"Chain_Damage": [60, 80, 100, 120, 140],
					"DamageMit": [20, 22.5, 25, 27.5, 30],
					"Damage": [260, 355, 450, 545, 640],
					"StunDuration": [0.75, 0.75, 0.75, 0.75, 0.75],
					"StunRange": [2.8],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.4,
				"20": 28,
				"rate": 1.4000000000000001,
			},
			"BaseAttackSpeed": {
				"1": 0.93,
				"20": 0.93,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.8,
				"20": 5.83,
				"rate": 0.21210526315789474,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 29.2,
				"20": 59.4,
				"rate": 1.5894736842105264,
			},
			"ManaPerTime": {
				"1": 2.25,
				"20": 7,
				"rate": 0.25,
			},
			"MaxHealth": {
				"1": 650.6,
				"20": 2438,
				"rate": 94.07368421052632,
			},
			"MaxMana": {
				"1": 296,
				"20": 1094,
				"rate": 42,
			},
			"MovementSpeed": {
				"1": 442,
				"20": 442,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 43,
				"20": 87,
				"rate": 2.3157894736842106,
			},
			"PhysicalProtection": {
				"1": 20.1,
				"20": 80.6,
				"rate": 3.184210526315789,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "If multiple enemies are in the area, the enemy closest to the center of the area will be hit. ",
				},
				{
					"key": "",
					"text": "Has a 4 hit chain. Attacks in order of 1, 0.75, 1, 1.25x damage and swing time.",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "ConeAngle",
					"text": "<KeywordName>Cone Angle: {0} degrees",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Ares/Icon_BasicAttack_Magical.webp",
			"key": "Basic.MeleeMagical.InGame.Short",
			"name": "Ares Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Deal  Magical Damage to an enemy in front of you. ",
			"valueKeys": {
				"ConeAngle": [120],
				"Damage": [0],
				"RangeCheat": [1.92],
			},
		},
		"internalName": "Ares_Item",
		"key": "God.Ares",
		"name": "Ares",
		'Type': 'Magical',
		'icon': "/src/assets/icons/aresImage.webp",
		"passive": {
			"details": [
				{
					"key": "PerLevel",
					"text": "<KeywordName>Intelligence & Strength: {0} per Level",
				},
				{
					"key": "ProtScaling",
					"text": "<KeywordName>Strength: {0}% of Protections from Items",
				},
				{
					"key": "CDRScaling",
					"text": "<KeywordName>Int: {0}% of Cooldown Rate",
				},
			],
			"icon": "/assets/gods/Ares/Passive.webp",
			"key": "Ares.PSV.InGame.Short",
			"name": "Blessed Armaments",
			"shortDesc":
				"Provide Strength and Intelligence in an Aura.\r\n\r\n  • Build Protections to increase Strength Aura [12.5%] \r\n  • Build Cooldown Rate to increase Intelligence Aura [100%]\r\n  • Both Auras increase with Level [1 Per Level]",
			"valueKeys": {
				"CDRScaling": [100],
				"PerLevel": [1],
				"ProtScaling": [12.5],
			},
		},
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "Buildup takes 0.66 seconds.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Slow Strength",
						"text": "<KeywordName>Slow: {0}%",
					},
					{
						"key": "Slow Duration",
						"text": "<KeywordName>Slow Duration: {0}s",
					},
					{
						"key": "PhysProt_Buff",
						"text": "<KeywordName>Physical Protection: {0} + <ValueHighlight>10% Physical Protections",
					},
					{
						"key": "MagProt_Buff",
						"text": "<KeywordName>Magical Protection: {0} + <ValueHighlight>10% Magical Protections",
					},
					{
						"key": "Buff_Duration",
						"text": "<KeywordName>Buff Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/c4d1d691-a196-49c4-2403-6bdda4b5a100/public",
				"key": "Athena.A01.InGame.Short",
				"name": "Preemptive Strike",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.6, 0.6, 0.6, 0.6, 0.6],
						},
					],
				},
				"shortDesc":
					"Charge up, then Dash forward.\r\n\r\n  • Deals  {Damage_Formula} [60% STR] Magical Damage and Slows enemies\r\n  • Gain Physical Protection and Magical Protection when you hit an enemy god",
				"valueKeys": {
					"Buff_Duration": [4],
					"Cooldown": [14, 14, 14, 14, 14],
					"Cost": [40, 50, 60, 70, 80],
					"Damage": [50, 90, 130, 170, 210],
					"MagProt_Buff": [15, 20, 25, 30, 35],
					"PhysProt_Buff": [15, 20, 25, 30, 35],
					"Slow Duration": [2, 2, 2, 2, 2],
					"Slow Strength": [20, 22.5, 25, 27.5, 30],
				},
			},
			"A02": {
				"details": [
					{
						"key": "",
						"text": "Taunted enemies are Slowed by 25%.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Taunt Duration",
						"text": "<KeywordName>Taunt Duration: {0}s",
					},
					{
						"key": "Taunt Duration",
						"text": "<KeywordName>Taunt Duration Scaling: <ValueHighlight>0.2s per <ValueHighlight>150 Item Protections, stacking up to 2 times.",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
					{
						"key": "ConeAngle",
						"text": "<KeywordName>Cone Angle: {0} degrees",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/79e03545-e48d-4302-3074-fd2d5f00ef00/public",
				"key": "Athena.A02.InGame.Short",
				"name": "Confound",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.2, 0.2, 0.2, 0.2, 0.2],
						},
					],
				},
				"shortDesc":
					"Taunt enemies in front of you.\r\n\r\n  • Deals  [20% INT] Magical Damage",
				"valueKeys": {
					"ConeAngle": [90, 90, 90, 90, 90],
					"Cooldown": [18, 18, 18, 18, 18],
					"Cost": [60, 65, 70, 75, 80],
					"Damage": [40, 65, 90, 115, 140],
					"Radius": [5.6, 5.6, 5.6, 5.6, 5.6],
					"Taunt Duration": [0.75, 0.9, 1.05, 1.2, 1.35],
				},
			},
			"A03": {
				"details": [
					{
						"key": "",
						"text": "The delay between the first and second attack is 2 seconds.",
					},
					{
						"key": "Initial_Damage",
						"text": "<KeywordName>Initial Damage: {0}",
					},
					{
						"key": "Initial_Damage_Scaling",
						"text": "<KeywordName>Initial Damage Scaling: {0}",
					},
					{
						"key": "Secondary_Damage",
						"text": "<KeywordName>Final Damage: {0}",
					},
					{
						"key": "Secondary_Damage_Scaling",
						"text": "<KeywordName>Final Damage Scaling: {0}",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Initial_Damage_Formula": "{Initial_Damage} + {Initial_Damage_Scaling}",
					"Secondary_Damage_Formula": "{Secondary_Damage} + {Secondary_Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/e31bcbb6-2596-4472-4a5c-173a943eed00/public",
				"key": "Athena.A03.InGame.Short",
				"name": "Shield Wall",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [1,1,1,1,1],
						},
					],
					"Secondary_Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.55, 0.55, 0.55, 0.55, 0.55],
						},
					],
				},
				"shortDesc":
					"Create a Phalanx of Soldiers that strike twice in an area.\r\n\r\n  • Deals [45% INT] Magical Damage initially\r\n  • After a brief delay, deals an additional [55% INT] Magical Damage",
				"valueKeys": {
					"Cooldown": [14, 14, 14, 14, 14],
					"Cost": [50, 60, 70, 80, 90],
					"Damage": [140, 240, 340, 440, 540],
					"Radius": [3.2, 3.2, 3.2, 3.2, 3.2],
					"Secondary_Damage": [80, 140, 200, 260, 320],
				},
			},
			"A04": {
				"details": [
					{
						"key": "",
						"text": "Channel lasts for 3.34 seconds.",
					},
					{
						"key": "",
						"text": "If your ally dies before your channel completes you will still go to their location.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Shield_Base",
						"text": "<KeywordName>Shield Health: {0} ",
					},
					{
						"key": "Shield_Scaling_Scaling",
						"text": "<KeywordName>Shield Health Scaling: {0}",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Range: Global",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"Shield_Formula": "{Shield_Base} + {Shield_Scaling_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/3bff0076-cf2c-4de3-0908-6714b3462700/public",
				"key": "Athena.A04.InGame.Short",
				"name": "Defender Of Olympus",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.9, 0.9, 0.9, 0.9, 0.9],
						},
					],
					"Shield_Scaling_Scaling": [
						{
							"stat": "MaxHealth",
							"values": [0.125, 0.125, 0.125, 0.125, 0.125],
						},
					],
				},
				"shortDesc":
					"Teleport  to the aid of target ally god, anywhere on the map.\r\n\r\n  • Apply a  [12.5% Max Health] Health Shield to your target\r\n  • Deal  [90% INT] Magical Damage to nearby enemies upon landing\r\n  • You are CC Immune while using this ability",
				"valueKeys": {
					"Athena_Health": [],
					"Cooldown": [120, 120, 120, 120, 120],
					"Cost": [80, 90, 100, 110, 120],
					"Damage": [340, 415, 490, 565, 640],
					"Damage_Mitigation": [20],
					"Range": [-0.01, -0.01, -0.01, -0.01, -0.01],
					"Shield_Base": [50, 100, 150, 200, 250],
					"Shield_Scaling": [],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.4,
				"20": 28,
				"rate": 1.4000000000000001,
			},
			"BaseAttackSpeed": {
				"1": 0.93,
				"20": 0.93,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.8,
				"20": 5.83,
				"rate": 0.21210526315789474,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 29.2,
				"20": 59.4,
				"rate": 1.5894736842105264,
			},
			"ManaPerTime": {
				"1": 2.25,
				"20": 7,
				"rate": 0.25,
			},
			"MaxHealth": {
				"1": 650.6,
				"20": 2438,
				"rate": 94.07368421052632,
			},
			"MaxMana": {
				"1": 296,
				"20": 1094,
				"rate": 42,
			},
			"MovementSpeed": {
				"1": 442,
				"20": 442,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 43,
				"20": 87,
				"rate": 2.3157894736842106,
			},
			"PhysicalProtection": {
				"1": 20.1,
				"20": 80.6,
				"rate": 3.184210526315789,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "If multiple enemies are in the area, the enemy closest to the center of the area will be hit. ",
				},
				{
					"key": "",
					"text": "Has a 3 hit chain. Attacks in order of 1, 1, 2x damage and swing time.",
				},
				{
					"key": "",
					"text": "The final hit of the chain hits all targets in the area for 2x damage. ",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "ConeAngle",
					"text": "<KeywordName>Cone Angle: {0} degrees",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Athena/Icon_BasicAttack_Magical.webp",
			"key": "Basic.MeleeMagical.InGame.Short",
			"name": "Athena Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Deal  Magical Damage to an enemy in front of you. ",
			"valueKeys": {
				"ConeAngle": [120],
				"Damage": [0],
				"RangeCheat": [1.92],
			},
		},
		"basicb": {
			"icon": "/assets/gods/Athena/Passive.webp",
			"name": "Athena Inhand",
		},
		"internalName": "Athena_Item",
		"key": "God.Athena",
		"name": "Athena",
		'Type': 'Magical',
		icon: "/src/assets/icons/athenaImage.webp",
		"passive": {
			"details": [
				{
					"key": "",
					"text": "Deals 1.25x damage to the first target hit, passes through and damages all enemies, and passes through walls.",
				},
				{
					"key": "",
					"text": "This basic attack can Critically Strike.",
				},
				{
					"key": "",
					"text": "This basic attack can trigger Item Effects.",
				},
				{
					"key": "FirstDamage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
				"FirstDamage_Formula": "{FirstDamage} + {FirstDamage_Scaling}",
			},
			"icon": "/assets/gods/Athena/Passive.webp",
			"key": "Athena.PSV.InGame.Short",
			"name": "Reach",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
				"FirstDamage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1.25],
					},
					{
						"stat": "MagicalPower",
						"values": [0.7],
					},
				],
			},
			"shortDesc":
				"After using an ability, your next basic attack becomes a ranged projectile that deals  [125% STR + 70% INT] Magical Damage.",
			"valueKeys": {
				"Damage": [],
				"FirstDamage": [],
			},
		},
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "Empowered basic attack effect lasts until a target is successfully hit.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Heal",
						"text": "<KeywordName>Heal: {0}",
					},
					{
						"key": "StrengthBuff",
						"text": "<KeywordName>Strength: {0}",
					},
					{
						"key": "IntBuff",
						"text": "<KeywordName>Intelligence: {0}",
					},
					{
						"key": "Buff Duration",
						"text": "<KeywordName>Buff Duration: {0}s",
					},
					{
						"key": "DrunkAmount",
						"text": "<KeywordName>Drunkenness: {0}%",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"Heal_Formula": "{Heal}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/0d7aa5a3-4676-40cc-3b9b-f1899d624600/public",
				"key": "Bacchus.A01.InGame.Short",
				"name": "Chug",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalProtection",
							"values": [0.6, 0.65, 0.7, 0.75, 0.8],
						},
						{
							"stat": "MagicalProtection",
							"values": [0.6, 0.65, 0.7, 0.75, 0.8],
						},
					],
				},
				"shortDesc":
					"Take a drink, Healing, and becoming more Drunk.\r\n\r\n  • You also gain increased Strength and Intelligence\r\n  • Your next basic attack deals an additional  [60-80% of Protections] Magical Damage",
				"valueKeys": {
					"Buff Duration": [0, 6, 6, 6, 6, 6],
					"Cooldown": [12, 12, 12, 12, 12, 12],
					"Cost": [20, 20, 20, 20, 20, 20],
					"Damage": [10, 30, 50, 70, 90],
					"DrunkAmount": [40, 46, 52, 58, 64, 70],
					"Heal": [0, 20, 35, 50, 65, 80],
					"IntBuff": [10, 15, 20, 25, 30],
					"Range": [-0.01, -0.01, -0.01, -0.01, -0.01, -0.01],
					"StrengthBuff": [6, 10, 14, 18, 22],
				},
			},
			"A02": {
				"details": [
					{
						"key": "",
						"text": "Enemies are Displaced straight up. ",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/7199f6f8-b7ee-4589-8b58-807dd3ce5d00/public",
				"key": "Bacchus.A02.InGame.Short",
				"name": "Belly Flop",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.85, 0.85, 0.85, 0.85, 0.85],
						},
						{
							"stat": "PhysicalProtection",
							"values": [0.6, 0.6, 0.6, 0.6, 0.6],
						},
						{
							"stat": "MagicalProtection",
							"values": [0.6, 0.6, 0.6, 0.6, 0.6],
						},
					],
				},
				"shortDesc":
					"Leap forward to and slam into the ground belly first, Knocking Up enemies.\r\n\r\n  • Deals  [85% STR + 60% Protections] Magical Damage\r\n  • If you are Tipsy, enemies are also Slowed ",
				"valueKeys": {
					"Cooldown": [15, 15, 15, 15, 15],
					"Cost": [40, 50, 60, 70, 80],
					"Damage": [60, 105, 150, 195, 240],
					"Radius": [2.4, 2.4, 2.4, 2.4, 2.4],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
				},
			},
			"A03": {
				"details": [
					{
						"key": "",
						"text": "This ability hits {AttackCount} times, plus the final hit, over {Channel Duration} seconds.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Stun Duration",
						"text": "<KeywordName>Stun Duration: {0}s",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Range: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/9eb4af68-4cb0-4d25-d2ad-07010223d300/public",
				"key": "Bacchus.A03.InGame.Short",
				"name": "Belch Of The Gods",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.175, 0.175, 0.175, 0.175, 0.175],
						},
					],
				},
				"shortDesc":
					"Channel a big ol’ burp to deal  [17.5% INT] Magical Damage repeatedly to enemies in front of you. \r\n\r\n  • If you are Tipsy, the final hit will Stun\r\n  • Reduces enemy Healing\r\n  • You are Displacement Immune while Channeling",
				"valueKeys": {
					"AttackCount": [3, 3, 3, 3, 3],
					"Channel Duration": [1.5, 1.5, 1.5, 1.5, 1.5],
					"Cooldown": [10, 10, 10, 10, 10],
					"Cost": [40, 50, 60, 70, 80],
					"Damage": [25, 40, 55, 70, 85],
					"Radius": [5.6, 5.6, 5.6, 5.6, 5.6],
					"Stun Duration": [0.85, 0.95, 1.05, 1.15, 1.25],
				},
			},
			"A04": {
				"details": [
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Intox Duration",
						"text": "<KeywordName>Intoxicate Duration: {0}s",
					},
					{
						"key": "Str Buff",
						"text": "<KeywordName>Strength: {0}",
					},
					{
						"key": "Int Buff",
						"text": "<KeywordName>Intelligence: {0}",
					},
					{
						"key": "Buff Duration",
						"text": "<KeywordName>Buff Duration: {0}s",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/6d4f984e-a962-4ec5-c399-1f19a7c95b00/public",
				"key": "Bacchus.A04.InGame.Short",
				"name": "Intoxicate",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.65, 0.65, 0.65, 0.65, 0.65],
						},
					],
				},
				"shortDesc":
					"Smash your jug of wine, dealing  [65% INT] Magical Damage and Intoxicating enemies around you.\r\n\r\n  • If you are Smashed, gain Strength and Intelligence in anger over your lost wine",
				"valueKeys": {
					"Buff Duration": [6, 6, 6, 6, 6],
					"Cooldown": [90, 90, 90, 90, 90],
					"Cost": [90, 90, 90, 90, 90],
					"Damage": [230, 300, 370, 440, 510],
					"Int Buff": [20, 30, 40, 50, 60],
					"Intox Duration": [4, 4, 4, 4, 4],
					"Radius": [5.6, 5.6, 5.6, 5.6, 5.6],
					"Str Buff": [12, 20, 28, 36, 44],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.4,
				"20": 28,
				"rate": 1.4000000000000001,
			},
			"BaseAttackSpeed": {
				"1": 0.93,
				"20": 0.93,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.8,
				"20": 5.83,
				"rate": 0.21210526315789474,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 27.5,
				"20": 56,
				"rate": 1.5,
			},
			"ManaPerTime": {
				"1": 2.25,
				"20": 7,
				"rate": 0.25,
			},
			"MaxHealth": {
				"1": 650.6,
				"20": 2438,
				"rate": 94.07368421052632,
			},
			"MaxMana": {
				"1": 305,
				"20": 1127,
				"rate": 43.26315789473684,
			},
			"MovementSpeed": {
				"1": 442,
				"20": 442,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 43,
				"20": 87,
				"rate": 2.3157894736842106,
			},
			"PhysicalProtection": {
				"1": 19.6,
				"20": 78.3,
				"rate": 3.089473684210526,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "If multiple enemies are in the area, the enemy closest to the center of the area will be hit. ",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "ConeAngle",
					"text": "<KeywordName>Cone Angle: {0} degrees",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Bacchus/Icon_BasicAttack_Magical.webp",
			"key": "Basic.MeleeMagical.InGame.Short",
			"name": "Bacchus Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Deal  Magical Damage to an enemy in front of you. ",
			"valueKeys": {
				"ConeAngle": [120],
				"Damage": [0],
				"RangeCheat": [1.92],
			},
		},
		"internalName": "Bacchus_Item",
		"key": "God.Bacchus",
		"name": "Bacchus",
		'Type': 'Magical',
		icon: "/src/assets/icons/bacchusImage.webp",
		"passive": {
			"details": [
				{
					"key": "",
					"text": "Ranges from 0% to 100% Drunk.",
				},
				{
					"key": "Cost",
					"text": "Smashed Buff: +{STRBuffSmashed} Strength, +{INTBuffSmashed} Intelligence, +10% Physical Protection, +10% Magical Protection",
				},
				{
					"key": "Cost",
					"text": "Tipsy Buff: +{STRBuffTipsy} Strength, +{INTBuffTipsy} Intelligence, +5% Physical Protection, +5% Magical Protection",
				},
				{
					"key": "Cost",
					"text": "Has no effect when under 30%.",
				},
				{
					"key": "Cost",
					"text": "Tipsy when between 30% to 59%. ",
				},
				{
					"key": "Cost",
					"text": "Smashed when over 60%.",
				},
				{
					"key": "Cost",
					"text": "Drunkeness depletes over time at a rate of 2% per second.",
				},
			],
			"icon": "/assets/gods/Bacchus/Passive.webp",
			"key": "Bacchus.PSV.InGame.Short",
			"name": "Drunk-O-Meter",
			"shortDesc":
				"As you become more Drunk, gain Strength, Intelligence, and Protections.\r\n\r\n  • You become Tipsy at 30% Drunk\r\n  • You become Smashed at 60%, doubling the buffs",
			"valueKeys": {
				"INTBuffSmashed": [10, 10, 10, 10, 10, 10],
				"INTBuffTipsy": [5, 5, 5, 5, 5, 5],
				"MagProtBuffSmashed": [0.08],
				"MagProtBuffTipsy": [0.04],
				"PhysProtBuffSmashed": [0.08],
				"PhysProtBuffTipsy": [0.04],
				"STRBuffSmashed": [8, 8, 8, 8, 8, 8],
				"STRBuffTipsy": [3, 3, 3, 3, 3, 3],
			},
		},
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "Block absorbs all damage from one basic attack per stack.",
					},
					{
						"key": "",
						"text": "Bellona's Blocks also reflect back a portion of the blocked damage to enemies around her, this effect scales off her Physical Protection and Magical Protection.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Reflect Damage",
						"text": "<KeywordName>Reflect Damage: {0}% of the damage blocked",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Reflect Damage Scaling: {0}",
					},
					{
						"key": "Slow Amount",
						"text": "<KeywordName>Slow: {0}%",
					},
					{
						"key": "Slow Duration",
						"text": "<KeywordName>Slow Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"Reflect Damage_Formula": "{Reflect Damage} + {Reflect Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/36b2aaea-5643-4ec5-0575-e9a38e376d00/public",
				"key": "Bellona.A01.InGame.Short",
				"name": "Shield Bash",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalProtection",
							"values": [0.07, 0.07, 0.07, 0.07, 0.07],
						},
						{
							"stat": "MagicalProtection",
							"values": [0.07, 0.07, 0.07, 0.07, 0.07],
						},
					],
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.65, 0.65, 0.65, 0.65, 0.65],
						},
						{
							"stat": "Protections",
							"values": [0.3, 0.3, 0.3, 0.3, 0.3],
						},
						{
							"stat": "MagicalProtection",
							"values": [0.3, 0.3, 0.3, 0.3, 0.3],
						},
					],
				},
				"shortDesc":
					"Dash forward with your shield to deal  [65% STR + 30% Protections] Physical Damage and Slow enemies in front of you.\r\n\r\n  • Gain 1 Block stack for each enemy god hit\r\n  • Change to Sword and Shield basic attacks\r\n  • Every third successful basic attack grants a Block stack, reflecting damage",
				"valueKeys": {
					"CTScaling": [],
					"Cooldown": [14, 14, 14, 14, 14],
					"Cost": [50, 55, 60, 65, 70],
					"Damage": [50, 85, 120, 155, 190],
					"Radius": [4, 4, 4, 4, 4],
					"Range": [2.8, 2.8, 2.8, 2.8, 2.8],
					"Reflect Damage": [25, 25, 25, 25, 25],
					"Slow Amount": [20, 20, 20, 20, 20],
					"Slow Duration": [1.5, 1.5, 1.5, 1.5, 1.5],
				},
			},
			"A02": {
				"details": [
					{
						"key": "",
						"text": "Final Slam damage increases by {DamageIncreasePerGodHit} for each enemy god hit by the Spin attack.",
					},
					{
						"key": "SpinDamage",
						"text": "<KeywordName>Spin Damage: {0}",
					},
					{
						"key": "SpinDamage_Scaling",
						"text": "<KeywordName>Spin Damage Scaling: {0}",
					},
					{
						"key": "SlamDamage",
						"text": "<KeywordName>Slam Damage: {0}",
					},
					{
						"key": "CTSlamScaling_Scaling",
						"text": "<KeywordName>Slam Damage Scaling: {0} ",
					},
					{
						"key": "Spin Radius",
						"text": "<KeywordName>Spin Radius: {0}m",
					},
					{
						"key": "Slam Range",
						"text": "<KeywordName>Slam Range: {0}m",
					},
					{
						"key": "Slam Radius",
						"text": "<KeywordName>Slam Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{SpinDamage} + {SpinDamage_Scaling}",
					"FinalDamage_Formula": "{SlamDamage} + {CTSlamScaling_Scaling}",
					"SpinDamage_Formula": "{SpinDamage} + {SpinDamage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/d3e889ee-a6cd-45ca-4c07-1d6709f4e100/public",
				"key": "Bellona.A02.InGame.Short",
				"name": "Bludgeon",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [1.25, 0.825, 0.85, 0.875, 0.9],
						},
					],
					"SpinDamage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.35, 0.35, 0.35, 0.35, 0.35],
						},
					],
				},
				"shortDesc":
					"Spin your hammer to deal  [35% STR] Physical Damage to enemies around you, then slam to deal [90% STR] Physical Damage to enemies in a line.\r\n\r\n  • Change to Hammer basic attacks\r\n  • Your basic attacks now hit nearby enemies",
				"valueKeys": {
					"CTSlamScaling": [],
					"Cooldown": [14, 13, 12, 11, 10],
					"Cost": [40, 50, 60, 70, 80],
					"DamageIncreasePerGodHit": [0.25, 0.25, 0.25, 0.25, 0.25],
					"Range": [4.8, 4.8, 4.8, 4.8, 4.8],
					"Slam Radius": [1.92, 1.92, 1.92, 1.92, 1.92],
					"Damage":[115,210,305,400,495],
					"Slam Range": [4.8, 4.8, 4.8, 4.8, 4.8],
					"SlamDamage": [35, 65, 95, 125, 155],
					"Spin Radius": [4, 4, 4, 4, 4],
					"SpinDamage": [25, 50, 75, 100, 125],
				},
			},
			"A03": {
				"details": [
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "DisarmDuration",
						"text": "<KeywordName>Disarmed Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/8f05ca72-cf19-498c-cd44-ad6843444800/public",
				"key": "Bellona.A03.InGame.Short",
				"name": "Scourge",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.65, 0.65, 0.65, 0.65, 0.65],
						},
					],
				},
				"shortDesc":
					"Lash out with your Scourge to deal  [65% STR] Physical Damage and Disarm enemies.\r\n\r\n  • Change to Scourge basic attacks\r\n  • Your basic attacks Heal you",
				"valueKeys": {
					"Cooldown": [19, 18, 17, 16, 15],
					"Cost": [40, 50, 60, 70, 80],
					"Damage": [35, 60, 85, 110, 135],
					"DisarmDuration": [1.5, 1.6, 1.7, 1.8, 1.9],
					"Radius": [1.6, 1.6, 1.6, 1.6, 1.6],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
				},
			},
			"A04": {
				"details": [
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Stun Duration",
						"text": "<KeywordName>Stun Duration: {0}s",
					},
					{
						"key": "StrengthBuff",
						"text": "<KeywordName>Strength: {0} + <ValueHighlight>10% Protections",
					},
					{
						"key": "IntBuff",
						"text": "<KeywordName>Intelligence: {0} + <ValueHighlight>10% Protections",
					},
					{
						"key": "PhysProtBuff",
						"text": "<KeywordName>Physical Protection: {0} + <ValueHighlight>10% Physical Protections",
					},
					{
						"key": "MagProtBuff",
						"text": "<KeywordName>Magical Protection: {0} + <ValueHighlight>10% Magical Protections",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/843b0f61-8aa2-4fd8-0cf8-c8f0b9cf5600/public",
				"key": "Bellona.A04.InGame.Short",
				"name": "Eagle's Rally",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.8, 0.8, 0.8, 0.8, 0.8],
						},
					],
				},
				"shortDesc":
					"Leap forward and plant your flag to deal  [80% STR] Physical Damage and Stun enemies.\r\n\r\n  • The flag empowers you and allied gods in the area, granting Strength, Intelligence, Physical Protection, and Magical Protection\r\n  • You are CC Immune while Leaping",
				"valueKeys": {
					"Buff Radius": [0.128, 0.128, 0.128, 0.128, 0.128],
					"Cooldown": [90, 90, 90, 90, 90],
					"Cost": [100, 100, 100, 100, 100],
					"Damage": [100, 185, 270, 355, 440],
					"IntBuff": [30, 38, 46, 54, 62],
					"MagProtBuff": [15, 20, 25, 30, 35],
					"PhysProtBuff": [15, 20, 25, 30, 35],
					"Radius": [2.4, 2.4, 2.4, 2.4, 2.4],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
					"StrengthBuff": [16, 24, 32, 40, 48],
					"Stun Duration": [0.75, 0.75, 0.75, 0.75, 0.75],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.442,
				"20": 28.84,
				"rate": 1.442,
			},
			"BaseAttackSpeed": {
				"1": 0.96,
				"20": 0.96,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.7,
				"20": 5.5,
				"rate": 0.19999999999999998,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 28.3,
				"20": 57.7,
				"rate": 1.5473684210526317,
			},
			"ManaPerTime": {
				"1": 2.18,
				"20": 6.79,
				"rate": 0.2426315789473684,
			},
			"MaxHealth": {
				"1": 632.2,
				"20": 2369,
				"rate": 91.41052631578947,
			},
			"MaxMana": {
				"1": 287,
				"20": 1061,
				"rate": 40.73684210526316,
			},
			"MovementSpeed": {
				"1": 442,
				"20": 442,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 43,
				"20": 87,
				"rate": 2.3157894736842106,
			},
			"PhysicalProtection": {
				"1": 19.6,
				"20": 78.3,
				"rate": 3.089473684210526,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "If multiple enemies are in the area, the enemy closest to the center of the area will be hit. ",
				},
				{
					"key": "",
					"text": "Bellona remains in her current basic attacks. until she goes 7 seconds without dealing or taking damage.",
				},
				{
					"key": "",
					"text": "Greatsword has a 3 hit chain. Attacks in order of 1, 1, 1.5x damage and swing time, with no special effects.",
				},
				{
					"key": "",
					"text": "Sword and Shield has a 3 hit chain. Attacks in order of 0.5, 1, 1x damage and swing time and provides 1 block stack every enemy god hit. Max 3 Stacks.",
				},
				{
					"key": "",
					"text": "Hammer has a 3 hit chain. Attacks in order of 1.5, 1, 1.5x damage and 1.5, 1, 1.25x swing time. Hits all enemies in range of each attack. ",
				},
				{
					"key": "",
					"text": "Scourge has a 3 hit chain. Attacks in order of 1, 0.5, 1x damage and swing time and heals you on every successful hit.",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "HealBase",
					"text": "<KeywordName>Scourge Heal Per Hit: {0}",
				},
				{
					"key": "HealScaling_Scaling",
					"text": "<KeywordName>Scourge Heal Scaling Per Hit: {0}",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "ScourgeRangeCheat",
					"text": "<KeywordName>Scourge Range: {0}m",
				},
				{
					"key": "ConeAngle",
					"text": "<KeywordName>Cone Angle: {0} degrees",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
				"Heal_Formula": "{Heal} + {Heal_Scaling}",
			},
			"icon": "/assets/gods/Bellona/Icon_BasicAttack_Physical.webp",
			"key": "Bellona.Basic.InGame.Short",
			"name": "Bellona Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
				"HealScaling_Scaling": [
					{
						"stat": "PhysicalProtection",
						"values": [0.07, 0.07, 0.07, 0.07, 0.07],
					},
				],
			},
			"shortDesc":
				"Deal  Physical Damage to an enemy in front of you. \r\n\r\nYou have 4 different weapons to attack with, depending on the most recent ability used. ",
			"valueKeys": {
				"ConeAngle": [120],
				"Damage": [0],
				"HealBase": [5, 6, 7, 8, 9],
				"HealScaling": [],
				"RangeCheat": [1.92],
				"ScourgeRangeCheat": [2.56],
			},
		},
		"internalName": "Bellona_Item",
		"key": "God.Bellona",
		"name": "Bellona",
		'Type': 'Physical',
		icon: "/src/assets/icons/bellonaImage.webp",
		"passive": {
			"details": [
				{
					"key": "",
					"text": "Sword and Shield gains Physical Protection and Magical Protection per stack.",
				},
				{
					"key": "",
					"text": "Hammer gains % Strength per stack.",
				},
				{
					"key": "",
					"text": "Scourge gains Attack Speed per stack.",
				},
				{
					"key": "",
					"text": "All basic attacks still gain the Movement Speed per stack. ",
				},
				{
					"key": "",
					"text": "Sword and Shield gains Physical Protection and Magical Protection per stack.",
				},
				{
					"key": "MSBuff",
					"text": "<KeywordName>Movement Speed: {0}% Per Stack",
				},
				{
					"key": "PhysProtBuff",
					"text": "<KeywordName>Physical Protection : {0} Per Stack",
				},
				{
					"key": "MagProtBuff",
					"text": "<KeywordName>Magical Protection : {0} Per Stack",
				},
				{
					"key": "STRBuff",
					"text": "<KeywordName>Strength: {0}% Per Stack",
				},
				{
					"key": "ASBuff",
					"text": "<KeywordName>Attack Speed: {0}% Per Stack",
				},
				{
					"key": "BuffDuration",
					"text": "<KeywordName>Buff Duration: {0}s",
				},
				{
					"key": "MaxStacks",
					"text": "<KeywordName>Max Buff Stacks: {0}",
				},
			],
			"icon": "/assets/gods/Bellona/Passive.webp",
			"key": "Bellona.PSV.InGame.Short",
			"name": "Master Of War",
			"shortDesc":
				"When you hit or are hit by basic attacks, you gain stacks of Movement Speed.\r\n\r\n  • If using Sword and Shield, you also get Protection stacks\r\n  • If using Scourge, you also get Attack Speed stacks\r\n  • If using Hammer, you also get Strength stacks",
			"valueKeys": {
				"ASBuff": [3],
				"BuffDuration": [7],
				"MSBuff": [1.5],
				"MagProtBuff": [4],
				"MaxStacks": [5],
				"PhysProtBuff": [4],
				"STRBuff": [3],
			},
		},
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "Damage",
						"text": "This effect is always active once ranked.",
					},
					{
						"key": "Damage",
						"text": "Summer Season basic attacks deal Physical Damage if you have more Strength, or Magical Damage if you have more Intelligence.",
					},
					{
						"key": "Healing",
						"text": "<KeywordName>Spring Healing: {0}",
					},
					{
						"key": "Healing_Scaling",
						"text": "<KeywordName>Spring Heal Scaling: {0}",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Summer Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Summer Damage Scaling: {0} or Intelligence (whichever is higher)",
					},
					{
						"key": "PhysProtDebuff",
						"text": "<KeywordName>Fall Physical Protection Reduced: {0}%",
					},
					{
						"key": "MagProtDebuff",
						"text": "<KeywordName>Fall Magical Protection Reduced: {0}%",
					},
					{
						"key": "ProtDebuffScaling",
						"text": "<KeywordName>Debuff Scaling: {0}% Intelligence",
					},
					{
						"key": "ProtDebuffScaling",
						"text": "<KeywordName>Debuff Scaling: {0}% Intelligence",
					},
					{
						"key": "DebuffDuration",
						"text": "<KeywordName>Fall Debuff Duration: {0}s",
					},
					{
						"key": "SlowAmount",
						"text": "<KeywordName>Winter Slow: {0}%",
					},
					{
						"key": "SlowAmountScaling",
						"text": "<KeywordName>Winter Slow Scaling: {0}% Intelligence",
					},
					{
						"key": "SlowDuration",
						"text": "<KeywordName>Winter Slow Duration: {0}s",
					},
					{
						"key": "CooldownCheat",
						"text": "<KeywordName>Cooldown: {0}s",
					},
					{
						"key": "CostCheat",
						"text": "<KeywordName>Cost: {0}",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"Healing_Formula": "{Healing} + {Healing_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/9381d444-90d0-43ff-b52a-6ef6618af100/public",
				"key": "Cernunnos.A01.InGame.Short",
				"name": "Shifter Of Seasons",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.1, 0.13, 0.16, 0.19, 0.22],
						},
						{
							"stat": "MagicalPower",
							"values": [0.1, 0.13, 0.16, 0.19, 0.22],
						}
					],
					"Healing_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.15, 0.15, 0.15, 0.15, 0.15],
						},
					],
				},
				"shortDesc":
					"Activate to toggle between Spring, Summer, Fall, or Winter basic attack bonus effects.\r\n\r\n  • Spring: Self Healing [15% INT] \r\n  • Summer: Bonus Damage [10%-22% INT or STR, whichever is higher]\r\n  • Fall Protection Reduction [5-25%] + [5% INT] as flat reduction. \r\n  • Winter: Slow [2.5% INT] \n (Change season stance then add Shifter of Seasons to switch stances)",
				"valueKeys": {
					"Cooldown": [0,0,0,0,0],
					"CostCheat": [0],
					"Damage": [0, 0, 0, 0, 0],
					"DebuffDuration": [10, 10, 10, 10, 10],
					"Healing": [6, 7, 8, 9, 10],
					"MagProtDebuff": [5, 10, 15, 20, 25],
					"PhysProtDebuff": [5, 10, 15, 20, 25],
					"ProtDebuffScaling": [5, 5, 5, 5, 5],
					"SlowAmount": [10, 11, 12, 13, 14],
					"SlowAmountScaling": [2.5, 2.5, 2.5, 2.5, 2.5],
					"SlowDuration": [1.4, 1.4, 1.4, 1.4, 1.4],
				},
			},
			"A02": {
				"details": [
					{
						"key": "Damage",
						"text": "Projectile stops and explodes on first enemy hit. Projectile stops and explodes on walls or at max range. ",
					},
					{
						"key": "Damage",
						"text": "Bramble area hits {AttackCount} times over 5 seconds",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Initial Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Initial Damage Scaling: {0}",
					},
					{
						"key": "TickDamage",
						"text": "<KeywordName>Damage Per Tick: {0}",
					},
					{
						"key": "TickDamage_Scaling",
						"text": "<KeywordName>Damage Scaling Per Tick: {0}",
					},
					{
						"key": "RootDuration",
						"text": "<KeywordName>Root Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"Lifetime": "{AttackCount} * {RefireTime}",
					"TickDamage_Formula": "{TickDamage} + {TickDamage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/b7ebe0d4-b642-4f81-e848-21aca4065300/public",
				"key": "Cernunnos.A02.InGame.Short",
				"name": "Bramble Blast",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.55, 0.55, 0.55, 0.55, 0.55],
						},
						{
							"stat": "MagicalPower",
							"values": [0.8, 0.8, 0.8, 0.8, 0.8],
						},
					],
					"TickDamage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.08, 0.09, 0.1, 0.11, 0.12],
						},
					],
				},
				"shortDesc":
					"Fire a bramble that explodes on hit or upon reaching max range, dealing  [55% STR + 80% INT] Physical Damage in an area.\r\n\r\n  • This Roots a directly hit target\r\n  • The explosion leaves a bramble area that repeatedly deals [8-12% INT] Physical Damage",
				"valueKeys": {
					"Cooldown": [15, 15, 15, 15, 15],
					"Cost": [50, 60, 70, 80, 90],
					"Damage": [40, 75, 110, 145, 180],
					"Radius": [3.2],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
					"RefireTime": [0.5, 0.5, 0.5, 0.5, 0.5],
					"RootDuration": [1, 1, 1, 1, 1],
					"TickDamage": [6, 9, 12, 15, 18],
				},
			},
			"A03": {
				"details": [
					{
						"key": "Damage",
						"text": "Dash passes through all enemies.",
					},
					{
						"key": "Damage",
						"text": "You can cancel this ability at any time.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "RangeCheat",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "RadiusCheat",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/4531459d-d3bc-4c52-c791-b1d4039f5600/public",
				"key": "Cernunnos.A03.InGame.Short",
				"name": "Horn Charge",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [.85, .85, .85, .85, .85],
						},
					],
				},
				"shortDesc":
					"Dash forward, passing through all types of enemies.\r\n\r\n  •  Deals  [85% STR] Physical Damage to all enemies hit",
				"valueKeys": {
					"Cooldown": [17, 16, 15, 14, 13],
					"Cost": [70, 75, 80, 85, 90],
					"Damage": [20, 60, 100, 140, 180],
					"RadiusCheat": [1.6],
					"RangeCheat": [8.8],
				},
			},
			"A04": {
				"details": [
					{
						"key": "Damage",
						"text": "Polymorphed Enemies are Silenced, Disarmed, Slowed, and transformed to look like harmless animals.",
					},
					{
						"key": "Damage",
						"text": "Polymorphed Enemies are Silenced, Disarmed, Slowed, and transformed to look like harmless animals.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "PolymorphDur",
						"text": "<KeywordName>Polymorph Duration: {0}s",
					},
					{
						"key": "Slow",
						"text": "<KeywordName>Slow: {0}%",
					},
					{
						"key": "SlowDur",
						"text": "<KeywordName>Slow Duration: {0}s",
					},
					{
						"key": "SlowDur",
						"text": "<KeywordName>Slow Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "RadiusCheat",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/987012f2-7266-437c-e749-4097f1b74900/public",
				"key": "Cernunnos.A04.InGame.Short",
				"name": "The Wild Hunt",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [1, 1, 1, 1, 1],
						},
						{
							"stat": "PhysicalPower",
							"values": [.65,.65,.65,.65,.65,],
						}

					],
				},
				"shortDesc":
					"Polymorph enemy gods into wild boars and start The Wild Hunt.\r\n\r\n  • Deals  [100% INT + 65% STR] Physical Damage to all enemies in the area",
				"valueKeys": {
					"Cooldown": [90, 90, 90, 90, 90],
					"Cost": [100, 100, 100, 100, 100],
					"Damage": [200, 285, 370, 455, 540],
					"PolymorphDur": [2.25, 2.25, 2.25, 2.25, 2.25],
					"RadiusCheat": [4],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
					"Slow": [15, 15, 15, 15, 15],
					"SlowDur": [2.25, 2.25, 2.25, 2.25, 2.25],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.484,
				"20": 29.68,
				"rate": 1.484,
			},
			"BaseAttackSpeed": {
				"1": 0.99,
				"20": 0.99,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.7,
				"20": 5.5,
				"rate": 0.19999999999999998,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 26.7,
				"20": 54.3,
				"rate": 1.4526315789473683,
			},
			"ManaPerTime": {
				"1": 2.25,
				"20": 7,
				"rate": 0.25,
			},
			"MaxHealth": {
				"1": 595.3,
				"20": 2231,
				"rate": 86.08947368421053,
			},
			"MaxMana": {
				"1": 296,
				"20": 1094,
				"rate": 42,
			},
			"MovementSpeed": {
				"1": 430,
				"20": 430,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 47,
				"20": 95,
				"rate": 2.526315789473684,
			},
			"PhysicalProtection": {
				"1": 18.4,
				"20": 73.7,
				"rate": 2.910526315789474,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "Projectile stops on first target hit, and does not pass through walls. ",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "RadiusCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "RadiusCheat",
					"text": "<KeywordName>Radius: {0}m",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Cernunnos/Icon_BasicAttack_Physical.webp",
			"key": "Basic.RangedPhys.InGame.Short",
			"name": "Cernunnos Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Fire a projectile that deals  Physical Damage to the first enemy hit. ",
			"valueKeys": {
				"Damage": [0],
				"RadiusCheat": [0.48],
				"RangeCheat": [8.8],
			},
		},
		"internalName": "Cernunnos_Item",
		"key": "God.Cernunnos",
		"name": "Cernunnos",
		'Type': 'Physical',
		icon: "/src/assets/icons/cernunnosImage.webp",
		"passive": {
			"details": [
				{
					"key": "Damage",
					"text": "<KeywordName>Damage: <ValueHighlight>25% Strength + <ValueHighlight>5% Intelligence",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "ConeAngle",
					"text": "<KeywordName>Cone Angle: {0} degrees",
				},
			],
			"icon": "/assets/gods/Cernunnos/Passive.webp",
			"key": "Cernunnos.PSV.InGame.Short",
			"name": "Heavy Glaive",
			"shortDesc": "Basic attacks deal [25% STR + 5% INT] bonus Physical Damage to enemies in melee range.",
			"valueKeys": {
				"ConeAngle": [120],
				"Damage": [0],
				"INTScaling": [0.05],
				"RangeCheat": [1.92],
				"STRScaling": [0.25],
			},
		},
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "Reactivate to destroy the Axe.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/f2765a6f-8b07-41e6-e27c-e6afaf60b400/public",
				"key": "Chaac.A01.InGame.Short",
				"name": "Thunder Strike",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.8, 0.8, 0.8, 0.8, 0.8],
						},
						{
							"stat": "MagicalPower",
							"values": [0.6, 0.6, 0.6, 0.6, 0.6],
						},
					],
				},
				"shortDesc":
					"Throw your Axe forward, dealing  [80% STR + 60% INT] Physical Damage to enemies in the area where it lands. \r\n\r\n  • The Axe remains deployed to empower Torrent or Rain Dance\r\n  • Reactivate to destroy the Axe early",
				"valueKeys": {
					"Cooldown": [10, 10, 10, 10, 10],
					"Cost": [45, 50, 55, 60, 65],
					"Damage": [65, 115, 160, 215, 265],
					"Radius": [3.2, 3.2, 3.2, 3.2, 3.2],
					"Range": [9.6, 9.6, 9.6, 9.6, 9.6],
				},
			},
			"A02": {
				"details": [
					{
						"key": "",
						"text": "This Dash passes through walls.",
					},
					{
						"key": "",
						"text": "If you Dash, you will still do the area attack upon reaching the Axe.",
					},
					{
						"key": "",
						"text": "Minions Provide <ValueHighlight>{StacksPerNPC}  Stacks, Gods Provide <ValueHighlight>{StacksPerGod}  Stacks",
					},
					{
						"key": "MainDamage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "MainDamage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "DashDamage",
						"text": "<KeywordName>Dash Damage: {0}",
					},
					{
						"key": "DashDamage_Scaling",
						"text": "<KeywordName>Dash Damage Scaling: {0}",
					},
					{
						"key": "PhysProtPerStack",
						"text": "<KeywordName>Physical Protection : {0} Per Stack",
					},
					{
						"key": "MagProtPerStack",
						"text": "<KeywordName>Magical Protection : {0} Per Stack",
					},
					{
						"key": "ProtBuff_Scaling",
						"text": "<KeywordName>Protection Buff Scaling: <ValueHighlight>6% Intelligence",
					},
					{
						"key": "ProtBuffDuration",
						"text": "<KeywordName>Buff Duration: {0}s",
					},
					{
						"key": "MaxProtStacks",
						"text": "<KeywordName>Max Buff Stacks: {0}",
					},
					{
						"key": "AttackRadius",
						"text": "<KeywordName>Attack Radius: {0}m",
					},
					{
						"key": "DashRadius",
						"text": "<KeywordName>Dash Radius: {0}m",
					},
				],
				"formulas": {
					"DashDamage_Formula": "{DashDamage} + {DashDamage_Scaling}",
					"MainDamage_Formula": "{MainDamage} + {MainDamage_Scaling}",
					"MaxProtStacks_Formula": "{MaxProtStacks} + {MaxProtStacks_Scaling}",
					"ProtScaling_Formula": "100 * {ProtBuff_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/ee9947a6-95f4-4180-968c-989833154800/public",
				"key": "Chaac.A02.InGame.Short",
				"name": "Torrent",
				"scales": {
					"DashDamage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.3, 0.3, 0.3, 0.3, 0.3],
						},
					],
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.75, 0.75, 0.75, 0.75, 0.75],
						},
					],
				},
				"shortDesc":
					"Swing your Axe around you, dealing [75% STR] Physical Damage to enemies and gaining Physical Protection and Magical Protection for each enemy hit.\r\n\r\n  • If the Axe is deployed, first Dash to it and deal [30% STR] Physical Damage to enemies that you pass through",
				"valueKeys": {
					"AttackRadius": [3.2, 3.2, 3.2, 3.2, 3.2],
					"Cooldown": [10, 9, 8, 7, 6],
					"Cost": [50, 60, 70, 80, 90],
					"DashDamage": [35, 57.5, 80, 102.5, 125],
					"DashRadius": [1.28],
					"MagProtPerStack": [5, 7, 9, 11, 13],
					"Damage": [70, 115, 160, 205, 250],
					"MaxProtStacks": [4],
					"PhysProtPerStack": [5, 7, 9, 11, 13],
					"ProtBuffDuration": [5, 5, 5, 5, 5],
					"ProtBuff_Scaling": [0.06, 0.06, 0.06, 0.06, 0.06],
					"StacksPerGod": [2],
					"StacksPerNPC": [1],
				},
			},
			"A03": {
				"details": [
					{
						"key": "",
						"text": "Heals 8 times over {HealDuration} seconds.",
					},
					{
						"key": "",
						"text": "If the Axe is deployed, create a Rain Storm at the Axe's location as well. ",
					},
					{
						"key": "",
						"text": "Enemies in both Rain Storms are Slowed and Debuffed for twice as much.",
					},
					{
						"key": "Heal",
						"text": "<KeywordName>Heal Per Tick: {0}",
					},
					{
						"key": "Heal_Scaling",
						"text": "<KeywordName>Heal Scaling Per Tick: {0}",
					},
					{
						"key": "Slow",
						"text": "<KeywordName>Slow: {0}%",
					},
					{
						"key": "AttackSpeedSlow",
						"text": "<KeywordName>Attack Speed Slow: {0}%",
					},
					{
						"key": "CheatRadiusSelf",
						"text": "<KeywordName>Radius: {0}m",
					},
					{
						"key": "CheatRadiusAxe",
						"text": "<KeywordName>Axe Radius: {0}m",
					},
				],
				"formulas": {
					"HealTotal_Formula": "({Heal} + {Heal_Scaling}) * 12",
					"Heal_Formula": "{Heal} + {Heal_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/95f275a4-f094-4578-dda3-d981d9860d00/public",
				"key": "Chaac.A03.InGame.Short",
				"name": "Rain Dance",
				"scale": {
					"Heal_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.05, 0.05, 0.05, 0.05, 0.05],
						},
					],
				},
				"shortDesc":
					"Create a rainstorm that Heals you over time for [5% INT] Health.\r\n\r\n  • Enemies caught in the rain are Slowed and have  reduced Attack Speed\r\n  • If the Axe is deployed, create a second rainstorm there",
				"valueKeys": {
					"AttackSpeedSlow": [10, 12.5, 15, 17.5, 20],
					"CheatRadiusAxe": [9.6],
					"CheatRadiusSelf": [6.4],
					"Cooldown": [16, 16, 16, 16, 16],
					"Cost": [55, 65, 75, 85, 95],
					"Heal": [6, 11, 16, 21, 26],
					"HealDuration": [6, 6, 6, 6, 6],
					"HealPeriod": [0.5],
					"Slow": [15, 17.5, 20, 22.5, 25],
				},
			},
			"A04": {
				"details": [
					{
						"key": "",
						"text": "Enemies are Displaced straight up. ",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "DamageMitigation",
						"text": "<KeywordName>Damage Mitigation: {0}%",
					},
					{
						"key": "Silence",
						"text": "<KeywordName>Silence Duration: {0}s",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"DamageMitigation_Formula": "{DamageMitigation} + {DamageMitigation_Scaling}",
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/54bdecba-1884-4885-0d2d-17d24a67f500/public",
				"key": "Chaac.A04.InGame.Short",
				"name": "Storm Call",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [1.1, 1.1, 1.1, 1.1, 1.1],
						},
						{
							"stat": "MagicalPower",
							"values": [1, 1, 1, 1, 1],
						},
					],
				},
				"shortDesc":
					"Charge up your lightning axe, then unleash a blast dealing  [110% STR + 100% INT] Physical Damage, Knocking Up, and Silencing in an area around you.\r\n\r\n  • You are CC Immune and gain Damage Mitigation while charging",
				"valueKeys": {
					"Cooldown": [90, 90, 90, 90, 90],
					"Cost": [80, 90, 100, 110, 120],
					"Damage": [225, 280, 335, 390, 445],
					"DamageMitigation": [50, 55, 60, 65, 70],
					"Radius": [5.6, 5.6, 5.6, 5.6, 5.6],
					"Silence": [1.5, 1.5, 1.5, 1.5, 1.5],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.442,
				"20": 28.84,
				"rate": 1.442,
			},
			"BaseAttackSpeed": {
				"1": 0.96,
				"20": 0.96,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.7,
				"20": 5.5,
				"rate": 0.19999999999999998,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 28.3,
				"20": 57.7,
				"rate": 1.5473684210526317,
			},
			"ManaPerTime": {
				"1": 2.25,
				"20": 7,
				"rate": 0.25,
			},
			"MaxHealth": {
				"1": 632.2,
				"20": 2369,
				"rate": 91.41052631578947,
			},
			"MaxMana": {
				"1": 296,
				"20": 1094,
				"rate": 42,
			},
			"MovementSpeed": {
				"1": 442,
				"20": 442,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 43,
				"20": 87,
				"rate": 2.3157894736842106,
			},
			"PhysicalProtection": {
				"1": 19.6,
				"20": 78.3,
				"rate": 3.089473684210526,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "If multiple enemies are in the area, the enemy closest to the center of the area will be hit. ",
				},
				{
					"key": "",
					"text": "Has a 3 hit chain. Attacks in order of 1, 0.5, 1.5x damage and swing time.",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "ConeAngle",
					"text": "<KeywordName>Cone Angle: {0} degrees",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Chaac/Icon_BasicAttack_Physical.webp",
			"key": "Basic.MeleePhys.InGame.Short",
			"name": "Chaac Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Deal  Physical Damage to an enemy in front of you. ",
			"valueKeys": {
				"ConeAngle": [120],
				"Damage": [0],
				"RangeCheat": [1.92],
			},
		},
		"internalName": "Chaac_Item",
		"key": "God.Chaac",
		"name": "Chaac",
		'Type': 'Physical',
		icon: "/src/assets/icons/chaacImage.webp",
		"passive": {
			"details": [
				{
					"key": "CooldownBuffHack",
					"text": "<KeywordName>Cooldown: {0}s",
				},
				{
					"key": "Heal",
					"text": "<KeywordName>Heal: {0}",
				},
				{
					"key": "Heal_Scaling",
					"text": "<KeywordName>Heal Scaling: {0}",
				},
			],
			"formulas": {
				"Heal_Formula": "{Heal} + {Heal_Scaling}",
			},
			"icon": "/assets/gods/Chaac/Passive.webp",
			"key": "Chaac.PSV.InGame.Short",
			"name": "Overflow",
			"scales": {
				"Heal_Scaling": [
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc":
				"After 5 successful basic attacks, the next ability you use: \r\n\r\n  • Costs 0 Mana\r\n  • Has lower Cooldown\r\n  • Heals you for  [20% INT]",
			"valueKeys": {
				"CooldownBuff": [],
				"CooldownBuffHack": [-2],
				"Heal": [10],
			},
		},
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "Hitting an enemy god reduces the Cooldown of this ability by 30%.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Stun",
						"text": "<KeywordName>Stun Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "CheatRadius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/0cdb01d9-86c0-45e4-9d62-ae9a20f57400/public",
				"key": "Fenrir.A01.InGame.Short",
				"name": "Unchained",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.75, 0.75, 0.75, 0.75, 0.75],
						},
						{
							"stat": "MagicalProtection",
							"values": [0.4, 0.4, 0.4, 0.4, 0.4],
						},
						{
							"stat": "PhysicalProtection",
							"values": [0.4, 0.4, 0.4, 0.4, 0.4],
						},
					],
				},
				"shortDesc":
					"Savagely Leap forward, dealing  [75% STR + 40% Protections] Physical Damage when you land.\r\n\r\n  • When Empowered, Stun all enemies in the area, then remove all Runes\r\n  • If not Empowered, gain 3 Runes",
				"valueKeys": {
					"CheatRadius": [2.4],
					"Cooldown": [15, 15, 15, 15, 15],
					"Cooldown Refund": [],
					"Cost": [50, 55, 60, 65, 70],
					"Damage": [60, 105, 150, 195, 240],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
					"Stun": [0.75, 0.75, 0.75, 0.75, 0.75],
				},
			},
			"A02": {
				"details": [
					{
						"key": "StrengthBuff",
						"text": "<KeywordName>Strength: {0}",
					},
					{
						"key": "Attack Speed Buff",
						"text": "<KeywordName>Attack Speed: {0}%",
					},
					{
						"key": "Lifesteal Buff",
						"text": "<KeywordName>Lifesteal: {0}%",
					},
					{
						"key": "Buff Duration",
						"text": "<KeywordName>Buff Duration: {0}s",
					},
					{
						"key": "CheatRadius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/4c0431b1-6abe-4f4a-7ff2-25cdc9129200/public",
				"key": "Fenrir.A02.InGame.Short",
				"name": "Seething Howl",
				"shortDesc":
					"Unleash a howl, gaining increased Strength, Attack Speed, and Lifesteal.\r\n\r\n  • When Empowered, nearby allied gods also gain increased Lifesteal\r\n  • If not Empowered, gain 3 Runes",
				"valueKeys": {
					"Attack Speed Buff": [25, 25, 25, 25, 25],
					"Buff Duration": [6, 6, 6, 6, 6],
					"CheatRadius": [7.2],
					"Cooldown": [11, 11, 11, 11, 11],
					"Cost": [60, 65, 70, 75, 80],
					"Lifesteal Buff": [20, 20, 20, 20, 20],
					"StrengthBuff": [15, 25, 35, 45, 55],
				},
			},
			"A03": {
				"details": [
					{
						"key": "",
						"text": "This ability hits 4 times over 1.08 seconds.",
					},
					{
						"key": "",
						"text": "Gain Physical and Magical Protections while Channeling.",
					},
					{
						"key": "",
						"text": "This ability can Critically Strike.",
					},
					{
						"key": "",
						"text": "This ability can trigger both ability and basic attack item effects.",
					},
					{
						"key": "",
						"text": "Your target is Revealed while you are Channeling.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "IncreasedDamage_Scaling",
						"text": "<KeywordName>Increased Damage Scaling: {0}",
					},
					{
						"key": "Phys Prot Buff",
						"text": "<ValueHighlight>Physical Protection: {Phys Prot Buff} + {Phys Prot Buff Per Level} per Level",
					},
					{
						"key": "Magical Prot Buff",
						"text": "<ValueHighlight>Magical Protection: {Magical Prot Buff} + {Magical Prot Buff Per Level} per Level",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "CheatRadius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"IncreasedDamage_Formula": "{IncreasedDamage} + {IncreasedDamage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/2a47c214-7082-4267-77fb-3282fe909a00/public",
				"key": "Fenrir.A03.InGame.Short",
				"name": "Brutalize",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.45, 0.45, 0.45, 0.45, 0.45],
						},
					],
					"IncreasedDamage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.65, 0.65, 0.65, 0.65, 0.65],
						},
					],
				},
				"shortDesc":
					"Gain Protections, Leap forward, and grab onto an enemy, dealing  [45% STR] Physical Damage repeatedly to all nearby enemies.\r\n\r\n  • You are Displacement Immune while Channeling\r\n  • When Empowered, deal  [65% STR] Physical Damage repeatedly instead, then all Runes are consumed\r\n  •  If not Empowered, gain 1 Rune per successful hit",
				"valueKeys": {
					"CheatRadius": [1.6],
					"Cooldown": [11, 11, 11, 11, 11],
					"Cost": [60, 65, 70, 75, 80],
					"Damage": [40, 65, 90, 115, 140],
					"IncreasedDamage": [40, 65, 90, 115, 140],
					"Magical Prot Buff": [5, 5, 5, 5, 5],
					"Magical Prot Buff Per Level": [2, 2, 2, 2, 2],
					"Phys Prot Buff": [5, 5, 5, 5, 5],
					"Phys Prot Buff Per Level": [2, 2, 2, 2, 2],
					"Range": [4.8, 4.8, 4.8, 4.8, 4.8],
				},
			},
			"A04": {
				"details": [
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Movement Speed Buff",
						"text": "<KeywordName>Movement Speed: {0}%",
					},
					{
						"key": "Phys Prot Buff",
						"text": "<KeywordName>Physical Protection: {0} + <ValueHighlight>15% Physical Protections",
					},
					{
						"key": "Phys Prot Buff",
						"text": "<KeywordName>Magical Protection: {0} + <ValueHighlight>15% Magical Protections",
					},
					{
						"key": "Duration",
						"text": "<KeywordName>Buff Duration: {0}s",
					},
					{
						"key": "CarryDuration",
						"text": "<KeywordName>Grab Duration: {0}s",
					},
					{
						"key": "ConeAngle",
						"text": "<KeywordName>Cone Angle: {0} degrees",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/c48eafdd-5c41-4083-40c3-0067c6b4cc00/public",
				"key": "Fenrir.A04.InGame.Short",
				"name": "Ragnarok",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [1, 1, 1, 1, 1],
						},
					],
				},
				"shortDesc":
					"Grow massive in size, and your next next basic attack deals  [100% STR] Physical Damage and can Pick Up an enemy god and carry them to any position.\r\n\r\n  • Gain increased Movement Speed, Physical Protection, and Magical Protection and become CC Immune while massive",
				"valueKeys": {
					"CarryDuration": [1.75, 1.75, 1.75, 1.75, 1.75],
					"ConeAngle": [120],
					"Cooldown": [100, 100, 100, 100, 100],
					"Cost": [50, 55, 60, 65, 70],
					"Damage": [180, 240, 300, 360, 420],
					"Duration": [4, 4, 4, 4, 4],
					"Magical Prot Buff": [20, 30, 40, 50, 60],
					"Movement Speed Buff": [75, 75, 75, 75, 75],
					"Phys Prot Buff": [20, 25, 30, 35, 40],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.484,
				"20": 29.68,
				"rate": 1.484,
			},
			"BaseAttackSpeed": {
				"1": 0.99,
				"20": 0.99,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.7,
				"20": 5.5,
				"rate": 0.19999999999999998,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 27.5,
				"20": 56,
				"rate": 1.5,
			},
			"ManaPerTime": {
				"1": 2.25,
				"20": 7,
				"rate": 0.25,
			},
			"MaxHealth": {
				"1": 613.8,
				"20": 2300,
				"rate": 88.74736842105263,
			},
			"MaxMana": {
				"1": 296,
				"20": 1094,
				"rate": 42,
			},
			"MovementSpeed": {
				"1": 442,
				"20": 442,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 46,
				"20": 93,
				"rate": 2.473684210526316,
			},
			"PhysicalProtection": {
				"1": 19,
				"20": 76,
				"rate": 3,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "If multiple enemies are in the area, the enemy closest to the center of the area will be hit. ",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "ConeAngle",
					"text": "<KeywordName>Cone Angle: {0} degrees",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Fenrir/Icon_BasicAttack_Physical.webp",
			"key": "Basic.MeleePhys.InGame.Short",
			"name": "Fenrir Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Deal  Physical Damage to an enemy in front of you. ",
			"valueKeys": {
				"ConeAngle": [120],
				"Damage": [0],
				"RangeCheat": [1.92],
			},
		},
		"internalName": "Fenrir_Item",
		"key": "God.Fenrir",
		"name": "Fenrir",
		'Type': 'Physical',
		icon: "/src/assets/icons/fenrirImage.webp",
		"passive": {
			"icon": "/assets/gods/Fenrir/Passive.webp",
			"key": "Fenrir.PSV.InGame.Short",
			"name": "Unbound Runes",
			"shortDesc":
				"Your Runes are activated by successful basic attacks, or by activating abilities.\r\n\r\nAt five Runes your next Ability becomes Empowered and gains an additional effect.",
		},
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "SlowAmt",
						"text": "<KeywordName>Slow: {0}%",
					},
					{
						"key": "SlowDuration",
						"text": "<KeywordName>Slow Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "RadiusCheat",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/7e16801e-58ef-40fa-5f22-2de88708c900/public",
				"key": "Hades.A01.InGame.Short",
				"name": "Death From Below",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.6, 0.6, 0.6, 0.6, 0.6],
						},
					],
				},
				"shortDesc":
					"Leap through the underworld, then emerge and deal  [60% INT] Magical Damage to enemies.\r\n\r\n  • Blighted enemies are Slowed ",
				"valueKeys": {
					"Cooldown": [14, 14, 14, 14, 14],
					"Cost": [50, 55, 60, 65, 70],
					"Damage": [70, 115, 160, 205, 250],
					"RadiusCheat": [3.2],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
					"SlowAmt": [20, 25, 30, 35, 40],
					"SlowDuration": [2, 2, 2, 2, 2],
				},
			},
			"A02": {
				"details": [
					{
						"key": "",
						"text": "Enemies are feared in a random direction away from Hades.",
					},
					{
						"key": "SilenceDuration",
						"text": "<KeywordName>Silence Duration: {0}s",
					},
					{
						"key": "SilenceDuration",
						"text": "<KeywordName>Silence Duration Scaling: <ValueHighlight>0.2s per <ValueHighlight>150 Item Protections, stacking up to 2 times.",
					},
					{
						"key": "FearDuration",
						"text": "<KeywordName>Feared Duration: {0}s",
					},
					{
						"key": "FearDuration",
						"text": "<KeywordName>Fear Duration Scaling: <ValueHighlight>0.2s per <ValueHighlight>150 Item Protections, stacking up to 2 times.",
					},
					{
						"key": "RangeCheat",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "ConeAngle",
						"text": "<KeywordName>Cone Angle: {0} degrees",
					},
				],
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/c6bae3b2-d32d-475d-5ca1-a21ec9a60b00/public",
				"key": "Hades.A02.InGame.Short",
				"name": "Shroud Of Darkness",
				"shortDesc": "Silence enemies in front of you.\r\n\r\n  • Blighted enemies are also Feared",
				"valueKeys": {
					"ConeAngle": [110],
					"Cooldown": [14, 13, 12, 11, 10],
					"Cost": [60, 60, 60, 60, 60],
					"FearDuration": [0.75, 0.85, 0.95, 1.05, 1.15],
					"Range": [0, 0, 0, 0, 0],
					"RangeCheat": [5.6],
					"SilenceDuration": [0.75, 0.85, 0.95, 1.05, 1.15],
				},
			},
			"A03": {
				"details": [
					{
						"key": "",
						"text": "Enemies take reduced damage if hit by multiple explosions.",
					},
					{
						"key": "",
						"text": "Blight explosions can chain, detonating blighted enemies not in the original detonate area. These contribute towards your heal.",
					},
					{
						"key": "",
						"text": "Hades heals immediately. Allies within 10.4m have a homing projectile sent towards them that heals on arrival.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "ExplodeDamage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "ExplodeDamage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Heal",
						"text": "<KeywordName>Heal: {0}",
					},
					{
						"key": "Heal",
						"text": "<KeywordName>Heal Scaling: <ValueHighlight>10% Protections from Items",
					},
					{
						"key": "RadiusCheat",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"ExplodeDamageGod_Formula": "{ExplodeDamageGod} + {ExplodeDamageGod_Scaling}",
					"ExplodeDamageMinion_Formula": "{ExplodeDamageMinion} + {ExplodeDamageMinion_Scaling}",
					"ExplodeDamage_Formula": "{ExplodeDamage} + {ExplodeDamage_Scaling}",
					"Heal_Formula": "{Heal}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/eff5fea6-b20d-4df1-835f-37720b058d00/public",
				"key": "Hades.A03.InGame.Short",
				"name": "Devour Souls",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [1.2, 1.2, 1.2, 1,2, 1.2],
						},
					],
					"ExplodeDamage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.45, 0.45, 0.45, 0.45, 0.45],
						},
					],
				},
				"shortDesc":
					"Devour the souls of your enemies, dealing  [65% INT] Magical Damage to enemies around you.\r\n\r\n  • Blighted enemies Detonate when hit, dealing additional  [45% INT] Magical Damage to them and enemies around them\r\n  • Each Detonation also Heals you and nearby allies for  [10% Protections from Items]",
				"valueKeys": {
					"Cooldown": [10, 9.5, 9, 8.5, 8],
					"Cost": [60, 65, 70, 75, 80],
					"Damage": [80, 130, 180, 230, 280],
					"ExplodeDamage": [10, 25, 40, 55, 70],
					"Heal": [20, 35, 50, 65, 80],
					"RadiusCheat": [3.2],
					"Range": [-0.01, -0.01, -0.01, -0.01, -0.01],
				},
			},
			"A04": {
				"details": [
					{
						"key": "",
						"text": "Vortexes slow targets moving away from the vortexes source, or speed up targets moving toward it. ",
					},
					{
						"key": "",
						"text": "This Vortex increases in intensity as the channel time progresses.",
					},
					{
						"key": "",
						"text": "Channel times is 4 seconds. Hits 8 times. ",
					},
					{
						"key": "",
						"text": "You are Rooted while Channeling.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage Per Tick: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling Per Tick: {0}",
					},
					{
						"key": "ProtDebuff",
						"text": "<KeywordName>Physical Protection Reduced: {0}",
					},
					{
						"key": "ProtDebuff%",
						"text": "<KeywordName>Physical Protection Reduced: {0}%",
					},
					{
						"key": "ProtDebuff",
						"text": "<KeywordName>Magical Protection Reduced: {0}",
					},
					{
						"key": "ProtDebuff%",
						"text": "<KeywordName>Magical Protection Reduced: {0}%",
					},
					{
						"key": "DebuffDur",
						"text": "<KeywordName>Debuff Duration: {0}s",
					},
					{
						"key": "ProtectionBuff",
						"text": "<KeywordName>Physical Protection: {0} + <ValueHighlight>10% Physical Protections from Items",
					},
					{
						"key": "ProtectionBuff",
						"text": "<KeywordName>Magical Protection: {0} + <ValueHighlight>10% Magical Protections from Items",
					},
					{
						"key": "RadiusCheat",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/d3241d4e-5f4d-4196-812a-de9687deae00/public",
				"key": "Hades.A04.InGame.Short",
				"name": "Pillar Of Agony",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.25, 0.25, 0.25, 0.25, 0.25],
						},
					],
				},
				"shortDesc":
					"Channel a Vortex around you that drags foes to their death, and repeatedly deals   Magical Damage.\r\n\r\n  • You may use one other ability while Channeling\r\n  • Blighted enemies have their  Protections reduced\r\n  • You are CC Immune, and gain Increased Protections while Channelling",
				"valueKeys": {
					"Cooldown": [90, 90, 90, 90, 90],
					"Cost": [100, 100, 100, 100, 100],
					"Damage": [40,55,70,85,100],
					"DebuffDur": [4, 4, 4, 4, 4],
					"ProtDebuff": [10, 13, 16, 19, 22],
					"ProtDebuff%": [10, 10, 10, 10, 10],
					"ProtectionBuff": [50, 65, 80, 95, 110],
					"RadiusCheat": [4.8],
					"cooldownbuff": [0.4],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.358,
				"20": 27.16,
				"rate": 1.3579999999999999,
			},
			"BaseAttackSpeed": {
				"1": 0.93,
				"20": 0.93,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.7,
				"20": 5.5,
				"rate": 0.19999999999999998,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 26.7,
				"20": 54.3,
				"rate": 1.4526315789473683,
			},
			"ManaPerTime": {
				"1": 2.25,
				"20": 7,
				"rate": 0.25,
			},
			"MaxHealth": {
				"1": 613.8,
				"20": 2300,
				"rate": 88.74736842105263,
			},
			"MaxMana": {
				"1": 305,
				"20": 1127,
				"rate": 43.26315789473684,
			},
			"MovementSpeed": {
				"1": 430,
				"20": 430,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 43,
				"20": 87,
				"rate": 2.3157894736842106,
			},
			"PhysicalProtection": {
				"1": 19,
				"20": 76,
				"rate": 3,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "Projectile stops on first target hit, and does not pass through walls. ",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "RadiusCheat",
					"text": "<KeywordName>Radius: {0}m",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Hades/Icon_BasicAttack_Magical.webp",
			"key": "Basic.RangedMag.InGame.Short",
			"name": "Hades Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Fire a projectile that deals  Magical Damage to the first enemy hit. ",
			"valueKeys": {
				"Damage": [0],
				"RadiusCheat": [0.48],
				"RangeCheat": [8.8],
			},
		},
		"internalName": "Hades_Item",
		"key": "God.Hades",
		"name": "Hades",
		'Type': 'Magical',
		icon: "/src/assets/icons/hadesImage.webp",
		"passive": {
			"details": [
				{
					"key": "STRINTDebuff%",
					"text": "<KeywordName>Strength: {0}%",
				},
				{
					"key": "STRINTDebuff%",
					"text": "<KeywordName>Intelligence: {0}%",
				},
				{
					"key": "BlightDuration",
					"text": "<KeywordName>Debuff Duration: {0}s",
				},
			],
			"icon": "/assets/gods/Hades/Passive.webp",
			"key": "Hades.PSV.InGame.Short",
			"name": "Blight",
			"shortDesc":
				"Your attacks and abilities apply Blight. \r\n\r\n  • Blighted enemies have reduced Strength and Intelligence\r\n  • Your abilities have extra effects on Blighted enemies",
			"valueKeys": {
				"BlightDuration": [8],
				"STRINTDebuff%": [5],
			},
		},
	},
	{
		abilities: {
			A01: {
				details: [{
					key: "",
					text: "Subsequent hits of bags or explosions on the same enemy deal 15% damage."
				}, {
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "AOE_Damage",
					text: "<KeywordName>Explode Damage</>: {0}"
				}, {
					key: "AOE_Damage_Scaling",
					text: "<KeywordName>Explode Damage Scaling</>: {0}"
				}, {
					key: "Range",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "CheatRadius",
					text: "<KeywordName>Radius:</> {0}m"
				}, {
					key: "CheatRadius_AOE",
					text: "<KeywordName>Explode Radius</>: {0}m"
				}],
				formulas: {
					AOE_Damage_Formula: "{AOE_Damage} + {AOE_Damage_Scaling}",
					Damage_Formula: "{Damage} + {Damage_Scaling}"
				},
				icon: '/SMITE-Damage-Calculator/static/buffIcons/danzeOne.webp',
				key: "Danzaburou.A01.InGame.Short",
				name: "Fool's Gold",
				scales: {
					AOE_Damage_Scaling: [{
						stat: "PhysicalPower",
						values: [.3, .3, .3, .3, .3]
					}, {
						stat: "MagicalPower",
						values: [.15, .15, .15, .15, .15]
					}],
					Damage_Scaling: [{
						stat: "PhysicalPower",
						values: [.75, .75, .75, .75, .75]
					}, {
						stat: "MagicalPower",
						values: [.5, .5, .5, .5, .5]
					}]
				},
				shortDesc: `Roll out 3 money bags that deal [85% STR + 50% INT] Physical Damage to enemies hit and then explode dealing [30% STR + 15% INT] Physical Damage.\r
	   • They stop on enemy gods, Trembling them and dropping a coin\r
	   • Coins can be picked up by yourself or allied gods to provide you 10 gold
	   • This is being calculated as all 3 initial hits of the money bags, with The built in DR on the 2nd and 3rd hits.`,
				valueKeys: {
					AOE_Damage: [30, 55, 80, 105, 130],
					CheatRadius: [.51],
					CheatRadius_AOE: [1.92],
					Cooldown: [12, 12, 12, 12, 12],
					Cost: [70, 75, 80, 85, 90],
					Damage: [95, 145, 195, 245, 295],
					Range: [11.2, 11.2, 11.2, 11.2, 11.2]
				}
			},
			A02: {
				details: [{
					key: "",
					text: "This ability does 40% bonus damage to Jungle Monsters"
				}, {
					key: "",
					text: "The inner circle deals damage on landing while the entire area slows."
				}, {
					key: "",
					text: "The bottle can be broken early with enemy basic attacks."
				}, {
					key: "",
					text: "Taunt is not affected by Diminishing Returns."
				}, {
					key: "",
					text: "If the Taunted enemy takes more than 30% of their max. Health, the taunt ends early."
				}, {
					key: "Heal",
					text: "<KeywordName>Heal Per Tick</>: {0}"
				}, {
					key: "Heal_Scaling",
					text: "<KeywordName>Heal Scaling Per Tick</>: {0}"
				}, {
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "Slow",
					text: "<KeywordName>Slow</>: {0}% Per Stack"
				}, {
					key: "Taunt",
					text: "<KeywordName>Taunt Duration</>: {0}s"
				}, {
					key: "BottleHP",
					text: "<KeywordName>Hits to Break</>: {0}"
				}, {
					key: "Range",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "CheatRadius",
					text: "<KeywordName>Inner Radius:</> {0}m"
				}, {
					key: "Outer_CheatRadius",
					text: "<KeywordName>Outer Radius:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}",
					Heal_Formula: "{Heal} + {Heal_Scaling}"
				},
				icon: '/SMITE-Damage-Calculator/static/buffIcons/danzaTwo.webp',
				key: "Danzaburou.A02.InGame.Short",
				name: "Alluring Spirits",
				scales: {
					Damage_Scaling: [{
						stat: "PhysicalPower",
						values: [.7, .7, .7, .7, .7]
					},
					{
						stat: "MagicalPower",
						values: [.4, .4, .4, .4, .4]
					}
				
				
				],
					Heal_Scaling: [{
						stat: "MagicalPower",
						values: [.05, .05, .05, .05, .05]
					}]
				},
				shortDesc: `Drink some sake, Healing for [5% INT] Health every s for 1.5sbefore throwing the bottle, dealing  [70% STR + 40%] Physical Damage to enemies hit.\r
	   • On landing, the bottle applies a stacking Slow to enemy gods\r
	   • On reaching 3 stacks, they are Taunted towards the bottle`,
				valueKeys: {
					BottleHP: [2, 2, 3, 3, 4],
					CheatRadius: [2],
					Cooldown: [16, 15, 14, 13, 12],
					Cost: [60, 65, 70, 75, 80],
					Damage: [90, 140, 190, 240, 290],
					Heal: [10, 15, 20, 25, 30],
					Heal_Duration: [1.5],
					Heal_Period: [.5],
					Outer_CheatRadius: [2.8],
					Range: [7.2, 7.2, 7.2, 7.2, 7.2],
					Slow: [10],
					Taunt: [1]
				}
			},
			A03: {
				details: [{
					key: "",
					text: "Taking damage or attacking while in leaf form will end it early however there is a brief delay before this can happen on first transforming."
				}, {
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "Movement_Speed",
					text: "<KeywordName>Movement Speed</>: {0}%"
				}, {
					key: "Movement_Speed_Leaf",
					text: "<KeywordName>Bonus Movement Speed</>: {0}%"
				}, {
					key: "Slow",
					text: "<KeywordName>Slow</>: {0}%"
				}, {
					key: "CheatRadius",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}"
				},
				icon: '/SMITE-Damage-Calculator/static/buffIcons/danzaThree.webp',
				key: "Danzaburou.A03.InGame.Short",
				name: "Tanuki Trickery",
				scales: {
					Damage_Scaling: [{
						stat: "MagicalPower",
						values: [1, 1, 1, 1, 1]
					}]
				},
				shortDesc: `Create a field where you gain Movement Speed, Slow Immunity, your Basic Attack Movement Penalty is removed, and your Dishonest Duplication chance is doubled. When you leave the area, it disappears and you transform into a leaf while decoys mimic your movement.\r
	   • Enemies in the field are Slowed\r
	   • As a leaf you gain increased Movement Speed, Slow Immunity and a buff that causes your next Basic Attack to deal [100% INT] Physical Damage</>`,
				valueKeys: {
					CheatRadius: [3.84],
					Cooldown: [16, 16, 16, 16, 16],
					Cost: [70, 70, 70, 70, 70],
					Damage: [10, 20, 30, 40, 50],
					Movement_Speed: [20, 20, 20, 20, 20],
					Movement_Speed_Leaf: [30, 32.5, 35, 37.5, 40],
					Slow: [20, 20, 20, 20, 20]
				}
			},
			A04: {
				details: [{
					key: "",
					text: "You are Rooted and CC Immune while Channeling and can only aim within 180 degrees."
				}, {
					key: "",
					text: "The rocket pierces through and damages minions but stops on first god hit."
				}, {
					key: "",
					text: "You are immune to damage while in rocket form."
				}, {
					key: "",
					text: "You can cancel this ability while a rocket to transform back, sending out the rocket directly ahead."
				}, {
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "AOE_Damage",
					text: "<KeywordName>Explode Damage</>: {0}"
				}, {
					key: "AOE_Damage_Scaling",
					text: "<KeywordName>Explode Damage Scaling</>: {0}"
				}, {
					key: "Stun",
					text: "<KeywordName>Stun Duration</>: {0}s"
				}, {
					key: "CheatRadius",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					AOE_Damage_Formula: "{AOE_Damage} + {AOE_Damage_Scaling}",
					Damage_Formula: "{Damage} + {Damage_Scaling}"
				},
				icon: "/src/assets/icons/danzaFour.webp",
				key: "Danzaburou.A04.InGame.Short",
				name: "Uproarious Rocket",
				scales: {
					AOE_Damage_Scaling: [{
						stat: "PhysicalPower",
						values: [.6, .6, .6, .6, .6]
					}, {
						stat: "MagicalPower",
						values: [.6, .6, .6, .6, .6]
					}],
					Damage_Scaling: [{
						stat: "PhysicalPower",
						values: [.85, .85, .85, .85, .85]
					}, {
						stat: "MagicalPower",
						values: [.85, .85, .85, .85, .85]
					}]
				},
				shortDesc: "Fire a rocket that locks onto enemy gods or reactivate this ability to become the rocket! The rocket deals  [85% STR + 85% INT] Physical Damage, Stuns the first enemy god hit and explodes dealing [60% STR + 60% INT] Physical Damage.",
				valueKeys: {
					AOE_Damage: [225, 270, 315, 360, 405],
					CheatRadius: [4.8],
					Cooldown: [90, 90, 90, 90, 90],
					Cost: [100, 100, 100, 100, 100],
					Damage: [300, 360, 420, 480, 540],
					Range: [-.01, -.01, -.01, -.01, -.01],
					Stun: [1, 1.1, 1.2, 1.3, 1.4]
				}
			}
		},
		baseStats: {
			"AttackSpeedPercent": {
				1: 1.484,
				20: 29.68,
				rate: 1.484
			},
			"BaseAttackSpeed": {
				1: .9858,
				20: .9858,
				rate: 0
			},
			"HealthPerTime": {
				1: 1.7,
				20: 5.5,
				rate: .19999999999999998
			},
			"InhandPower": {
				1: 44.4,
				20: 90,
				rate: 2.4
			},
			"MagicalPower": {
				1: 0,
				20: 0,
				rate: 0
			},
			"MagicalProtection": {
				1: 26.675,
				20: 54.32,
				rate: 1.455
			},
			"ManaPerTime": {
				1: 2.25,
				20: 7,
				rate: .25
			},
			"MaxHealth": {
				1: 595.3375,
				20: 2231,
				rate: 86.08749999999999
			},
			"MaxMana": {
				1: 304.88,
				20: 1126.82,
				rate: 43.26
			},
			"PhysicalPower": {
				"1": 47,
				"20": 95,
				"rate": 2.526315789473684,
			},

			"MovementSpeed": {
				1: 365,
				20: 365,
				rate: 0
			},
			"PhysicalProtection": {
				1: 18.43,
				20: 73.72,
				rate: 2.91
			}
		},
		basic: {
			details: [{
				key: "",
				text: "Projectile stops on first target hit, and does not pass through walls. "
			}, {
				key: "Damage_Scaling",
				text: "<KeywordName>Damage Scaling</>: {0}"
			}, {
				key: "RangeCheat",
				text: "<KeywordName>Range:</> {0}m"
			}, {
				key: "RadiusCheat",
				text: "<KeywordName>Radius:</> {0}m"
			}],
			formulas: {
				Damage_Formula: "{Damage} + {Damage_Scaling}"
			},
			icon: "/assets/gods/Danzaburou/Icon_BasicAttack_Physical.webp",
			key: "Basic.RangedPhys.InGame.Short",
			name: "Danzaburou Basic Attack",
			scales: {
				Damage_Scaling: [{
					stat: "PhysicalPower",
					values: [1]
				}, {
					stat: "MagicalPower",
					values: [.2]
				}]
			},
			shortDesc: "Fire a projectile that deals  Physical Damage</> to the first enemy hit. ",
			valueKeys: {
				Damage: [0],
				RadiusCheat: [.48],
				RangeCheat: [8.8]
			}
		},
		internalName: "Danzaburou_Item",
		key: "God.Danzaburou",
		name: "Danzaburou",
		icon: "/src/assets/icons/danzaImage.webp",
		passive: {
			details: [{
				key: "",
				text: "Clones last 3s, deal 30% of your Basic Attack Damage and take 500% increased Damage."
			}, {
				key: "",
				text: "Clones have a 5% + 0.25% Per Level chance of spawning a clone."
			}, {
				key: "",
				text: "Clones target the enemy that was hit when they were created."
			}],
			icon: "/assets/gods/Danzaburou/Passive.webp",
			key: "Danzaburou.PSV.InGame.Short",
			name: "Dishonest Duplication",
			shortDesc: "You have a 5% + 0.5% per level + 0.05% per Intelligence chance of spawning a clone of yourself with each basic attack hitting an enemy."
		}
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "Projectile passes through and damages all enemies, and passes through walls.",
					},
					{
						"key": "",
						"text": "Portal takes {DeployTime} second to open.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Projectile Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Projectile Damage Scaling: {0}",
					},
					{
						"key": "StunDamage",
						"text": "<KeywordName>Portal Damage: {0}",
					},
					{
						"key": "StunDamage_Scaling",
						"text": "<KeywordName>Portal Damage Scaling: {0}",
					},
					{
						"key": "StunDuration",
						"text": "<KeywordName>Stun Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "ProjRadius",
						"text": "<KeywordName>Projectile Radius: {0}m",
					},
					{
						"key": "PortalRadius",
						"text": "<KeywordName>Portal Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"StunDamage_Formula": "{StunDamage} + {StunDamage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/a3bad023-18a5-4a6b-75d2-ba07e7f43e00/public",
				"key": "Hecate.A01.InGame.Short",
				"name": "Triplicate Form",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.75, 0.75, 0.75, 0.75, 0.75],
						},
					],
					"StunDamage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.4, 0.4, 0.4, 0.4, 0.4],
						},
					],
				},
				"shortDesc":
					"Fire a projectile that deals  Magical Damage to enemies. At its destination, a portal opens that deals  Magical Damage and Stuns enemies in the area.",
				"valueKeys": {
					"Cooldown": [12, 12, 12, 12, 12],
					"Cost": [60, 60, 60, 60, 60],
					"Damage": [60, 110, 160, 210, 260],
					"DeployTime": [1, 1, 1, 1, 1],
					"PortalRadius": [3.2],
					"ProjRadius": [1.5],
					"Range": [9, 9, 9, 9, 9],
					"StunDamage": [30, 60, 90, 120, 150],
					"StunDuration": [1.5],
				},
			},

			"A02": {
				"details": [
					{
						"key": "",
						"text": "Max Charge of {MaxChargeCount}.",
					},
					{
						"key": "",
						"text": "Damage is increased by {DmgPerCharge}% per Charge.",
					},
					{
						"key": "",
						"text": "Max Damage is {MaxChargeDamage}% base damage and scaling.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "ChargeRadius",
						"text": "<KeywordName>Charge Radius: {0}m",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Attack Range: {0}m",
					},
					{
						"key": "AttackRadius",
						"text": "<KeywordName>Attack Radius: {0}m",
					},
				],
				"formulas": {
					"ChargedDamage_Formula": "({Damage} + {Damage_Scaling_Scaling}) * 2.2",
					"Damage_Formula": "{Damage} + {Damage_Scaling_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/0f92d074-a61d-44de-e99b-f41e876bbb00/public",
				"key": "Hecate.A02.InGame.Short",
				"name": "Spell Eater",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.45, 0.45, 0.45, 0.45, 0.45],
						},
					],
				},
				"shortDesc":
					"Create a Sigil that charges up when gods activate abilities in a large area.\r\n\r\n  • Reactivate to call down the Sigil and deal a minimum of  [45% INT] Magical Damage to enemies in the targeted area\r\n  • Damage can increase to  Magical Damage when fully charged",
				"valueKeys": {
					"AttackRadius": [3.2],
					"ChargeRadius": [20],
					"Cooldown": [8, 8, 8, 8, 8],
					"Cost": [50, 60, 70, 80, 90],
					"Damage": [70, 115, 160, 205, 250],
					"Damage_Scaling": [],
					"DmgPerCharge": [10],
					"MaxChargeCount": [12],
					"MaxChargeDamage": [220],
					"Range": [9],
				},
			},
			"A03": {
				"details": [
					{
						"key": "",
						"text": "Magical Shields are HP shields that only absorb Magical Damage. They stack with HP Shields. ",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "ShieldHP",
						"text": "<KeywordName>Magical Shield Health: {0} ",
					},
					{
						"key": "MSBuff",
						"text": "<KeywordName>Movement Speed: {0}%",
					},
					{
						"key": "BuffDuration",
						"text": "<KeywordName>Buff Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/72d54563-2cf0-4b0c-f9b0-dc9dd7de1c00/public",
				"key": "Hecate.A03.InGame.Short",
				"name": "Repel Magic",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.85, 0.85, 0.85, 0.85, 0.85],
						},
					],
				},
				"shortDesc":
					"Grant yourself or an ally a Magical Shield, absorbing Magical damage.\r\n\r\n  • Deals  [85% INT] Magical Damage near whomever is shielded\r\n  • Activating this increases your Movement Speed, and gives Spell Eater 3 Charges",
				"valueKeys": {
					"BuffDuration": [6, 6, 6, 6, 6],
					"Cooldown": [12, 12, 12, 12, 12],
					"Cost": [30, 35, 40, 45, 50],
					"Damage": [85, 130, 175, 220, 265],
					"MSBuff": [5, 7.5, 10, 12.5, 15],
					"Radius": [3.2, 3.2, 3.2, 3.2, 3.2],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
					"ShieldHP": [60, 120, 180, 240, 300],
				},
			},
			"A04": {
				"details": [
					{
						"key": "",
						"text": "One Portal is always opened right in front of you, the other is opened at a targeted area.",
					},
					{
						"key": "",
						"text": "Enemies that cleanse or immune the Stun will not be Teleported.",
					},
					{
						"key": "",
						"text": "The initial delay is 1.5s, the Interactable Lifetime is 30s. ",
					},
					{
						"key": "",
						"text": "You and allies can interact with the portals any number of times. ",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "StunDuration",
						"text": "<KeywordName>Stun Duration: {0}s",
					},
					{
						"key": "RangeCheat",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "RadiusCheat",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"BonusDamage_Formula": "{BonusDamage} + {BonusDamage_Scaling}",
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/b3c4af17-e153-4f2f-7d49-b410f5718f00/public",
				"key": "Hecate.A05.InGame.Short",
				"name": "Open the Gates",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.8, 0.8, 0.8, 0.8, 0.8],
						},
					],
				},
				"shortDesc":
					"Open two portals between realms, Stunning, then Displacing enemy gods to the opposite portal.\r\n\r\n  • Deals  [80% INT] Magical Damage to enemies\r\n  • You and allied gods can Interact with the portals to Teleport between them",
				"valueKeys": {
					"Cooldown": [90, 90, 90, 90, 90],
					"Cost": [90, 90, 90, 90, 90],
					"Damage": [220, 290, 350, 410, 470],
					"RadiusCheat": [4.8],
					"Range": [0, 0, 0, 0, 0],
					"RangeCheat": [14],
					"StunDuration": [1, 1, 1, 1, 1],
				},
			
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.358,
				"20": 27.16,
				"rate": 1.3579999999999999,
			},
			"BaseAttackSpeed": {
				"1": 0.93,
				"20": 0.93,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.7,
				"20": 5.5,
				"rate": 0.19999999999999998,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 26.7,
				"20": 54.3,
				"rate": 1.4526315789473683,
			},
			"ManaPerTime": {
				"1": 2.25,
				"20": 7,
				"rate": 0.25,
			},
			"MaxHealth": {
				"1": 583.1,
				"20": 2185,
				"rate": 84.31052631578947,
			},
			"MaxMana": {
				"1": 296,
				"20": 1094,
				"rate": 42,
			},
			"MovementSpeed": {
				"1": 430,
				"20": 430,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 42,
				"20": 86,
				"rate": 2.3157894736842106,
			},
			"PhysicalProtection": {
				"1": 18.4,
				"20": 73.7,
				"rate": 2.910526315789474,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "Projectile stops on first target hit, and does not pass through walls. ",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "RadiusCheat",
					"text": "<KeywordName>Radius: {0}m",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Hecate/Icon_BasicAttack_Magical.webp",
			"key": "Basic.RangedMag.InGame.Short",
			"name": "Hecate Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Fire a projectile that deals  Magical Damage to the first enemy hit. ",
			"valueKeys": {
				"Damage": [0],
				"RadiusCheat": [0.48],
				"RangeCheat": [8.8],
				"heat": [5],
			},
		},
		"internalName": "Hecate_Item",
		"key": "God.Hecate",
		"name": "Hecate",
		'Type': 'Magical',
		icon: "/src/assets/icons/hecateImage.webp",
		"passive": {
			"details": [
				{
					"key": "",
					"text": "Channel time is {ChannelTime} seconds.",
				},
				{
					"key": "",
					"text": "Can move while channeling. Channel will not be interrupted if the target or Hecate get out of range. ",
				},
				{
					"key": "",
					"text": "Structure buff area has infinite duration. Only 1 Structure can be buffed at a time. If a new one is buffed the previous one will lose the effect.",
				},
				{
					"key": "",
					"text": "Must complete the ritual on a player within {PlayerWindow} seconds of that player getting a kill.",
				},
				{
					"key": "HPRegenBuff",
					"text": "<KeywordName>Health Regen: {0} + <ValueHighlight>0.25 Per Level",
				},
				{
					"key": "MPRegenBuff",
					"text": "<KeywordName>Mana Regen: {0} + <ValueHighlight>0.25 Per Level",
				},
				{
					"key": "StrBuff",
					"text": "<KeywordName>Strength: {0} + <ValueHighlight>2 Per Level",
				},
				{
					"key": "IntBuff",
					"text": "<KeywordName>Intelligence: {0} + <ValueHighlight>3.2 Per Level",
				},
				{
					"key": "BuffDuration",
					"text": "<KeywordName>Buff Duration: {0}s",
				},
			],
			"icon": "/assets/gods/Hecate/Passive.webp",
			"key": "Hecate.PSV.InGame.Short",
			"name": "Mythic Ritual",
			"shortDesc":
				"You may interact with things to empower them.\r\n\r\n  • Interacting with an allied Structure creates a zone which regenerates health and mana\r\n  • Interacting with an ally who has recently killed a god will increase both your and that ally’s Strength and Intelligence",
			"valueKeys": {
				"BuffDuration": [300],
				"ChannelTime": [2],
				"HPRegenBuff": [2],
				"HPRegenPerLvl": [0.25],
				"IntBuff": [8],
				"MPRegenBuff": [2],
				"ManaRegenPerLvl": [0.25],
				"PlayerWindow": [30],
				"StrBuff": [5],
			},
		},
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "The Attack Speed buff is constantly refreshed while in the outer area.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Tick_Damage",
						"text": "<KeywordName>Damage Per Tick: {0}",
					},
					{
						"key": "Tick_Damage_Scaling",
						"text": "<KeywordName>Damage Scaling Per Tick: {0}",
					},
					{
						"key": "Duration",
						"text": "<KeywordName>Buff Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "CheatRadius",
						"text": "<KeywordName>Radius: {0}m",
					},
					{
						"key": "CheatRadius_Outer",
						"text": "<KeywordName>Outer Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"Tick_Damage_Formula": "{Tick_Damage} + {Tick_Damage_Scaling}",
				},
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/jingOne.webp",
				"key": "JingWei.A01.InGame.Short",
				"name": "Persistent Gust",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.7, 0.7, 0.7, 0.7, 0.7],
						},
					],
					"Tick_Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.04, 0.04, 0.04, 0.04, 0.04],
						},
					],
				},
				"shortDesc":
					"Create a Gust of Wind that deals  [70% STR] Physical Damage and Knocks Up enemy gods and yourself.\r\n\r\n  • The Gust area continually deals  [4% STR] Physical Damage\r\n  • You gain increased Attack Speed while in the outer area of the Gust",
				"valueKeys": {
					"CheatRadius": [1.6],
					"CheatRadius_Outer": [3.2],
					"Cooldown": [13, 12.5, 12, 11.5, 11],
					"Cost": [40, 50, 60, 70, 80],
					"Damage": [60, 105, 150, 195, 240],
					"Duration": [6],
					"Range": [10.4, 10.4, 10.4, 10.4, 10.4],
					"Tick_Damage": [10, 20, 30, 40, 50],
				},
			},
			"A02": {
				"details": [
					{
						"key": "",
						"text": "This ability goes on cooldown immediately on use.",
					},
					{
						"key": "Inhand_Scaling",
						"text": "<KeywordName>Scaling: {0}%",
					},
					{
						"key": "Crit_Chance",
						"text": "<KeywordName>Crit Chance: {0}%",
					},
					{
						"key": "Ability_Charges",
						"text": "<KeywordName>Ability Charges: {0}",
					},
					{
						"key": "RangeCheat",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "RadiusCheat",
						"text": "<KeywordName>Radius: {0}m",
					},
					{
						"key": "RadiusCheat_AoE",
						"text": "<KeywordName>Explode Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/jingTwo.webp",
				"key": "JingWei.A02.InGame.Short",
				"name": "Explosive Bolts",
				"shortDesc":
					"Your next 3 basic attacks are wider, have increased damage scaling, and explode on the first enemy hit.\r\n\r\n  • You gain increased Critical Strike Chance while this ability is active\r\n  • This ability can gain multiple charges",
				"valueKeys": {
					"Ability_Charges": [1, 2, 2, 3, 3],
					"Cooldown": [12, 12, 12, 12, 12],
					"Cost": [50, 50, 50, 50, 50],
					"Crit_Chance": [3, 6, 9, 12, 15],
					"Inhand_Scaling": [103, 105.99999, 109, 112, 115],
					"RadiusCheat": [0.96],
					"RadiusCheat_AoE": [1.28],
					"RangeCheat": [8.8],
				},
			},
			"A03": {
				"details": [
					{
						"key": "",
						"text": "Dash range is longer when used while Displaced.",
					},
					{
						"key": "",
						"text": "You can turn while Dashing.",
					},
					{
						"key": "",
						"text": "You can turn while Dashing.",
					},
					{
						"key": "Power_Buff",
						"text": "<KeywordName>Strength: {0}",
					},
					{
						"key": "Power_Buff_Bonus",
						"text": "<KeywordName>Bonus Strength: {0}",
					},
					{
						"key": "MS_Buff",
						"text": "<KeywordName>Movement Speed: {0}%",
					},
					{
						"key": "MS_Buff_Bonus",
						"text": "<KeywordName>Bonus Movement Speed: {0}%",
					},
					{
						"key": "Power_Buff",
						"text": "<KeywordName>Strength: {0}",
					},
					{
						"key": "RangeCheat",
						"text": "<KeywordName>Dash Range: {0}m",
					},
					{
						"key": "RangeCheat_Long",
						"text": "<KeywordName>Bonus Range: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/jingThree.webp",
				"key": "JingWei.A03.InGame.Short",
				"name": "Agility",
				"shortDesc":
					" Dash forward and gain increased Strength.\r\n\r\n  • This ability can be used while Displaced, and you will Dash further",
				"valueKeys": {
					"Cooldown": [18, 18, 18, 18, 18],
					"Cost": [40, 50, 60, 70, 80],
					"MS_Buff": [10, 10, 10, 10, 10],
					"MS_Buff_Bonus": [20, 20, 20, 20, 20],
					"Power_Buff": [10, 15, 20, 25, 30],
					"Power_Buff_Bonus": [25, 30, 35, 40, 45],
					"RangeCheat": [5.6],
					"RangeCheat_Long": [8.62],
				},
			},
			"A04": {
				"details": [
					{
						"key": "",
						"text": "Jing Wei is fully CC Immune during buildup, ascent, flight, and descent.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "RangeCheat",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "CheatRadius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/jingFour.webp",
				"key": "JingWei.A04.InGame.Short",
				"name": "Air Strike",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.85, 0.85, 0.85, 0.85, 0.85],
						},
					],
				},
				"shortDesc":
					"Dash forward and fly into the sky, dropping explosives and dealing  [85% STR] Physical Damage to enemies beneath you.\r\n\r\n  • Select a landing location, or wait to Dash backwards, dealing  Physical Damage to enemies again before landing",
				"valueKeys": {
					"CheatRadius": [2.4],
					"Cooldown": [90, 90, 90, 90, 90],
					"Cost": [100, 100, 100, 100, 100],
					"Damage": [200, 280, 360, 440, 520],
					"Range": [11.2, 11.2, 11.2, 11.2, 11.2],
					"RangeCheat": [11.2],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.484,
				"20": 29.68,
				"rate": 1.484,
			},
			"BaseAttackSpeed": {
				"1": 0.99,
				"20": 0.99,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.7,
				"20": 5.5,
				"rate": 0.19999999999999998,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 26.7,
				"20": 54.3,
				"rate": 1.4526315789473683,
			},
			"ManaPerTime": {
				"1": 2.25,
				"20": 7,
				"rate": 0.25,
			},
			"MaxHealth": {
				"1": 595.3,
				"20": 2231,
				"rate": 86.08947368421053,
			},
			"MaxMana": {
				"1": 296,
				"20": 1094,
				"rate": 42,
			},
			"MovementSpeed": {
				"1": 430,
				"20": 430,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 46,
				"20": 94,
				"rate": 2.526315789473684,
			},
			"PhysicalProtection": {
				"1": 18.4,
				"20": 73.7,
				"rate": 2.910526315789474,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "Projectile stops on first target hit, and does not pass through walls. ",
				},
				{
					"key": "",
					"text": "Projectile stops on first target hit, and does not pass through walls. ",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "",
					"text": "Projectile stops on first target hit, and does not pass through walls. ",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "RadiusCheat",
					"text": "<KeywordName>Radius: {0}m",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/JingWei/Icon_BasicAttack_Physical.webp",
			"key": "Basic.RangedPhys.InGame.Short",
			"name": "Jing Wei Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Fire a projectile that deals  Physical Damage to the first enemy hit. ",
			"valueKeys": {
				"Damage": [0],
				"RadiusCheat": [0.48],
				"RangeCheat": [8.8],
			},
		},
		"basicb": {
			"details": [],
			"icon": "/assets/gods/JingWei/Icon_BasicAttack_Physical.webp",
			"name": "Explosive Bolts",
		},
		"internalName": "JingWei_Item",
		"key": "God.JingWei",
		"name": "Jing Wei",
		'Type': 'Physical',
		icon: "/src/assets/icons/jingImage.webp",
		"passive": {
			"details": [
				{
					"key": "",
					"text": "This abilty can be canceled before ascending.",
				},
				{
					"key": "",
					"text": "You will not ascend if firing basic attacks when leaving the fountain.",
				},
				{
					"key": "",
					"text": "Jing Wei is fully CC Immune during buildup, ascent, flight, and descent.",
				},
				{
					"key": "Duration",
					"text": "<KeywordName>Buff Duration: {0}s",
				},
				{
					"key": "Duration",
					"text": "<KeywordName>Buff Duration: {0}s",
				},
			],
			"icon": "/assets/gods/JingWei/Passive.webp",
			"key": "JingWei.PSV.InGame.Short",
			"name": "Rapid Reincarnation",
			"shortDesc":
				"When exiting the fountain, fly into the sky and soar over obstacles.\r\n\r\n • Select a landing location early or descend when the duration expires",
			"valueKeys": {
				"Duration": [5],
			},
		},
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "Projectile stops on walls.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Slow ",
						"text": "<KeywordName>Slow: {0}%",
					},
					{
						"key": "Slow Duration",
						"text": "<KeywordName>Slow Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
					{
						"key": "ExplodeRadius",
						"text": "<KeywordName>Explode Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/24f956c2-3e03-4f72-8e85-dec6e2f3e700/public",
				"key": "Kukulkan.A01.InGame.Short",
				"name": "Zephyr",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.8, 0.8, 0.8, 0.8, 0.8],
						},
					],
				},
				"shortDesc":
					"Blow a breezy projectile that explodes when it hits an enemy, dealing  [80% INT] Magical Damage in a small area.\r\n\r\n  • Damaged enemies are also Slowed",
				"valueKeys": {
					"Cooldown": [7, 7, 7, 7, 7],
					"Cost": [50, 55, 60, 65, 70],
					"Damage": [85, 135, 185, 235, 285],
					"ExplodeRadius": [2.25],
					"Radius": [0.64],
					"Range": [11.2, 11.2, 11.2, 11.2, 11.2],
					"Slow ": [20, 25, 30, 35, 40],
					"Slow Duration": [3, 3, 3, 3, 3],
				},
			},
			"A02": {
				"details": [
					{
						"key": "",
						"text": "Movement Speed Buff is applied as 4 stacks, stacks are lost one at a time. ",
					},
					{
						"key": "",
						"text": "Dash passes through and hits all enemy types",
					},
					{
						"key": "SpeedBuff",
						"text": "<KeywordName>Movement Speed: {0}% Per Stack",
					},
					{
						"key": "BuffDuration",
						"text": "<KeywordName>Buff Duration: {0}s",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Dash Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Dash Damage Scaling: {0}",
					},
					{
						"key": "Slow",
						"text": "<KeywordName>Dash Slow: {0}%",
					},
					{
						"key": "SlowDuration",
						"text": "<KeywordName>Dash Slow Duration: {0}s",
					},
					{
						"key": "DashRangeCheat",
						"text": "<KeywordName>Dash Range: {0}m",
					},
					{
						"key": "DashRadiusCheat",
						"text": "<KeywordName>Dash Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/aaaf3a61-2ba8-4230-9ef1-28ce92630e00/public",
				"key": "Kukulkan.A02.InGame.Short",
				"name": "Slipstream",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.85, 0.85, 0.85, 0.85, 0.85],
						},
					],
				},
				"shortDesc":
					"Summon the wind to become Slow Immune and gain Movement Speed that fades over time. \r\n\r\n  • Activate this within a Whirlwind to instead Dash, dealing  [85% INT] Magical Damage and Slowing enemies hit",
				"valueKeys": {
					"BuffDuration": [4],
					"Cooldown": [15, 14, 13, 12, 11],
					"Cost": [55, 60, 65, 70, 75],
					"Damage": [85, 135, 185, 235, 285],
					"DashRadiusCheat": [2],
					"DashRangeCheat": [8.8],
					"Slow": [20, 25, 30, 35, 40],
					"SlowDuration": [3, 3, 3, 3, 3],
					"SpeedBuff": [7, 9, 11, 13, 15],
				},
			},
			"A03": {
				"details": [
					{
						"key": "",
						"text": "The Whirlwind attempts to apply the effect ever 0.35 seconds for 4 seconds. ",
					},
					{
						"key": "",
						"text": "Damage over Time and Slow are refreshed on each hit.",
					},
					{
						"key": "",
						"text": "Damage over Time hits 6 times over 2.5 seconds.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage Per Tick: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling Per Tick: {0}",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "({Damage} + {Damage_Scaling}) * 6",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/55476d77-2b92-4b4a-a443-5dbd14db9600/public",
				"key": "Kukulkan.A03.InGame.Short",
				"name": "Whirlwind",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.2, 0.2, 0.2, 0.2, 0.2],
						},
					],
				},
				"shortDesc":
					"Create a Whirlwind, which spreads onto all enemies that enter its area.\r\n\r\n  • Affected enemies repeatedly take  [20% INT] Magical Damage over time, even if they leave the area",
				"valueKeys": {
					"Cooldown": [15, 14, 13, 12, 11],
					"Cost": [50, 60, 70, 80, 90],
					"Damage": [12, 18, 24, 30, 36],
					"Radius": [3.2, 3.2, 3.2, 3.2, 3.2],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
				},
			},
			"A04": {
				"details": [
					{
						"key": "",
						"text": "Projectile passes through and damages all enemy targets, and passes through walls.",
					},
					{
						"key": "",
						"text": "Enemies are Displaced up and away from the projectile.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "RadiusCheat",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"": "",
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/238b8b57-3cab-4eda-d1d0-c6a92cbdb500/public",
				"key": "Kukulkan.A04.InGame.Short",
				"name": "Spirit Of The Nine Winds",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [1.15, 1.15, 1.15, 1.15, 1.15],
						},
					],
				},
				"shortDesc":
					"Summon the Spirit of the Nine Winds to deal  [115% INT] Magical Damage in a large path.\r\n\r\n  • Enemies hit are also Knocked Back",
				"valueKeys": {
					"Cooldown": [90, 90, 90, 90, 90],
					"Cost": [120, 120, 120, 120, 120],
					"Damage": [400, 500, 600, 700, 800],
					"RadiusCheat": [1.4],
					"Range": [20.8, 20.8, 20.8, 20.8, 20.8],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.358,
				"20": 27.16,
				"rate": 1.3579999999999999,
			},
			"BaseAttackSpeed": {
				"1": 0.93,
				"20": 0.93,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.65,
				"20": 5.34,
				"rate": 0.19421052631578947,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 26.7,
				"20": 54.3,
				"rate": 1.4526315789473683,
			},
			"ManaPerTime": {
				"1": 2.39,
				"20": 7.42,
				"rate": 0.2647368421052631,
			},
			"MaxHealth": {
				"1": 583.1,
				"20": 2185,
				"rate": 84.31052631578947,
			},
			"MaxMana": {
				"1": 314,
				"20": 1160,
				"rate": 44.526315789473685,
			},
			"MovementSpeed": {
				"1": 430,
				"20": 430,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 42,
				"20": 86,
				"rate": 2.3157894736842106,
			},
			"PhysicalProtection": {
				"1": 18.4,
				"20": 73.7,
				"rate": 2.910526315789474,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "Projectile stops on first target hit, and does not pass through walls. ",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "RadiusCheat",
					"text": "<KeywordName>Radius: {0}m",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Kukulkan/Icon_BasicAttack_Magical.webp",
			"key": "Basic.RangedMag.InGame.Short",
			"name": "Kukulkan Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Fire a projectile that deals  Magical Damage to the first enemy hit. ",
			"valueKeys": {
				"Damage": [0],
				"RadiusCheat": [0.48],
				"RangeCheat": [8.8],
			},
		},
		"internalName": "Kukulkan_Item",
		"key": "God.Kukulkan",
		"name": "Kukulkan",
		'Type': 'Magical',
		icon: "/src/assets/icons/kukuImage.webp",
		"passive": {
			"details": [
				{
					"key": "",
					"text": "This effect does not scale off Base God Mana. ",
				},
				{
					"key": "",
					"text": "Enemies are Displaced up and away from the projectile.",
				},
				{
					"key": "IntFromMana",
					"text": "<KeywordName>Intelligence from Item Mana: {0}%",
				},
			],
			"icon": "/assets/gods/Kukulkan/Passive.webp",
			"key": "Kukulkan.PSV.InGame.Short",
			"name": "Power Of The Wind Jewel",
			"shortDesc": "As you build items that provide Mana, you gain bonus Intelligence.",
			"valueKeys": {
				"IntFromMana": [7],
			},
		},
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "Hits 4 times over {DotDuration} seconds.",
					},
					{
						"key": "",
						"text": "Stealthed gods are invisible to enemies unless they enter an enemy structure's attack area.",
					},
					{
						"key": "",
						"text": "Taking damage while in Stealth partially reveals you for {RevealDuration} seconds. ",
					},
					{
						"key": "",
						"text": "You are Immune to Slows while Stealthed.",
					},
					{
						"key": "",
						"text": "Stealth is broken when hit by Hard CC.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage Per Tick: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling Per Tick: {0}",
					},
					{
						"key": "MovementSpeedBuff",
						"text": "<KeywordName>Movement Speed: {0}%",
					},
					{
						"key": "Buff Duration",
						"text": "<KeywordName>Buff Duration: {0}s",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"TickCount_Formula": "{DotDuration} / {DotPeriod}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/f1291fb8-050d-47d8-d15b-82f9375cd900/public",
				"key": "Loki.A01.InGame.Short",
				"name": "Vanish",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.2, 0.2, 0.2, 0.2, 0.2],
						},
					],
				},
				"shortDesc":
					"Disappear in a puff of smoke, become Stealth and gain Movement Speed. \r\n\r\n  • Your next basic attack deals additional  [20% STR] Physical Damage over time\r\n  • Killing a god resets the cooldown of this ability\r\n  • You are Immune to Slows while Stealthed",
				"valueKeys": {
					"Buff Duration": [4, 4, 4, 4, 4],
					"Cooldown": [15, 15, 15, 15, 15],
					"Cost": [60, 65, 70, 75, 80],
					"Damage": [35, 50, 65, 80, 95],
					"DotDuration": [2, 2, 2, 2, 2],
					"DotPeriod": [0.5, 0.5, 0.5, 0.5, 0.5],
					"MovementSpeedBuff": [35, 35, 35, 35, 35],
					"RevealDuration": [0.33],
				},
			},
			"A02": {
				"details": [
					{
						"key": "",
						"text": "This ability hits {AttackCount} times over {DeployableDuration} seconds.",
					},
					{
						"key": "",
						"text": "Blinded players have their game camera obscured.",
					},
					{
						"key": "",
						"text": "The Vision Impedes enemy characters only.",
					},
					{
						"key": "",
						"text": "Loki benefits from Behind You on Blinded enemies from all directions.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Blind Duration",
						"text": "<KeywordName>Blind Duration: {0}s",
					},
					{
						"key": "Damage Reduction",
						"text": "<KeywordName>Damage Dealt Reduction: {0}%",
					},
					{
						"key": "Debuff Duration",
						"text": "<KeywordName>Debuff Duration: {0}s",
					},
					{
						"key": "MaxStacks",
						"text": "<KeywordName>Max Debuff Stacks: {0}",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "CheatRadius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/6aef172d-60e7-490a-4eef-758872203d00/public",
				"key": "Loki.A02.InGame.Short",
				"name": "Agonizing Visions",
				"scales": {
					"DamageReductionScaling_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.02, 0.02, 0.02, 0.02, 0.02],
						},
					],
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.12, 0.14, 0.16, 0.18, 0.2],
						},
					],
				},
				"shortDesc":
					"Summon a vision of Loki that repeatedly deals  [12-20% STR] Physical Damage to nearby enemies.\r\n\r\n  • Damaged enemies have reduced damage\r\n  • Enemies hit four times are <Blind>Blinded",
				"valueKeys": {
					"AttackCount": [8, 8, 8, 8, 8],
					"Blind Duration": [3, 3, 3, 3, 3],
					"CheatRadius": [4],
					"Cooldown": [12, 12, 12, 12, 12],
					"Cost": [50, 55, 60, 65, 70],
					"Damage": [13, 18, 23, 28, 33],
					"Damage Reduction": [5, 5, 5, 5, 5],
					"DamageReductionScaling": [],
					"Debuff Duration": [2.5, 2.5, 2.5, 2.5, 2.5],
					"DeployableDuration": [3.5, 3.5, 3.5, 3.5, 3.5],
					"MaxStacks": [3],
					"Radius": [-0.01, -0.01, -0.01, -0.01, -0.01],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
				},
			},
			"A03": {
				"details": [
					{
						"key": "",
						"text": "Hits 6 times over {FlurryDuration} seconds.",
					},
					{
						"key": "",
						"text": "Slow is refreshed with each hit but does not stack.",
					},
					{
						"key": "",
						"text": "This ability can benefit from Behind You.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "FinalDamage",
						"text": "<KeywordName>Final Damage: {0}",
					},
					{
						"key": "FinalDamage_Scaling",
						"text": "<KeywordName>Final Damage Scaling: {0}",
					},
					{
						"key": "Slow",
						"text": "<KeywordName>Slow: {0}%",
					},
					{
						"key": "Final Slow",
						"text": "<KeywordName>Final Slow: {0}%",
					},
					{
						"key": "Slow Duration",
						"text": "<KeywordName>Slow Duration: {0}s",
					},
					{
						"key": "ConeAngle",
						"text": "<KeywordName>Cone Angle: {0} degrees",
					},
				],
				"formulas": {
					"AttackCount_Formula": "{AttackCount} + 1",
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"FinalDamage_Formula": "{FinalDamage} + {FinalDamage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/ace437db-f6f7-4071-782e-56b1c34dd100/public",
				"key": "Loki.A03.InGame.Short",
				"name": "Flurry Strike",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [1.95, 1.95, 1.95, 1.95, 1.95],
						},
					],
					"FinalDamage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.7, 0.7, 0.7, 0.7, 0.7],
						},
					],
				},
				"shortDesc":
					"Unleash a flurry of dagger strikes, dealing  [25% STR] Physical Damage repeatedly and Slowing enemies in front of you.   \r\n  • The final hit deals {FinalDamage_Formula} [70% STR] Physical Damage and applies a stronger Slow  \r\n  • This is a Channeled ability  \r\n  • You are Displacement Immune  while Channeling",
				"valueKeys": {
					"AttackCount": [1, 1, 1, 1, 1],
					"ConeAngle": [90],
					"Cooldown": [8, 8, 8, 8, 8],
					"Cost": [40, 50, 60, 70, 80],
					"Damage": [155,225,295,365,435],
					"Final Slow": [30, 30, 30, 30, 30],
					"Final Slow Duration": [2.25, 2.25, 2.25, 2.25, 2.25],
					"FinalDamage": [25, 45, 65, 85, 105],
					"FlurryDuration": [1.5, 1.5, 1.5, 1.5, 1.5],
					"Radius": [3.6, 3.6, 3.6, 3.6, 3.6],
					"Slow": [15, 15, 15, 15, 15],
					"Slow Duration": [2.25, 2.25, 2.25, 2.25, 2.25],
				},
			},
			"A04": {
				"details": [
					{
						"key": "",
						"text": "Loki locks onto the enemy god closest to the center of the teleport location, if there is one. ",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "FinalDamage",
						"text": "<KeywordName>Final Damage: {0}",
					},
					{
						"key": "FinalDamage_Scaling",
						"text": "<KeywordName>Final Damage Scaling: {0}",
					},
					{
						"key": "Stun",
						"text": "<KeywordName>Stun Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "ConeAngle",
						"text": "<KeywordName>Cone Angle: {0} degrees",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"FinalDamage_Formula": "{FinalDamage} + {FinalDamage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/4e68164e-811f-4fc9-ea7d-3f9da6bd2400/public",
				"key": "Loki.A04.InGame.Short",
				"name": "Assassinate",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [1.35, 1.35, 1.35, 1.35, 1.35],
						},
					],
					"FinalDamage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.9, 0.9, 0.9, 0.9, 0.9],
						},
					],
				},
				"shortDesc":
					"Teleport to the target location, then strike twice to assassinate a foe.\r\n\r\n  • The first strike deals  [45% STR] Physical Damage and Cripple enemies in the area\r\n  • The second strike deals {FinalDamage_Formula} [90% STR] Physical Damage and Stuns enemies in front of you",
				"valueKeys": {
					"ConeAngle": [105],
					"Cooldown": [90, 90, 90, 90, 90],
					"Cost": [90, 90, 90, 90, 90],
					"Damage": [170,250,330,410,490],
					"FinalDamage": [45, 80, 115, 150, 185],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
					"Stun": [0.75, 0.75, 0.75, 0.75, 0.75],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.484,
				"20": 29.68,
				"rate": 1.484,
			},
			"BaseAttackSpeed": {
				"1": 0.99,
				"20": 0.99,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.7,
				"20": 5.5,
				"rate": 0.19999999999999998,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 26.7,
				"20": 54.3,
				"rate": 1.4526315789473683,
			},
			"ManaPerTime": {
				"1": 2.25,
				"20": 7,
				"rate": 0.25,
			},
			"MaxHealth": {
				"1": 613.8,
				"20": 2300,
				"rate": 88.74736842105263,
			},
			"MaxMana": {
				"1": 296,
				"20": 1094,
				"rate": 42,
			},
			"MovementSpeed": {
				"1": 442,
				"20": 442,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 46,
				"20": 93,
				"rate": 2.473684210526316,
			},
			"PhysicalProtection": {
				"1": 18.4,
				"20": 73.7,
				"rate": 2.910526315789474,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "If multiple enemies are in the area, the enemy closest to the center of the area will be hit. ",
				},
				{
					"key": "",
					"text": "Has a 5 hit chain. Attacks in order of 1, 0.5, 0.5, 0.5, 1.5x damage and swing time.",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "ConeAngle",
					"text": "<KeywordName>Cone Angle: {0} degrees",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Loki/Icon_BasicAttack_Physical.webp",
			"key": "Basic.MeleePhys.InGame.Short",
			"name": "Loki Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Deal  Physical Damage to an enemy in front of you. ",
			"valueKeys": {
				"ConeAngle": [120],
				"Damage": [0],
				"RangeCheat": [1.92],
			},
		},
		"internalName": "Loki_Item",
		"key": "God.Loki",
		"name": "Loki",
		'Type': 'Physical',
		icon: "/src/assets/icons/lokiImage.webp",
		"passive": {
			"details": [
				{
					"key": "",
					"text": "The increased damage from this effect also triggers on enemies Blinded by Agonizing Visions ",
				},
				{
					"key": "DamageBuff",
					"text": "<KeywordName>Damage: {0}%",
				},
			],
			"icon": "/assets/gods/Loki/Passive.webp",
			"key": "Loki.PSV.InGame.Short",
			"name": "Behind You",
			"shortDesc": "Hitting enemies from behind deals bonus damage.",
			"valueKeys": {
				"DamageBuff": [115],
			},
		},
	},
	{
		abilities: {
			A01: {
				details: [{
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "RangeCheat",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "RadiusCheat",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}"
				},
				icon: '/SMITE-Damage-Calculator/static/buffIcons/hercOne.webp',
				key: "Hercules.A01.InGame.Short",
				name: "Driving Strike",
				scales: {
					Damage_Scaling: [{
						stat: "PhysicalPower",
						values: [.9, .9, .9, .9, .9]
					}]
				},
				shortDesc: `Dash forward, dealing [95% STR] Physical Damage, Stunning and  Pushinge nemies hit.\r
	`,
				valueKeys: {
					Cooldown: [12, 12, 12, 12, 12],
					Cost: [50, 55, 60, 65, 70],
					Damage: [100, 170, 240, 310, 380],
					RadiusCheat: [.8],
					RangeCheat: [5.6]
				}
			},
			A02: {
				details: [{
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "RangeCheat",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "RadiusCheat",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}"
				},
				icon: '/SMITE-Damage-Calculator/static/buffIcons/hercTwo.webp',
				key: "Hercules.A02.InGame.Short",
				name: "Earthbreaker",
				scales: {
					Damage_Scaling: [{
						stat: "PhysicalPower",
						values: [.7, .7, .7, .7, .7]
					}]
				},
				shortDesc: "Create a rift that deals [75% STR] Physical Damage to enemies in front of you. Enemies hit by the end area are Pulled to you. ",
				valueKeys: {
					Cooldown: [12, 12, 12, 12, 12],
					Cost: [50, 55, 60, 65, 70],
					Damage: [90, 145, 200, 255, 310],
					RadiusCheat: [1.12],
					Range: [7.2, 7.2, 7.2, 7.2, 7.2],
					RangeCheat: [7.2]
				}
			},
			A03: {
				details: [{
					key: "Heal",
					text: "<KeywordName>Heal</>: {0}"
				}, {
					key: "Heal%taken",
					text: "<KeywordName>Heal </>: {0}% of Recent Damage Taken"
				}, {
					key: "AttackSpeed",
					text: "<KeywordName>Attack Speed</>: {0}%"
				}, {
					key: "Protections",
					text: "<KeywordName>Protections</>: {0}"
				}],
				formulas: {
					Heal_Formula: "{Heal}"
				},
				icon: '/SMITE-Damage-Calculator/static/buffIcons/hercThree.webp',
				key: "Hercules.A03.InGame.Short",
				name: "Mitigate Wounds",
				shortDesc: "Immediately Heal yourself and gain Attack Speed and Protections for 4s. At the end of the duration Heal yourself again for a percentage of damage taken during the effect. ",
				valueKeys: {
					AttackSpeed: [10, 12.5, 15, 17.5, 20],
					Cooldown: [15, 15, 15, 15, 15],
					Cost: [50, 50, 50, 50, 50],
					Heal: [45, 75, 105, 135, 165],
					"Heal%taken": [20, 26, 32, 38, 44],
					Protections: [20, 25, 30, 35, 40],
					RadiusCheat: [2.24],
					RangeCheat: [7.2]
				}
			},
			A04: {
				details: [{
					key: "Damage",
					text: "<KeywordName>Damage</>: {0}"
				}, {
					key: "Damage_Scaling",
					text: "<KeywordName>Damage Scaling</>: {0}"
				}, {
					key: "RangeCheat",
					text: "<KeywordName>Range:</> {0}m"
				}, {
					key: "RadiusCheat",
					text: "<KeywordName>Radius:</> {0}m"
				}],
				formulas: {
					Damage_Formula: "{Damage} + {Damage_Scaling}"
				},
				icon: '/SMITE-Damage-Calculator/static/buffIcons/hercFour.webp',
				key: "Hercules.A04.InGame.Short",
				name: "Excavate",
				scales: {
					Damage_Scaling: [{
						stat: "PhysicalPower",
						values: [1, 1, 1, 1, 1]
					}]
				},
				shortDesc: "Hurl a boulder at a location, Displacing enemies straight up at the landing spot. The boulder then rolls and bounces off walls, dealing [105% STR] Physical Damage to enemies hit. ",
				valueKeys: {
					Cooldown: [90, 85, 80, 75, 70],
					Cost: [100, 100, 100, 100, 100],
					Damage: [300, 425, 550, 675, 800],
					RadiusCheat: [2.4],
					Range: [8.8, 8.8, 8.8, 8.8, 8.8],
					RangeCheat: [100]
				}
			}
		},
		baseStats: {
			"AttackSpeedPercent": {
				1: 1.442,
				20: 28.84,
				rate: 1.442
			},
			"BaseAttackSpeed": {
				1: .9579,
				20: .9579,
				rate: 0
			},
			"HealthPerTime": {
				1: 1.7,
				20: 5.5,
				rate: .19999999999999998
			},
			"InhandPower": {
				1: 43.068,
				20: 87.3,
				rate: 2.328
			},
			"MagicalPower": {
				1: 0,
				20: 0,
				rate: 0
			},
			"PhysicalPower": {
				1: 0,
				20: 0,
				rate: 0
			},

			"MagicalProtection": {
				1: 28.325,
				20: 57.68,
				rate: 1.545
			},
			"ManaPerTime": {
				1: 2.25,
				20: 7,
				rate: .25
			},
			"MaxHealth": {
				1: 632.1625,
				20: 2369,
				rate: 91.41250000000001
			},
			"MaxMana": {
				1: 296,
				20: 1094,
				rate: 42
			},
			"MovementSpeed": {
				1: 375,
				20: 375,
				rate: 0
			},
			"PhysicalProtection": {
				1: 19.57,
				20: 78.28,
				rate: 3.09
			}
		},
		basic: {
			details: [{
				key: "",
				text: "If multiple enemies are in the area, the enemy closest to the center of the area will be hit. "
			}, {
				key: "",
				text: "Has a 3 hit chain. Attacks in order of 1, 1, 1.5x damage and swing time."
			}, {
				key: "Damage_Scaling",
				text: "<KeywordName>Damage Scaling</>: {0}"
			}, {
				key: "RangeCheat",
				text: "<KeywordName>Range:</> {0}m"
			}, {
				key: "ConeAngle",
				text: "<KeywordName>Cone Angle:</> {0} degrees"
			}],
			formulas: {
				Damage_Formula: "{Damage} + {Damage_Scaling}"
			},
			icon: "/assets/gods/Hercules/Icon_BasicAttack_Physical.webp",
			key: "Basic.MeleePhys.InGame.Short",
			name: "Hercules Basic Attack",
			scales: {
				Damage_Scaling: [{
					stat: ".PhysicalPower",
					values: [1]
				}, {
					stat: ".MagicalPower",
					values: [.2]
				}]
			},
			shortDesc: "Deal <Damage>{Damage_Formula} Physical Damage</> to an enemy in front of you. ",
			valueKeys: {
				ConeAngle: [120],
				Damage: [0],
				RangeCheat: [1.92]
			}
		},
		internalName: "Hercules_Item",
		key: "God.Hercules",
		name: "Hercules",
		icon: "/src/assets/icons/hercImage.webp",
		passive: {
			details: [{
				key: "",
				text: "Each activation of an ability can only grant 1 stack"
			}, {
				key: "",
				text: "Strength from Apotheosis is equal to 1 Stack of Strength from taking damage from Gods"
			}, {
				key: "Str",
				text: "<KeywordName>Strength</>: {0} Per Stack"
			}, {
				key: "StrPerlevel",
				text: "<KeywordName>Strength</>: {0} Per Level"
			}, {
				key: "maxduration",
				text: "<KeywordName>Apotheosis Buff Duration</>: {0}s"
			}, {
				key: "duration",
				text: "<KeywordName>Aptheosis Buff Duration Per Level</>: {0}s"
			}, {
				key: "Protections",
				text: "<KeywordName>Apotheosis Protections</>: {0} "
			}, {
				key: "ProtsPerLevel",
				text: "<KeywordName>Apotheosis Protections</>: {0} Per level"
			}, {
				key: "cdr",
				text: "<KeywordName>Apotheosis CDR</>: {0}"
			}],
			icon: "/assets/gods/Hercules/Passive.webp",
			key: "Hercules.PSV.InGame.Short",
			name: "Apotheosis",
			shortDesc: `Hercules gains Strength when enemy gods damage him. This stacks up to 3 times and lasts 5s. Additionally,  hit a target with an ability to gain a stack toward achieving Apotheosis, or 2 stacks from his Ultimate. \r
	\r
	At 4 stacks, enter an empowered state that immediately subtracts 2s from active cooldowns and provides an additional Strength, Protections, and Cleaving basic attacks for the duration. `,
			valueKeys: {
				ProtsPerLevel: [2],
				RadiusCheat: [2.24],
				RangeCheat: [7.2],
				Str: [4],
				StrPerlevel: [1],
				cdr: [25],
				duration: [1],
				maxduration: [10],
				prot: [10]
			}
		}
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "Line attack deals Bonus damage on hit if Mourning is next in the basic attack chain.",
					},
					{
						"key": "",
						"text": "Line attack Heals you on hit if Clarent is next in the basic attack chain.",
					},
					{
						"key": "",
						"text": "Lower healing on hitting enemy minions.",
					},
					{
						"key": "",
						"text": "Line attack Heals you on hit if Clarent is next in the basic attack chain.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Slash Damage: {0} ",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Slash Damage Scaling: {0} ",
					},
					{
						"key": "Line_Damage",
						"text": "<KeywordName>Slam Damage: {0}",
					},
					{
						"key": "Line_Damage_Scaling",
						"text": "<KeywordName>Slam Damage Scaling: {0} ",
					},
					{
						"key": "Bonus_Damage",
						"text": "<KeywordName>Bonus Damage: {0}% Protections",
					},
					{
						"key": "Bonus_Heal",
						"text": "<KeywordName>Heal: {0}% Protections",
					},
					{
						"key": "Bonus_Heal_Minion",
						"text": "<KeywordName>Minion Heal: {0}",
					},
					{
						"key": "Cone_Radius",
						"text": "<KeywordName>Slash Radius: {0}m",
					},
					{
						"key": "Cone_Angle",
						"text": "<KeywordName>Slash Angle: {0} degrees",
					},
					{
						"key": "Line_Range",
						"text": "<KeywordName>Slam Range: {0}m",
					},
					{
						"key": "Line_Radius",
						"text": "<KeywordName>Slam Radius: {0}m",
					},
				],
				"formulas": {
					"Bonus_Heal_Minion_Formula": "{Bonus_Heal_Minion} + {Bonus_Heal_Minion_Scaling}",
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"Line_Damage_Formula": "{Line_Damage} + {Line_Damage_Scaling}",
				},
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/mordredOne.webp",
				"key": "Mordred.A01.InGame.Short",
				"name": "Cruel Strikes",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [1.1, 1.1, 1.1, 1.1,1.1],
						},
					],
					"Line_Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.65, 0.65, 0.65, 0.65, 0.65],
						},
					],
				},
				"shortDesc":
					"Strike twice with your swords.\r\n\r\n   • First Slash, dealing  [45% STR] Physical Damage to enemies in front of you\r\n\r\n   • Then Slam, dealing  [65% STR] Physical Damage to enemies in a line and either dealing [40% Protections] bonus damage or [45% Protections] Healing, based on your Basic Attack Chain",
				"valueKeys": {
					"Bonus_Damage": [40],
					"Bonus_Heal": [45],
					"Bonus_Heal_Minion": [10, 15, 20, 25, 30],
					"Cone_Angle": [90, 90, 90, 90, 90],
					"Cone_Radius": [4, 4, 4, 4, 4],
					"Cooldown": [12, 11.5, 11, 10.5, 10],
					"Cost": [45, 50, 55, 60, 65],
					"Damage": [110, 160, 210, 260, 310],
					"Line_Damage": [55, 80, 105, 130, 155],
					"Line_Radius": [0.75],
					"Line_Range": [4, 4, 4, 4, 4],
					"Range": [4, 4, 4, 4, 4],
				},
			},
			"A02": {
				"details": [
					{
						"key": "Damage",
						"text": "Physical Protection buff and debuff stacks up to 4 times.",
					},
					{
						"key": "Damage",
						"text": "Physical Protection buff and debuff stacks up to 4 times.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Attack_Speed",
						"text": "<KeywordName>Attack Speed: {0}%",
					},
					{
						"key": "Movement_Speed",
						"text": "<KeywordName>Movement Speed: {0}%",
					},
					{
						"key": "Protection_Buff",
						"text": "<KeywordName>Protection: {0}",
					},
					{
						"key": "Prot_Buff_Duration",
						"text": "<KeywordName>Buff Duration: {0}s",
					},
					{
						"key": "Protection_Debuff",
						"text": "<KeywordName>Protection Reduced: {0}",
					},
					{
						"key": "Prot_Debuff_Duration",
						"text": "<KeywordName>Debuff Duration: {0}s",
					},
					{
						"key": "Attack_Speed",
						"text": "<KeywordName>Attack Speed: {0}%",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/mordredTwo.webp",
				"key": "Mordred.A02.InGame.Short",
				"name": "Bloodrage",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.5, 0.5, 0.5, 0.5, 0.5],
						},
						{
							"stat": "MagicalPower",
							"values": [0.4, 0.4, 0.4, 0.4, 0.4],
						},
					],
				},
				"shortDesc":
					"Deal  [50% STR + 40% INT] Physical Damage to enemies around you, then gain increased Attack Speed and Movement Speed.\r\n\r\n   • While buffed, basic attack hits on enemies reduce their Physical Protections and increase your own",
				"valueKeys": {
					"Attack_Speed": [40, 40, 40, 40, 40],
					"Buff_Duration": [4, 4, 4, 4, 4],
					"Cooldown": [14, 14, 14, 14, 14],
					"Cost": [50, 55, 60, 65, 70],
					"Damage": [50, 90, 130, 170, 210],
					"Movement_Speed": [12, 14, 16, 18, 20],
					"Prot_Buff_Duration": [4, 4, 4, 4, 4],
					"Prot_Debuff_Duration": [4, 4, 4, 4, 4],
					"Protection_Buff": [4, 5, 6, 7, 8],
					"Protection_Debuff": [-4, -5, -6, -7, -8],
					"Radius": [3.2, 3.2, 3.2, 3.2, 3.2],
				},
			},
			"A03": {
				"details": [
					{
						"key": "Damage",
						"text": "Enemy gods are damaged for every 1.25m they move.",
					},
					{
						"key": "Damage",
						"text": "Minions take damage over time instead of due to movement.",
					},
					{
						"key": "Damage",
						"text": "Minions take damage over time instead of due to movement.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Bleed_Damage",
						"text": "<KeywordName>Bleed Damage: {0}",
					},
					{
						"key": "Bleed_Damage_Scaling",
						"text": "<KeywordName>Bleed Damage Scaling: {0}",
					},
					{
						"key": "Minion_Damage",
						"text": "<KeywordName>Minion Damage: {0}",
					},
					{
						"key": "Minion_Damage_Scaling",
						"text": "<KeywordName>Minion Damage Scaling: {0}",
					},
					{
						"key": "Slow",
						"text": "<KeywordName>Slow: {0}%",
					},
					{
						"key": "Slow_Duration",
						"text": "<KeywordName>Debuff Duration: {0}s",
					},
					{
						"key": "Bleed_Damage_Scaling",
						"text": "<KeywordName>Bleed Damage Scaling: {0}",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Radius_Cheat",
						"text": "<KeywordName>Radius: {0}m",
					},
					{
						"key": "Radius_Inner_Cheat",
						"text": "<KeywordName>Inner Radius: {0}m",
					},
				],
				"formulas": {
					"Bleed_Damage_Formula": "{Bleed_Damage} + {Bleed_Damage_Scaling}",
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"Minion_Damage_Formula": "{Minion_Damage} + {Minion_Damage_Scaling}",
				},
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/mordredThree.webp",
				"key": "Mordred.A03.InGame.Short",
				"name": "Severing Slice",
				"scales": {
					"Bleed_Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.1, 0.1, 0.1, 0.1, 0.1],
						},
					],
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.5, 0.5, 0.5, 0.5, 0.5],
						},
					],
					"Minion_Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.05, 0.05, 0.05, 0.05, 0.05],
						},
					],
				},
				"shortDesc":
					"Fire a projectile that deals  [50% INT] Physical Damage and Slows enemies.\r\n\r\n  • Direct hits with the center of the projectile cause targets to Bleed, taking [5-10% STR] Bonus Physical Damage as they move.",
				"valueKeys": {
					"Bleed_Damage": [20, 25, 30, 35, 40],
					"Cooldown": [12, 12, 12, 12, 12],
					"Cost": [40, 50, 60, 70, 80],
					"Damage": [55, 85, 115, 145, 175],
					"Minion_Damage": [10, 15, 20, 25, 30],
					"Radius_Cheat": [0.6],
					"Radius_Inner_Cheat": [0.2],
					"Range": [9.6, 9.6, 9.6, 9.6, 9.6],
					"Slow": [30, 30, 30, 30, 30],
					"Slow_Duration": [2.5, 2.5, 2.5, 2.5, 2.5],
				},
			},
			"A04": {
				"details": [
					{
						"key": "",
						"text": "Ability repeatedly deals damage every {Tick_Rate}s. over {Channel_Duration} seconds.",
					},
					{
						"key": "",
						"text": "You are Slowed while Channeling.",
					},
					{
						"key": "",
						"text": "You are Slowed while Channeling.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Tick_Damage",
						"text": "<KeywordName>Damage Per Tick: {0}",
					},
					{
						"key": "Tick_Damage_Scaling",
						"text": "<KeywordName>Damage Scaling Per Tick: {0}",
					},
					{
						"key": "Heal",
						"text": "<KeywordName>Heal: {0}",
					},
					{
						"key": "Heal_Scaling",
						"text": "<KeywordName>Heal Scaling: {0}",
					},
					{
						"key": "Shield",
						"text": "<KeywordName>Shield Health: {0} ",
					},
					{
						"key": "",
						"text": "You are Slowed while Channeling.",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Radius_Cheat",
						"text": "<KeywordName>Radius: {0}m",
					},
					{
						"key": "Cost",
						"text": "<KeywordName>Cost: {0} Wrath",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"Heal_Formula": "{Heal} + {Heal_Scaling}",
					"Tick_Damage_Formula": "{Tick_Damage} + {Tick_Damage_Scaling}",
				},
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/mordredFour.webp",
				"key": "Mordred.A04.InGame.Short",
				"name": "Pursue The Weak",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [1.6,1.6,1.6,1.6,1.6,],
						},
						{
							"stat": "MagicalPower",
							"values": [1.35,1.35,1.35,1.35,1.35,],
						}

					],
					"Heal_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.2, 0.2, 0.2, 0.2, 0.2],
						},
					],
					"Tick_Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.25, 0.25, 0.25, 0.25, 0.25],
						},
					],
				},
				"shortDesc":
					"Become CC Immune and charge forward, travelling through walls and stopping on the first enemy god hit, dealing a burst of [80% STR + 75% INT], followed by a barrage of 4 attacks of [20% STR + 15% INT] \n\n(THIS IS CURRENTLY BEING CALCULATED AS HIS EVOLVED ULTIMATE ABILITY)",
				"valueKeys": {
					"Channel_Duration": [1.5, 1.5, 1.5, 1.5, 1.5],
					"Cooldown": [20, 20, 20, 20, 20],
					"Cost": [40, 40, 40, 40, 40],
					"Damage": [510, 640, 770, 900, 1030],
					"Heal": [10, 20, 30, 40, 50],
					"Radius_Cheat": [1],
					"Range": [6, 6, 6, 6, 6],
					"Shield": [160, 200, 240, 280, 320],
					"Tick_Damage": [30, 40, 50, 60, 70],
					"Tick_Rate": [0.3, 0.3, 0.3, 0.3, 0.3],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.442,
				"20": 28.84,
				"rate": 1.442,
			},
			"BaseAttackSpeed": {
				"1": 0.96,
				"20": 0.96,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.7,
				"20": 5.5,
				"rate": 0.19999999999999998,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 28.3,
				"20": 57.7,
				"rate": 1.5473684210526317,
			},
			"ManaPerTime": {
				"1": 2.25,
				"20": 7,
				"rate": 0.25,
			},
			"MaxHealth": {
				"1": 632.2,
				"20": 2369,
				"rate": 91.41052631578947,
			},
			"MaxMana": {
				"1": 296,
				"20": 1094,
				"rate": 42,
			},
			"MovementSpeed": {
				"1": 442,
				"20": 442,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 44,
				"20": 90,
				"rate": 2.4210526315789473,
			},
			"PhysicalProtection": {
				"1": 19.6,
				"20": 78.3,
				"rate": 3.089473684210526,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "If multiple enemies are in the area, the enemy closest to the center of the area will be hit. ",
				},
				{
					"key": "",
					"text": "Has a 4 hit chain. Attacks in order of Mourning, Clarent, Clarent, Mourning with a 1, 0.75, 0.75, 1x swing time.",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Mourning Damage Scaling: {0}",
				},
				{
					"key": "Damage_Clarent_Scaling",
					"text": "<KeywordName>Clarent Damage Scaling: {0}",
				},
				{
					"key": "Damage_Clarent_Scaling",
					"text": "<KeywordName>Clarent Damage Scaling: {0}",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "ConeAngle",
					"text": "<KeywordName>Cone Angle: {0} degrees",
				},
			],
			"formulas": {
				"Damage_Clarent_Formula": "{Damage_Clarent} + {Damage_Clarent_Scaling}",
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Mordred/Icon_BasicAttack_Physical.webp",
			"key": "Basic.MeleePhys.InGame.Short",
			"name": "Mordred Basic Attack",
			"scales": {
				"Damage_Clarent_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [0.6],
					},
					{
						"stat": "MagicalPower",
						"values": [1],
					},
				],
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Deal  Physical Damage to an enemy in front of you. ",
			"valueKeys": {
				"ConeAngle": [120],
				"Damage": [0],
				"Damage_Clarent": [0],
				"RangeCheat": [1.92],
			},
		},
		"internalName": "Mordred_Item",
		"key": "God.Mordred",
		"name": "Mordred",
		'Type': 'Physical',
		icon: "/src/assets/icons/mordredImage.webp",
		"passive": {
			"details": [
				{
					"key": "",
					"text": "Hitting enemy gods with abilities provides 2 Wrath and 1 for basic attacks.",
				},
				{
					"key": "",
					"text": "Hitting enemy minions provides 1 Wrath.",
				},
				{
					"key": "",
					"text": "Gain 1 Wrath every 4s. passively.",
				},
				{
					"key": "",
					"text": "Wrath can only be gained once per ability per enemy hit.",
				},
			],
			"icon": "/assets/gods/Mordred/Passive.webp",
			"key": "Mordred.PSV.InGame.Short",
			"name": "Wrath of the Forsaken",
			"shortDesc":
				"Hit enemies to gain Wrath.\r\n   • Your Ultimate Ability Heart Slash can only be used after reaching 40 Wrath\r\n   • Your Ultimate Ability Pursue the Weak can only be used after reaching 80 Wrath\r\nAfter using an ability or attacking, your Interact key becomes a Dash forward.\r\n   • This deals  Physical Damage and Knocks Back  the first enemy god hit",
		},
		"passiveb": {
			"details": [
				{
					"key": "",
					"text": "This ability can only be used within 2s of using an ability or basic attack.",
				},
				{
					"key": "",
					"text": "Cooldown starts at 15s and is reduced by 0.2s per level.",
				},
				{
					"key": "",
					"text": "Cooldown starts at 15s and is reduced by 0.2s per level.",
				},
				{
					"key": "Damage",
					"text": "<KeywordName>Damage: {0}",
				},
				{
					"key": "Damage_PerLevel",
					"text": "<KeywordName>Damage Scaling: {0} Per Level",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0} Per Level",
				},
				{
					"key": "Range_Cheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "Radius",
					"text": "<KeywordName>Radius: {0}m",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_PerLevel_Scaling}",
			},
			"icon": "/assets/gods/Mordred/Passive2.webp",
			"key": "Mordred.PSV.Charge.InGame.Short",
			"name": "Shoulder Charge",
			"scales": {
				"Damage_PerLevel_Scaling": [
					{
						"stat": "Level",
						"values": [5],
					},
				],
			},
			"shortDesc":
				"Hit enemies to gain Wrath.\r\n   • Your Ultimate Ability Heart Slash can only be used after reaching 40 Wrath\r\n   • Your Ultimate Ability Pursue the Weak can only be used after reaching 80 Wrath\r\nAfter using an ability or attacking, your Interact key becomes a Dash forward.\r\n   • This deals 30 + 5 per Level Physical Damage and Knocks Back  the first enemy god hit",
			"valueKeys": {
				"Cooldown": [10],
				"Damage": [30],
				"Damage_PerLevel": [5],
				"Radius": [1.5],
				"Range_Cheat": [4],
			},
		},
		"passivec": {
			"icon": "/assets/gods/Mordred/Anubis_Passive.webp",
			"name": "Mordred PSV",
		},
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "Projectile passes through and damages all enemies, and passes through walls.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "RootDuration",
						"text": "<KeywordName>Root Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "CheatRadius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/2689a4a4-ae51-41f5-a3b5-b728871daf00/public",
				"key": "Neith.A01.InGame.Short",
				"name": "Spirit Arrow",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [.9, .9, .9, .9, .9],
						},
						{
							"stat": "MagicalPower",
							"values": [0.5, 0.5, 0.5, 0.5, 0.5],
						},
					],
				},
				"shortDesc":
					"Fire a Spirit Arrow projectile that deals  [90% STR + 50% INT] Physical Damage and Roots enemies.\r\n\r\n  • This ability detonates Weaves that it hits\r\n  • This arrow passes through everything",
				"valueKeys": {
					"CheatRadius": [0.56],
					"Cooldown": [13, 12.5, 12, 11.5, 11],
					"Cost": [40, 50, 60, 70, 80],
					"Damage": [80, 145, 210, 275, 340],
					"Range": [10.4, 10.4, 10.4, 10.4, 10.4],
					"RootDuration": [1.6, 1.7, 1.8, 1.9, 2],
				},
			},
			"A02": {
				"details": [
					{
						"key": "",
						"text": "Always creates a Weave in the center of the area. Creates additional Weaves for each enemy God hit at the locations of those gods. ",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Heal",
						"text": "<KeywordName>Heal: {0}",
					},
					{
						"key": "Heal_Scaling",
						"text": "<KeywordName>Heal Scaling: {0}",
					},
					{
						"key": "HealLarge",
						"text": "<KeywordName>Increased Heal: {0}",
					},
					{
						"key": "HealLarge_Scaling",
						"text": "<KeywordName>Increased Heal Scaling: {0}",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "CheatRadius",
						"text": "<KeywordName>Radius: {0}m",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"HealLarge_Formula": "{HealLarge} + {HealLarge_Scaling}",
					"Heal_Formula": "{Heal} + {Heal_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/85a1bcfa-4eb4-42cf-f6fa-1e1bea4a6300/public",
				"key": "Neith.A02.InGame.Short",
				"name": "Unravel",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.85, 0.85, 0.85, 0.85, 0.85],
						},
					],
					"HealLarge_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.1, 0.1, 0.1, 0.1, 0.1],
						},
					],
					"Heal_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.1, 0.1, 0.1, 0.1, 0.1],
						},
					],
				},
				"shortDesc":
					"Unravel the world weaves, dealing  [85% INT] Damage to enemies in an area.\r\n\r\n  • This ability creates a Weave\r\n  • You Heal [10% INT] Health for each enemy  hit\r\n  • Hitting a god Heals for [10% INT] Health instead",
				"valueKeys": {
					"CheatRadius": [3.2],
					"Cooldown": [14, 13.5, 13, 12.5, 12],
					"Cost": [50, 60, 70, 80, 90],
					"Damage": [35, 70, 105, 140, 175],
					"Heal": [15, 20, 25, 30, 35],
					"HealLarge": [30, 40, 50, 60, 70],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
				},
			},
			"A03": {
				"details": [
					{
						"key": "",
						"text": "This ability can Leap over walls, as long as you can reach a valid landing area. ",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "ConeAngle",
						"text": "<KeywordName>Cone Angle: {0} degrees",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/6bd76f3e-3e03-4994-41f8-517763e1e700/public",
				"key": "Neith.A03.InGame.Short",
				"name": "Back Flip",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.7, 0.7, 0.7, 0.7, 0.7],
						},
					],
				},
				"shortDesc":
					"Deal  [70% INT] Physical Damage to enemies in front of you, then Leap backwards.\r\n\r\n  • This ability detonates Weaves that it hits",
				"valueKeys": {
					"ConeAngle": [110],
					"Cooldown": [15, 15, 15, 15, 15],
					"Cost": [50, 55, 60, 65, 70],
					"Damage": [30, 60, 90, 120, 150],
				},
			},
			"A04": {
				"details": [
					{
						"key": "",
						"text": "Damage scales linearly from 50% to 100% based on Channel time.",
					},
					{
						"key": "",
						"text": "Channel for 0.5 seconds for minimum damage, or for 2 seconds to deal fully charged damage.",
					},
					{
						"key": "",
						"text": "Projectile ignores minions, passes through walls.",
					},
					{
						"key": "",
						"text": "Enemy gods can step in front of this projectile to be hit by it instead of the selected god.",
					},
					{
						"key": "",
						"text": "You can cancel this ability anytime before firing, the costs and cooldown will not be consumed.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Stun",
						"text": "<KeywordName>Stun Duration: {0}s",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/f205e7e8-88cd-49ef-5715-9c45c5edf400/public",
				"key": "Neith.A04.InGame.Short",
				"name": "World Weaver",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [1, 1, 1, 1, 1],
						},
						{
							"stat": "MagicalPower",
							"values": [1, 1, 1, 1, 1],
						},
					],
				},
				"shortDesc":
					"Charge up and fire an arrow across the world, locked on to an enemy god and ignoring obstacles.\r\n\r\n  • The arrow deals  [100% STR + 100% INT] Physical Damage and Stuns \r\n  • You can fire the arrow before it is fully charged, but it will deal less damage",
				"valueKeys": {
					"CTScaling": [],
					"Cooldown": [90, 90, 90, 90, 90],
					"Cost": [80, 90, 100, 110, 120],
					"Damage": [200, 250, 300, 350, 400],
					"Range": [-0.01, -0.01, -0.01, -0.01, -0.01],
					"Stun": [1.5, 1.5, 1.5, 1.5, 1.5],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.484,
				"20": 29.68,
				"rate": 1.484,
			},
			"BaseAttackSpeed": {
				"1": 0.99,
				"20": 0.99,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.7,
				"20": 5.5,
				"rate": 0.19999999999999998,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 26.7,
				"20": 54.3,
				"rate": 1.4526315789473683,
			},
			"ManaPerTime": {
				"1": 2.25,
				"20": 7,
				"rate": 0.25,
			},
			"MaxHealth": {
				"1": 595.3,
				"20": 2231,
				"rate": 86.08947368421053,
			},
			"MaxMana": {
				"1": 305,
				"20": 1127,
				"rate": 43.26315789473684,
			},
			"MovementSpeed": {
				"1": 430,
				"20": 430,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 44,
				"20": 90,
				"rate": 2.4210526315789473,
			},
			"PhysicalProtection": {
				"1": 18.4,
				"20": 73.7,
				"rate": 2.910526315789474,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "Projectile stops on first target hit, and does not pass through walls. ",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "RadiusCheat",
					"text": "<KeywordName>Radius: {0}m",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Neith/Icon_BasicAttack_Physical.webp",
			"key": "Basic.RangedPhys.InGame.Short",
			"name": "Neith Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Fire a projectile that deals  Physical Damage to the first enemy hit. ",
			"valueKeys": {
				"Damage": [0],
				"RadiusCheat": [0.48],
				"RangeCheat": [8.8],
			},
		},
		"internalName": "Neith_Item",
		"key": "God.Neith",
		"name": "Neith",
		'Type': 'Physical',
		icon: "/src/assets/icons/neithImage.webp",
		"passive": {
			"details": [
				{
					"key": "Damage",
					"text": "<KeywordName>Damage: {0}",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "RootDuration",
					"text": "<KeywordName>Root Duration: {0}s",
				},
				{
					"key": "ASBuff",
					"text": "<KeywordName>Attack Speed: {0}% Per Stack",
				},
				{
					"key": "IntBuff",
					"text": "<KeywordName>Intelligence: {0}",
				},
				{
					"key": "IntBuffPerLevel",
					"text": "<KeywordName>Intelligence: {0} Per Level",
				},
				{
					"key": "BuffDuration",
					"text": "<KeywordName>Buff Duration: {0}s",
				},
				{
					"key": "MaxStacks",
					"text": "<KeywordName>Max Buff Stacks: {0}",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Neith/Passive.webp",
			"key": "Neith.PSV.InGame.Short",
			"name": "Broken Weave",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "MagicalPower",
						"values": [0.5],
					},
				],
			},
			"shortDesc":
				"Your abilities either create or detonate Weaves.\r\n\r\n  • Detonating Weaves deals  [50% INT] Physical Damage to nearby enemies and Roots them\r\n  • You gain a stacking Attack Speed and Intelligence increase per Weave detonated",
			"valueKeys": {
				"ASBuff": [2],
				"BuffDuration": [30],
				"Damage": [50],
				"IntBuff": [10],
				"IntBuffPerLevel": [0.5],
				"MaxStacks": [3],
				"RootDuration": [1],
			},
		},
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},

				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/1649a2b6-4ccb-4a63-9744-a9ded490cf00/public",
				"key": "Odin.A01.InGame.Short",
				"name": "Lunge",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.95, 0.95, 0.95, 0.95, 0.95],
						},
					],
				},
				"shortDesc":
					"Leap forward, dealing  [95% STR] Physical Damage to nearby enemies as you land.\r\n\r\n  • If you have a Shield from Raven Shout, it explodes upon landing",
				"valueKeys": {
					"Cooldown": [16, 15, 14, 13, 12],
					"Cost": [40, 45, 50, 55, 60],
					"Damage": [75, 115, 155, 195, 235],
					"Radius": [2.4, 2.4, 2.4, 2.4, 2.4],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
				},
			},
			"A02": {
				"details": [
					{
						"key": "Shield",
						"text": "<KeywordName>Shield Health: {0} ",
					},
					{
						"key": "ShieldScaling_Scaling",
						"text": "<KeywordName>Shield Health Scaling: {0}",
					},
					{
						"key": "ExplodeRadius",
						"text": "<KeywordName>Explode Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "({Shield} + {ShieldScaling_Scaling}) * {BonusDamageCalc}",
					"Shield_Formula": "{Shield} + {ShieldScaling_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/76215fac-f7e9-4413-f048-50a33f349e00/public",
				"key": "Odin.A02.InGame.Short",
				"name": "Raven Shout",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.5, 0.5, 0.5, 0.5, 0.5],
						},
						{
							"stat": "MagicalPower",
							"values": [0.55, 0.55, 0.55, 0.55, 0.55],
						},
					],
				},
				"shortDesc":
					"Gain a [50% STR + 55% INT] Health Shield for a duration.\r\n\r\n  • After the duration, the Shield explodes dealing Physical Damage equal to the remaining Shield Health to nearby enemies\r\n  • If the Shield is at full HP when it explodes, it deals  Physical Damage instead ",
				"valueKeys": {
					"BonusDamage": [15.000001, 15.000001, 15.000001, 15.000001, 15.000001],
					"BonusDamageCalc": [1.151],
					"Cooldown": [14, 13.5, 13, 12.5, 12],
					"Cost": [45, 50, 55, 60, 65],
					"ExplodeRadius": [3.2],
					"Damage": [100, 150, 200, 250, 300],
					"ShieldScaling": [],
				},
			},
			"A03": {
				"details": [
					{
						"key": "",
						"text": "Projectile passes through and damages all targets, stops on first god hit, and stops on walls",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Pulse Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Pulse Damage Scaling: {0}",
					},
					{
						"key": "SpearDamage",
						"text": "<KeywordName>Projectile Damage: {0}",
					},
					{
						"key": "SpearDamage_Scaling",
						"text": "<KeywordName>Projectile Damage Scaling: {0}",
					},
					{
						"key": "StunDuration",
						"text": "<KeywordName>Stun Duration: {0}s",
					},
					{
						"key": "AttackSpeedBuff",
						"text": "<KeywordName>Attack Speed: {0}%",
					},
					{
						"key": "AttackSpeedBuffDur",
						"text": "<KeywordName>Buff Duration: {0}s",
					},
					{
						"key": "PulseRadius",
						"text": "<KeywordName>Pulse Radius: {0}m",
					},
					{
						"key": "ProjectileRange",
						"text": "<KeywordName>Projectile Range: {0}m",
					},
					{
						"key": "ProjectileRadius",
						"text": "<KeywordName>Projectile Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"SpearDamage_Formula": "{SpearDamage} + {SpearDamage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/4970576c-2435-4ad9-d1fa-f9b595dddd00/public",
				"key": "Odin.A03.InGame.Short",
				"name": "Gungnir's Might",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.5, 0.5, 0.5, 0.5, 0.5],
						},
					],
					"SpearDamage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.7, 0.7, 0.7, 0.7, 0.7],
						},
					],
				},
				"shortDesc":
					"Charge up, pulsing damage around you twice, then throw your spear.\r\n\r\n  • The pulses deal  [50% INT] Physical Damage and Slow\r\n  • The spear deals {SpearDamage_Formula} [70% STR] Physical Damage and Stuns if fired after two pulses\r\n  • If you refire the spear early, nearby allies get Attack Speed and this ability has a 40% reduced cooldown",
				"valueKeys": {
					"AttackSpeedBuff": [30, 32.5, 35, 37.5, 40],
					"AttackSpeedBuffDur": [4, 4, 4, 4, 4],
					"Cooldown": [12, 12, 12, 12, 12],
					"Cost": [50, 60, 70, 80, 90],
					"Damage": [45, 70, 95, 120, 145],
					"ProjectileRadius": [0.48, 0.48, 0.48, 0.48, 0.48],
					"ProjectileRange": [8.8, 8.8, 8.8, 8.8, 8.8],
					"PulseRadius": [3.2, 3.2, 3.2, 3.2, 3.2],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
					"SpearDamage": [35, 70, 105, 140, 175],
					"StunDuration": [1.2, 1.2, 1.2, 1.2, 1.2],
				},
			},
			"A04": {
				"details": [
					{
						"key": "",
						"text": "Ring of Spears does not block ally movement or projectiles, only enemy basic attacks and enemy god movement .",
					},
					{
						"key": "",
						"text": "The Ring is made of 8 Segments that each have 5 Hit Points, an enemy basic attack will deal 1 Hit Point per hit. ",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "SlowAmt",
						"text": "<KeywordName>Slow: {0}%",
					},
					{
						"key": "SlowDur",
						"text": "<KeywordName>Slow Duration: {0}s",
					},
					{
						"key": "STRDebuff",
						"text": "<KeywordName>Strength: {0}%",
					},
					{
						"key": "INTDebuff",
						"text": "<KeywordName>Intelligence: {0}%",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/deeacab9-bc13-4742-c0ef-257930abde00/public",
				"key": "Odin.A04.InGame.Short",
				"name": "Ring Of Spears",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [1.1, 1.1, 1.1, 1.1, 1.1],
						},
					],
				},
				"shortDesc":
					"Create a spear ring of walls that impedes enemies.\r\n\r\n  • Enemies in the area cannot Heal, and have reduced Strength and Intelligence\r\n  • Enemies who leave the area take  [110% STR] Physical Damage and are Slowed, unless exiting through segment of the ring destroyed by basic attacks",
				"valueKeys": {
					"Cooldown": [110, 105, 100, 95, 90],
					"Cost": [100, 100, 100, 100, 100],
					"Damage": [60, 110, 160, 210, 260],
					"INTDebuff": [-15.000001, -17.5, -20, -22.5, -25],
					"STRDebuff": [-15.000001, -17.5, -20, -22.5, -25],
					"SlowAmt": [25, 25, 25, 25, 25],
					"SlowDur": [5, 5, 5, 5, 5],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.442,
				"20": 28.84,
				"rate": 1.442,
			},
			"BaseAttackSpeed": {
				"1": 0.96,
				"20": 0.96,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.75,
				"20": 5.67,
				"rate": 0.2063157894736842,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 28.3,
				"20": 57.7,
				"rate": 1.5473684210526317,
			},
			"ManaPerTime": {
				"1": 2.32,
				"20": 7.21,
				"rate": 0.25736842105263164,
			},
			"MaxHealth": {
				"1": 632.2,
				"20": 2369,
				"rate": 91.41052631578947,
			},
			"MaxMana": {
				"1": 296,
				"20": 1094,
				"rate": 42,
			},
			"MovementSpeed": {
				"1": 442,
				"20": 442,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 44,
				"20": 90,
				"rate": 2.4210526315789473,
			},
			"PhysicalProtection": {
				"1": 19.6,
				"20": 78.3,
				"rate": 3.089473684210526,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "If multiple enemies are in the area, the enemy closest to the center of the area will be hit. ",
				},
				{
					"key": "",
					"text": "Has a 4 hit chain. Attacks in order of 1, 1, 1, 1.5x damage and swing time.",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "ConeAngle",
					"text": "<KeywordName>Cone Angle: {0} degrees",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Odin/Icon_BasicAttack_Physical.webp",
			"key": "Basic.MeleePhys.InGame.Short",
			"name": "Odin Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Deal  Physical Damage to an enemy in front of you. ",
			"valueKeys": {
				"ConeAngle": [120],
				"Damage": [0],
				"RangeCheat": [1.92],
			},
		},
		"internalName": "Odin_Item",
		"key": "God.Odin",
		"name": "Odin",
		'Type': 'Physical',
		icon: "/src/assets/icons/odinImage.webp",
		"passive": {
			"details": [
				{
					"key": "MSBuff",
					"text": "<KeywordName>Movement Speed: {0}% Per Stack",
				},
				{
					"key": "STRBuff",
					"text": "<KeywordName>Strength: {0}% Per Stack",
				},
				{
					"key": "INTBuff",
					"text": "<KeywordName>Intelligence: {0}% Per Stack",
				},
				{
					"key": "BuffDur",
					"text": "<KeywordName>Buff Duration: {0}s",
				},
				{
					"key": "MaxStacks",
					"text": "<KeywordName>Max Buff Stacks: {0}",
				},
			],
			"icon": "/assets/gods/Odin/Passive.webp",
			"key": "Odin.PSV.InGame.Short",
			"name": "Path to Valhalla",
			"shortDesc": "Killing a god grants a brief increase to Movement Speed, Strength, and Intelligence.",
			"valueKeys": {
				"BuffDur": [10],
				"INTBuff": [10],
				"MSBuff": [4],
				"MaxStacks": [2],
				"STRBuff": [10],
			},
		},
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "Pool scales from 1x radius at 0 Heat to 2x radius at 100 Heat. ",
					},
					{
						"key": "",
						"text": "This ability hits {AttackCount} times over {DeployableDuration} seconds.",
					},
					{
						"key": "",
						"text": "Heals 6 times over 5 seconds.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage Per Tick: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling Per Tick: {0}",
					},
					{
						"key": "HealCT",
						"text": "<KeywordName>Heal Per Tick: {0}% Missing Health",
					},
					{
						"key": "Heat",
						"text": "<KeywordName>Heat Generated: {0}",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "RadiusCheat",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"Heal_Formula": "{HealCT}*6",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/3f3dc494-0f03-4e2e-5cb2-88d65d82e500/public",
				"key": "Sol.A01.InGame.Short",
				"name": "Radiance",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.3, 0.3, 0.3, 0.3, 0.3],
						},
					],
				},
				"shortDesc":
					"Create a pool of flames and Heal yourself over time for % of your missing Health.\r\n\r\n  • Enemies in the pool take  [30% INT] Magical Damage repeatedly\r\n  • The size of the pool increases if you have more Heat when using this ability\r\n  • You gain Heat when using this ability",
				"valueKeys": {
					"AttackCount": [3, 3, 3, 3, 3],
					"Cooldown": [11, 11, 11, 11, 11],
					"Cost": [50, 60, 70, 80, 90],
					"Damage": [30, 50, 70, 90, 110],
					"DeployableDuration": [3, 3, 3, 3, 3],
					"Heal": [0.025, 0.025, 0.025, 0.025, 0.025],
					"HealCT": [2.5, 2.5, 2.5, 2.5, 2.5],
					"HealDuration": [5],
					"HealPeriod": [1],
					"Heat": [30, 40, 50, 60, 70],
					"RadiusCheat": [2.08],
					"RefireTime": [0.99, 0.99, 0.99, 0.99, 0.99],
				},
			},
			"A02": {
				"details": [
					{
						"key": "",
						"text": "Projectile stops and explodes on first enemy hit, walls, or max range.",
					},
					{
						"key": "",
						"text": "Can only trigger ability based items and effects. ",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Slow",
						"text": "<KeywordName>Slow: {0}%",
					},
					{
						"key": "SlowDuration",
						"text": "<KeywordName>Slow Duration: {0}s",
					},
					{
						"key": "Heat",
						"text": "<KeywordName>Heat Generated: {0}",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "RadiusCheat",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/64a9e839-a1fa-4087-7464-cd89dec6e600/public",
				"key": "Sol.A02.InGame.Short",
				"name": "Stellar Burst",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.45, 0.45, 0.45, 0.45, 0.45],
						},
						{
							"stat": "PhysicalPower",
							"values": [0.25, 0.25, 0.25, 0.25, 0.25],
						},
					],
				},
				"shortDesc":
					"Your next basic attack fires a projectile that explodes on hit or upon reaching max range, then retracts, and generates Heat.\r\n\r\n  • Both the explosion and the retraction deal  [45% INT + 25% STR] Magical Damage and Slow",
				"valueKeys": {
					"Cooldown": [10, 10, 10, 10, 10],
					"Cost": [50, 60, 70, 80, 90],
					"Damage": [40, 70, 100, 130, 160],
					"Heat": [10, 10, 10, 10, 10],
					"RadiusCheat": [3.2],
					"Range": [-0.01, -0.01, -0.01, -0.01, -0.01],
					"Slow": [15, 20, 25, 30, 35],
					"SlowDuration": [1.5, 1.5, 1.5, 1.5, 1.5],
				},
			},
			"A03": {
				"details": [
					{
						"key": "",
						"text": "You can cancel out of the Immune state early. ",
					},
					{
						"key": "",
						"text": "This Immune state is Damage Immunity, Healing Immunity, CC Immunity, Untargetable, and makes you able to pass through allies, enemies, and Impediments. ",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage Per Tick: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling Per Tick: {0}",
					},
					{
						"key": "ExplodeDamage",
						"text": "<KeywordName>Explode Damage: {0}",
					},
					{
						"key": "ExplodeDamage_Scaling",
						"text": "<KeywordName>Explode Damage Scaling: {0}",
					},
					{
						"key": "MovementSpeed",
						"text": "<KeywordName>Movement Speed: {0}%",
					},
					{
						"key": "MovementSpeedDuration",
						"text": "<KeywordName>Buff Duration: {0}s",
					},
					{
						"key": "MovementSpeedDuration",
						"text": "<KeywordName>Immunity Duration: {0}s",
					},
					{
						"key": "Heat",
						"text": "<KeywordName>Heat Generated: {0}",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "RadiusCheat",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"ExplodeDamage_Formula": "{ExplodeDamage} + {ExplodeDamage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/83694819-c168-4498-39f9-90c16aa16800/public",
				"key": "Sol.A03.InGame.Short",
				"name": "Disapparate",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.25, 0.25, 0.25, 0.25, 0.25],
						},
					],
					"ExplodeDamage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.75, 0.75, 0.75, 0.75, 0.75],
						},
					],
				},
				"shortDesc":
					"Gain Movement Speed and  Slow Immunity, gaining Heat and leaving a trail of fire behind you.\r\n\r\n  • The Trail deals  [25% INT] Magical Damage\r\n  • After 3 seconds, you become Immune and unable to attack, and the trail detonates dealing  [75% INT] Magical Damage",
				"valueKeys": {
					"Cooldown": [16, 16, 16, 16, 16],
					"Cost": [60, 60, 60, 60, 60],
					"Damage": [20, 40, 60, 80, 100],
					"ExplodeDamage": [60, 120, 180, 240, 300],
					"Heat": [10, 10, 10, 10, 10],
					"ImmunityDuration": [3],
					"MovementSpeed": [20, 22.5, 25, 27.5, 30],
					"MovementSpeedDuration": [3],
					"RadiusCheat": [1],
				},
			},
			"A04": {
				"details": [
					{
						"key": "",
						"text": "Areas are selected every 0.18s or when your targeter has moved more than 1.8m since the last area was selected.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "SubsequentDamage",
						"text": "<KeywordName>Subsequent Damage: {0}%",
					},
					{
						"key": "Heat",
						"text": "<KeywordName>Heat Generated: {0}",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "RadiusCheat",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/48147c43-2418-4009-ed01-a05fd6fdcb00/public",
				"key": "Sol.A04.InGame.Short",
				"name": "Supernova",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.4, 0.4, 0.4, 0.4, 0.4],
						},
					],
				},
				"shortDesc":
					"Unleash flame and fury, gaining Heat and striking 8 times along a moveable ground target location.\r\n\r\n  • Each strike deals  [40% INT] Magical Damage; subsequent hits deal reduced damage\r\n  • The first time an enemy is hit, they are Knocked Back\r\n  • You are CC Immune while using this ability ",
				"valueKeys": {
					"AttackCount": [8,8,8,8,8],
					"Cooldown": [90, 90, 90, 90, 90],
					"Cost": [100, 100, 100, 100, 100],
					"Damage": [120, 160, 200, 240, 280],
					"Heat": [40, 40, 40, 40, 40],
					"RadiusCheat": [1.92],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
					"SubsequentDamage": [30],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.484,
				"20": 29.68,
				"rate": 1.484,
			},
			"BaseAttackSpeed": {
				"1": 0.99,
				"20": 0.99,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.7,
				"20": 5.5,
				"rate": 0.19999999999999998,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 26.7,
				"20": 54.3,
				"rate": 1.4526315789473683,
			},
			"ManaPerTime": {
				"1": 2.25,
				"20": 7,
				"rate": 0.25,
			},
			"MaxHealth": {
				"1": 595.3,
				"20": 2231,
				"rate": 86.08947368421053,
			},
			"MaxMana": {
				"1": 296,
				"20": 1094,
				"rate": 42,
			},
			"MovementSpeed": {
				"1": 430,
				"20": 430,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 46,
				"20": 93,
				"rate": 2.473684210526316,
			},
			"PhysicalProtection": {
				"1": 18.4,
				"20": 73.7,
				"rate": 2.910526315789474,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "Projectile stops on first target hit, and does not pass through walls. ",
				},
				{
					"key": "",
					"text": "Successfully hit basic attacks generate Heat.",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "heat",
					"text": "<KeywordName>Heat Generated: {0}",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "RadiusCheat",
					"text": "<KeywordName>Radius: {0}m",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Sol/Icon_BasicAttack_Magical.webp",
			"key": "Basic.RangedMag.InGame.Short",
			"name": "Sol Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Fire a projectile that deals  Magical Damage to the first enemy hit. ",
			"valueKeys": {
				"Damage": [0],
				"RadiusCheat": [0.48],
				"RangeCheat": [8.8],
				"heat": [5],
			},
		},
		"basicb": {
			"details": [
				{
					"key": "",
					"text": "Projectile stops and explodes on first enemy hit, walls, or max range.",
				},
				{
					"key": "",
					"text": "Can only trigger ability based items and effects. ",
				},
				{
					"key": "Damage",
					"text": "<KeywordName>Damage: {0}",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "Slow",
					"text": "<KeywordName>Slow: {0}%",
				},
				{
					"key": "SlowDuration",
					"text": "<KeywordName>Slow Duration: {0}s",
				},
				{
					"key": "Heat",
					"text": "<KeywordName>Heat Generated: {0}",
				},
				{
					"key": "Range",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "RadiusCheat",
					"text": "<KeywordName>Radius: {0}m",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Sol/A02.webp",
			"key": "Sol.A02.InGame.Short",
			"name": "Stellar Burst",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "MagicalPower",
						"values": [0.45, 0.45, 0.45, 0.45, 0.45],
					},
				],
			},
			"shortDesc":
				"Your next basic attack fires a projectile that explodes on hit or upon reaching max range, then retracts, and generates Heat.\r\n\r\n  • Both the explosion and the retraction deal  [45% INT + 25% STR] Magical Damage and Slow",
			"valueKeys": {
				"Cooldown": [10, 10, 10, 10, 10],
				"Cost": [50, 60, 70, 80, 90],
				"Damage": [40, 70, 100, 130, 160],
				"Heat": [10, 10, 10, 10, 10],
				"RadiusCheat": [3.2],
				"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
				"Slow": [15, 20, 25, 30, 35],
				"SlowDuration": [1.5, 1.5, 1.5, 1.5, 1.5],
			},
		},
		"internalName": "Sol_Item",
		"key": "God.Sol",
		"name": "Sol",
		'Type': 'Magical',
		icon: "/src/assets/icons/solImage.webp",
		"passive": {
			"details": [
				{
					"key": "",
					"text": "Ranges from 0 to 100 Heat.",
				},
				{
					"key": "",
					"text": "Heat starts depleting if you have not generated Heat within the last 6 seconds.",
				},
				{
					"key": "",
					"text": "Heat depleats over time at a rate of 6 heat per 0.33s.",
				},
				{
					"key": "STRBuff",
					"text": "<KeywordName>Strength: {0}",
				},
				{
					"key": "INTBuff",
					"text": "<KeywordName>Intelligence: {0}",
				},
				{
					"key": "AttackSpeedBuff",
					"text": "<KeywordName>Attack Speed: {0}%",
				},
				{
					"key": "BasicAttackBuff",
					"text": "<KeywordName>Basic Attack Damage: {0}%",
				},
			],
			"icon": "/assets/gods/Sol/Passive.webp",
			"key": "Sol.PSV.InGame.Short",
			"name": "Unstable Manifestation",
			"shortDesc":
				"Hit enemies with basic attacks or use abilities to gain Heat.\r\n\r\n  • Heat grants increased Strength, Intelligence, and Attack Speed\r\n  • At Max Heat, increase your basic attack damage",
			"valueKeys": {
				"AttackSpeedBuff": [0.3],
				"BasicAttackBuff": [15.000001],
				"INTBuff": [0.25],
				"STRBuff": [0.25],
			},
		},
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "This ability Cooldown is increased by 1s for each additional attack used.",
					},
					{
						"key": "",
						"text": "Dash passes through all enemies.",
					},
					{
						"key": "Strike_Damage",
						"text": "<KeywordName>Strike Damage: {0}",
					},
					{
						"key": "Strike_Damage_Scaling",
						"text": "<KeywordName>Strike Damage Scaling: {0}",
					},
					{
						"key": "Spin_Damage",
						"text": "<KeywordName>Spin Damage: {0}",
					},
					{
						"key": "Spin_Damage_Scaling",
						"text": "<KeywordName>Spin Damage Scaling: {0}",
					},
					{
						"key": "Dash_Damage",
						"text": "<KeywordName>Dash Damage: {0}",
					},
					{
						"key": "Dash_Damage_Scaling",
						"text": "<KeywordName>Dash Damage Scaling: {0}",
					},
					{
						"key": "Strike_Range_Cheat",
						"text": "<KeywordName>Strike Range: {0}m",
					},
					{
						"key": "Strike_Angle_Cheat",
						"text": "<KeywordName>Strike Cone Angle: {0} degrees",
					},
					{
						"key": "Spin_Radius_Cheat",
						"text": "<KeywordName>Spin Radius: {0}m",
					},
					{
						"key": "Dash_Range_Cheat",
						"text": "<KeywordName>Dash Range: {0}m",
					},
					{
						"key": "Dash_Radius_Cheat",
						"text": "<KeywordName>Dash Radius: {0}m",
					},
				],
				"formulas": {
					"Dash_Damage_Formula": "{Dash_Damage} + {Dash_Damage_Scaling}",
					"Spin_Damage_Formula": "{Spin_Damage} + {Spin_Damage_Scaling}",
					"Strike_Damage_Formula": "{Strike_Damage} + {Strike_Damage_Scaling}",
				},
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/susanoOne.webp",
				"key": "Susano.A01.InGame.Short",
				"name": "Storm Kata",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [1.25, 1.25, 1.25, 1.25, 1.25],
						},
					],
					"Spin_Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.5, 0.5, 0.5, 0.5, 0.5],
						},
					],
					"Strike_Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.5, 0.5, 0.5, 0.5, 0.5],
						},
					],
				},
				"shortDesc":
					"Strike three times in quick succession.\r\n\r\n  • The first attack deals [50% STR] Physical Damage to enemies in front of you.\r\n  • The second attack spins, dealing [50% STR] Physical Damage to enemies around you\r\n  • The third attack Dashes forward dealing [50% STR] Physical Damage",
				"valueKeys": {
					"Cooldown": [14, 13, 12, 11, 10],
					"Cost": [50, 55, 60, 65, 70],
					"Dash_Damage": [30, 50, 70, 90, 110],
					"Dash_Radius_Cheat": [0.5],
					"Dash_Range_Cheat": [7],
					"Spin_Damage": [40, 60, 80, 100, 120],
					"Spin_Radius_Cheat": [4.8],
					"Strike_Angle_Cheat": [60],
					"Strike_Damage": [40, 60, 80, 100, 120],
					"Damage": [110,170,230,290,350],
					"Strike_Range_Cheat": [4.8],
				},
			},
			"A02": {
				"details": [
					{
						"key": "",
						"text": "Enemies are Pulled to the location in front of you at the start of the attack.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Range_Cheat",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Angle_Cheat",
						"text": "<KeywordName>Cone Angle: {0} degrees",
					},
					{
						"key": "Inner_Angle_Cheat",
						"text": "<KeywordName>Inner Cone Angle: {0} degrees",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/susanoTwo.webp",
				"key": "Susano.A02.InGame.Short",
				"name": "Wind Siphon",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.7, 0.7, 0.7, 0.7, 0.7],
						},
					],
				},
				"shortDesc":
					"Command the winds to blow, dealing  [70% STR] Physical Damage to enemies in front of you.\r\n\r\n  • Enemies in the inner area are also Pulled towards you",
				"valueKeys": {
					"Angle_Cheat": [105],
					"Cooldown": [16, 16, 16, 16, 16],
					"Cost": [40, 50, 60, 70, 80],
					"Damage": [90, 120, 150, 180, 210],
					"Inner_Angle_Cheat": [40],
					"Range_Cheat": [5.6],
				},
			},
			"A03": {
				"details": [
					{
						"key": "",
						"text": "The Whirlwind will travel with the enemy hit.",
					},
					{
						"key": "",
						"text": "This ability Cooldown is reduced by 4s when Teleporting to an enemy.",
					},
					{
						"key": "",
						"text": "Ability hits {Attack_Count} times, over {Deployable_Duration} seconds.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/susanoThree.webp",
				"key": "Susano.A03.InGame.Short",
				"name": "Jet Stream",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.25, 0.25, 0.25, 0.25, 0.25],
						},
					],
				},
				"shortDesc":
					"Throw a gust of wind projectile that stops on walls or the first enemy hit, creating a whirlwind. \r\n\r\n  • The whirlwind deals  [20% STR] Physical Damage repeatedly\r\n  • You can reactivate this ability to Teleport to the whirlwind",
				"valueKeys": {
					"AttackCount": [6, 6, 6, 6, 6],
					"Cooldown": [16, 16, 16, 16, 16],
					"Cost": [45, 50, 55, 60, 65],
					"Damage": [20, 30, 40, 50, 60],
					"Depl_Radius": [1.6, 1.6, 1.6, 1.6, 1.6],
					"Deployable_Duration": [3, 3, 3, 3, 3],
					"Radius": [0.48, 0.48, 0.48, 0.48, 0.48],
					"Range": [7.2, 7.2, 7.2, 7.2, 7.2],
				},
			},
			"A04": {
				"details": [
					{
						"key": "",
						"text": "This ability automatically refires after 2s.",
					},
					{
						"key": "",
						"text": "This ability starts at 50% Size and Damage and increases over the duration.",
					},
					{
						"key": 'LOCTABLE("/Game/UI/StringTables/God/ST_HW_God_AbilityDescriptions.ST_HW_God_AbilityDescriptions", "Susano.A04.InGame.Long")',
						"text": "The Typhoon will travel in the duration Susano is facing on refire.",
					},
					{
						"key": "Tick_Damage",
						"text": "<KeywordName>Damage Per Tick: {0}",
					},
					{
						"key": "Tick_Damage_Scaling",
						"text": "<KeywordName>Damage Scaling Per Tick: {0}",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Max Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Inner_Radius_Cheat",
						"text": "<KeywordName>Start Radius: {0}m",
					},
					{
						"key": "Radius_Cheat",
						"text": "<KeywordName>Max Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"Tick_Damage_Formula": "{Tick_Damage} + {Tick_Damage_Scaling}",
				},
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/susanoFour.webp",
				"key": "Susano.A04.InGame.Short",
				"name": "Typhoon",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [1, 1, 1, 1, 1],
						},
					],
					"Tick_Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.1, 0.1, 0.1, 0.1, 0.1],
						},
					],
				},
				"shortDesc":
					"Summon a typhoon which repeatedly deals [10% STR] Physical Damage as it grows in size.\r\n\r\n  • After reaching full size, the typhoon is launched in the direction you are facing, dealing  [100% STR] Physical Damage and Knocking Up enemies\r\n  • Reactivate this ability to fire the typhoon at its current size, dealing less damage",
				"valueKeys": {
					"Cooldown": [90, 90, 90, 90, 90],
					"Cost": [80, 85, 90, 95, 100],
					"Damage": [200, 260, 320, 380,440],
					"Inner_Radius_Cheat": [3.2, 3.2, 3.2, 3.2, 3.2],
					"Radius_Cheat": [6.4, 6.4, 6.4, 6.4, 6.4],
					"Range": [2, 2, 2, 2, 2],
					"Tick_Damage": [10, 15, 20, 25, 30],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.484,
				"20": 29.68,
				"rate": 1.484,
			},
			"BaseAttackSpeed": {
				"1": 0.99,
				"20": 0.99,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.7,
				"20": 5.5,
				"rate": 0.19999999999999998,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 26.7,
				"20": 54.3,
				"rate": 1.4526315789473683,
			},
			"ManaPerTime": {
				"1": 2.25,
				"20": 7,
				"rate": 0.25,
			},
			"MaxHealth": {
				"1": 613.8,
				"20": 2300,
				"rate": 88.74736842105263,
			},
			"MaxMana": {
				"1": 296,
				"20": 1094,
				"rate": 42,
			},
			"MovementSpeed": {
				"1": 442,
				"20": 442,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 46,
				"20": 93,
				"rate": 2.473684210526316,
			},
			"PhysicalProtection": {
				"1": 18.4,
				"20": 73.7,
				"rate": 2.910526315789474,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "If multiple enemies are in the area, the enemy closest to the center of the area will be hit. ",
				},
				{
					"key": "",
					"text": "Has a 3 hit chain. Attacks in order of 1, 1, 1.25x damage and swing time.",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "ConeAngle",
					"text": "<KeywordName>Cone Angle: {0} degrees",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Susano/Icon_BasicAttack_Physical.webp",
			"key": "Basic.MeleePhys.InGame.Short",
			"name": "Susano Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Deal  Physical Damage to an enemy in front of you. ",
			"valueKeys": {
				"ConeAngle": [120],
				"Damage": [0],
				"RangeCheat": [1.92],
			},
		},
		"internalName": "Susano_Item",
		"key": "God.Susano",
		"name": "Susano",
		'Type': 'Physical',
		icon: "/src/assets/icons/susanoImage.webp",
		"passive": {
			"details": [
				{
					"key": "",
					"text": "Enemies with 1-2 stacks have 10% reduced Strength.",
				},
				{
					"key": "",
					"text": "Enemies with 3-4 stacks are Slowed by 15% and maintain previous Debuff.",
				},
				{
					"key": "",
					"text": "Enemies with 5-6 stacks tale 10% increased damage and maintain previous Debuffs.",
				},
				{
					"key": "",
					"text": "Debuffs last 3s and refresh on a new application.",
				},
				{
					"key": "",
					"text": "Buff lasts 3s.",
				},
				{
					"key": "",
					"text": "Each attack of Storm Kata can trigger ability item effects.",
				},
			],
			"icon": "/assets/gods/Susano/Passive.webp",
			"key": "Susano.PSV.InGame.Short",
			"name": "Storm's Edge",
			"shortDesc":
				"After using an ability, your next basic attack will add a Storm’s Edge debuff stack to an enemy.\r\n\r\n  • At 1-2 stacks, enemies have reduced Strength\r\n  • At 3-4 stacks, enemies are also Slowed\r\n  • At 5-6 stacks, enemies also take 10% increased Damage",
		},
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "Projectile stops on walls. ",
					},
					{
						"key": "",
						"text": "Gods hit by the projectile take 10% of their Max Health as bonus Physical Damage.",
					},
					{
						"key": "",
						"text": "Thanatos Heals for 50% of the total damage done.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "CTDamage_Scaling_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Slow",
						"text": "<KeywordName>Slow: {0}%",
					},
					{
						"key": "Slow Duration",
						"text": "<KeywordName>Slow Duration: {0}s",
					},
					{
						"key": "Slow Duration",
						"text": "<KeywordName>Slow Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
					{
						"key": "Cost",
						"text": "<KeywordName>Cost: {0}% Health",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {CTDamage_Scaling_Scaling}",
				},
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/thanaOne.webp",
				"key": "Thanatos.A01.InGame.Short",
				"name": "Death Scythe",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.6, 0.6, 0.6, 0.6, 0.6],
						},
					],
				},
				"shortDesc":
					"Fling a scythe projectile that deals  [60% STR] Physical Damage and Slows the first target hit.\r\n\r\n  • You Heal for 50% of the total damage done\r\n  • Gods take 10% of their Max Health as  bonus Physical Damage",
				"valueKeys": {
					"CTDamage_Scaling": [],
					"Cooldown": [12, 12, 12, 12, 12],
					"Cost": [6, 6, 6, 6, 6],
					"Damage": [95, 165, 235, 305, 375],
					"Radius": [0.48, 0.48, 0.48, 0.48, 0.48],
					"Range": [11.2, 11.2, 11.2, 11.2, 11.2],
					"Slow": [20, 20, 20, 20, 20],
					"Slow Duration": [3, 3, 3, 3, 3],
				},
			},
			"A02": {
				"details": [
					{
						"key": "",
						"text": "Bonus Movement Speed scales from 0% effectiveness to 100% effectiveness. 0% when the targets health is at Execute Threshold and 100% when the target is 1 health.",
					},
					{
						"key": "BaseSpeed",
						"text": "<KeywordName>Movement Speed: {0}%",
					},
					{
						"key": "BonusSpeed",
						"text": "<KeywordName>Bonus Movement Speed: Up to {0}%",
					},
					{
						"key": "FlatPen",
						"text": "<KeywordName>Flat Penetration: {0}",
					},
					{
						"key": "BonusDamage",
						"text": "<KeywordName>Bonus Damage: {0}%",
					},
					{
						"key": "Cost",
						"text": "<KeywordName>Cost: {0}% Health",
					},
				],
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/thanaTwo.webp",
				"key": "Thanatos.A02.InGameShort",
				"name": "Scent of Death",
				"shortDesc":
					"Sense death, becoming Slow Immune and gaining Movement Speed and Penetration.\r\n\r\n  • You also deal bonus damage to and run faster towards enemies at low health",
				"valueKeys": {
					"BaseSpeed": [8, 12, 16, 20, 24],
					"BonusDamage": [5, 7.5, 10, 12.5, 15],
					"BonusSpeed": [8, 12, 16, 20, 24],
					"Cooldown": [13, 13, 13, 13, 13],
					"Cost": [4, 4, 4, 4, 4],
					"FlatPen": [8, 11, 14, 17, 20],
				},
			},
			"A03": {
				"details": [
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Silence ",
						"text": "<KeywordName>Silence Duration: {0}s",
					},
					{
						"key": "Silence ",
						"text": "<KeywordName>Silence Duration: {0}s",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Cone Angle",
						"text": "<KeywordName>Cone Angle: {0} degrees",
					},
					{
						"key": "Cost",
						"text": "<KeywordName>Cost: {0}% Health",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/thanaThree.webp",
				"key": "Thanatos.A03.InGame.Short",
				"name": "Soul Reap",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.65, 0.65, 0.65, 0.65, 0.65],
						},
					],
				},
				"shortDesc":
					"Swing your scythe, dealing  [65% STR] Physical Damage and Silencing enemies in front of you.",
				"valueKeys": {
					"Cone Angle": [110],
					"Cooldown": [14, 14, 14, 14, 14],
					"Cost": [4, 4, 4, 4, 4],
					"Damage": [60, 100, 140, 180, 220],
					"Range": [-0.01, -0.01, -0.01, -0.01, -0.01],
					"Silence ": [0.75, 0.75, 0.75, 0.75, 0.75],
				},
			},
			"A04": {
				"details": [
					{
						"key": "",
						"text": "Thanatos gains 125% Movement Speed while flying.",
					},
					{
						"key": "",
						"text": "Execute kills enemies even if their death would normally be prevented by other god abilities.",
					},
					{
						"key": "",
						"text": "If Thanatos is aiming at an invalid location when the ult expires, he will land on the last valid aimed location.",
					},
					{
						"key": "",
						"text": "Thanatos is fully CC Immune during buildup, ascent, flight, and descent.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "ExecuteThreshold",
						"text": "<KeywordName>Execute Health %: {0}%",
					},
					{
						"key": "Stun Duration",
						"text": "<KeywordName>Stun Duration: {0}s",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Cone Angle: {0} degrees",
					},
					{
						"key": "Cost",
						"text": "<KeywordName>Cost: {0}% Health",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "/SMITE-Damage-Calculator/static/buffIcons/thanaFour.webp",
				"key": "Thanatos.A04.InGame.Short",
				"name": "Hovering Death",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "PhysicalPower",
							"values": [0.8, 0.8, 0.8, 0.8, 0.8],
						},
					],
				},
				"shortDesc":
					"Fly into the sky, then dive to a location dealing  [80% STR] Physical Damage and Stunning enemies hit.\r\n\r\n  • Enemies at low health are Executed instead",
				"valueKeys": {
					"Cooldown": [110, 105, 100, 95, 90],
					"Cost": [6, 6, 6, 6, 6],
					"Damage": [110, 145, 180, 215, 250],
					"ExecuteThreshold": [24, 28, 32, 36, 40],
					"Radius": [2.4, 2.4, 2.4, 2.4, 2.4],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
					"Stun Duration": [1, 1, 1, 1, 1],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.484,
				"20": 29.68,
				"rate": 1.484,
			},
			"BaseAttackSpeed": {
				"1": 0.99,
				"20": 0.99,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.7,
				"20": 5.5,
				"rate": 0.19999999999999998,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 27.5,
				"20": 56,
				"rate": 1.5,
			},
			"ManaPerTime": {
				"1": 2.25,
				"20": 7,
				"rate": 0.25,
			},
			"MaxHealth": {
				"1": 613.8,
				"20": 2300,
				"rate": 88.74736842105263,
			},
			"MaxMana": {
				"1": 296,
				"20": 1094,
				"rate": 42,
			},
			"MovementSpeed": {
				"1": 442,
				"20": 442,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 46,
				"20": 93,
				"rate": 2.473684210526316,
			},
			"PhysicalProtection": {
				"1": 19,
				"20": 76,
				"rate": 3,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "Thanatos has a 3 hit chain. Attacks in an order of 1 / 0.75 / 1.5x damage and swing time. The final swing hits all targets in range.",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Thanatos/Icon_BasicAttack_Physical.webp",
			"key": "Thanatos.Basic.InGame.Short",
			"name": "Thanatos Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Deal  Physical Damage to an enemy in front of you. ",
			"valueKeys": {
				"Damage": [0],
			},
		},
		"internalName": "Thanatos_Item",
		"key": "God.Thanatos",
		"name": "Thanatos",
		'Type': 'Physical',
		icon: "/src/assets/icons/thanatosImage.webp",
		"passive": {
			"details": [
				{
					"key": "",
					"text": "The health threshold is determined by the rank of Hovering Death, using the first rank value when Hovering Death is unranked.",
				},
				{
					"key": "GodHealValue",
					"text": "<KeywordName>God Kill Heal: {0}% of their Max Health",
				},
				{
					"key": "MinionHealValue",
					"text": "<KeywordName>NPC Kill Heal: {0}% of their Max Health",
				},
				{
					"key": "CooldownReductionValue",
					"text": "<KeywordName>Cooldown Reduction: -{0}s",
				},
			],
			"icon": "/assets/gods/Thanatos/Passive.webp",
			"key": "Thanatos.PSV.InGame.Short",
			"name": "Harvester of Souls",
			"shortDesc":
				"You revel in the deaths of your foes.\r\n\r\n  • Enemy gods at low health are revealed to you\r\n  • Killing an enemy heals you\r\n  • Killing a god reduces all of your cooldowns\r\n  • Your abilities cost health instead of mana",
			"valueKeys": {
				"CooldownReductionValue": [5],
				"GodHealValue": [15],
				"MinionHealValue": [7],
			},
		},
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "The buildup for this ability does not break Confusion's Stealth.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Stun",
						"text": "<KeywordName>Stun Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Cone Angle: {0} degrees",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/5afe81ee-2617-4ab8-622a-4605810f9d00/public",
				"key": "TheMorrigan.A01.InGame.Short",
				"name": "Deadly Aspects",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.85, 0.85, 0.85, 0.85, 0.85],
						},
					],
				},
				"shortDesc":
					"Summon the power from all three of your forms, then activate again to deal  [85% INT]  Magical Damage and Stun enemies in front of you.",
				"valueKeys": {
					"Cooldown": [12, 12, 12, 12, 12],
					"Cost": [60, 65, 70, 75, 80],
					"Damage": [80, 135, 190, 245, 300],
					"Radius": [45, 45, 45, 45, 45],
					"Stun": [0.75, 0.75, 0.75, 0.75, 0.75],
				},
			},
			"A02": {
				"details": [
					{
						"key": "Damage",
						"text": "<KeywordName>Initial Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Initial Damage Scaling: {0}",
					},
					{
						"key": "MarkDamage",
						"text": "<KeywordName>Mark Damage: {0}",
					},
					{
						"key": "MarkDamage_Scaling",
						"text": "<KeywordName>Mark Scaling: {0}",
					},
					{
						"key": "MinionDamage",
						"text": "<KeywordName>Minion Damage: {0}",
					},
					{
						"key": "MinionDamage_Scaling",
						"text": "<KeywordName>Minion Damage Scaling: {0}",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"MarkDamage_Formula": "{MarkDamage} + {MarkDamage_Scaling}",
					"MinionDamage_Formula": "{MinionDamage} + {MinionDamage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/33a05c5e-b096-4043-741f-7f3a328c8c00/public",
				"key": "TheMorrigan.A02.InGame.Short",
				"name": "Dark Omen",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.5, 0.5, 0.5, 0.5, 0.5],
						},
					],
					"MarkDamage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.4, 0.4, 0.4, 0.4, 0.4],
						},
					],
					"MinionDamage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.6, 0.6, 0.6, 0.6, 0.6],
						},
					],
				},
				"shortDesc":
					"Fire a wave of dark magic, dealing  [50% INT] Magical Damage and marking enemies.\r\n\r\n  • The mark deals [50% INT] Magical Damage when that god is damaged by any god ability or Doomsayer",
				"valueKeys": {
					"Cooldown": [7, 7, 7, 7, 7],
					"Cost": [60, 65, 70, 75, 80],
					"Damage": [45, 75, 105, 135, 165],
					"MarkDamage": [45, 75, 105, 135, 165],
					"MinionDamage": [90, 150, 210, 270, 330],
					"Radius": [0.8, 0.8, 0.8, 0.8, 0.8],
					"Range": [11.2, 11.2, 11.2, 11.2, 11.2],
				},
			},
			"A03": {
				"details": [
					{
						"key": "",
						"text": "When the clone is damaged, it will appear as an illusion. It will change appearance and lose its health bar.",
					},
					{
						"key": "",
						"text": "The clone grants vision around itself.",
					},
					{
						"key": "",
						"text": "Taking damage while stealthed breaks the effect.",
					},
					{
						"key": "MovementSpeedValue",
						"text": "<KeywordName>Movement Speed: {0}%",
					},
					{
						"key": "StealthDurationValue",
						"text": "<KeywordName>Buff Duration: {0}s",
					},
					{
						"key": "CloneLifetimeValue",
						"text": "<KeywordName>Clone Lifetime: {0}s",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/a24995ce-c58d-40ab-9c85-4e31f19c4800/public",
				"key": "TheMorrigan.A03.InGame.Short",
				"name": "Confusion",
				"shortDesc":
					"Create a phantom clone of yourself and become Stealthed and gain Movement Speed.\r\n\r\n  • The clone will walk to your target location",
				"valueKeys": {
					"CloneLifetimeValue": [10, 10, 10, 10, 10, 10],
					"Cooldown": [17, 16.5, 16, 15.5, 15],
					"Cost": [60, 65, 70, 75, 80],
					"MovementSpeedValue": [30, 32.5, 35, 37.5, 40],
					"Range": [5.6, 5.6, 5.6, 5.6, 5.6],
					"StealthDurationValue": [3, 3.5, 4, 4.5, 5],
				},
			},
			"A04": {
				"details": [
					{
						"key": "",
						"text": "You will copy their ability ranks. If your level is different to the transform target's it will use the order they ranked their abilities, filling with Auto Skill as needed.",
					},
					{
						"key": "",
						"text": "If you are in the middle of firing an ability when the transform times out, you will detransform the moment that ability fire ends.",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/006589a9-05fe-45ec-2105-fb76aeae8800/public",
				"key": "TheMorrigan.A04.InGame.Short",
				"name": "Changeling",
				"shortDesc":
					"Select a god in the current match to transform into an exact copy of. Gain access to their abilities and items for 10 seconds.",
				"valueKeys": {
					"Cooldown": [120, 115, 110, 105, 100],
					"Cost": [100, 100, 100, 100, 100],
					"Range": [-0.01, -0.01, -0.01, -0.01, -0.01],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.484,
				"20": 29.68,
				"rate": 1.484,
			},
			"BaseAttackSpeed": {
				"1": 0.99,
				"20": 0.99,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.7,
				"20": 5.5,
				"rate": 0.19999999999999998,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 26.7,
				"20": 54.3,
				"rate": 1.4526315789473683,
			},
			"ManaPerTime": {
				"1": 2.32,
				"20": 7.21,
				"rate": 0.25736842105263164,
			},
			"MaxHealth": {
				"1": 583.1,
				"20": 2185,
				"rate": 84.31052631578947,
			},
			"MaxMana": {
				"1": 296,
				"20": 1094,
				"rate": 42,
			},
			"MovementSpeed": {
				"1": 430,
				"20": 430,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 43,
				"20": 87,
				"rate": 2.3157894736842106,
			},
			"PhysicalProtection": {
				"1": 18.4,
				"20": 73.7,
				"rate": 2.910526315789474,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "The Morrigan has a 3 hit chain. Attacks in an order of 1 / 1 / 1x damage and fire time. The final fire explodes on target, applying Doomsayer.",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "RadiusCheat",
					"text": "<KeywordName>Radius: {0}m",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/TheMorrigan/Icon_BasicAttack_Magical.webp",
			"key": "TheMorrigan.Basic.InGame.Short",
			"name": "The Morrigan Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Throw a projectile forward that deals  Magical Damage to enemies hit. ",
			"valueKeys": {
				"Damage": [0],
				"RadiusCheat": [0.48],
				"RangeCheat": [8.8],
			},
		},
		"internalName": "The_Morrigan_Item",
		"key": "God.TheMorrigan",
		"name": "The Morrigan",
		'Type': 'Magical',
		icon: "/src/assets/icons/morriganImage.webp",
		"passive": {
			"details": [
				{
					"key": "",
					"text": "This Damage Over Time can Crit.",
				},
				{
					"key": "Range",
					"text": "<KeywordName>Radius: {0}m",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage}",
			},
			"icon": "/assets/gods/TheMorrigan/Passive.webp",
			"key": "TheMorrigan.PSV.InGame.Short",
			"name": "Doomsayer",
			"shortDesc":
				"The third hit of your basic attack chain explodes, dealing 9% of the target’s Health as Magical Damage over 3 seconds.",
			"valueKeys": {
				"Damage": [0.09],
				"Radius": [2.56],
			},
		},
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "Projectile stops on walls",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "SlowStrength",
						"text": "<KeywordName>Slow: {0}%",
					},
					{
						"key": "SlowDuration",
						"text": "<KeywordName>Slow Duration: {0}s",
					},
					{
						"key": "AttackCount",
						"text": "<KeywordName>Bounces: {0}",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "CheatRadius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/649f0cf9-61fa-4015-89de-aa77b70a3600/public",
				"key": "Zeus.A01.InGame.Short",
				"name": "Chain Lightning",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.8, 0.8, 0.8, 0.8, 0.8],
						},
					],
				},
				"shortDesc":
					"Hurl a bolt of lightning that arcs between enemies.\r\n\r\n  • Deals [80% INT] Magical Damage and Slows. (Calculated as 3 hits)",
				"valueKeys": {
					"AttackCount": [3, 3, 3, 3, 3],
					"CTScaling": [],
					"CheatRadius": [0.56],
					"Cooldown": [12, 12, 12, 12, 12],
					"Cost": [50, 55, 60, 65, 70],
					"Damage": [80, 130, 180, 230, 280],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
					"SlowDuration": [0.5],
					"SlowStrength": [20],
				},
			},
			"A02a": {
				"details": [],
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/f8aeee41-bc59-4805-ff1d-db7a87fd9800/public",
				"key": "Zeus.A02.InGame.Short",
				"name": "Thunderclap",
				"shortDesc":
					"Call down lightning, dealing  [65% INT] Magical Damage to nearby enemies.\r\n\r\n  • You also gain increased Attack Speed and Movement Speed",
				"valueKeys": {
					"Cooldown": [15, 15, 15, 15, 15],
					"Cost": [50, 60, 70, 80, 90],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
				},
			},
			"A02": {
				"details": [
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Attack Speed Buff",
						"text": "<KeywordName>Attack Speed: {0}%",
					},
					{
						"key": "Movement Speed Buff",
						"text": "<KeywordName>Movement Speed: {0}%",
					},
					{
						"key": "Buff Duration",
						"text": "<KeywordName>Buff Duration: {0}s",
					},
					{
						"key": "CheatRadius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
					"InHandDamage_Formula": "{InHandDamage} + {InHandDamage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/f8aeee41-bc59-4805-ff1d-db7a87fd9800/public",
				"key": "Zeus.A02.InGame.Short",
				"name": "Thunderclap",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.65, 0.65, 0.65, 0.65, 0.65],
						},
					],
				},
				"shortDesc":
					"Call down lightning, dealing [65% INT] Magical Damage to nearby enemies.\r\n\r\n  • You also gain increased Attack Speed and Movement Speed",
				"valueKeys": {
					"Attack Speed Buff": [25, 27.5, 30, 32.5, 35],
					"Buff Duration": [5, 5, 5, 5, 5],
					"CheatRadius": [3.2],
					"Cooldown": [12, 12, 12, 12, 12],
					"Cost": [60, 65, 70, 75, 80],
					"Damage": [80, 130, 180, 230, 280],
					"Haste": [20],
					"Movement Speed Buff": [20, 22.5, 25, 27.5, 30],
				},
			},
			"A03": {
				"details": [
					{
						"key": "",
						"text": "This ability cannot be activated unless an enemy has a Charge. ",
					},
					{
						"key": "",
						"text": "Damage is multiplied by 1/1.7/2.4 based on number of Charges.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Stun Duration",
						"text": "<KeywordName>Stun Duration: {0}s",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/c8d5a4c3-4f75-463f-427a-6f3451840100/public",
				"key": "Zeus.A03.InGame.Short",
				"name": "Detonate Charge",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.3, 0.3, 0.3, 0.3, 0.3],
						},
					],
				},
				"shortDesc":
					"Detonate the Charges on all enemies, dealing  [30% INT] Magical Damage for each Charge.\r\n\r\n  • Enemies at Max Charges are Stunned",
				"valueKeys": {
					"CTScaling": [],
					"ChargeMultiplier": [1, 1.7, 2.4, 2.4, 2.4],
					"Cooldown": [14, 13.5, 13, 12.5, 12],
					"Cost": [70, 75, 80, 85, 90],
					"Damage": [50, 80, 110, 140, 170],
					"Stun Duration": [0.75, 0.75, 0.75, 0.75, 0.75],
				},
			},
			"A04": {
				"details": [
					{
						"key": "",
						"text": "This ability hits {AttackCount} times over {Channel Duration} seconds.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage Per Tick: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling Per Tick: {0}",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "CheatRadius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/1b7fd69d-d92d-4958-add0-c966d84b9e00/public",
				"key": "Zeus.A04.InGame.Short",
				"name": "Lightning Storm",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.55, 0.55, 0.55, 0.55, 0.55],
						},
					],
				},
				"shortDesc":
					"Conjure a lightning storm that deals  [55% INT] Magical Damage repeatedly in an area. \n(Calculated as 5 hits)",
				"valueKeys": {
					"AttackCount": [5, 5, 5, 5, 5],
					"Channel Duration": [4.5, 4.5, 4.5, 4.5, 4.5],
					"CheatRadius": [4.8],
					"Cooldown": [90, 90, 90, 90, 90],
					"Cost": [100, 100, 100, 100, 100],
					"Damage": [100, 130, 160, 190, 220],
					"Range": [8.8, 8.8, 8.8, 8.8, 8.8],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.358,
				"20": 27.16,
				"rate": 1.3579999999999999,
			},
			"BaseAttackSpeed": {
				"1": 0.93,
				"20": 0.93,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.75,
				"20": 5.67,
				"rate": 0.2063157894736842,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 26.7,
				"20": 54.3,
				"rate": 1.4526315789473683,
			},
			"ManaPerTime": {
				"1": 2.25,
				"20": 7,
				"rate": 0.25,
			},
			"MaxHealth": {
				"1": 595.3,
				"20": 2231,
				"rate": 86.08947368421053,
			},
			"MaxMana": {
				"1": 296,
				"20": 1094,
				"rate": 42,
			},
			"MovementSpeed": {
				"1": 430,
				"20": 430,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 44,
				"20": 90,
				"rate": 2.4210526315789473,
			},
			"PhysicalProtection": {
				"1": 19,
				"20": 76,
				"rate": 3,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "Projectile stops on first target hit, and does not pass through walls. ",
				},
				{
					"key": "",
					"text": "Basic attacks apply Charges.",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "RadiusCheat",
					"text": "<KeywordName>Radius: {0}m",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Zeus/Icon_BasicAttack_Magical.webp",
			"key": "Basic.RangedMag.InGame.Short",
			"name": "Zeus Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Fire a projectile that deals  Magical Damage to the first enemy hit. ",
			"valueKeys": {
				"Damage": [0],
				"RadiusCheat": [0.48],
				"RangeCheat": [8.8],
			},
		},
		"internalName": "Zeus_Item",
		"key": "God.Zeus",
		"name": "Zeus",
		'Type': 'Magical',
		icon: "/src/assets/icons/zeusImage.webp",
		"passive": {
			"details": [
				{
					"key": "",
					"text": "Overcharge's effect stacks with Critical Strikes. ",
				},
				{
					"key": "ChargeDamage",
					"text": "<KeywordName>Damage Increase: {0}% Per Stack",
				},
				{
					"key": "Duration",
					"text": "<KeywordName>Debuff Duration: {0}s",
				},
				{
					"key": "MaxStacks",
					"text": "<KeywordName>Max Debuff Stacks: {0}",
				},
			],
			"icon": "/assets/gods/Zeus/Passive.webp",
			"key": "Zeus.PSV.InGame.Short",
			"name": "Overcharge",
			"shortDesc": "Deal damage to apply Charges.\r\n\r\n  • Enemies take increased basic attack damage from you for each Charge they have",
			"valueKeys": {
				"ChargeDamage": [20],
				"Duration": [5],
				"MaxStacks": [3],
			},
		},
	},
	{
		"abilities": {
			"A01": {
				"details": [
					{
						"key": "",
						"text": "The Wall Impedes all characters.",
					},
					{
						"key": "",
						"text": "Create the Wall at your feet to Displace yourself up and forward.",
					},
					{
						"key": "",
						"text": "Displaces Enemies up and away from the Wall.",
					},
					{
						"key": "",
						"text": "Reactivate to destroy the Wall early.",
					},
					{
						"key": "Lifetime",
						"text": "<KeywordName>Lifetime: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "CheatRadius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/c5549ec9-4b69-4dc4-e412-ef7337139500/public",
				"key": "Ymir.A01.InGame.Short",
				"name": "Ice Wall",
				"shortDesc": "Create a Wall that Knocks Back enemies on creation.\r\n\r\n  • Reactivate to destroy the Wall early",
				"valueKeys": {
					"CheatRadius": [3.25],
					"Cooldown": [13, 13, 13, 13, 13],
					"Cost": [50, 55, 60, 65, 70],
					"Lifetime": [2.5, 3, 3.5, 4, 4.5],
					"Range": [11.2, 11.2, 11.2, 11.2, 11.2],
				},
			},
			"A02": {
				"details": [
					{
						"key": "",
						"text": "Damaging area starts at Ymir and moves away over time. ",
					},
					{
						"key": "",
						"text": "You are Slowed by 42.5% during activation.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Slow",
						"text": "<KeywordName>Slow: {0}%",
					},
					{
						"key": "SlowDuration",
						"text": "<KeywordName>Slow Duration: {0}s",
					},
					{
						"key": "Range",
						"text": "<KeywordName>Range: {0}m",
					},
					{
						"key": "Radius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/7440f317-85b8-4587-6e03-a902adda7600/public",
				"key": "Ymir.A02.InGame.Short",
				"name": "Glacial Strike",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.7, 0.7, 0.7, 0.7, 0.7],
						},
						{
							"stat": "PhysicalPower",
							"values": [0.55, 0.55, 0.55, 0.55, 0.55],
						},
					],
				},
				"shortDesc":
					"Smash your club into the ground, creating a field of ice that deals  [70% INT + 55% STR] Magical Damage and Slows.",
				"valueKeys": {
					"Cooldown": [8, 7.5, 7, 6.5, 6],
					"Cost": [45, 50, 55, 60, 65],
					"Damage": [60, 105, 150, 195, 240],
					"Radius": [3.6, 3.6, 3.6, 3.6, 3.6],
					"Range": [6, 6, 6, 6, 6],
					"Slow": [25, 25, 25, 25, 25],
					"SlowDuration": [2, 2, 2, 2, 2],
				},
			},
			"A03": {
				"details": [
					{
						"key": "",
						"text": "You are Rooted during activation.",
					},
					{
						"key": "Damage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0}",
					},
					{
						"key": "Stun Duration",
						"text": "<KeywordName>Stun Duration: {0}s",
					},
					{
						"key": "ConeAngle",
						"text": "<KeywordName>Cone Angle: {0} degrees",
					},
				],
				"formulas": {
					"Damage_Formula": "{Damage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/1abf07d0-7616-4359-a417-cad02f7f5600/public",
				"key": "Ymir.A03.InGame.Short",
				"name": "Frost Breath",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [0.55, 0.55, 0.55, 0.55, 0.55],
						},
					],
				},
				"shortDesc":
					"Unleash your freezing breath, Stunning enemies in front of you and dealing  [55% INT] Magical Damage.",
				"valueKeys": {
					"ConeAngle": [90],
					"Cooldown": [16, 15.5, 15, 14.5, 14],
					"Cost": [40, 50, 60, 70, 80],
					"Damage": [50, 85, 120, 155, 190],
					"Radius": [5.6, 5.6, 5.6, 5.6, 5.6],
					"Stun Duration": [1, 1.15, 1.3, 1.45, 1.6],
				},
			},
			"A04": {
				"details": [
					{
						"key": "",
						"text": "Damage scales linearly from 35% to 100% based on Channel time. ",
					},
					{
						"key": "",
						"text": "Max Channel time of 3 seconds.",
					},
					{
						"key": "",
						"text": "You are Rooted while Channeling.",
					},
					{
						"key": "YmirDamage",
						"text": "<KeywordName>Damage: {0}",
					},
					{
						"key": "Damage_Scaling",
						"text": "<KeywordName>Damage Scaling: {0} + 30% Protections",
					},
					{
						"key": "Slow",
						"text": "<KeywordName>Slow: {0}%",
					},
					{
						"key": "CheatRadius",
						"text": "<KeywordName>Radius: {0}m",
					},
				],
				"formulas": {
					"Ymir_Formula": "{YmirDamage} + {Damage_Scaling}",
				},
				"icon": "https://imagedelivery.net/-nCC9Q8KctCT577c1YLr1g/210f0bca-e6c2-41f8-300a-17427d946500/public",
				"key": "Ymir.A04.InGame.Short",
				"name": "Shards Of Ice",
				"scales": {
					"Damage_Scaling": [
						{
							"stat": "MagicalPower",
							"values": [1.6, 1.6, 1.6, 1.6, 1.6],
						},
					],
				},
				"shortDesc":
					"Freeze the air around you, Slowing enemies as you Channel.\r\n\r\n  • After 3 seconds, erupt with a burst of {Ymir_Formula} [160% INT + 30% Protections] Magical Damage to all enemies in range\r\n  • You may cancel this ability early, dealing less damage\r\n  • You are CC Immune while using this ability",
				"valueKeys": {
					"CTScaling": [],
					"CheatRadius": [5.6],
					"Cooldown": [90, 85, 80, 75, 70],
					"Cost": [80, 90, 100, 110, 120],
					"Radius": [5.6, 5.6, 5.6, 5.6, 5.6],
					"Slow": [40, 40, 40, 40, 40],
					"Damage": [550, 750, 950, 1150, 1350],
				},
			},
		},
		"baseStats": {
			"AttackSpeedPercent": {
				"1": 1.4,
				"20": 28,
				"rate": 1.4000000000000001,
			},
			"BaseAttackSpeed": {
				"1": 0.93,
				"20": 0.93,
				"rate": 0,
			},
			"HealthPerTime": {
				"1": 1.8,
				"20": 5.83,
				"rate": 0.21210526315789474,
			},
			"InhandPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalPower": {
				"1": 0,
				"20": 0,
				"rate": 0,
			},
			"MagicalProtection": {
				"1": 29.2,
				"20": 59.4,
				"rate": 1.5894736842105264,
			},
			"ManaPerTime": {
				"1": 2.25,
				"20": 7,
				"rate": 0.25,
			},
			"MaxHealth": {
				"1": 650.6,
				"20": 2438,
				"rate": 94.07368421052632,
			},
			"MaxMana": {
				"1": 296,
				"20": 1094,
				"rate": 42,
			},
			"MovementSpeed": {
				"1": 442,
				"20": 442,
				"rate": 0,
			},
			"PhysicalPower": {
				"1": 46,
				"20": 93,
				"rate": 2.473684210526316,
			},
			"PhysicalProtection": {
				"1": 20.1,
				"20": 80.6,
				"rate": 3.184210526315789,
			},
		},
		"basic": {
			"details": [
				{
					"key": "",
					"text": "If multiple enemies are in the area, the enemy closest to the center of the area will be hit. ",
				},
				{
					"key": "Damage_Scaling",
					"text": "<KeywordName>Damage Scaling: {0}",
				},
				{
					"key": "RangeCheat",
					"text": "<KeywordName>Range: {0}m",
				},
				{
					"key": "ConeAngle",
					"text": "<KeywordName>Cone Angle: {0} degrees",
				},
			],
			"formulas": {
				"Damage_Formula": "{Damage} + {Damage_Scaling}",
			},
			"icon": "/assets/gods/Ymir/Icon_BasicAttack_Magical.webp",
			"key": "Basic.MeleeMagical.InGame.Short",
			"name": "Ymir Basic Attack",
			"scales": {
				"Damage_Scaling": [
					{
						"stat": "PhysicalPower",
						"values": [1],
					},
					{
						"stat": "MagicalPower",
						"values": [0.2],
					},
				],
			},
			"shortDesc": "Deal  Magical Damage to an enemy in front of you. ",
			"valueKeys": {
				"ConeAngle": [120],
				"Damage": [0],
				"RangeCheat": [1.92],
			},
		},
		"internalName": "Ymir_Item",
		"key": "God.Ymir",
		"name": "Ymir",
		'Type': 'Magical',
		icon: "/src/assets/icons/ymirImage.webp",
		"passive": {
			"details": [
				{
					"key": "",
					"text": "Frostbite's effect stacks with Critical Strikes. ",
				},
				{
					"key": "StrScaling",
					"text": "<KeywordName>Damage: <ValueHighlight>185% Strength + <ValueHighlight>37% Intelligence",
				},
				{
					"key": "DmgDebuff",
					"text": "<KeywordName>Reduced Damage Dealt: 10%",
				},
			],
			"icon": "/assets/gods/Ymir/Passive.webp",
			"key": "Ymir.PSV.InGame.Short",
			"name": "Frostbite",
			"shortDesc":
				"Your abilities apply Frostbite when they damage or CC enemies.\r\n\r\n  • Frostbitten enemies take more basic attack damage [185% STR + 37% INT] from you and deal less damage to you",
			"valueKeys": {
				"DmgDebuff": [0.1],
				"IntScaling": [0.37],
				"StrScaling": [1.85],
			},
		},
	},
];
