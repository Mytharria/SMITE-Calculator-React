
export const itemData = [{
    buildsIntoT2: ["AdamantineSickle", "BattleAxe", "Caestus", "InfusedAxe", "Kopesh", "LucerneHammer", "ManchuBow", "Skeggox", "Zither"],
    buildsIntoT3: ["AtalantasBow", "AvatarsParashu", "BanefulRapier", "BragisHarp", "BrawlersRuin", "DaggerOfFrenzy", "DeathMetal", "Deathbringer", "DevourersGauntlet", "EyeOfTheStorm", "Heartseeker", "HydrasLament", "JotunnsRevenge", "MeteorHammer", "MusashisDualSwords", "ObsidianMacuahuitl", "PendulumBlade", "ProtectionOfItus", "QinsBlade", "SerpentSpear", "SerratedEdge", "SunBeamBow", "TekkoKagi", "TheCrusher", "TheExecutioner", "TheReaper", "Transcendence", "TritonsConch", "VoidShield"],
    icon: "/src/assets/icons/Axe.webp",
    internalName: "Axe",
    name: "Axe",
    passive: "",
    stats: {
        Strength: 10
    },
    stepCost: 450,
    tags: ["Category.Tier1", "Strength", "Passive", "ItemTier.Tier1"],
    tier: 1,
    totalCost: 450
}, {
    buildsIntoT2: ["HuntersBow", "ManchuBow"],
    buildsIntoT3: ["AtalantasBow", "BanefulRapier", "BerserkersShield", "BragisHarp", "DaggerOfFrenzy", "DemonicGrip", "HandOfTheAbyss", "MeteorHammer", "PharaohsCurse", "QinsBlade", "ShogunsOfuda", "SunBeamBow", "TheExecutioner"],
    icon: "/src/assets/icons/Bow.webp",
    internalName: "Bow",
    name: "Bow",
    passive: "",
    stats: {
        "Attack Speed": 5
    },
    stepCost: 300,
    tags: ["Category.Tier1", "AttackSpeed", "Passive", "ItemTier.Tier1"],
    tier: 1,
    totalCost: 300
}, {
    buildsIntoT2: ["InfusedAxe", "ManaTome", "Odigba", "OracleStaff"],
    buildsIntoT3: ["BookOfThoth", "BreastplateOfValor", "DivineRuin", "DoomOrb", "EldritchOrb", "GenjisGuard", "Heartseeker", "HydrasLament", "OniHuntersGarb", "Polynomicon", "ScepterOfDominion", "ShiftersShieldV2", "SoulDevourer", "StaffOfCosmicHorror", "SunBeamBow", "TheNemes", "TheWorldStone", "Transcendence", "Wish-GrantingPearl", "YogisNecklace"],
    icon: "/src/assets/icons/Circlet.webp",
    internalName: "Circlet",
    name: "Circlet",
    passive: "",
    stats: {
        Mana: 150
    },
    stepCost: 300,
    tags: ["Category.Tier1", "Mana", "Passive", "ItemTier.Tier1"],
    tier: 1,
    totalCost: 300
},  {
    buildsIntoT3: ["DevourersGauntlet", "TheReaper"],
    components: ["Axe", "Scythe"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "PhysicalPowerItem",
            calcType: "ScalableFloat",
            floatValue: 15,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/AdamantineSickle.webp",
    internalName: "AdamantineSickle",
    name: "Adamantine Sickle",
    passive: "Passive: While you are below 50% HP you gain 15 Strength.",
    stats: {
        Lifesteal: 7,
        Strength: 10
    },
    stepCost: 200,
    tags: ["LifeSteal", "Category.Tier2", "Strength", "Passive", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 1100
}, {
    buildsIntoT3: ["ChronosPendant", "CircesHexstone", "GloriousPridwen", "JotunnsRevenge", "LorgMor", "ShieldOfThePhoenix", "StaffOfCosmicHorror", "TalismanOfPurification", "TotemOfDeath"],
    components: ["Ring"],
    icon: "/src/assets/icons/AdroitRing.webp",
    internalName: "AdroitRing",
    name: "Adroit Ring",
    passive: "",
    stats: {
        "Cooldown Rate": 15
    },
    stepCost: 250,
    tags: ["Passive", "Category.Tier2", "CooldownReduction", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 650
}, {
    buildsIntoT3: ["EyeOfTheStorm", "MeteorHammer", "ProtectionOfItus", "VoidShield"],
    components: ["Axe", "Medallion"],
    icon: "/src/assets/icons/BattleAxe.webp",
    internalName: "BattleAxe",
    name: "Battle Axe",
    passive: "",
    stats: {
        Health: 100,
        Strength: 15
    },
    stepCost: 150,
    tags: ["Category.Tier2", "Health", "Strength", "Passive", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 900
}, {
    buildsIntoT3: ["PendulumBlade", "TekkoKagi", "TheCrusher"],
    components: ["Axe", "Ring"],
    effects: [{
        duration: "HasDuration",
        durationTime: 6,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "PhysicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 15,
            modType: "Additive"
        }, {
            attrName: "MagicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 15,
            modType: "Additive"
        }, {
            attrName: "MagicalPowerItem",
            calcType: "ScalableFloat",
            floatValue: 20,
            modType: "Additive"
        }, {
            attrBaseCoValue: 2,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "MagicalPowerItem",
            backingAttr: "Level",
            calcType: "AttributeBased",
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/Caestus.webp",
    internalName: "Caestus",
    name: "Caestus",
    passive: "Passive: When you are hit by a Hard CC effect you gain 15 Physical Protection and 15 Magical Protection for 4s.",
    stats: {
        "Cooldown Rate": 10,
        Strength: 10
    },
    stepCost: 150,
    tags: ["Category.Tier2", "CooldownReduction", "Passive", "Strength", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 1e3
}, {
    buildsIntoT3: ["BreastplateOfValor"],
    components: ["Ring", "Shield"],
    icon: "/src/assets/icons/CaptainsRing.webp",
    internalName: "CaptainsRing",
    name: "Captain's Ring",
    passive: "",
    stats: {
        "Cooldown Rate": 10,
        "Physical Protection": 10
    },
    stepCost: 100,
    tags: ["PhysicalProtection", "Passive", "Category.Tier2", "CooldownReduction"],
    tier: 2,
    totalCost: 800
}, {
    buildsIntoT3: ["Blood-BoundBook", "SerratedEdge", "SoulGem", "TheReaper", "TyphonsFang"],
    components: ["Scythe"],
    icon: "/src/assets/icons/CursedSickle.webp",
    internalName: "CursedSickle",
    name: "Cursed Sickle",
    passive: "",
    stats: {
        Lifesteal: 15
    },
    stepCost: 650,
    tags: ["LifeSteal", "Category.Tier2", "Passive", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 1100
}, {
    components: ["Axe"],
    icon: "/src/assets/icons/DruidClub.webp",
    internalName: "DruidClub",
    name: "Druid Club",
    passive: "",
    stats: {
        "Mana Regen": 2,
        Strength: 25
    },
    stepCost: 700,
    tags: ["Category.Tier2", "Strength", "ManaRegen", "Passive", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 1150
}, {
    buildsIntoT3: ["BindingsOfLyngvi", "EyeOfProvidence", "EyeOfTheStorm", "GloriousPridwen", "HelmOfDarkness", "PharaohsCurse", "RestorativeAmanita", "RuinousAnkh", "ShiftersShieldV2"],
    components: ["Rune", "Shield"],
    icon: "/src/assets/icons/EngravedGuard.webp",
    internalName: "EngravedGuard",
    name: "Engraved Guard",
    passive: "",
    stats: {
        "Magical Protection": 12,
        "Physical Protection": 12
    },
    stepCost: 200,
    tags: ["PhysicalProtection", "Passive", "Category.Tier2", "MagicalProtection"],
    tier: 2,
    totalCost: 800
}, {
    active: !0,
    effects: [{
        duration: "HasDuration",
        durationTime: 1.5,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Debuff",
        mods: [{
            attrName: "HealingTakenPercentModifier",
            calcType: "ScalableFloat",
            floatValue: 0,
            modType: "Override"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }, {
        duration: "HasDuration",
        durationTime: 6,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "BaseMovementSpeedModifierPercent",
            calcType: "ScalableFloat",
            floatValue: 7,
            modType: "Additive"
        }],
        stackLimit: 3,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/AegisOfAcceleration.webp",
    internalName: "AegisOfAcceleration",
    name: "Aegis of Acceleration",
    passive: "Active: You become invulnerable to damage and healing for 1.5s, and prevented from taking any actions except moving. Each instance of damage prevented provides you 7% Movement Speed for 6s, stacking up to 3 times. Cooldown: 140s.",
    relic: !0,
    tags: ["ItemTier.Tier3", "Active", "Category.Relic", "Category.Tier3"],
    tier: 3,
    totalCost: 0
}, {
    active: !0,
    buildsFromT1: ["Axe"],
    components: ["Skeggox"],
    effects: [{
        duration: "HasDuration",
        durationTime: 10,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrBaseCoValue: .2,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "PhysicalPower",
            backingAttr: "PhysicalPowerBase",
            calcType: "AttributeBased",
            modType: "Additive"
        }, {
            attrBaseCoValue: .2,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "PhysicalPower",
            backingAttr: "PhysicalPowerItem",
            calcType: "AttributeBased",
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/AvatarsParashu.webp",
    internalName: "AvatarsParashu",
    name: "Avatar's Parashu",
    passive: "Active: You gain 20% increased Strength for 10s. Cooldown: 180s. [Added here automatically]",
    stats: {
        Strength: 60
    },
    stepCost: 1700,
    tags: ["Active", "Strength", "ItemTier.Tier3", "Role.Jungle.STR", "Role.Mid.STR", "Role.Carry.STR", "Category.Offensive", "Category.Tier3", "Role"],
    tier: 3,
    totalCost: 2700
}, {
    buildsFromT1: ["Bow", "Medallion", "Shield"],
    components: ["HuntersBow", "MedalOfDefense"],
    effects: [{
        duration: "HasDuration",
        durationTime: 5,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "AttackSpeed",
            calcType: "ScalableFloat",
            floatValue: 15,
            modType: "Additive"
        }, {
            attrName: "AttackSpeed",
            calcType: "CustomCalculationClass",
            modType: "Additive"
        }, {
            attrName: "PhysicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 20,
            modType: "Additive"
        }, {
            attrName: "MagicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 20,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/BerserkersShield.webp",
    internalName: "BerserkersShield",
    name: "Berserker's Shield",
    passive: "Passive: While below 60% Health you become Berserk for 5s. While Berserk, you gain 30 Protections and 15% Attack Speed. This effect can only occur once every 15 seconds",
    stats: {
        "Attack Speed": 25,
        Health: 200,
        "Health Regen": 5,
        
    },
    stepCost: 1200,
    tags: ["Passive", "ItemTier.Tier3", "Health", "PhysicalProtection", "AttackSpeed", "Category.Defensive", "Category.Tier3", "Role.Solo.STR"],
    tier: 3,
    totalCost: 2300
}, {
    active: !0,
    buildsFromT1: ["Gem", "Medallion", "Scythe"],
    components: ["CursedSickle", "FlamingPearl"],
    effects: [{
        duration: "HasDuration",
        durationTime: 6,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "LifeStealPercentItem",
            calcType: "ScalableFloat",
            floatValue: 20,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/Blood-BoundBook.webp",
    internalName: "Blood-BoundBook",
    name: "Blood-Bound Book",
    passive: "Active: You gain a 10% of your max HP + 80% Intelligence from items HP Shield for 6s. The shield grants 20% lifesteal and causes lifesteal heals to apply to nearby allied Gods. Killing a god reduces the current cooldown by 50% Cooldown: 140.",
    stats: {
        Health: 150,
        Intelligence: 50,
        Lifesteal: 15
    },
    stepCost: 500,
    tags: ["Intelligence", "LifeSteal", "ItemTier.Tier3", "Role.Mid.INT", "Role.Jungle.INT", "Role.Carry.Hybrid", "Category.Offensive", "Category.Tier3", "Active", "Health"],
    tier: 3,
    totalCost: 2550
}, {
    active: !0,
    buildsFromT1: ["Axe", "Scythe"],
    components: ["AdamantineSickle"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        mods: [{
            attrName: "PhysicalPowerItem",
            calcType: "ScalableFloat",
            floatValue: 40,
            modType: "Additive"
        }, {
            attrName: "LifeStealPercentItem",
            calcType: "ScalableFloat",
            floatValue: 10,
            modType: "Additive"
        }]
    }, {
        duration: "HasDuration",
        durationTime: 6,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "LifeStealPercentItem",
            calcType: "ScalableFloat",
            floatValue: 20,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/BloodForge.webp",
    internalName: "BloodForge",
    name: "Bloodforge",
    passive: "Active: You gain a 10% of your max HP + 100% Strength from items HP Shield for 6s. The shield grants 20% lifesteal and causes lifesteal heals to apply to nearby allied Gods. Killing a god reduces the current cooldown by 50%. Cooldown: 140.",
    stats: {
        Lifesteal: 10,
        Strength: 45
    },
    stepCost: 1350,
    tags: ["Active", "Strength", "LifeSteal", "ItemTier.Tier3", "Role.Carry.STR", "Role.Jungle.STR", "Role.Mid.STR", "Category.Offensive", "Category.Tier3"],
    tier: 3,
    totalCost: 2450
}, {
    buildsFromT1: ["Circlet", "Circlet", "Gem"],
    components: ["ManaTome", "OracleStaff"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        mods: [{
            attrName: "MaxManaItem",
            calcType: "ScalableFloat",
            floatValue: 10,
            modType: "Additive"
        }],
        stackLimit: 50,
        stackType: "AggregateBySource"
    }, {
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !0,
        mods: [{
            attrName: "MagicalPenetrationFlatItem",
            calcType: "ScalableFloat",
            floatValue: 10,
            modType: "Additive"
        }, {
            attrName: "PhysicalPenetrationFlatItem",
            calcType: "ScalableFloat",
            floatValue: 10,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }, {
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Items.BookOfThoth.IntFromMana",
        mods: [{
            attrBaseCoValue: .04,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "MagicalPowerItem",
            backingAttr: "MaxManaItem",
            calcType: "AttributeBased",
            modType: "Additive"
        }]
    }, {
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !0,
        key: "Items.BookOfThoth.IntFromMana",
        mods: [{
            attrBaseCoValue: .06,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "MagicalPowerItem",
            backingAttr: "MaxManaItem",
            calcType: "AttributeBased",
            modType: "Additive"
        }]
    }],
    icon: "/src/assets/icons/BookOfThoth.webp",
    internalName: "BookOfThoth",
    name: "Evolved Book of Thoth",
    passive: "Passive: You permanently gain 10 Mana per Stack, and receive 1 Stack per 900 Damage Dealt to minions and Jungle Monsters, with damage to Gods counting double. You gain Intelligence equal to 4% of your Mana from items. At 50 stacks this item Evolves, gaining 10 Penetration and increasing the Intelligence gained from Mana to 6%.",
    stats: {
        Intelligence: 35,
        Mana: 900,
		"Flat Penetration":10,
        "Mana Regen": 4
    },
    stepCost: 850,
    tags: ["ItemTier.Tier3", "Passive", "Role.Mid.INT", "Mana", "ManaRegen", "Intelligence", "Penetration", "Category.Offensive", "Category.Tier3", "Role.Jungle.INT", "Role.Solo.INT"],
    tier: 3,
    totalCost: 2300
}, {
    buildsFromT1: ["Axe", "Axe", "Bow", "Gem"],
    components: ["ManchuBow", "Zither"],
    icon: "/src/assets/icons/BragisHarp.webp",
    internalName: "BragisHarp",
    name: "Bragi's Harp",
    passive: "Passive: All targets hit by your basic attacks take 10 + 3 per level bonus Magical Damage.",
    stats: {
        "Attack Speed": 15,
        Intelligence: 35,
        Strength: 25
    },
    stepCost: 500,
    tags: ["AttackSpeed", "Strength", "Intelligence", "Passive", "ItemTier.Tier3", "Role.Carry.Hybrid", "Category.Offensive", "Category.Tier3"],
    tier: 3,
    totalCost: 2550
}, {
    buildsFromT1: ["Axe", "RuinousPoison"],
    components: ["LucerneHammer", "RuinousVenom"],
    effects: [{
        duration: "HasDuration",
        durationTime: 4,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Debuff",
        mods: [{
            attrName: "HealingTakenPercentModifierItem",
            calcType: "ScalableFloat",
            floatValue: -40,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/BrawlersRuin.webp",
    internalName: "BrawlersRuin",
    name: "Brawler's Ruin",
    passive: "Passive: Enemy gods hit by your basic attacks or abilities have 40% reduced healing for 4s.",
    stats: {
        Penetration: 5,
        Strength: 45
    },
    stepCost: 600,
    tags: ["Strength", "Category.Tier3", "HealingReduction", "Passive", "ItemTier.Tier3", "Role.Jungle.STR", "Role.Mid.STR", "Role.Carry.STR", "Category.Offensive", "Role", "Penetration"],
    tier: 3,
    totalCost: 2150
}, {
    buildsFromT1: ["Circlet", "Ring", "Shield"],
    components: ["CaptainsRing", "ManaTome"],
    icon: "/src/assets/icons/BreastplateOfValor.webp",
    internalName: "BreastplateOfValor",
    name: "Breastplate of Valor",
    passive: "Passive: When you lose 350 + 20 * Level HP, your ability cooldowns are reduced by 1s.",
    stats: {
        "Cooldown Rate": 25,
        Mana: 250,
        "Mana Regen": 2,
        "Physical Protection": 40
    },
    stepCost: 1300,
    tags: ["PhysicalProtection", "Passive", "ItemTier.Tier3", "CooldownReduction", "Mana", "Role.Support", "Role.Solo.STR", "Role.Solo.INT", "ManaRegen", "Category.Defensive", "Category.Tier3"],
    tier: 3,
    totalCost: 2600
}, {
    buildsFromT1: ["Gem", "Ring", "Ring"],
    components: ["AdroitRing", "RingOfDispel"],
    icon: "/src/assets/icons/ChronosPendant.webp",
    internalName: "ChronosPendant",
    name: "Chronos' Pendant",
    passive: "Passive: Your ability cooldowns are reduced by 1s every 10s.",
    stats: {
        "Cooldown Rate": 25,
        Intelligence: 50
    },
    stepCost: 800,
    tags: ["Intelligence", "CooldownReduction", "Passive", "ItemTier.Tier3", "Role.Solo.INT", "Role.Mid.INT", "Role.Jungle.INT", "Category.Offensive", "Category.Tier3", "Role.Carry.Hybrid"],
    tier: 3,
    totalCost: 2400
}, {
    active: !0,
    buildsFromT1: ["Medallion", "Ring"],
    components: ["AdroitRing", "OlmecBlue"],
    effects: [{
        duration: "HasDuration",
        durationTime: 1.1,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Items.CircesHexstone.Polymorph",
        mods: [{
            attrName: "PhysicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 60,
            modType: "Additive"
        }, {
            attrName: "MagicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 60,
            modType: "Additive"
        }]
    }],
    icon: "/src/assets/icons/CircesHexstone.webp",
    internalName: "CircesHexstone",
    name: "Circe's Hexstone",
    passive: "Active: You are Polymorphed and begin a short Charge forwards, damaging enemies hit for 50 Physical Damage. Hitting a god ends the Charge, Knocking them Up and dealing 10% of their Current HP as bonus Physical Damage. While Polymorphed you gain CC Immunity and 60 Protections. Cooldown: 120s.",
    stats: {
        "Cooldown Rate": 10,
        Health: 400,
        "Health Regen": 4
    },
    stepCost: 1250,
    tags: ["Category.Tier3", "ItemTier.Tier3", "Role.Solo.STR", "Active", "Health", "HealthRegen", "Category.Defensive", "CooldownReduction"],
    tier: 3,
    totalCost: 2600
}, {
    active: !0,
    buildsFromT1: ["Axe", "Axe", "Bow"],
    components: ["ManchuBow", "Skeggox"],
    effects: [{
        duration: "HasDuration",
        durationTime: 6,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "AttackSpeed",
            calcType: "ScalableFloat",
            floatValue: 30,
            modType: "Additive"
        }, {
            attrName: "AttackSpeed",
            calcType: "CustomCalculationClass",
            modType: "Additive"
        }, {
            attrName: "InhandPowerItem",
            calcType: "ScalableFloat",
            floatValue: 40,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/DaggerOfFrenzy.webp",
    internalName: "DaggerOfFrenzy",
    name: "Dagger of Frenzy",
    passive: "Active: You gain 40 Basic Attack Damage and 30% Attack Speed for 6s. Cooldown: 30s.",
    stats: {
        "Attack Speed": 15,
        Strength: 40
    },
    stepCost: 600,
    tags: ["Active", "AttackSpeed", "Strength", "ItemTier.Tier3", "Role.Carry.STR", "Role.Carry.Hybrid", "Category.Offensive", "Category.Tier3", "Role.Jungle.STR"],
    tier: 3,
    totalCost: 2550
}, {
    active: !0,
    buildsFromT1: ["Axe", "Gem", "Sabre"],
    components: ["HookedSword", "Zither"],
    effects: [{
        duration: "HasDuration",
        durationTime: 6,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "AttackSpeed",
            calcType: "ScalableFloat",
            floatValue: 20,
            modType: "Additive"
        }, {
            attrName: "AttackSpeed",
            calcType: "CustomCalculationClass",
            modType: "Additive"
        }, {
            attrName: "PhysicalPowerItem",
            calcType: "ScalableFloat",
            floatValue: 10,
            modType: "Additive"
        }, {
            attrBaseCoValue: 1,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "PhysicalPowerItem",
            backingAttr: "Level",
            calcType: "AttributeBased",
            modType: "Additive"
        }, {
            attrName: "MagicalPowerItem",
            calcType: "ScalableFloat",
            floatValue: 15,
            modType: "Additive"
        }, {
            attrBaseCoValue: 2,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "MagicalPowerItem",
            backingAttr: "Level",
            calcType: "AttributeBased",
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/DeathMetal.webp",
    internalName: "DeathMetal",
    name: "Death Metal",
    passive: "Active: You and allied gods within 6.4m gain 10 + 1 * Level Strength, 15 + 2 * Level Intelligence, and 20% Attack Speed for 6s. Cooldown: 60s.",
    stats: {
        "Critical Chance": 20,
        Intelligence: 45,
        Strength: 35
    },
    stepCost: 850,
    tags: ["Active", "Strength", "Intelligence", "CriticalStrikeChance", "AttackSpeed", "ItemTier.Tier3", "Role.Carry.Hybrid", "Category.Offensive", "Category.Tier3"],
    tier: 3,
    totalCost: 2950
}, {
    buildsFromT1: ["Axe", "Axe", "Sabre"],
    components: ["Kopesh", "Skeggox"],
    icon: "/src/assets/icons/Deathbringer.webp",
    internalName: "Deathbringer",
    name: "Deathbringer",
    passive: "Passive: You gain 25% increased Critical Strike Damage. ",
    stats: {
        "Critical Chance": 20,
        Strength: 40
    },
    stepCost: 650,
    tags: ["CriticalStrikeChance", "Strength", "Passive", "ItemTier.Tier3", "Role.Carry.Hybrid", "Role.Carry.STR", "Category.Offensive", "Category.Tier3", "Role.Jungle.STR"],
    tier: 3,
    totalCost: 2900
}, {
    buildsFromT1: ["Axe", "Bow", "Sabre"],
    components: ["HuntersBow", "Kopesh"],
    effects: [{
        duration: "HasDuration",
        durationTime: 4,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "AttackSpeed",
            calcType: "ScalableFloat",
            floatValue: 15,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/BanefulRapier.webp",
    internalName: "BanefulRapier",
    name: "Demon Blade",
    passive: "Passive: When you Critically Strike an enemy you gain 15% Attack Speed for 4s.",
    stats: {
        "Attack Speed": 20,
        "Critical Chance": 20,
        Strength: 25
    },
    stepCost: 900,
    tags: ["CriticalStrikeChance", "Strength", "AttackSpeed", "Passive", "ItemTier.Tier3", "Role.Carry.STR", "Category.Offensive", "Category.Tier3", "Role.Jungle.STR", "Role.Carry.Hybrid"],
    tier: 3,
    totalCost: 2900
}, {
    buildsFromT1: ["Bow", "Gem"],
    components: ["EvilEye", "HuntersBow"],
    icon: "/src/assets/icons/DemonicGrip.webp",
    internalName: "DemonicGrip",
    name: "Demonic Grip",
    passive: "Passive: When you damage an enemy god or jungle boss with a basic attack, gain the Piercing effect, granting you 10% Penetration for 4s. Stacks up to 3 times.",
    stats: {
        "Attack Speed": 25,
        Intelligence: 55
    },
    stepCost: 900,
    tags: ["Category.Tier3", "AttackSpeed", "Passive", "ItemTier.Tier3", "Role.Carry.Hybrid", "Intelligence", "Penetration", "Category.Offensive", "Role.Jungle.INT"],
    tier: 3,
    totalCost: 2650
}, {
    buildsFromT1: ["Axe", "Axe", "Scythe"],
    components: ["AdamantineSickle", "Skeggox"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        mods: [{
            attrName: "PhysicalPowerItem",
            calcType: "ScalableFloat",
            floatValue: .3,
            modType: "Additive"
        }, {
            attrName: "LifeStealPercentItem",
            calcType: "ScalableFloat",
            floatValue: .1,
            modType: "Additive"
        }],
        stackLimit: 50,
        stackType: "AggregateBySource"
    }, {
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !0,
        mods: [{
            attrName: "PhysicalPenetrationFlatItem",
            calcType: "ScalableFloat",
            floatValue: 10,
            modType: "Additive"
        }, {
            attrName: "MagicalPenetrationFlatItem",
            calcType: "ScalableFloat",
            floatValue: 10,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/DevourersGauntlet.webp",
    internalName: "DevourersGauntlet",
    name: "Evolved Devourer's Gauntlet",
    passive: "Passive: You permanently gain 0.3 Strength, and 0.10% Physical Lifesteal per Stack, and receive 1 Stack per 600 Damage Dealt to minions and Jungle Monsters, with damage to Gods counting double. At 50 stacks this item Evolves, gaining 10 Penetration.",
    stats: {
        Lifesteal: 15,
		"Flat Penetration":10,
        Strength: 45
    },
    stepCost: 400,
    tags: ["Category.Tier3", "Strength", "LifeSteal", "ItemTier.Tier3", "Role.Carry.STR", "Role.Mid.STR", "Passive", "Penetration", "Category.Offensive"],
    tier: 3,
    totalCost: 2500
}, {
    buildsFromT1: ["Circlet", "Gem", "RuinousPoison"],
    components: ["OracleStaff", "RuinousVenom"],
    effects: [{
        duration: "HasDuration",
        durationTime: 4,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Debuff",
        mods: [{
            attrName: "HealingTakenPercentModifierItem",
            calcType: "ScalableFloat",
            floatValue: -40,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/DivineRuin.webp",
    internalName: "DivineRuin",
    name: "Divine Ruin",
    passive: "Passive: Enemy gods hit by your basic attacks or abilities have 40% reduced healing for 4s.",
    stats: {
        Intelligence: 80,
        Penetration:5
    },
    stepCost: 750,
    tags: ["Category.Tier3", "ManaRegen", "HealingReduction", "Intelligence", "Passive", "Mana", "ItemTier.Tier3", "Role.Mid.INT", "Role.Jungle.INT", "Category.Offensive"],
    tier: 3,
    totalCost: 2300
}, {
    buildsFromT1: ["Circlet", "Gem", "Gem"],
    components: ["EvilEye", "OracleStaff"],
    effects: [{
        duration: "HasDuration",
        durationTime: 15,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "BaseMovementSpeedModifierPercent",
            calcType: "ScalableFloat",
            floatValue: 1,
            modType: "Additive"
        }, {
            attrName: "BaseMovementSpeedModifierPercent",
            calcType: "CustomCalculationClass",
            modType: "Additive"
        }, {
            attrName: "MovementSpeedDiminishingReturnPercent",
            calcType: "CustomCalculationClass",
            modType: "Additive"
        }, {
            attrName: "MagicalPowerItem",
            calcType: "ScalableFloat",
            floatValue: 4,
            modType: "Additive"
        }],
        stackLimit: 5,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/DoomOrb.webp",
    internalName: "DoomOrb",
    name: "Doom Orb",
    passive: "PASSIVE: Killing or assisting an enemy minion provides you with 1 stack, granting 1% Movement Speed and 4 Intelligence per stack. Stacks last for 15s and stack up to 5 times. Enemy gods provide 5 stacks. [Added here at full stacks]",
    stats: {
        Intelligence: 95,
        Mana: 150,
        "Mana Regen": 2,
        Penetration: 10
    },
    stepCost: 1e3,
    tags: ["Category.Tier3", "Passive", "Intelligence", "ItemTier.Tier3", "Role.Jungle.INT", "Role.Mid.INT", "Mana", "ManaRegen", "Penetration", "Category.Offensive"],
    tier: 3,
    totalCost: 2850
}, {
    active: !0,
    buildsFromT1: ["Gem"],
    components: ["KillingStone"],
    effects: [{
        duration: "HasDuration",
        durationTime: 10,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrBaseCoValue: .2,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "MagicalPower",
            backingAttr: "MagicalPowerBase",
            calcType: "AttributeBased",
            modType: "Additive"
        }, {
            attrBaseCoValue: .2,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "MagicalPower",
            backingAttr: "MagicalPowerItem",
            calcType: "AttributeBased",
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/DreamersIdol.webp",
    internalName: "DreamersIdol",
    name: "Dreamer's Idol",
    passive: "Active: You gain 20% increased Intelligence for 10s. Cooldown: 180s. [Added here automatically]",
    stats: {
        Intelligence: 95
    },
    stepCost: 1700,
    tags: ["Category.Tier3", "Active", "Intelligence", "ItemTier.Tier3", "Role.Mid.INT", "Role.Jungle.INT", "Category.Offensive"],
    tier: 3,
    totalCost: 2700
}, {
    active: !0,
    buildsFromT1: ["Medallion", "Rune", "Shield"],
    components: ["EngravedGuard", "VeveCharm"],
    icon: "/src/assets/icons/EyeOfProvidence.webp",
    internalName: "EyeOfProvidence",
    name: "Eye of Providence",
    passive: "Active: Create a ward that Reveals enemies and enemy wards within 10.4m. Lasts for 120s or until killed. Cooldown: 60s.",
    stats: {
        Health: 300,
        "Magical Protection": 25,
        "Physical Protection": 25
    },
    stepCost: 800,
    tags: ["Category.Tier3", "Health", "MagicalProtection", "PhysicalProtection", "Active", "ItemTier.Tier3", "Role.Support", "Category.Defensive"],
    tier: 3,
    totalCost: 2400
}, {
    buildsFromT1: ["Axe", "Bow"],
    components: ["ManchuBow", "VoidShard"],
    effects: [{
        duration: "HasDuration",
        durationTime: 2,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "InhandMoveSpeedPenaltyPercent",
            calcType: "ScalableFloat",
            floatValue: 25,
            modType: "Additive"
        }],
        stackLimit: 2,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/AtalantasBow.webp",
    internalName: "AtalantasBow",
    name: "Hastened Fatalis",
    passive: "Passive: When you hit an enemy god with a basic attack, the Basic Attack Movement Penalty is reduced by 50% for 2s.  Stacks up to 2 times.",
    stats: {
        "Attack Speed": 30,
        
        Strength: 20
    },
    stepCost: 1050,
    tags: ["Strength", "AttackSpeed", "Passive", "ItemTier.Tier3", "Role.Jungle.STR", "Role.Carry.STR", "Role.Carry.Hybrid", "Penetration", "Category.Offensive", "Category.Tier3", "Role"],
    tier: 3,
    totalCost: 2500
}, {
    buildsFromT1: ["Gem"],
    components: ["EvilEye", "VoidShard"],
    icon: "/src/assets/icons/BalorsEye.webp",
    internalName: "BalorsEye",
    name: "Obsidian Shard",
    passive: "",
    stats: {
        Intelligence: 60,
        Penetration: 20
    },
    stepCost: 650,
    tags: ["Intelligence", "Passive", "ItemTier.Tier3", "Role.Solo.INT", "Role.Mid.INT", "Role.Jungle.INT", "Penetration", "Category.Offensive", "Category.Tier3"],
    tier: 3,
    totalCost: 2400
}, {
    buildsFromT1: ["Circlet", "Gem"],
    components: ["EvilEye", "ManaTome"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrBaseCoValue: .2,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "MagicalPowerBase",
            backingAttr: "MagicalPowerItem",
            calcType: "AttributeBased",
            modType: "Additive"
        }]
    }],
    icon: "/src/assets/icons/EldritchOrb.webp",
    internalName: "EldritchOrb",
    name: "Rod of Tahuti",
    passive: "Passive: Gain additional Intelligence equal to 20% of your Intelligence from items.",
    stats: {
        Intelligence: 70,
        Mana: 250,
        "Mana Regen": 2,
        Penetration: 10
    },
    stepCost: 1500,
    tags: ["Category.Tier3", "Passive", "ItemTier.Tier3", "Intelligence", "Role.Mid.INT", "Role.Jungle.INT", "Mana", "ManaRegen", "Penetration", "Category.Offensive"],
    tier: 3,
    totalCost: 3e3
}, {
    buildsFromT1: ["Rune", "Shield", "Shield"],
    components: ["EngravedGuard", "LegionnaireArmor"],
    effects: [{
        duration: "HasDuration",
        durationTime: 4,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Debuff",
        mods: [{
            attrName: "MagicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: -15,
            modType: "Additive"
        }, {
            attrName: "PhysicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: -15,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/BindingsOfLyngvi.webp",
    internalName: "BindingsOfLyngvi",
    name: "Stone of Binding",
    passive: "Passive: Enemy gods hit by your Hard CC effects lose 15 Physical Protection and 15 Magical Protection for 4s.",
    stats: {
        Health: 100,
        "Magical Protection": 30,
        "Physical Protection": 40
    },
    stepCost: 1150,
    tags: ["PhysicalProtection", "MagicalProtection", "MagicalPenetration", "PhysicalPenetration", "Passive", "ItemTier.Tier3", "Role.Support", "Role.Solo.STR", "Health", "Category.Defensive", "Category.Tier3"],
    tier: 3,
    totalCost: 2700
}, {
    active: !0,
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "MagicalPowerItem",
            calcType: "ScalableFloat",
            floatValue: 120,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    internalName: "ElixirOfIntelligence",
    name: "Elixir of Intelligence",
    passive: "Active: Item is Consumed, then gain 120 Intelligence permanently. Does not stack.",
    stepCost: 3e3,
    tags: ["Category.Consumable", "Role.Carry.Hybrid", "Role.Carry.STR", "Role.Jungle.STR", "Role.Jungle.INT", "Role.Mid.STR", "Role.Mid.INT", "Role.Solo.STR", "Role.Solo.INT", "Role.Support", "Consumable"]
}, {
    active: !0,
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "PhysicalPowerItem",
            calcType: "ScalableFloat",
            floatValue: 75,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    internalName: "ElixirOfStrength",
    name: "Elixir of Strength",
    passive: "Active: Item is Consumed, then gain 75 Strength permanently. Does not stack.",
    stepCost: 3e3,
    tags: ["Category.Consumable", "Role.Support", "Role.Solo.STR", "Role.Solo.INT", "Role.Mid.STR", "Role.Mid.INT", "Role.Jungle.STR", "Role.Jungle.INT", "Role.Carry.STR", "Role.Carry.Hybrid", "Consumable"]
}, {
    buildsIntoT2: ["EvilEye", "FlamingPearl", "KillingStone", "OracleStaff", "RingOfDispel", "Zither"],
    buildsIntoT3: ["BalorsEye", "Blood-BoundBook", "BookOfThoth", "BragisHarp", "ChronosPendant", "DeathMetal", "DemonicGrip", "DivineRuin", "DoomOrb", "DreamersIdol", "EldritchOrb", "GemOfFocus", "GemOfIsolation", "HandOfTheAbyss", "HelmOfDarkness", "HelmOfRadiance", "JadeScepter", "Necronomicon", "Polynomicon", "ScepterOfDominion", "SoulDevourer", "SoulGem", "SphereOfNegation", "StaffOfCosmicHorror", "StaffOfMyrddin", "TheWorldStone", "TotemOfDeath", "TritonsConch", "TyphonsFang", "VoidStone", "Wish-GrantingPearl"],
    icon: "/src/assets/icons/Gem.webp",
    internalName: "Gem",
    name: "Gem",
    passive: "",
    stats: {
        Intelligence: 15
    },
    stepCost: 450,
    tags: ["Category.Tier1", "Intelligence", "Passive", "ItemTier.Tier1"],
    tier: 1,
    totalCost: 450
}, {
    buildsIntoT2: ["BattleAxe", "FlamingPearl", "IlekeNecklace", "MedalOfDefense", "MedalOfDisruption", "Odigba", "OlmecBlue", "VeveCharm"],
    buildsIntoT3: ["BerserkersShield", "Blood-BoundBook", "CircesHexstone", "EyeOfProvidence", "EyeOfTheStorm", "GemOfIsolation", "HussarsWings", "JadeScepter", "LevianthansHide", "MeteorHammer", "MysticalMail", "OniHuntersGarb", "PhantomRing", "PhoenixAmulet", "ProtectionOfItus", "RestorativeAmanita", "ScepterOfDominion", "ShieldOfThePhoenix", "ShiftersShieldV2", "ShogunsOfuda", "SilkenMailcoat", "Stampede", "TalismanOfNamaka", "TalismanOfPurification", "TheNemes", "TritonsConch", "VoidShield", "VoidStone", "Wish-GrantingPearl", "YogisNecklace"],
    icon: "/src/assets/icons/Medallion.webp",
    internalName: "Medallion",
    name: "Medallion",
    passive: "",
    stats: {
        Health: 75
    },
    stepCost: 300,
    tags: ["Category.Tier1", "Health", "Passive", "ItemTier.Tier1"],
    tier: 1,
    totalCost: 300
}, {
    buildsIntoT3: ["BalorsEye", "DemonicGrip", "DoomOrb", "EldritchOrb", "TotemOfDeath"],
    components: ["Gem"],
    icon: "/src/assets/icons/EvilEye.webp",
    internalName: "EvilEye",
    name: "Evil Eye",
    passive: "",
    stats: {
        Intelligence: 25,
        Penetration: 5
    },
    stepCost: 550,
    tags: ["Intelligence", "Category.Tier2", "Passive", "ItemTier.Tier2", "Penetration"],
    tier: 2,
    totalCost: 1e3
}, {
    buildsIntoT3: ["Blood-BoundBook", "GemOfIsolation", "JadeScepter", "ScepterOfDominion", "VoidStone", "Wish-GrantingPearl"],
    components: ["Gem", "Medallion"],
    icon: "/src/assets/icons/FlamingPearl.webp",
    internalName: "FlamingPearl",
    name: "Flaming Pearl",
    passive: "",
    stats: {
        Health: 100,
        Intelligence: 25
    },
    stepCost: 200,
    tags: ["Category.Tier2", "Health", "Intelligence", "Passive", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 950
}, {
    buildsIntoT3: ["DeathMetal", "MusashisDualSwords"],
    components: ["Sabre"],
    icon: "/src/assets/icons/HookedSword.webp",
    internalName: "HookedSword",
    name: "Hooked Sword",
    passive: "",
    stats: {
        "Critical Chance": 15
    },
    stepCost: 450,
    tags: ["CriticalStrikeChance", "Category.Tier2", "Passive", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 1e3
}, {
    buildsIntoT3: ["BanefulRapier", "BerserkersShield", "DemonicGrip", "HandOfTheAbyss", "MeteorHammer", "PharaohsCurse", "QinsBlade", "ShogunsOfuda", "TheExecutioner"],
    components: ["Bow"],
    icon: "/src/assets/icons/HuntersBow.webp",
    internalName: "HuntersBow",
    name: "Hunter's Bow",
    passive: "",
    stats: {
        "Attack Speed": 15
    },
    stepCost: 450,
    tags: ["AttackSpeed", "Category.Tier2", "Passive", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 750
}, {
    buildsIntoT3: ["Heartseeker", "HydrasLament", "Transcendence"],
    components: ["Axe", "Circlet"],
    effects: [{
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrBaseCoValue: .25,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "Mana",
            backingAttr: "MaxMana",
            calcType: "AttributeBased",
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/InfusedAxe.webp",
    internalName: "InfusedAxe",
    name: "Infused Axe",
    passive: "Passive: When you get a Kill or Assist on an enemy god you instantly restore 25% of your Mana.",
    stats: {
        Mana: 150,
        "Mana Regen": 1,
        Strength: 15
    },
    stepCost: 300,
    tags: ["Category.Tier2", "ManaRegen", "Passive", "Mana", "ItemTier.Tier2", "Strength"],
    tier: 2,
    totalCost: 1050
}, {
    buildsIntoT3: ["DreamersIdol", "HelmOfDarkness", "HelmOfRadiance", "JadeScepter", "Necronomicon", "Polynomicon", "SphereOfNegation", "StaffOfMyrddin", "TyphonsFang"],
    components: ["Gem"],
    icon: "/src/assets/icons/KillingStone.webp",
    internalName: "KillingStone",
    name: "Killing Stone",
    passive: "",
    stats: {
        Intelligence: 40
    },
    stepCost: 550,
    tags: ["Intelligence", "Category.Tier2", "Passive", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 1e3
}, {
    buildsIntoT3: ["BanefulRapier", "Deathbringer", "MusashisDualSwords"],
    components: ["Axe", "Sabre"],
    effects: [{
        duration: "HasDuration",
        durationTime: 4,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "BaseMovementSpeedModifierPercent",
            calcType: "ScalableFloat",
            floatValue: 5,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/Kopesh.webp",
    internalName: "Kopesh",
    name: "Kopesh",
    passive: "Passive: When you Critically Strike an enemy god you gain 5% Movement Speed for 4s.",
    stats: {
        "Critical Chance": 10,
        Strength: 10
    },
    stepCost: 250,
    tags: ["CriticalStrikeChance", "Category.Tier2", "Strength", "Passive", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 1250
}, {
    buildsIntoT3: ["BindingsOfLyngvi", "HelmOfRadiance", "LevianthansHide", "LorgMor", "SilkenMailcoat", "SpiritRobe", "Stampede", "VoidShield"],
    components: ["Shield"],
    icon: "/src/assets/icons/LegionnaireArmor.webp",
    internalName: "LegionnaireArmor",
    name: "Legionnaire Armor",
    passive: "",
    stats: {
        "Physical Protection": 20
    },
    stepCost: 450,
    tags: ["PhysicalProtection", "Category.Tier2", "Passive", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 750
}, {
    buildsIntoT3: ["BrawlersRuin", "ObsidianMacuahuitl", "SerpentSpear", "SerratedEdge", "TheExecutioner"],
    components: ["Axe"],
    icon: "/src/assets/icons/LucerneHammer.webp",
    internalName: "LucerneHammer",
    name: "Lucerne Hammer",
    passive: "",
    stats: {
        Penetration: 5,
        Strength: 15
    },
    stepCost: 500,
    tags: ["Strength", "Category.Tier2", "Passive", "ItemTier.Tier2", "Penetration"],
    tier: 2,
    totalCost: 950
}, {
    buildsIntoT3: ["BookOfThoth", "BreastplateOfValor", "EldritchOrb", "GenjisGuard", "OniHuntersGarb", "ScepterOfDominion", "SunBeamBow", "Transcendence", "YogisNecklace"],
    components: ["Circlet"],
    icon: "/src/assets/icons/ManaTome.webp",
    internalName: "ManaTome",
    name: "Mana Tome",
    passive: "",
    stats: {
        Mana: 250,
        "Mana Regen": 2
    },
    stepCost: 200,
    tags: ["Category.Tier2", "ManaRegen", "Passive", "Mana", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 500
}, {
    buildsIntoT3: ["AtalantasBow", "BragisHarp", "DaggerOfFrenzy", "QinsBlade", "SunBeamBow"],
    components: ["Axe", "Bow"],
    icon: "/src/assets/icons/ManchuBow.webp",
    internalName: "ManchuBow",
    name: "Manchu Bow",
    passive: "Passive: All targets hit by your basic attacks take 10 bonus Physical Damage.",
    stats: {
        "Attack Speed": 8,
        Strength: 10
    },
    stepCost: 200,
    tags: ["AttackSpeed", "Strength", "Category.Tier2", "Passive", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 950
}, {
    buildsIntoT3: ["BerserkersShield", "HussarsWings", "MysticalMail", "ShieldOfThePhoenix", "SilkenMailcoat"],
    components: ["Medallion", "Shield"],
    icon: "/src/assets/icons/MedalOfDefense.webp",
    internalName: "MedalOfDefense",
    name: "Medal of Defense",
    passive: "",
    stats: {
        Health: 125,
        "Physical Protection": 12
    },
    stepCost: 250,
    tags: ["PhysicalProtection", "Passive", "Category.Tier2", "Health"],
    tier: 2,
    totalCost: 850
}, {
    buildsIntoT3: ["HussarsWings", "OniHuntersGarb", "PhoenixAmulet", "ShogunsOfuda", "TalismanOfPurification"],
    components: ["Medallion", "Rune"],
    icon: "/src/assets/icons/MedalOfDisruption.webp",
    internalName: "MedalOfDisruption",
    name: "Medal of Disruption",
    passive: "",
    stats: {
        Health: 150,
        "Magical Protection": 12
    },
    stepCost: 250,
    tags: ["Passive", "Category.Tier2", "Health", "MagicalProtection"],
    tier: 2,
    totalCost: 850
}, {
    buildsFromT1: ["Bow", "Gem", "Ring"],
    components: ["HuntersBow", "RingOfDispel"],
    effects: [{
        duration: "HasDuration",
        durationTime: 10,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "InhandPowerItem",
            calcType: "ScalableFloat",
            floatValue: 15,
            modType: "Additive"
        }],
        stackLimit: 4,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/HandOfTheAbyss.webp",
    internalName: "HandOfTheAbyss",
    name: "Bracer of The Abyss",
    passive: "Passive: When you hit an enemy god or jungle boss with an ability you gain 15 Basic Attack Damage for 10s. Stacks up to 4 times.",
    stats: {
        "Attack Speed": 25,
        "Cooldown Rate": 15,
        Intelligence: 60
    },
    stepCost: 900,
    tags: ["Category.Tier3", "Intelligence", "ItemTier.Tier3", "Passive", "AttackSpeed", "Role.Carry.Hybrid", "CooldownReduction", "Category.Offensive"],
    tier: 3,
    totalCost: 2600
}, {
    active: !0,
    buildsFromT1: ["Axe", "Medallion", "Rune", "Shield"],
    components: ["BattleAxe", "EngravedGuard"],
    icon: "/src/assets/icons/EyeOfTheStorm.webp",
    internalName: "EyeOfTheStorm",
    name: "Eye of the Storm",
    passive: "Active: Toggle to Vortex enemies around you toward you, draining 2.5% of your Max Health per second while active. Automatically deactivates at 200 Health remaining.",
    stats: {
        Health: 150,
        "Magical Protection": 20,
        "Physical Protection": 20,
        Strength: 30
    },
    stepCost: 850,
    tags: ["Category.Tier3", "Strength", "PhysicalProtection", "MagicalProtection", "Health", "ItemTier.Tier3", "Role.Solo.STR", "Category.Hybrid", "Active"],
    tier: 3,
    totalCost: 2550
}, {
    buildsFromT1: ["Gem", "Ring"],
    components: ["RingOfDispel"],
    effects: [{
        duration: "HasDuration",
        durationTime: 10,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "BaseMovementSpeedModifierPercent",
            calcType: "ScalableFloat",
            floatValue: 3,
            modType: "Additive"
        }, {
            attrName: "BaseMovementSpeedModifierPercent",
            calcType: "CustomCalculationClass",
            modType: "Additive"
        }, {
            attrName: "MovementSpeedDiminishingReturnPercent",
            calcType: "CustomCalculationClass",
            modType: "Additive"
        }, {
            attrName: "MagicalPowerItem",
            calcType: "ScalableFloat",
            floatValue: 15,
            modType: "Additive"
        }],
        stackLimit: 3,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/GemOfFocus.webp",
    internalName: "GemOfFocus",
    name: "Gem of Focus",
    passive: "Passive: When you use an ability you gain 15 Intelligence and 3% Movement Speed for 10s. Stacks up to 3 times.",
    stats: {
        "Cooldown Rate": 20,
        Intelligence: 80
    },
    stepCost: 1650,
    tags: ["Category.Tier3", "Intelligence", "MovementSpeed", "Passive", "CooldownReduction", "ItemTier.Tier3", "Role.Solo.INT", "Role.Mid.INT", "Role.Jungle.INT", "Category.Offensive", "Role.Carry.Hybrid"],
    tier: 3,
    totalCost: 2600
}, {
    buildsFromT1: ["Gem", "Medallion", "Medallion"],
    components: ["FlamingPearl", "VeveCharm"],
    effects: [{
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.CC.Soft.Slow",
        mods: [{
            attrName: "BaseMovementSpeedModifierPercent",
            calcType: "ScalableFloat",
            floatValue: 15,
            modType: "Additive"
        }],
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/GemOfIsolation.webp",
    internalName: "GemOfIsolation",
    name: "Gem of Isolation",
    passive: "Passive: Enemy gods hit by your abilities are affected by a 15% Slow for 2s.",
    stats: {
        Health: 350,
        Intelligence: 50
    },
    stepCost: 750,
    tags: ["Category.Tier3", "Intelligence", "Health", "Passive", "ItemTier.Tier3", "Role.Solo.INT", "Role.Mid.INT", "Role.Jungle.INT", "Category.Offensive"],
    tier: 3,
    totalCost: 2500
}, {
    buildsFromT1: ["Circlet", "Ring", "Rune"],
    components: ["ManaTome", "SagesRing"],
    icon: "/src/assets/icons/GenjisGuard.webp",
    internalName: "GenjisGuard",
    name: "Genji's Guard",
    passive: "PASSIVE - When you take Magical Damage from Abilities your cooldowns are reduced by 3s. This can only occur once every 30s.",
    stats: {
        "Cooldown Rate": 20,
        "Magical Protection": 55,
        Mana: 300,
        "Mana Regen": 5
    },
    stepCost: 1250,
    tags: ["MagicalProtection", "Category.Tier3", "Passive", "ItemTier.Tier3", "Role.Support", "Role.Solo.STR", "Role.Solo.INT", "CooldownReduction", "Category.Defensive", "Mana", "ManaRegen"],
    tier: 3,
    totalCost: 2550
}, {
    active: !0,
    buildsFromT1: ["Ring", "Rune", "Shield"],
    components: ["AdroitRing", "EngravedGuard"],
    icon: "/src/assets/icons/GloriousPridwen.webp",
    internalName: "GloriousPridwen",
    name: "Glorious Pridwen",
    passive: "Active: Create an explosion dealing 55% of your Protections as Magical Damage and slowing targets by 25% for 3s in a 4.8m radius. Then you gain a Shield equal to 80% of your Protections for 5s. When destroyed, by timing out or being depleted, you explode again. Cooldown: 45s.",
    stats: {
        "Cooldown Rate": 20,
        "Magical Protection": 25,
        "Physical Protection": 25
    },
    stepCost: 1100,
    tags: ["Category.Tier3", "ItemTier.Tier3", "PhysicalProtection", "MagicalProtection", "CooldownReduction", "Role.Solo.INT", "Role.Solo.STR", "Role.Support", "Active", "Category.Defensive"],
    tier: 3,
    totalCost: 2550
}, {
    buildsFromT1: ["Axe", "Bow", "Medallion"],
    components: ["BattleAxe", "HuntersBow"],
    icon: "/src/assets/icons/MeteorHammer.webp",
    internalName: "MeteorHammer",
    name: "Golden Blade",
    passive: "Passive: Basic attacks deal 25 + 10% of your Item Protections as bonus Physical Damage to all enemies within 2.5m of the target. ",
    stats: {
        "Attack Speed": 20,
        Health: 150,
        Strength: 25
    },
    stepCost: 650,
    tags: ["Strength", "Category.Tier3", "Passive", "AttackSpeed", "Health", "ItemTier.Tier3", "Role.Solo.STR", "Category.Hybrid"],
    tier: 3,
    totalCost: 2300
}, {
    buildsFromT1: ["Axe", "Circlet"],
    components: ["InfusedAxe", "VoidShard"],
    icon: "/src/assets/icons/Heartseeker.webp",
    internalName: "Heartseeker",
    name: "Heartseeker",
    passive: "Passive: Your abilities deal bonus physical damage as a % of the target's max HP. The %HP damage is equal to 2% of your Strength.",
    stats: {
        Mana: 100,
        "Mana Regen": 2,
        Penetration: 10,
        Strength: 40
    },
    stepCost: 1050,
    tags: ["Category.Tier3", "Passive", "ItemTier.Tier3", "Role.Jungle.STR", "Strength", "Penetration", "Mana", "ManaRegen", "Category.Offensive", "Role.Mid.STR", "Role.Carry.STR"],
    tier: 3,
    totalCost: 2850
}, {
    active: !0,
    buildsFromT1: ["Gem", "Rune", "Shield"],
    components: ["EngravedGuard", "KillingStone"],
    icon: "/src/assets/icons/HelmOfDarkness.webp",
    internalName: "HelmOfDarkness",
    name: "Helm of Darkness",
    passive: "Active: You become Stealthed for 6s. Cannot be activated while firing an ability. Cooldown: 90s.",
    stats: {
        Intelligence: 50,
        "Magical Protection": 30,
        "Physical Protection": 25
    },
    stepCost: 1e3,
    tags: ["Category.Tier3", "Active", "ItemTier.Tier3", "PhysicalProtection", "Intelligence", "Role.Solo.INT", "MagicalProtection", "Category.Hybrid"],
    tier: 3,
    totalCost: 2800
}, {
    buildsFromT1: ["Gem", "Shield"],
    components: ["KillingStone", "LegionnaireArmor"],
    effects: [{
        duration: "HasDuration",
        durationTime: 6,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "PhysicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 5,
            modType: "Additive"
        }],
        stackLimit: 5,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/HelmOfRadiance.webp",
    internalName: "HelmOfRadiance",
    name: "Helm of Radiance",
    passive: "Passive: When you take Physical Damage you gain 5 Physical Protection for 6s. Stacks up to 5 times. ",
    stats: {
        Intelligence: 60,
        "Physical Protection": 25
    },
    stepCost: 700,
    tags: ["Category.Tier3", "Intelligence", "PhysicalProtection", "Passive", "ItemTier.Tier3", "Role.Solo.INT", "Role.Mid.INT", "Role.Jungle.INT", "Category.Hybrid"],
    tier: 3,
    totalCost: 2450
}, {
    active: !0,
    buildsFromT1: ["Medallion", "Medallion", "Shield"],
    components: ["MedalOfDefense", "OlmecBlue"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        mods: [{
            attrName: "MaxHealthItem",
            calcType: "ScalableFloat",
            floatValue: 200,
            modType: "Additive"
        }, {
            attrName: "PhysicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 50,
            modType: "Additive"
        }, {
            attrName: "HealthPerTimeItem",
            calcType: "ScalableFloat",
            floatValue: 2,
            modType: "Additive"
        }]
    }],
    icon: "/src/assets/icons/HideOfNemean.webp",
    internalName: "HideOfNemean",
    name: "Hide of the Nemean Lion",
    passive: `Passive: Reflects 12.5% of all Basic Attack damage back to the attacker as Physical Damage.\r
\r
Active: Reflects 25% of all damage back to attackers as Physical Damage for 3 seconds. Cooldown: 120s.`,
    stats: {
        Health: 200,
        "Health Regen": 2,
        "Physical Protection": 50
    },
    stepCost: 1e3,
    tags: ["Category.Tier3", "ItemTier.Tier3", "Health", "PhysicalProtection", "Role.Solo.INT", "Role.Solo.STR", "Active", "HealthRegen", "Category.Defensive"],
    tier: 3,
    totalCost: 2550
}, {
    buildsFromT1: ["Ring", "Shield"],
    components: ["AdroitRing", "LegionnaireArmor"],
    icon: "/src/assets/icons/LorgMor.webp",
    internalName: "LorgMor",
    name: "Gladiator's Shield",
    passive: "Passive: Enemies hit by your abilities take 15 + 30% of your Item Protections as bonus Physical Damage. This effect only triggers once per ability per god.",
    stats: {
        "Cooldown Rate": 20,
        "Health":150,
        "Physical Protection": 40
    },
    stepCost: 950,
    tags: ["Category.Tier3", "Passive", "CooldownReduction", "ItemTier.Tier3", "Role.Solo.STR", "PhysicalProtection", "Category.Defensive"],
    tier: 3,
    totalCost: 2350
}, {
    active: !0,
    buildsFromT1: ["Medallion", "Medallion", "Rune", "Shield"],
    components: ["MedalOfDefense", "MedalOfDisruption"],
    effects: [{
        duration: "HasDuration",
        durationTime: 6,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "BaseMovementSpeedModifierPercent",
            calcType: "ScalableFloat",
            floatValue: 20,
            modType: "Additive"
        }]
    }],
    icon: "/src/assets/icons/HussarsWings.webp",
    internalName: "HussarsWings",
    name: "Hussar's Wings",
    passive: "Active: You are Cleansed of all Slows, gain Slow Immunity, and 20% Movement Speed for 6s. Cooldown: 30s.",
    stats: {
        Health: 200,
        "Magical Protection": 25,
        "Physical Protection": 25
    },
    stepCost: 450,
    tags: ["Category.Tier3", "MagicalProtection", "PhysicalProtection", "Active", "ItemTier.Tier3", "Role.Support", "Role.Solo.STR", "Role.Solo.INT", "Health", "Category.Defensive"],
    tier: 3,
    totalCost: 2150
}, {
    buildsFromT1: ["Axe", "Axe", "Circlet"],
    components: ["InfusedAxe", "Skeggox"],
    icon: "/src/assets/icons/HydrasLament.webp",
    internalName: "HydrasLament",
    name: "Hydra's Lament",
    passive: "Passive: When you use an ability you gain 30% increased Basic Attack Damage on your next basic attack for 8s.",
    stats: {
        Mana: 250,
        "Mana Regen": 5,
        Strength: 40
    },
    stepCost: 300,
    tags: ["Category.Tier3", "Strength", "Mana", "ManaRegen", "Passive", "ItemTier.Tier3", "Role.Jungle.STR", "Role.Mid.STR", "Role.Carry.STR", "Category.Offensive"],
    tier: 3,
    totalCost: 2350
}, {
    active: !0,
    buildsFromT1: ["Gem", "Gem", "Medallion"],
    components: ["FlamingPearl", "KillingStone"],
    icon: "/src/assets/icons/JadeScepter.webp",
    internalName: "JadeScepter",
    name: "Jade Scepter",
    passive: "Active: Enemy gods in front of you are Displaced up and away from you. Cooldown: 90s.",
    stats: {
        Health: 200,
        Intelligence: 80
    },
    stepCost: 600,
    tags: ["Intelligence", "Category.Tier3", "Active", "ItemTier.Tier3", "Role.Mid.INT", "Role.Jungle.INT", "Role.Solo.INT", "Health", "Category.Offensive"],
    tier: 3,
    totalCost: 2550
}, {
    buildsFromT1: ["Axe", "Ring"],
    components: ["AdroitRing", "Skeggox"],
    icon: "/src/assets/icons/JotunnsRevenge.webp",
    internalName: "JotunnsRevenge",
    name: "Jotunn's Revenge",
    passive: "Passive: When you get a Kill or Assist on an enemy god your Non-ultimate Cooldowns are reduced by 2s and your Ultimate Cooldown is reduced by 6s.",
    stats: {
        "Cooldown Rate": 25,
        Strength: 35
    },
    stepCost: 950,
    tags: ["Category.Tier3", "Strength", "CooldownReduction", "Passive", "ItemTier.Tier3", "Role.Mid.STR", "Role.Jungle.STR", "Category.Offensive", "Role.Solo.STR"],
    tier: 3,
    totalCost: 2600
}, {
    buildsFromT1: ["Medallion", "Shield"],
    components: ["LegionnaireArmor", "VeveCharm"],
    effects: [{
        duration: "HasDuration",
        durationTime: 4,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Debuff",
        mods: [{
            attrBaseCoValue: -.1,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "PhysicalPower",
            backingAttr: "PhysicalPowerBase",
            calcType: "AttributeBased",
            modType: "Additive"
        }, {
            attrBaseCoValue: -.1,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "PhysicalPower",
            backingAttr: "PhysicalPowerItem",
            calcType: "AttributeBased",
            modType: "Additive"
        }],
        stackLimit: 2,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/LevianthansHide.webp",
    internalName: "LevianthansHide",
    name: "Leviathan's Hide",
    passive: "Passive: Enemies who hit you with basic attacks lose 10% Strength for 4s. Stacks up to 2 times.",
    stats: {
        Health: 300,
        "Physical Protection": 30
    },
    stepCost: 950,
    tags: ["PhysicalProtection", "Category.Tier3", "Passive", "ItemTier.Tier3", "Role.Support", "Role.Solo.STR", "Role.Solo.INT", "Category.Defensive", "Health"],
    tier: 3,
    totalCost: 2500
}
//{
//     active: !0,
//     buildsFromT1: ["Gem", "Medallion", "Medallion"],
//     components: ["FlamingPearl", "OlmecBlue"],
//     icon: "/src/assets/icons/LifeBinder.webp",
//     internalName: "LifeBinder",
//     name: "Lifebinder",
//     passive: "Active: Send out a wave of living energy dealing 130 + 5 per level magic damage and marking enemy Gods for 6 seconds. Allies who damage a marked target will gain a shield and heal for 130 + 5 per level. Kills and Assists will reduce the current cooldown by 20%. Cooldown 50s.",
//     stats: {
//         Health: 350,
//         "Health Regen": 3,
//         Intelligence: 35
//     },
//     stepCost: 750,
//     tags: ["Category.Tier3", "ItemTier.Tier3", "Active", "Role.Solo.INT", "Health", "Intelligence", "Category.Offensive", "HealthRegen"],
//     tier: 3,
//     totalCost: 2400
// }, 
,{
    active: !0,
    icon: "/src/assets/icons/Sunder.webp",
    internalName: "Sunder",
    name: "Sundering Arc",
    passive: `Active: Instantly deals 175 + 25 per level true damage to Jungle Monsters and Jungle Bosses. Deals 500 damage at level 13 and above. \r
\r
Hits Gods, dealing 25 + 5 per level True Damage 3 times over 2s. Cooldown: 120s.`,
    relic: !0,
    tags: ["ItemTier.Tier3", "Category.Tier3", "Active", "Category.Relic"],
    tier: 3,
    totalCost: 0
},{
    buildsIntoT2: [],
    buildsIntoT3: [],
    icon: "/src/assets/icons/BlueStonePendant.webp",
    internalName: "BlueStonePendant",
    name: "Bluestone Pendant",
    passive: "Passive: Enemies hit by your damaging Abilities take an additional 32 Physical Damage over 2s. Subsequent hits on the same target do half the bonus damage for the next 3s. Requires level 20 to upgrade.",
    starter: !0,
    stats: {
        "Health Regen": 2.5,
        "Mana Regen": 2,
        Strength: 15
    },
    stepCost: 650,
    tags: ["Category.Starter", "Starter", 'Strength'],
    tier: 1,
    totalCost: 650
}, {
    buildsIntoT2: ["BumbasHammer"],
    buildsIntoT3: [],
    icon: "/src/assets/icons/BumbasCudgel.webp",
    internalName: "BumbasCudgel",
    name: "Bumba's Cudgel",
    passive: "Passive: Your Basic Attacks deal +25 True Damage and your Abilities deal +35% Damage versus Jungle Monsters. After casting an ability your next Basic Attack deals an additional 20 True Damage. hitting this basic attack reduces your active cooldowns by 0.5s. Requires level 20 to upgrade.",
    starter: !0,
    stats: {
        Health: 50,
        Mana: 50,
        Strength: 15
    },
    stepCost: 650,
    tags: ["Starter", "Category.Starter",'Strength'],
    tier: 1,
    totalCost: 650
}, {
    buildsIntoT2: ["BumbasSpear"],
    buildsIntoT3: [],
    icon: "/src/assets/icons/BumbasGoldenDagger.webp",
    internalName: "BumbasGoldenDagger",
    name: "Bumba's Golden Dagger",
    passive: "Passive: Your Basic Attacks deal +25 True Damage and your Abilities deal +35% Damage versus Jungle Monsters. Basic attacks deal 15% bonus physical damage to additional enemies within 1.5m of the target. Requires level 20 to upgrade.",
    starter: !0,
    stats: {
        Health: 50,
        Mana: 50,
        Strength: 15
    },
    stepCost: 650,
    tags: ["Category.Starter", "Starter",'Strength'],
    tier: 1,
    totalCost: 650
}, {
    buildsIntoT2: ["ArchmagesGem"],
    buildsIntoT3: [],
    icon: "/src/assets/icons/ConduitGem.webp",
    internalName: "ConduitGem",
    name: "Conduit Gem",
    passive: "Passive: Every 0.5 seconds you gain a stack. Your next damaging ability deals 3 True Damage per stack and remove all stacks. Stacks up to 20 Times. Requires level 20 to upgrade.",
    starter: !0,
    stats: {
        Intelligence: 25,
        Mana: 100,
        "Mana Regen": 2
    },
    stepCost: 650,
    tags: ["Category.Starter", "Starter",'Intelligence'],
    tier: 1,
    totalCost: 650
}, {
    buildsIntoT2: ["DeathsEmbrace"],
    buildsIntoT3: [],
    effects: [{
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "Mana",
            calcType: "ScalableFloat",
            floatValue: 1,
            modType: "Additive"
        }, {
            attrBaseCoValue: .01,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "Mana",
            backingAttr: "MaxMana",
            calcType: "AttributeBased",
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/DeathsToll.webp",
    internalName: "DeathsToll",
    name: "Death's Toll",
    passive: "Passive: Hitting an enemy with a Basic Attack Heals you for 2 +0.3% of your Max Health and 1 +1% of your Max Mana. Requires level 20 to upgrade.",
    starter: !0,
    stats: {
        Health: 100,
        Strength: 15
    },
    stepCost: 650,
    tags: ["Category.Starter", "Starter",'Strength'],
    tier: 1,
    totalCost: 650
}, {
    buildsIntoT2: [],
    buildsIntoT3: [],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff,Items.LeatherCowl.AtkSpdBuff",
        mods: [{
            attrName: "AttackSpeed",
            calcType: "ScalableFloat",
            floatValue: 10,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }, {
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "BaseMovementSpeedModifierPercent",
            calcType: "ScalableFloat",
            floatValue: 5,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/LeatherCowl.webp",
    internalName: "LeatherCowl",
    name: "Leather Cowl",
    passive: "Passive: While you are within 8.8m of an allied god you gain 10% Attack Speed. If you are alone you instead gain 5% Movement Speed. Requires level 20 to upgrade.",
    starter: !0,
    stats: {
        "Attack Speed": 10,
        Strength: 10
    },
    stepCost: 650,
    tags: ["Category.Starter", "Starter", 'Attack Speed'],
    tier: 1,
    totalCost: 650
}, {
    buildsIntoT2: ["AdroitRing", "Caestus", "CaptainsRing", "RingOfDispel", "SagesRing"],
    buildsIntoT3: ["BreastplateOfValor", "ChronosPendant", "CircesHexstone", "GemOfFocus", "GenjisGuard", "GloriousPridwen", "HandOfTheAbyss", "JotunnsRevenge", "LorgMor", "PendulumBlade", "PhantomRing", "ScreechingGargoyle", "ShieldOfThePhoenix", "SoulGem", "StaffOfCosmicHorror", "StaffOfMyrddin", "TalismanOfNamaka", "TalismanOfPurification", "TekkoKagi", "TheCrusher", "TheWorldStone", "TotemOfDeath"],
    icon: "/src/assets/icons/Ring.webp",
    internalName: "Ring",
    name: "Ring",
    passive: "",
    stats: {
        "Cooldown Rate": 8
    },
    stepCost: 400,
    tags: ["Category.Tier1", "CooldownReduction", "Passive", "ItemTier.Tier1"],
    tier: 1,
    totalCost: 400
}, {
    buildsIntoT2: ["RuinousVenom"],
    buildsIntoT3: ["BrawlersRuin", "DivineRuin", "RuinousAnkh"],
    effects: [{
        duration: "HasDuration",
        durationTime: 4,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Debuff",
        mods: [{
            attrName: "HealingTakenPercentModifierItem",
            calcType: "ScalableFloat",
            floatValue: -20,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/RuinousPoison.webp",
    internalName: "RuinousPoison",
    name: "Ruinous Poison",
    passive: "Passive: Enemy gods hit by your basic attacks or abilities have 20% reduced healing for 4s.",
    stepCost: 300,
    tags: ["Category.Tier1", "HealingReduction", "Passive", "ItemTier.Tier1"],
    tier: 1,
    totalCost: 300
}, {
    buildsIntoT2: ["EngravedGuard", "MedalOfDisruption", "SagesRing", "Zisurru"],
    buildsIntoT3: ["BaguaMirror", "BindingsOfLyngvi", "EyeOfProvidence", "EyeOfTheStorm", "GenjisGuard", "GloriousPridwen", "HelmOfDarkness", "HussarsWings", "OniHuntersGarb", "PharaohsCurse", "PhoenixAmulet", "RestorativeAmanita", "RuinousAnkh", "ScreechingGargoyle", "ShiftersShieldV2", "ShogunsOfuda", "SphereOfNegation", "SpiritRobe", "TalismanOfPurification", "VoidStone"],
    icon: "/src/assets/icons/Rune.webp",
    internalName: "Rune",
    name: "Rune",
    passive: "",
    stats: {
        "Magical Protection": 9
    },
    stepCost: 300,
    tags: ["Category.Tier1", "MagicalProtection", "Passive", "ItemTier.Tier1"],
    tier: 1,
    totalCost: 300
}, {
    buildsIntoT2: ["HookedSword", "Kopesh"],
    buildsIntoT3: ["BanefulRapier", "DeathMetal", "Deathbringer", "MusashisDualSwords"],
    icon: "/src/assets/icons/Sabre.webp",
    internalName: "Sabre",
    name: "Sabre",
    passive: "",
    stats: {
        "Critical Chance": 7
    },
    stepCost: 550,
    tags: ["Category.Tier1", "CriticalStrikeChance", "Passive", "ItemTier.Tier1"],
    tier: 1,
    totalCost: 550
}, {
    buildsIntoT2: [],
    buildsIntoT3: [],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff,Items.SandsOfTime.Buff",
        mods: [{
            attrName: "ManaPerTime",
            calcType: "ScalableFloat",
            floatValue: .5,
            modType: "Additive"
        }],
        stackLimit: 10,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/SandsOfTime.webp",
    internalName: "SandsOfTime",
    name: "Sands Of Time",
    passive: "Passive: This item grants 0.5 Mana per second per 10% of your missing Mana. Your damaging abilities deal an extra 15 true damage to minions. Requires level 20 to upgrade.",
    starter: !0,
    stats: {
        "Cooldown Rate": 15,
        Intelligence: 20,
        "Mana Regen": 1
    },
    stepCost: 650,
    tags: ["Category.Starter", "Starter", 'Intelligence'],
    tier: 1,
    totalCost: 650
}, {
    buildsIntoT2: ["AdamantineSickle", "CursedSickle"],
    buildsIntoT3: ["Blood-BoundBook", "DevourersGauntlet", "SerratedEdge", "SoulGem", "TheReaper", "TyphonsFang"],
    icon: "/src/assets/icons/Scythe.webp",
    internalName: "Scythe",
    name: "Scythe",
    passive: "",
    stats: {
        Lifesteal: 5
    },
    stepCost: 450,
    tags: ["Category.Tier1", "LifeSteal", "Passive", "ItemTier.Tier1"],
    tier: 1,
    totalCost: 450
}, {
    buildsIntoT2: ["Heroism"],
    buildsIntoT3: [],
    effects: [{
        isBaseStats: !1,
        isEvolvedItem: !1,
        mods: [{
            attrName: "Gold",
            calcType: "ScalableFloat",
            floatValue: 8,
            modType: "Additive"
        }]
    }, {
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "Mana",
            calcType: "ScalableFloat",
            floatValue: 5,
            modType: "Additive"
        }],
        stackLimit: 1
    }],
    icon: "/src/assets/icons/Selflessness.webp",
    internalName: "Selflessness",
    name: "Selflessness",
    passive: "Passive: Getting the assist for an enemy minion or jungle monster dying will provide 8 Bonus gold and restore 8 Health and 5 Mana. When an ally god within 8.8m of you is hit by a hard crowd control effect, give them a shield equal to 8% of your Maximum Health. This effect can only occur once every 30s. Requires level 15 to upgrade.",
    starter: !0,
    stats: {
        Health: 60,
        "Magical Protection": 10,
        "Physical Protection": 10
    },
    stepCost: 550,
    tags: ["Category.Starter", "Starter", 'Protection'],
    tier: 1,
    totalCost: 550
}, {
    buildsIntoT2: ["CaptainsRing", "EngravedGuard", "LegionnaireArmor", "MedalOfDefense"],
    buildsIntoT3: ["BerserkersShield", "BindingsOfLyngvi", "BreastplateOfValor", "EyeOfProvidence", "EyeOfTheStorm", "GloriousPridwen", "HelmOfDarkness", "HelmOfRadiance", "HussarsWings", "LevianthansHide", "LorgMor", "MysticalMail", "PharaohsCurse", "RestorativeAmanita", "RuinousAnkh", "ShieldOfThePhoenix", "ShiftersShieldV2", "SilkenMailcoat", "SpiritRobe", "Stampede", "VoidShield"],
    icon: "/src/assets/icons/Shield.webp",
    internalName: "Shield",
    name: "Shield",
    passive: "",
    stats: {
        "Physical Protection": 7
    },
    stepCost: 300,
    tags: ["Category.Tier1", "PhysicalProtection", "Passive", "ItemTier.Tier1"],
    tier: 1,
    totalCost: 300
}, {
    buildsIntoT2: ["WarBanner"],
    buildsIntoT3: [],
    effects: [{
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "Mana",
            calcType: "ScalableFloat",
            floatValue: 5,
            modType: "Additive"
        }],
        stackLimit: 1
    }, {
        duration: "HasDuration",
        durationTime: 10,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "AttackSpeed",
            calcType: "ScalableFloat",
            floatValue: .5,
            modType: "Additive"
        }],
        stackLimit: 10,
        stackType: "AggregateByTarget"
    }, {
        duration: "HasDuration",
        durationTime: 10,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "BaseMovementSpeedModifierPercent",
            calcType: "ScalableFloat",
            floatValue: .25,
            modType: "Additive"
        }],
        stackLimit: 10,
        stackType: "AggregateBySource"
    }, {
        isBaseStats: !1,
        isEvolvedItem: !1,
        mods: [{
            attrName: "Gold",
            calcType: "ScalableFloat",
            floatValue: 8,
            modType: "Additive"
        }]
    }],
    icon: "/src/assets/icons/WarFlag.webp",
    internalName: "WarFlag",
    name: "War Flag",
    passive: "Passive: Getting the assist for an enemy minion or jungle monster dying will provide 8 Bonus gold and restore 8 Health and 5 Mana. You and allied gods within 8.8m also receive a buff that gives 0.25% Movement Speed and 0.5% Attack Speed for 10s. Stacks up to 10 times. Requires level 15 to upgrade.",
    starter: !0,
    stats: {
        Health: 60,
        "Magical Protection": 10,
        "Physical Protection": 10
    },
    stepCost: 550,
    tags: ["Category.Starter", "Starter", 'Protection'],
    tier: 1,
    totalCost: 550
}, {
    buildsIntoT2: ["SunderingAxeUpgrade"],
    buildsIntoT3: [],
    icon: "/src/assets/icons/SunderingAxe.webp",
    internalName: "SunderingAxe",
    name: "Warrior's Axe",
    passive: "Passive: Damaging an enemy god deals 40 +2 per level True damage and restores 20 +1 per level Health. This effect can only hit one god per activation. 10s Cooldown. Requires level 20 to upgrade.",
    starter: !0,
    stats: {
        "Magical Protection": 10,
        "Physical Protection": 10,
        Strength: 10
    },
    stepCost: 650,
    tags: ["Category.Starter", "Starter", 'Protection'],
    tier: 1,
    totalCost: 650
}, {
    components: ["ConduitGem"],
    icon: "/src/assets/icons/ArchmagesGem.webp",
    internalName: "ArchmagesGem",
    name: "Archmage's Gem",
    passive: "Passive: Your next ability that damages a god deals bonus Magical Damage equal to 40% your Intelligence. Cooldown: 20s. Requires Level 20.",
    starter: !0,
    stats: {
        Intelligence: 90,
        Mana: 150,
        "Mana Regen": 4
    },
	tags: ["Category.Starter", "Starter",'Intelligence'],
    stepCost: 1500,
    tier: 2,
    totalCost: 2150
}, {
    components: ["BlueStonePendant"],
    icon: "/src/assets/icons/BlueStoneBrooch.webp",
    internalName: "BlueStoneBrooch",
    name: "Bluestone Brooch",
    passive: "Passive: Enemies hit by your damaging Abilities take an additional 120 + 7.5% of their current health as Physical Damage over 2s. Subsequent hits on the same target do half the bonus damage for the next 3s. Requires Level 20.",
    starter: !0,
    stats: {
        Health: 200,
        "Health Regen": 7,
        "Mana Regen": 5,
        Strength: 30
    },
    stepCost: 1500,
	tags: ["Category.Starter", "Starter", 'Intelligence'],
    tier: 2,
    totalCost: 2150
}, {
    components: ["BumbasCudgel"],
    icon: "/src/assets/icons/BumbasHammer.webp",
    internalName: "BumbasHammer",
    name: "Bumba's Hammer",
    passive: "Passive: Your Basic Attacks deal +50 True Damage and your Abilities deal +35% damage against Jungle Camps, Structures, and Jungle Bosses. After casting an ability your next Basic Attack deals an additional 40 True Damage. hitting this basic attack reduces your active cooldowns by 0.75s and you are healed for 60 health.. Requires Level 20.",
    starter: !0,
    stats: {
        "Cooldown Rate": 10,
        Health: 200,
        Strength: 35
    },
    stepCost: 1500,
	tags: ["Category.Starter", "Starter", 'Strength'],
    tier: 2,
    totalCost: 2150
}, {
    components: ["BumbasGoldenDagger"],
    icon: "/src/assets/icons/BumbasSpear.webp",
    internalName: "BumbasSpear",
    name: "Bumba's Spear",
    passive: "Passive: Your Basic Attacks deal +50 True Damage and your Abilities deal +35% damage against Jungle Camps, Structures, and Jungle Bosses. When any of these die you gain a 10% Strength and Intelligence buff for 30s and are healed for 10% of your Health, 10% of your Mana. Requires Level 20.",
    starter: !0,
    stats: {
        "Cooldown Rate": 20,
        Health: 50,
        Mana: 50,
        Strength: 35
    },
    stepCost: 1500,
	tags: ["Category.Starter", "Strength"],
    tier: 2,
    totalCost: 2150
}, {
    buildsIntoT3: ["BaguaMirror", "PhoenixAmulet", "ScreechingGargoyle", "SphereOfNegation", "SpiritRobe", "VoidStone"],
    components: ["Rune"],
    icon: "/src/assets/icons/Zisurru.webp",
    internalName: "Zisurru",
    name: "Circle of Protection",
    passive: "",
    stats: {
        "Magical Protection": 26
    },
    stepCost: 450,
    tags: ["Category.Tier2", "MagicalProtection", "Passive", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 750
}, {
    components: ["DeathsToll"],
    effects: [{
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrBaseCoValue: .02,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "Mana",
            backingAttr: "MaxMana",
            calcType: "AttributeBased",
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/DeathsEmbrace.webp",
    internalName: "DeathsEmbrace",
    name: "Death's Embrace",
    passive: "Passive: Hitting an enemy with a Basic Attack restores 1.4% of your Health, 2% of your Mana and reduces your active non-Ultimate Cooldowns by 0.33s. Requires Level 20.",
    starter: !0,
    stats: {
        Health: 150,
        Lifesteal: 10,
        Strength: 35
    },
    stepCost: 1500,
    tier: 2,
	tags: ["Category.Starter", "Starter", 'Lifesteal','Strength'],
    totalCost: 2150
}, {
    components: ["Selflessness"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff,Items.Heroism.SpoolingBuff",
        mods: [{
            attrName: "GoldPerTime",
            calcType: "ScalableFloat",
            floatValue: 1,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/Heroism.webp",
    internalName: "Heroism",
    name: "Heroism",
    passive: "Passive: You gain 1 bonus Gold per second. When an ally god within 8.8m of you is hit by a hard crowd control effect, give them a shield equal to 15% of your Maximum Health. This effect can only occur once every 15s. Requires Level 15.",
    starter: !0,
    stats: {
        Health: 200,
        "Magical Protection": 30,
        "Physical Protection": 30
    },
    stepCost: 1250,
    tier: 2,
	tags: ["Category.Starter", "Starter", 'Protection'],
    totalCost: 1800
}, {
    components: ["LeatherCowl"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff,Items.HuntersCowl.AtkSpdBuff",
        mods: [{
            attrName: "AttackSpeed",
            calcType: "ScalableFloat",
            floatValue: 20,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }, {
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "BaseMovementSpeedModifierPercent",
            calcType: "ScalableFloat",
            floatValue: 10,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/HuntersCowl.webp",
    internalName: "HuntersCowl",
    name: "Hunter's Cowl",
    passive: "Passive: While you are within 8.8m of an allied god you gain 20% Attack Speed Aura. If you are alone you instead gain 10% Movement Speed. Requires Level 20. [Attack speed added automatically here]",
    starter: !0,
    stats: {
        "Attack Speed": 45,
        Strength: 35
    },
    stepCost: 1500,
	tags: ["Category.Starter", "Starter",'Strength','Attack Speed'],
    tier: 2,
    totalCost: 2150
}, {
    buildsIntoT3: ["ShiftersShieldV2", "TheNemes", "Wish-GrantingPearl"],
    components: ["Circlet", "Medallion"],
    icon: "/src/assets/icons/Odigba.webp",
    internalName: "Odigba",
    name: "Odigba",
    passive: "Passive: When you get a Kill or Assist on an enemy god you restore 5% of your max HP over 6s.",
    stats: {
        Health: 125,
        Mana: 150
    },
    stepCost: 200,
    tags: ["Category.Tier2", "Health", "Passive", "Mana", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 800
}, {
    buildsIntoT3: ["CircesHexstone", "PhantomRing", "RestorativeAmanita", "Stampede", "YogisNecklace"],
    components: ["Medallion"],
    icon: "/src/assets/icons/OlmecBlue.webp",
    internalName: "OlmecBlue",
    name: "Olmec Blue",
    passive: "",
    stats: {
        Health: 185,
        "Health Regen": 1
    },
    stepCost: 400,
    tags: ["Health", "Category.Tier2", "ItemTier.Tier2", "HealthRegen", "Passive"],
    tier: 2,
    totalCost: 700
}, {
    buildsIntoT3: ["BookOfThoth", "DivineRuin", "DoomOrb", "Polynomicon", "SoulDevourer", "StaffOfCosmicHorror", "TheWorldStone"],
    components: ["Circlet", "Gem"],
    effects: [{
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrBaseCoValue: .25,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "Mana",
            backingAttr: "MaxMana",
            calcType: "AttributeBased",
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/OracleStaff.webp",
    internalName: "OracleStaff",
    name: "Oracle Staff",
    passive: "Passive: When you get a Kill or Assist on an enemy god you instantly restore 25% of your Mana.",
    stats: {
        Intelligence: 20,
        Mana: 150,
        "Mana Regen": 1
    },
    stepCost: 200,
    tags: ["Intelligence", "Category.Tier2", "ManaRegen", "Passive", "Mana", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 950
}, {
    components: ["SandsOfTime"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff,Items.PendulumOfTheAges.IntBuff",
        mods: [{
            attrName: "MagicalPowerItem",
            calcType: "ScalableFloat",
            floatValue: 7,
            modType: "Additive"
        }],
        stackLimit: 10,
        stackType: "AggregateBySource"
    }, {
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff,Items.PendulumOfTheAges.RegenBuff",
        mods: [{
            attrName: "ManaPerTime",
            calcType: "ScalableFloat",
            floatValue: 4,
            modType: "Additive"
        }],
        stackLimit: 9,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/PendulumOfTheAges.webp",
    internalName: "PendulumOfTheAges",
    name: "Pendulum Of The Ages",
    passive: "Passive: This item grants 4 Mana per second per 10% of your missing Mana. This item grants 7 Intelligence per 10% of your available Mana. [Full intelligence added automatically here]",
    starter: !0,
    stats: {
        "Cooldown Rate": 20,
        Intelligence: 140,
        "Mana Regen": 4
    },
	tags: ["Category.Starter", "Starter", 'Intelligence'],
    stepCost: 1500,
    tier: 2,
    totalCost: 2150
}, {
    buildsIntoT3: ["ChronosPendant", "GemOfFocus", "HandOfTheAbyss", "SoulGem", "StaffOfMyrddin", "TheWorldStone"],
    components: ["Gem", "Ring"],
    effects: [{
        duration: "HasDuration",
        durationTime: 4,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Debuff",
        mods: [{
            attrName: "MagicalPowerItem",
            calcType: "ScalableFloat",
            floatValue: -16,
            modType: "Additive"
        }, {
            attrName: "PhysicalPowerItem",
            calcType: "ScalableFloat",
            floatValue: -10,
            modType: "Additive"
        }]
    }],
    icon: "/src/assets/icons/RingOfDispel.webp",
    internalName: "RingOfDispel",
    name: "Ring of Dispel",
    passive: "Passive: Enemy gods hit by your Hard CC effects lose 10 Strength and 16 Intelligence for 4s.",
    stats: {
        "Cooldown Rate": 15,
        Intelligence: 20
    },
    stepCost: 100,
    tags: ["Intelligence", "Category.Tier2", "CooldownReduction", "Passive", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 950
}, {
    buildsIntoT3: ["BrawlersRuin", "DivineRuin", "RuinousAnkh"],
    components: ["RuinousPoison"],
    icon: "/src/assets/icons/RuinousVenom.webp",
    internalName: "RuinousVenom",
    name: "Ruinous Venom",
    passive: "Passive: Enemy gods hit by your basic attacks or abilities have 30% reduced healing for 4s.",
    stepCost: 300,
    tags: ["HealingReduction", "Passive", "Category.Tier2", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 600
}, {
    buildsIntoT3: ["GenjisGuard", "ScreechingGargoyle"],
    components: ["Ring", "Rune"],
    icon: "/src/assets/icons/SagesRing.webp",
    internalName: "SagesRing",
    name: "Sage's Ring",
    passive: "",
    stats: {
        "Cooldown Rate": 10,
        "Magical Protection": 13
    },
    stepCost: 100,
    tags: ["Passive", "Category.Tier2", "CooldownReduction", "MagicalProtection"],
    tier: 2,
    totalCost: 800
}, {
    buildsIntoT3: ["AvatarsParashu", "DaggerOfFrenzy", "Deathbringer", "DevourersGauntlet", "HydrasLament", "JotunnsRevenge", "ObsidianMacuahuitl", "PendulumBlade", "ProtectionOfItus"],
    components: ["Axe"],
    icon: "/src/assets/icons/Skeggox.webp",
    internalName: "Skeggox",
    name: "Skeggox",
    passive: "",
    stats: {
        Strength: 25
    },
    stepCost: 550,
    tags: ["Category.Tier2", "Strength", "Passive", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 1e3
}, {
    components: ["SunderingAxe"],
    icon: "/src/assets/icons/SunderingAxeUpgrade.webp",
    internalName: "SunderingAxeUpgrade",
    name: "Sundering Axe",
    passive: "Passive: Damaging an enemy god deals 150 +10% Of your Protections from Items True damage and restores 100 Health. This effect can only hit one god per activation. 10s Cooldown. Requires Level 20.",
    starter: !0,
    stats: {
        "Magical Protection": 30,
        "Physical Protection": 30,
        Strength: 30
    },
    stepCost: 1500,
	tags: ["Category.Starter", "Starter", 'Strength', ' Magical Protection', 'Physical Protection'],
    tier: 2,
    totalCost: 2150
}, {
    buildsIntoT3: ["EyeOfProvidence", "GemOfIsolation", "LevianthansHide", "MysticalMail", "TalismanOfNamaka", "TritonsConch"],
    components: ["Medallion"],
    icon: "/src/assets/icons/VeveCharm.webp",
    internalName: "VeveCharm",
    name: "Veve Charm",
    passive: "",
    stats: {
        Health: 240
    },
    stepCost: 500,
    tags: ["Health", "Category.Tier2", "ItemTier.Tier2", "Passive"],
    tier: 2,
    totalCost: 800
}, {
    buildsIntoT3: ["AtalantasBow", "BalorsEye", "Heartseeker", "Necronomicon", "SerpentSpear", "SoulDevourer", "TheCrusher"],
    icon: "/src/assets/icons/VoidShard.webp",
    internalName: "VoidShard",
    name: "Void Shard",
    passive: "",
    stats: {
        Penetration: 10
    },
    stepCost: 750,
    tags: ["Category.Tier2", "Passive", "ItemTier.Tier2", "Penetration"],
    tier: 2,
    totalCost: 750
}, {
    components: ["WarFlag"],
    effects: [{
        duration: "HasDuration",
        durationTime: 10,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "AttackSpeed",
            calcType: "ScalableFloat",
            floatValue: 4,
            modType: "Additive"
        }],
        stackLimit: 10,
        stackType: "AggregateByTarget"
    }, {
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrBaseCoValue: .0125,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "Mana",
            backingAttr: "MaxMana",
            calcType: "AttributeBased",
            modType: "Additive"
        }],
        stackLimit: 1
    }, {
        duration: "HasDuration",
        durationTime: 10,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "BaseMovementSpeedModifierPercent",
            calcType: "ScalableFloat",
            floatValue: 2,
            modType: "Additive"
        }],
        stackLimit: 10,
        stackType: "AggregateBySource"
    }, {
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Items.WarFlag.SpoolingBuff,Status.Buff",
        mods: [{
            attrName: "GoldPerTime",
            calcType: "ScalableFloat",
            floatValue: 1,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/WarBanner.webp",
    internalName: "WarBanner",
    name: "War Banner",
    passive: "Passive: You gain 1 bonus Gold per second. Getting the assist for an enemy minion or jungle monster will restore 1% Health and 1.25% mana to you and allied gods within 8.8m, and also also apply buff that gives 2% Movement Speed and 4% Attack Speed for 10. Stacks up to 10 times. Requires Level 15.",
    starter: !0,
    stats: {
        Health: 200,
        "Magical Protection": 30,
        "Physical Protection": 30
    },
    stepCost: 1250,
	tags: ["Category.Starter", "Starter", 'Physical Protection', 'Magical Protection'],
    tier: 2,
    totalCost: 1800
}, {
    buildsIntoT3: ["BragisHarp", "DeathMetal", "TritonsConch"],
    components: ["Axe", "Gem"],
    icon: "/src/assets/icons/Zither.webp",
    internalName: "Zither",
    name: "Zither",
    passive: "",
    stats: {
        Intelligence: 20,
        Strength: 12
    },
    stepCost: 200,
    tags: ["Category.Tier2", "Strength", "Intelligence", "Passive", "ItemTier.Tier2"],
    tier: 2,
    totalCost: 1100
}, {
    active: !0,
    buildsFromT1: ["Medallion", "Rune", "Shield"],
    components: ["EngravedGuard", "OlmecBlue"],
    effects: [{
        isBaseStats: !1,
        isEvolvedItem: !1,
        mods: [{
            attrName: "Mana",
            calcType: "ScalableFloat",
            floatValue: 0,
            modType: "Additive"
        }]
    }],
    icon: "/src/assets/icons/RestorativeAmanita.webp",
    internalName: "RestorativeAmanita",
    name: "Amanita Charm",
    passive: "Active: Create a Mushroom that Heals allied gods within 6.4m for 3.5% HP every 1s. Lasts for 5s. Cooldown: 60s.",
    stats: {
        Health: 200,
        "Health Regen": 2,
        "Magical Protection": 15,
        "Physical Protection": 25
    },
    stepCost: 950,
    tags: ["Category.Tier3", "Health", "PhysicalProtection", "Active", "ItemTier.Tier3", "Role.Support", "MagicalProtection", "HealthRegen", "Category.Defensive"],
    tier: 3,
    totalCost: 2450
}, 
//{
//     buildsFromT1: ["Axe", "Axe", "Medallion"],
//     components: ["BattleAxe", "Skeggox"],
//     effects: [{
//         duration: "HasDuration",
//         durationTime: 3,
//         isBaseStats: !1,
//         isEvolvedItem: !1,
//         key: "Status.Debuff",
//         mods: [{
//             attrName: "BaseMovementSpeedModifierPercent",
//             calcType: "ScalableFloat",
//             floatValue: .05,
//             modType: "Additive"
//         }, {
//             attrName: "BaseMovementSpeedModifierPercent",
//             calcType: "CustomCalculationClass",
//             modType: "Additive"
//         }, {
//             attrName: "MovementSpeedDiminishingReturnPercent",
//             calcType: "CustomCalculationClass",
//             modType: "Additive"
//         }, {
//             attrName: "PhysicalProtection",
//             calcType: "ScalableFloat",
//             floatValue: .95,
//             modType: "Multiplicitive"
//         }, {
//             attrName: "MagicalProtection",
//             calcType: "ScalableFloat",
//             floatValue: .95,
//             modType: "Multiplicitive"
//         }],
//         stackLimit: 3,
//         stackType: "AggregateByTarget"
//     }],
//     icon: "/src/assets/icons/AvengingBlade.webp",
//     internalName: "ProtectionOfItus",
//     name: "Avenging Blade",
//     passive: "Passive: Damaging an enemy God with a basic attack while in the jungle slows their movement speed by 5% and reduces their protections by 5% for 3 seconds (stacks up to 3 times).",
//     stats: {
//         Health: 150,
//         Strength: 40
//     },
//     stepCost: 400,
//     tags: ["Category.Tier3", "ItemTier.Tier3", "Role.Jungle.INT", "Role.Jungle.STR", "Strength", "Health", "Category.Offensive", "Passive"],
//     tier: 3,
//     totalCost: 2300
// }, 
{
    buildsFromT1: ["Circlet", "Medallion"],
    components: ["Odigba"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Items.TheNemes.Buff",
        mods: [{
            attrName: "PhysicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 1,
            modType: "Additive"
        }, {
            attrName: "MagicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 1,
            modType: "Additive"
        }],
        stackLimit: 30,
        stackType: "AggregateBySource"
    }, {
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !0,
        key: "Items.TheNemes.Buff",
        mods: [{
            attrName: "PhysicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 10,
            modType: "Additive"
        }, {
            attrName: "MagicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 10,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/TheNemes.webp",
    internalName: "TheNemes",
    name: "Gauntlet of Thebes",
    passive: "Passive: Assists on a minion give 1 Stack and God kills and assists give 5 Stacks. Stacks provide 1 Physical Protection and 1 Magical Protection. Stacks up to 30 times. At max stacks this item evolves providing you an additional 10 of each Protection.",
    stats: {
        Health: 150,
        Mana: 150
    },
    stepCost: 1400,
    tags: ["Health", "Category.Tier3", "MagicalProtection", "PhysicalProtection", "Passive", "Mana", "ItemTier.Tier3", "Role.Support", "Category.Defensive"],
    tier: 3,
    totalCost: 2200
}, {
    buildsFromT1: ["Axe", "Sabre", "Sabre"],
    components: ["HookedSword", "Kopesh"],
    effects: [{
        duration: "HasDuration",
        durationTime: 4,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "BaseMovementSpeedModifierPercent",
            calcType: "ScalableFloat",
            floatValue: 10,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/MusashisDualSwords.webp",
    internalName: "MusashisDualSwords",
    name: "Musashi's Dual Swords",
    passive: "Passive: When you Critically Strike an enemy you gain 10% Movement Speed for 4s.",
    stats: {
        "Critical Chance": 30,
        Strength: 30
    },
    stepCost: 700,
    tags: ["CriticalStrikeChance", "Strength", "Category.Tier3", "Passive", "ItemTier.Tier3", "Role.Carry.STR", "Category.Offensive", "Role.Jungle.STR", "Role.Carry.Hybrid"],
    tier: 3,
    totalCost: 2950
}, {
    buildsFromT1: ["Medallion", "Medallion", "Shield"],
    components: ["MedalOfDefense", "VeveCharm"],
    icon: "/src/assets/icons/MysticalMail.webp",
    internalName: "MysticalMail",
    name: "Mystical Mail",
    passive: "Passive: All enemies within 4m are dealt 20 + 1.5 per level Magical Damage per second. ",
    stats: {
        Health: 350,
        "Physical Protection": 40
    },
    stepCost: 1e3,
    tags: ["Health", "Category.Tier3", "PhysicalProtection", "Passive", "ItemTier.Tier3", "Role.Support", "Role.Solo.STR", "Category.Defensive", "Role.Solo.INT"],
    tier: 3,
    totalCost: 2650
}, {
    buildsFromT1: ["Gem"],
    components: ["KillingStone", "VoidShard"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Items.Necronomicon.Buff",
        mods: [{
            attrName: "MagicalPowerItem",
            calcType: "ScalableFloat",
            floatValue: 50,
            modType: "Additive"
        }, {
            attrName: "PhysicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: -10,
            modType: "Additive"
        }, {
            attrName: "MagicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: -10,
            modType: "Additive"
        }],
        stackLimit: 3,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/Necronomicon.webp",
    internalName: "Necronomicon",
    name: "Necronomicon",
    passive: "Passive: When you get a Kill or Assist on an enemy god you gain 1 stack of 50 Intelligence but you also lose 10 Physical Protection and 10 Magical Protection per stack. Stacks up to 3 times. All stacks are removed on your death. [All 3 stacks added automatically here]",
    stats: {
        Intelligence: 200,
        Penetration: 10
    },
    stepCost: 950,
    tags: ["Category.Tier3", "Passive", "Intelligence", "ItemTier.Tier3", "Role.Jungle.INT", "Role.Mid.INT", "Penetration", "Category.Offensive"],
    tier: 3,
    totalCost: 2700
}, {
    buildsFromT1: ["Axe", "Axe"],
    components: ["LucerneHammer", "Skeggox"],
    effects: [{
        duration: "HasDuration",
        durationTime: 4,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Debuff",
        mods: [{
            attrBaseCoValue: -1,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "PhysicalProtectionItem",
            backingAttr: "Level",
            calcType: "AttributeBased",
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/ObsidianMacuahuitl.webp",
    internalName: "ObsidianMacuahuitl",
    name: "Oath-Sworn Spear",
    passive: "Passive: Enemy gods hit by your abilities lose 1 per level Physical Protection for 4s.",
    stats: {
        Penetration: 5,
        Strength: 40
    },
    stepCost: 450,
    tags: ["Category.Tier3", "Passive", "Strength", "ItemTier.Tier3", "Role.Mid.STR", "Role.Jungle.STR", "Penetration", "Category.Offensive", "Role.Carry.STR"],
    tier: 3,
    totalCost: 2400
}, {
    buildsFromT1: ["Circlet", "Medallion", "Rune"],
    components: ["ManaTome", "MedalOfDisruption"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Items.OniHuntersGarb.Buff",
        mods: [{
            attrName: "DamageTakenPercentModifierItem",
            calcType: "ScalableFloat",
            floatValue: -4,
            modType: "Additive"
        }],
        stackLimit: 3,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/OniHuntersGarb.webp",
    internalName: "OniHuntersGarb",
    name: "Oni Hunter's Garb",
    passive: "Passive: For each enemy god within 8.8m of you, gain a stack of 4% damage mitigation. This caps at 3 stacks.",
    stats: {
        Health: 150,
        "Magical Protection": 55,
        Mana: 250,
        "Mana Regen": 10
    },
    stepCost: 1200,
    tags: ["Category.Tier3", "MagicalProtection", "Health", "Passive", "ItemTier.Tier3", "Role.Solo.STR", "Role.Solo.INT", "Role.Support", "ManaRegen", "Mana", "Category.Defensive"],
    tier: 3,
    totalCost: 2550
}, {
    active: !0,
    buildsFromT1: ["Axe", "Axe", "Ring"],
    components: ["Caestus", "Skeggox"],
    icon: "/src/assets/icons/PendulumBlade.webp",
    internalName: "PendulumBlade",
    name: "Pendulum Blade",
    passive: "Active: Reduce your ability cooldowns by 3s. Cooldown: 50s.",
    stats: {
        "Cooldown Rate": 15,
        Strength: 55
    },
    stepCost: 1050,
    tags: ["Category.Tier3", "Strength", "ItemTier.Tier3", "CooldownReduction", "Role.Mid.STR", "Role.Jungle.STR", "Role.Carry.STR", "Active", "Category.Offensive", "Role"],
    tier: 3,
    totalCost: 2900
},  {
    active: !0,
    icon: "/src/assets/icons/PhantomShell.webp",
    internalName: "PhantomShell",
    name: "Phantom Shell",
    passive: "Active: Shield yourself and allies within 5.6m for 80 Health + 15 per level for 4 seconds. Gods take 20% + 1% per level reduced damage from basic attacks and pass through players and player-made walls for the duration.  Cooldown: 160s.",
    relic: !0,
    tags: ["ItemTier.Tier3", "Category.Tier3", "Active", "Category.Relic"],
    tier: 3,
    totalCost: 0
}, {
    active: !0,
    buildsFromT1: ["Bow", "Rune", "Shield"],
    components: ["EngravedGuard", "HuntersBow"],
    effects: [{
        duration: "HasDuration",
        durationTime: 6,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Debuff",
        mods: [{
            attrName: "AttackSpeed",
            calcType: "ScalableFloat",
            floatValue: -25,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }, {
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.CC.Soft.Slow",
        mods: [{
            attrName: "BaseMovementSpeedModifierPercent",
            calcType: "ScalableFloat",
            floatValue: 25,
            modType: "Additive"
        }],
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/PharaohsCurse.webp",
    internalName: "PharaohsCurse",
    name: "Pharaoh's Curse",
    passive: "Active: Enemies within 5.6m are affected by a 25% Slow and have 25% reduced Attack Speed for 6s. Cooldown: 40s.",
    stats: {
        "Attack Speed": 15,
        "Magical Protection": 40,
        "Physical Protection": 40
    },
    stepCost: 750,
    tags: ["Category.Tier3", "PhysicalProtection", "Active", "ItemTier.Tier3", "Role.Support", "Role.Solo.STR", "Role.Solo.INT", "AttackSpeed", "Category.Defensive", "MagicalProtection"],
    tier: 3,
    totalCost: 2300
}, {
    active: !0,
    buildsFromT1: ["Medallion", "Rune", "Rune"],
    components: ["MedalOfDisruption", "Zisurru"],
    icon: "/src/assets/icons/PhoenixAmulet.webp",
    internalName: "PhoenixAmulet",
    name: "Phoenix Feather",
    passive: "Active: You are Healed for 300 HP + 30% of your Missing HP. Cooldown: 240s.",
    stats: {
        Health: 275,
        "Magical Protection": 65
    },
    stepCost: 800,
    tags: ["Health", "Category.Tier3", "Active", "MagicalProtection", "ItemTier.Tier3", "Role.Support", "Role.Solo.STR", "Role.Solo.INT", "Category.Defensive"],
    tier: 3,
    totalCost: 2400
}, {
    buildsFromT1: ["Circlet", "Gem", "Gem"],
    components: ["KillingStone", "OracleStaff"],
    icon: "/src/assets/icons/Polynomicon.webp",
    internalName: "Polynomicon",
    name: "Polynomicon",
    passive: "Passive: When you use an ability you gain 65% of your Intelligence as bonus Magical Damage on your next basic attack.",
    stats: {
        Intelligence: 80,
        Mana: 200,
        "Mana Regen": 3
    },
    stepCost: 500,
    tags: ["Category.Tier3", "Intelligence", "ManaRegen", "Passive", "Mana", "ItemTier.Tier3", "Role.Mid.INT", "Role.Jungle.INT", "Category.Offensive", "Role.Carry.Hybrid"],
    tier: 3,
    totalCost: 2450
}, {
    buildsFromT1: ["Rune", "Shield"],
    components: ["EngravedGuard"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !0,
        key: "Items.PropheticCloak.EvolvedProts",
        mods: [{
            attrName: "MagicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 15,
            modType: "Additive"
        }, {
            attrName: "PhysicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 15,
            modType: "Additive"
        }]
    }, {
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Items.PropheticCloak.MagicalProtCount",
        mods: [{
            attrName: "MagicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 1,
            modType: "Additive"
        }],
        stackLimit: 15,
        stackType: "AggregateByTarget"
    }, {
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Items.PropheticCloak.PhysicalProtCount",
        mods: [{
            attrName: "PhysicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 1,
            modType: "Additive"
        }],
        stackLimit: 15,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/PropheticCloak.webp",
    internalName: "PropheticCloak",
    name: "Prophetic Cloak",
    passive: `Passive: Once every 8s, when you damage an enemy god, you gain a stack of 1 Protections that corresponds to the type of damage that god deals. \r
\r
Once you have reached 15 stacks of both Protections, this item Evolves, giving you additional 15 Protections and 6% Damage Mitigation, or 12% Damage Mitigation if your total Protection exceeds 350.`,
    stats: {
        Health: 150,
        "Magical Protection": 30,
        "Physical Protection": 30
    },
    stepCost: 1600,
    tags: ["Category.Tier3", "Passive", "ItemTier.Tier3", "Role.Support", "PhysicalProtection", "MagicalProtection", "Health", "Category.Defensive", "Role.Solo.STR"],
    tier: 3,
    totalCost: 2400
}, {
    active: !0,
    icon: "/src/assets/icons/PurificationBeads.webp",
    internalName: "PurificationBeads",
    name: "Purification Beads",
    passive: "Active: You become CC Immune for 2s. Cooldown: 180s.",
    relic: !0,
    tags: ["ItemTier.Tier3", "Category.Tier3", "Active", "Category.Relic"],
    tier: 3,
    totalCost: 0
}, {
    buildsFromT1: ["Axe", "Bow", "Bow"],
    components: ["HuntersBow", "ManchuBow"],
    icon: "/src/assets/icons/QinsBlade.webp",
    internalName: "QinsBlade",
    name: "Qin's Blade",
    passive: "Passive: Your basic attacks deal bonus Physical Damage to gods equal to 4% of their Max HP.",
    stats: {
        "Attack Speed": 25,
        Strength: 30
    },
    stepCost: 1e3,
    tags: ["Category.Tier3", "AttackSpeed", "Strength", "Passive", "ItemTier.Tier3", "Role.Carry.Hybrid", "Role.Carry.STR", "Category.Offensive", "Role.Jungle.STR"],
    tier: 3,
    totalCost: 2700
}, {
    buildsFromT1: ["RuinousPoison", "Rune", "Shield"],
    components: ["EngravedGuard", "RuinousVenom"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Debuff",
        mods: [{
            attrName: "HealingTakenPercentModifierItem",
            calcType: "ScalableFloat",
            floatValue: -40,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/RuinousAnkh.webp",
    internalName: "RuinousAnkh",
    name: "Ruinous Ankh",
    passive: "Passive: Enemies within 8.8m have 40% reduced healing.",
    stats: {
        Health: 150,
        "Magical Protection": 30,
        "Physical Protection": 30
    },
    stepCost: 700,
    tags: ["Health", "Category.Tier3", "MagicalProtection", "PhysicalProtection", "HealingReduction", "Passive", "ItemTier.Tier3", "Role.Support", "Role.Solo.STR", "Role.Solo.INT", "Category.Defensive"],
    tier: 3,
    totalCost: 2100
}, {
    active: !0,
    buildsFromT1: ["Circlet", "Gem", "Medallion"],
    components: ["FlamingPearl", "ManaTome"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Debuff",
        mods: [{
            attrName: "HealingTakenPercentModifier",
            calcType: "ScalableFloat",
            floatValue: 0,
            modType: "Override"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/ScepterOfDominion.webp",
    internalName: "ScepterOfDominion",
    name: "Scepter of Dominion",
    passive: "Active: After 2s an area is created causing any gods that enter into it or are already within it to become affected by Stasis. Lasts for 2s. Cooldown: 90s.",
    stats: {
        Health: 200,
        Intelligence: 30,
        Mana: 300,
        "Mana Regen": 3
    },
    stepCost: 1250,
    tags: ["Category.Tier3", "Intelligence", "Active", "ItemTier.Tier3", "Mana", "Role.Mid.INT", "Role.Jungle.INT", "Role.Solo.INT", "ManaRegen", "Category.Offensive", "Health"],
    tier: 3,
    totalCost: 2700
}, {
    active: !0,
    buildsFromT1: ["Ring", "Rune", "Rune"],
    components: ["SagesRing", "Zisurru"],
    icon: "/src/assets/icons/ScreechingGargoyle.webp",
    internalName: "ScreechingGargoyle",
    name: "Screeching Gargoyle",
    passive: "Active: Enemy gods in front of you are Silenced for 2s. Cooldown: 90s.",
    stats: {
        "Cooldown Rate": 20,
        "Magical Protection": 50
    },
    stepCost: 850,
    tags: ["Active", "Category.Tier3", "MagicalProtection", "CooldownReduction", "Role.Support", "Role.Solo.STR", "Role.Solo.INT", "Category.Defensive"],
    tier: 3,
    totalCost: 2400
}, {
    buildsFromT1: ["Axe", "Scythe"],
    components: ["CursedSickle", "LucerneHammer"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Items.SerratedEdge.Buff",
        mods: [{
            attrName: "PhysicalPowerItem",
            calcType: "ScalableFloat",
            floatValue: 7,
            modType: "Additive"
        }, {
            attrName: "LifeStealPercentItem",
            calcType: "ScalableFloat",
            floatValue: 3,
            modType: "Additive"
        }],
        stackLimit: 3,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/SerratedEdge.webp",
    internalName: "SerratedEdge",
    name: "Serrated Edge",
    passive: "Passive: For every non-ultimate ability on cooldown you gain a stack of Cruelty. Each stack provides 10 Strength and 3% Lifesteal.",
    stats: {
        Lifesteal: 15,
        
        Strength: 40
    },
    stepCost: 450,
    tags: ["Category.Tier3", "Passive", "ItemTier.Tier3", "Role.Jungle.STR", "Strength", "LifeSteal", "Penetration", "Category.Offensive", "Role.Carry.STR", "Role.Mid.STR"],
    tier: 3,
    totalCost: 2500
}, {
    buildsFromT1: ["Medallion", "Ring", "Shield"],
    components: ["AdroitRing", "MedalOfDefense"],
    effects: [{
        isBaseStats: !1,
        isEvolvedItem: !1,
        mods: [{
            attrBaseCoValue: .02,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "Mana",
            backingAttr: "MaxMana",
            calcType: "AttributeBased",
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/ShieldOfThePhoenix.webp",
    internalName: "ShieldOfThePhoenix",
    name: "Shield of the Phoenix",
    passive: "Passive:  Anytime you hit an Enemy god with an ability you are healed for 2% of your maximum Health and Mana. This can only trigger once per ability.",
    stats: {
        "Cooldown Rate": 15,
        Health: 200,
        "Physical Protection": 25
    },
    stepCost: 900,
    tags: ["Category.Tier3", "Passive", "Health", "CooldownReduction", "ItemTier.Tier3", "Role.Solo.STR", "PhysicalProtection", "Category.Defensive", "Role.Solo.INT"],
    tier: 3,
    totalCost: 2400
},{
    buildsFromT1: ["Circlet", "Medallion", "Rune", "Shield"],
    components: ["EngravedGuard", "Odigba"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "PhysicalPowerItem",
            calcType: "ScalableFloat",
            floatValue: 30,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }, {
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "PhysicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 20,
            modType: "Additive"
        }, {
            attrName: "MagicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 20,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/ShiftersShieldV2.webp",
    internalName: "ShiftersShieldV2",
    name: "Shifter's Shield",
    passive: "PASSIVE: While over 75% Health, you gain 30 Strength. While under 75% Health, you gain 20 Protections. [INT and STR added automatically here]",
    stats: {
        Health: 150,
        "Magical Protection": 20,
        Strength: 30,
        Intelligence: 40,
        Mana: 200,
        "Physical Protection": 20
    },
    stepCost: 1050,
    tags: ["Passive", "Category.Tier3", "ItemTier.Tier3", "Health", "MagicalProtection", "PhysicalProtection", "Mana", "Strength", "Category.Hybrid", "Role.Solo.STR"],
    tier: 3,
    totalCost: 2650
}, {
    buildsFromT1: ["Bow", "Medallion", "Rune"],
    components: ["HuntersBow", "MedalOfDisruption"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "AttackSpeed",
            calcType: "ScalableFloat",
            floatValue: 20,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/ShogunsOfuda.webp",
    internalName: "ShogunsOfuda",
    name: "Shogun's Ofuda",
    passive: "Passive: You and allies within 8.8m gain 20% Attack Speed.",
    stats: {
        "Attack Speed": 15,
        Health: 200,
        "Magical Protection": 35
    },
    stepCost: 1100,
    tags: ["Category.Tier3", "MagicalProtection", "AttackSpeed", "Passive", "ItemTier.Tier3", "Role.Support", "Role.Solo.STR", "Role.Solo.INT", "Category.Defensive", "Health"],
    tier: 3,
    totalCost: 2700
}, {
    buildsFromT1: ["Gem", "Ring", "Scythe"],
    components: ["CursedSickle", "RingOfDispel"],
    icon: "/src/assets/icons/SoulGem.webp",
    internalName: "SoulGem",
    name: "Soul Gem",
    passive: "Passive: On successful hit of an Ability you gain 1 stack. At 3 Stacks your next Ability that damages an enemy God will deal bonus damage equal to 30% of your Intelligence to each God hit, and will heal yourself and allies within 3.2m for 15 +5 Per Level and will consume the 3 stacks.",
    stats: {
        "Cooldown Rate": 15,
        Intelligence: 75,
        Lifesteal: 15
    },
    stepCost: 450,
    tags: ["Passive", "Role.Mid.INT", "Role.Jungle.INT", "ItemTier.Tier3", "Category.Tier3", "Intelligence", "LifeSteal", "Category.Offensive", "CooldownReduction"],
    tier: 3,
    totalCost: 2500
}, {
    buildsFromT1: ["Circlet", "Gem"],
    components: ["OracleStaff", "VoidShard"],
    icon: "/src/assets/icons/SoulDevourer.webp",
    internalName: "SoulDevourer",
    name: "Soul Reaver",
    passive: "Passive: Enemy gods hit by your abilities take 10% of their Current HP as bonus Magical Damage over 2s. This effect will always deal at least 2.5% of the god's Max HP over time and only triggers once per ability per god.",
    stats: {
        Intelligence: 50,
        Mana: 300,
        "Mana Regen": 4,
        
    },
    stepCost: 1200,
    tags: ["Category.Tier3", "Intelligence", "Mana", "Passive", "ManaRegen", "ItemTier.Tier3", "Role.Mid.INT", "Role.Jungle.INT", "Penetration", "Category.Offensive"],
    tier: 3,
    totalCost: 3000
}, {
    buildsFromT1: ["Gem", "Gem"],
    components: ["EvilEye", "KillingStone"],
    icon: "/src/assets/icons/SpeareOfDesolation.webp",
    internalName: "SpeareOfDesolation",
    name: "Spear of Desolation",
    passive: "Passive: When you get a Kill or Assist on an enemy god your Non-ultimate Cooldowns are reduced by 2s and your Ultimate Cooldown is reduced by 6s.",
    stats: {
        Intelligence: 90,
        Penetration: 5
    },
    stepCost: 450,
    tags: ["Category.Tier3", "CooldownReduction", "Passive", "ItemTier.Tier3", "Role.Mid.INT", "Role.Jungle.INT", "Penetration", "Category.Offensive", "Intelligence", "Role.Carry.Hybrid"],
    tier: 3,
    totalCost: 2450
}, {
    buildsFromT1: ["Medallion", "Shield", "Shield"],
    components: ["LegionnaireArmor", "MedalOfDefense"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Debuff",
        mods: [{
            attrName: "AttackSpeed",
            calcType: "ScalableFloat",
            floatValue: -20,
            modType: "Additive"
        }, {
            attrName: "AttackSpeed",
            calcType: "CustomCalculationClass",
            modType: "Additive"
        }, {
            attrName: "CritChancePercent",
            calcType: "ScalableFloat",
            floatValue: -20,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/SilkenMailcoat.webp",
    internalName: "SilkenMailcoat",
    name: "Spectral Armor",
    passive: "Passive: Enemies within 8.8m lose 20% Attack Speed and 20% Critical Strike Chance.",
    stats: {
        Health: 200,
        "Physical Protection": 60
    },
    stepCost: 700,
    tags: ["PhysicalProtection", "Category.Tier3", "Passive", "ItemTier.Tier3", "Role.Support", "Role.Solo.STR", "Role.Solo.INT", "Category.Defensive", "Health"],
    tier: 3,
    totalCost: 2300
}, {
    buildsFromT1: ["Gem", "Rune"],
    components: ["KillingStone", "Zisurru"],
    icon: "/src/assets/icons/SphereOfNegation.webp",
    internalName: "SphereOfNegation",
    name: "Sphere of Negation",
    passive: "",
    stats: {
        Intelligence: 70,
        "Magical Protection": 40
    },
    stepCost: 600,
    tags: ["Category.Tier3", "Passive", "ItemTier.Tier3", "Intelligence", "MagicalProtection", "Role.Solo.INT", "Category.Hybrid", "Role"],
    tier: 3,
    totalCost: 2350
}, {
    buildsFromT1: ["Rune", "Shield"],
    components: ["LegionnaireArmor", "Zisurru"],
    effects: [{
        duration: "HasDuration",
        durationTime: 6,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "MagicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 40,
            modType: "Additive"
        }, {
            attrName: "PhysicalProtectionItem",
            calcType: "ScalableFloat",
            floatValue: 40,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/SpiritRobe.webp",
    internalName: "SpiritRobe",
    name: "Spirit Robe",
    passive: "Passive: When you are hit by a Hard CC effect you gain 40 Physical Protection and 40 Magical Protection for 4s.",
    stats: {
        "Magical Protection": 30,
        "Physical Protection": 30
    },
    stepCost: 1150,
    tags: ["Passive", "Category.Tier3", "ItemTier.Tier3", "Role.Support", "PhysicalProtection", "MagicalProtection", "Category.Defensive", "Role.Solo.INT", "Role.Solo.STR"],
    tier: 3,
    totalCost: 2650
}, {
    active: !0,
    buildsFromT1: ["Gem", "Gem", "Ring"],
    components: ["KillingStone", "RingOfDispel"],
    icon: "/src/assets/icons/StaffOfMyrddin.webp",
    internalName: "StaffOfMyrddin",
    name: "Staff of Myrddin",
    passive: "Active: Your next non-Ultimate Ability used will have no cooldown. Cooldown: 180s.",
    stats: {
        "Cooldown Rate": 15,
        Intelligence: 80
    },
    stepCost: 1e3,
    tags: ["Category.Tier3", "ItemTier.Tier3", "Intelligence", "CooldownReduction", "Role.Jungle.INT", "Role.Mid.INT", "Role.Solo.INT", "Active", "Category.Offensive"],
    tier: 3,
    totalCost: 2950
}, {
    active: !0,
    buildsFromT1: ["Medallion", "Shield"],
    components: ["LegionnaireArmor", "OlmecBlue"],
    effects: [{
        duration: "HasDuration",
        durationTime: 4,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "BaseMovementSpeedModifierPercent",
            calcType: "ScalableFloat",
            floatValue: 30,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/Stampede.webp",
    internalName: "Stampede",
    name: "Stampede",
    passive: "Active: You and allied gods within 6.4m gain 30% Movement Speed for 4s. Cooldown: 60s.",
    stats: {
        Health: 200,
        "Health Regen": 5,
        "Physical Protection": 55
    },
    stepCost: 1100,
    tags: ["Health", "Category.Tier3", "PhysicalProtection", "Active", "ItemTier.Tier3", "Role.Support", "Role.Solo.STR", "Role.Solo.INT", "HealthRegen", "Category.Defensive"],
    tier: 3,
    totalCost: 2550
}, {
    active: !0,
    buildsFromT1: ["Axe", "Bow", "Circlet"],
    components: ["ManaTome", "ManchuBow"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Items.SunBeamBow.Active,Status.Buff",
        mods: [{
            attrBaseCoValue: -.05,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "Mana",
            backingAttr: "MaxMana",
            calcType: "AttributeBased",
            modType: "Additive"
        }]
    }],
    icon: "/src/assets/icons/SunBeamBow.webp",
    internalName: "SunBeamBow",
    name: "Sun Beam Bow",
    passive: "Active: Toggle to fire 2 ranged projectiles with each of your basic attacks. These travel 8.8m and deal 20 + 20% of your basic attack damage as magical damage. Item drains 5% max mana per second while active. ",
    stats: {
        "Attack Speed": 25,
        Mana: 250,
        "Mana Regen": 3,
        Strength: 25
    },
    stepCost: 950,
    tags: ["AttackSpeed", "Category.Tier3", "Strength", "ItemTier.Tier3", "Role.Carry.Hybrid", "Role.Carry.STR", "Role.Mid.STR", "Mana", "ManaRegen", "Category.Offensive", "Role", "Active"],
    tier: 3,
    totalCost: 2400
}, {
    active: !0,
    buildsFromT1: ["Medallion", "Ring", "Rune"],
    components: ["AdroitRing", "MedalOfDisruption"],
    icon: "/src/assets/icons/TalismanOfPurification.webp",
    internalName: "TalismanOfPurification",
    name: "Talisman of Purification",
    passive: "Active: You and allied gods within 6.4m are Cleansed of all CC and gain CC Immunity for 1s. Cooldown: 180s.",
    stats: {
        "Cooldown Rate": 20,
        Health: 200,
        "Magical Protection": 45
    },
    stepCost: 1e3,
    tags: ["Health", "Category.Tier3", "MagicalProtection", "Active", "ItemTier.Tier3", "Role.Support", "CooldownReduction", "Category.Defensive"],
    tier: 3,
    totalCost: 2500
}, {
    buildsFromT1: ["Axe", "Ring"],
    components: ["Caestus"],
    effects: [{
        duration: "HasDuration",
        durationTime: 10,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "BaseMovementSpeedModifierPercent",
            calcType: "ScalableFloat",
            floatValue: 3,
            modType: "Additive"
        }, {
            attrName: "BaseMovementSpeedModifierPercent",
            calcType: "CustomCalculationClass",
            modType: "Additive"
        }, {
            attrName: "MovementSpeedDiminishingReturnPercent",
            calcType: "CustomCalculationClass",
            modType: "Additive"
        }, {
            attrName: "CooldownRateItem",
            calcType: "ScalableFloat",
            floatValue: 5,
            modType: "Additive"
        }],
        stackLimit: 3,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/TekkoKagi.webp",
    internalName: "TekkoKagi",
    name: "Tekko-Kagi",
    passive: "Passive: When you use an ability you gain 3% Movement Speed and 5 Cooldown Rate for 10s. Stacks up to 3 times.",
    stats: {
        "Cooldown Rate": 15,
        Strength: 30
    },
    stepCost: 1700,
    tags: ["Category.Tier3", "MovementSpeed", "Passive", "CooldownReduction", "Strength", "ItemTier.Tier3", "Role.Jungle.STR", "Role.Mid.STR", "Category.Offensive", "Role.Solo.STR"],
    tier: 3,
    totalCost: 2700
}, {
    buildsFromT1: ["Circlet", "Gem", "Ring"],
    components: ["AdroitRing", "OracleStaff"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "CooldownRateItem",
            calcType: "ScalableFloat",
            floatValue: 10,
            modType: "Additive"
        }]
    }],
    icon: "/src/assets/icons/StaffOfCosmicHorror.webp",
    internalName: "StaffOfCosmicHorror",
    name: "The Cosmic Horror",
    passive: "Passive: If you have more than 300 Item Intelligence you gain 10 Cooldown Rate.",
    stats: {
        "Cooldown Rate": 15,
        Intelligence: 85,
        Mana: 150,
        "Mana Regen": 2
    },
    stepCost: 1050,
    tags: ["Intelligence", "Category.Tier3", "ManaRegen", "Passive", "Mana", "ItemTier.Tier3", "CooldownReduction", "Role.Mid.INT", "Category.Offensive"],
    tier: 3,
    totalCost: 2650
}, {
    buildsFromT1: ["Axe", "Ring"],
    components: ["Caestus", "VoidShard"],
    icon: "/src/assets/icons/TheCrusher.webp",
    internalName: "TheCrusher",
    name: "The Crusher",
    passive: "Passive: Enemies hit by your damaging Abilities take bonus damage equal to an additional 30% of your Strength over 1s. Subsequent hits on the same target do half the bonus damage for the next 3s.",
    stats: {
        "Cooldown Rate": 15,
        Penetration: 10,
        Strength: 30
    },
    stepCost: 1150,
    tags: ["Category.Tier3", "Passive", "ItemTier.Tier3", "Role.Carry.STR", "Strength", "Penetration", "CooldownReduction", "Category.Offensive", "Role.Jungle.STR", "Role.Mid.STR"],
    tier: 3,
    totalCost: 2900
}, {
    buildsFromT1: ["Axe", "Bow"],
    components: ["HuntersBow", "LucerneHammer"],
    effects: [{
        duration: "HasDuration",
        durationTime: 4,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "PhysicalPenetrationPercentItem",
            calcType: "ScalableFloat",
            floatValue: 10,
            modType: "Additive"
        }, {
            attrName: "MagicalPenetrationPercentItem",
            calcType: "ScalableFloat",
            floatValue: 10,
            modType: "Additive"
        }],
        stackLimit: 3,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/TheExecutioner.webp",
    internalName: "TheExecutioner",
    name: "The Executioner",
    passive: "Passive: When you damage an enemy god or jungle boss with a basic attack, gain the Piercing effect, granting you 10% Penetration for 4s. Stacks up to 3 times.",
    stats: {
        "Attack Speed": 20,
        Strength: 30
    },
    stepCost: 950,
    tags: ["Category.Tier3", "Strength", "AttackSpeed", "Passive", "ItemTier.Tier3", "Role.Carry.Hybrid", "Role.Carry.STR", "Penetration", "Category.Offensive", "Role.Jungle.STR"],
    tier: 3,
    totalCost: 2650
}, {
    buildsFromT1: ["Axe", "Scythe", "Scythe"],
    components: ["AdamantineSickle", "CursedSickle"],
    effects: [{
        duration: "HasDuration",
        durationTime: 4,
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "LifeStealPercentItem",
            calcType: "SetByCaller",
            modType: "Additive"
        }, {
            attrName: "PhysicalPowerBase",
            calcType: "SetByCaller",
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }],
    icon: "/src/assets/icons/TheReaper.webp",
    internalName: "TheReaper",
    name: "The Reaper",
    passive: "Passive: When you hit an enemy god below 30% HP, you gain 10 Strength and 5% Lifesteal for 4s. Killing a god provides a stack, increasing the HP Threshold by 10% and an additional 10 Strength and 5% Lifesteal when triggered. Stacks up to 3 times. [Added here at full stacks]",
    stats: {
        Lifesteal: 25,
        Strength: 70
    },
    stepCost: 450,
    tags: ["LifeSteal", "Strength", "Category.Tier3", "Passive", "ItemTier.Tier3", "Role.Carry.STR", "Role.Jungle.STR", "Role.Mid.STR", "Role.Carry.Hybrid", "Category.Offensive"],
    tier: 3,
    totalCost: 2650
}, {
    buildsFromT1: ["Circlet", "Gem", "Gem", "Ring"],
    components: ["OracleStaff", "RingOfDispel"],
    icon: "/src/assets/icons/TheWorldStone.webp",
    internalName: "TheWorldStone",
    name: "The World Stone",
    passive: "Passive: Your Ultimate Cooldown is reduced by 20%.",
    stats: {
        "Cooldown Rate": 15,
        Intelligence: 75,
        Mana: 150,
        "Mana Regen": 2
    },
    stepCost: 900,
    tags: ["Category.Tier3", "Intelligence", "ItemTier.Tier3", "Passive", "CooldownReduction", "Role.Mid.INT", "Category.Offensive", "Role"],
    tier: 3,
    totalCost: 2800
}, {
    buildsFromT1: ["Axe"],
    components: ["LucerneHammer", "VoidShard"],
    icon: "/src/assets/icons/SerpentSpear.webp",
    internalName: "SerpentSpear",
    name: "Titan's Bane",
    passive: "",
    stats: {
        Penetration: 20,
        Strength: 40
    },
    stepCost: 750,
    tags: ["Category.Tier3", "Strength", "Passive", "ItemTier.Tier3", "Role.Carry.STR", "Role.Mid.STR", "Role.Jungle.STR", "Penetration", "Category.Offensive"],
    tier: 3,
    totalCost: 2450
}, {
    buildsFromT1: ["Gem", "Ring"],
    components: ["AdroitRing", "EvilEye"],
    icon: "/src/assets/icons/TotemOfDeath.webp",
    internalName: "TotemOfDeath",
    name: "Totem of Death",
    passive: "Passive: When you hit an enemy god or jungle boss with an ability, gain the Piercing effect, granting you 7.5% Penetration for 4s. Stacks up to 4 times.",
    stats: {
        "Cooldown Rate": 15,
        Intelligence: 40,
        
    },
    stepCost: 1050,
    tags: ["Category.Tier3", "Intelligence", "Passive", "CooldownReduction", "ItemTier.Tier3", "Role.Jungle.INT", "Role.Mid.INT", "Penetration", "Category.Offensive", "Role.Carry.Hybrid"],
    tier: 3,
    totalCost: 2800
}, {
    buildsFromT1: ["Axe", "Circlet", "Circlet"],
    components: ["InfusedAxe", "ManaTome"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        mods: [{
            attrName: "MaxManaItem",
            calcType: "ScalableFloat",
            floatValue: 7,
            modType: "Additive"
        }],
        stackLimit: 50,
        stackType: "AggregateBySource"
    }, {
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Items.Transcendence.BonusPower",
        mods: [{
            attrBaseCoValue: .02,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "PhysicalPowerItem",
            backingAttr: "MaxManaItem",
            calcType: "AttributeBased",
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateBySource"
    }, {
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !0,
        mods: [{
            attrName: "PhysicalPenetrationFlatItem",
            calcType: "ScalableFloat",
            floatValue: 10,
            modType: "Additive"
        }, {
            attrName: "MagicalPenetrationFlatItem",
            calcType: "ScalableFloat",
            floatValue: 10,
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/Transcendence.webp",
    internalName: "Transcendence",
    name: "Evolved Transcendence",
    passive: "Passive: You permanently gain 7 Mana per Stack, and receive 1 Stack per 800 Damage Dealt to minions and Jungle Monsters, with damage to Gods counting double. You gain Strength equal to 2% of your Mana from items. At 50 stacks this item Evolves, gaining 10 Penetration.",
    stats: {
        Mana: 900,
        "Mana Regen": 4,
        Strength: 25,
		"Flat Penetration":10

    },
    stepCost: 850,
    tags: ["Category.Tier3", "ItemTier.Tier3", "Passive", "Mana", "ManaRegen", "Role.Jungle.STR", "Strength", "Penetration", "Category.Offensive", "Role.Carry.STR", "Role.Solo.STR", "Role.Mid.STR"],
    tier: 3,
    totalCost: 2400
}, {
    buildsFromT1: ["Axe", "Gem", "Medallion"],
    components: ["VeveCharm", "Zither"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Buff",
        mods: [{
            attrName: "MagicalPowerItem",
            calcType: "ScalableFloat",
            floatValue: 10,
            modType: "Additive"
        }, {
            attrName: "PhysicalPowerItem",
            calcType: "ScalableFloat",
            floatValue: 7,
            modType: "Additive"
        }, {
            attrBaseCoValue: .5,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "PhysicalPowerItem",
            backingAttr: "Level",
            calcType: "AttributeBased",
            modType: "Additive"
        }, {
            attrBaseCoValue: 1,
            attrBasePostMultValue: 0,
            attrBasePreMultValue: 0,
            attrName: "MagicalPowerItem",
            backingAttr: "Level",
            calcType: "AttributeBased",
            modType: "Additive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/TritonsConch.webp",
    internalName: "TritonsConch",
    name: "Triton's Conch",
    passive: "Passive: You and allies within 8.8m gain 7 + 0.5 * Level Strength and 10 + 1 * Level Intelligence.",
    stats: {
        Health: 300,
        Intelligence: 45,
        Strength: 15
    },
    stepCost: 900,
    tags: ["Category.Tier3", "Intelligence", "Strength", "Passive", "ItemTier.Tier3", "Role.Solo.INT", "Category.Hybrid", "Health"],
    tier: 3,
    totalCost: 2800
}, {
    buildsFromT1: ["Gem", "Scythe"],
    components: ["CursedSickle", "KillingStone"],
    icon: "/src/assets/icons/TyphonsFang.webp",
    internalName: "TyphonsFang",
    name: "Typhon's Fang",
    passive: "",
    stats: {
        Intelligence: 40,
        Lifesteal: 35
    },
    stepCost: 600,
    tags: ["Category.Tier3", "Passive", "ItemTier.Tier3", "LifeSteal", "Role.Mid.INT", "Role.Jungle.INT", "Category.Offensive", "Role.Carry.Hybrid", "Role.Carry.STR", "Intelligence"],
    tier: 3,
    totalCost: 2700
}, {
    buildsFromT1: ["Axe", "Medallion", "Shield"],
    components: ["BattleAxe", "LegionnaireArmor"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Debuff",
        mods: [{
            attrName: "PhysicalProtection",
            calcType: "ScalableFloat",
            floatValue: .9,
            modType: "Multiplicitive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/VoidShield.webp",
    internalName: "VoidShield",
    name: "Void Shield",
    passive: "Passive: Enemies within 8.8m have their Physical Protections reduced by 10%",
    stats: {
        Health: 100,
        "Physical Protection": 45,
        Strength: 20
    },
    stepCost: 950,
    tags: ["Health", "Category.Tier3", "Passive", "ItemTier.Tier3", "Role.Support", "Role.Solo.STR", "Role.Solo.INT", "PhysicalProtection", "Strength", "Category.Hybrid"],
    tier: 3,
    totalCost: 2600
}, {
    buildsFromT1: ["Gem", "Medallion", "Rune"],
    components: ["FlamingPearl", "Zisurru"],
    effects: [{
        duration: "Infinite",
        isBaseStats: !1,
        isEvolvedItem: !1,
        key: "Status.Debuff",
        mods: [{
            attrName: "MagicalProtection",
            calcType: "ScalableFloat",
            floatValue: .9,
            modType: "Multiplicitive"
        }],
        stackLimit: 1,
        stackType: "AggregateByTarget"
    }],
    icon: "/src/assets/icons/VoidStone.webp",
    internalName: "VoidStone",
    name: "Void Stone",
    passive: "Passive: Enemies within 8.8m have their Magical Protections reduced by 10%",
    stats: {
        Health: 150,
        Intelligence: 40,
        "Magical Protection": 45
    },
    stepCost: 950,
    tags: ["Health", "Category.Tier3", "MagicalProtection", "Passive", "ItemTier.Tier3", "Role.Support", "Role.Solo.INT", "Intelligence", "Category.Hybrid"],
    tier: 3,
    totalCost: 2650
}, {
    buildsFromT1: ["Circlet", "Gem", "Medallion", "Medallion"],
    components: ["FlamingPearl", "Odigba"],
    icon: "/src/assets/icons/Wish-GrantingPearl.webp",
    internalName: "Wish-GrantingPearl",
    name: "Wish-Granting Pearl",
    passive: "",
    stats: {
        Health: 250,
        Intelligence: 80,
        Mana: 150
    },
    stepCost: 500,
    tags: ["Health", "Intelligence", "Category.Tier3", "Mana", "Passive", "ItemTier.Tier3", "Role.Solo.INT", "Role.Mid.INT", "Role.Jungle.INT", "Category.Hybrid"],
    tier: 3,
    totalCost: 2250
}, {
    buildsFromT1: ["Circlet", "Medallion"],
    components: ["ManaTome", "OlmecBlue"],
    icon: "/src/assets/icons/YogisNecklace.webp",
    internalName: "YogisNecklace",
    name: "Yogi's Necklace",
    passive: "",
    stats: {
        Health: 400,
        "Health Regen": 14,
        Mana: 300,
        "Mana Regen": 6
    },
    stepCost: 950,
    tags: ["Health", "Category.Tier3", "Mana", "HealthRegen", "ManaRegen", "Passive", "ItemTier.Tier3", "Role.Support", "Role.Solo.STR", "Role.Solo.INT", "Category.Defensive"],
    tier: 3,
    totalCost: 2150
}]
  , S = {
    "Demonic Grip": {
        effects: [{
            duration: "HasDuration",
            durationTime: 4,
            isBaseStats: !1,
            isEvolvedItem: !1,
            key: "Status.Buff",
            mods: [{
                attrName: "PhysicalPenetrationPercentItem",
                calcType: "ScalableFloat",
                floatValue: 10,
                modType: "Additive"
            }, {
                attrName: "MagicalPenetrationPercentItem",
                calcType: "ScalableFloat",
                floatValue: 10,
                modType: "Additive"
            }],
            stackLimit: 3,
            stackType: "AggregateByTarget"
        }]
    },
    "Totem of Death": {
        effects: [{
            duration: "HasDuration",
            durationTime: 4,
            isBaseStats: !1,
            isEvolvedItem: !1,
            key: "Status.Buff",
            mods: [{
                attrName: "PhysicalPenetrationPercentItem",
                calcType: "ScalableFloat",
                floatValue: 10,
                modType: "Additive"
            }, {
                attrName: "MagicalPenetrationPercentItem",
                calcType: "ScalableFloat",
                floatValue: 10,
                modType: "Additive"
            }],
            stackLimit: 3,
            stackType: "AggregateByTarget"
        }]
    },
    "The Reaper": {
        effects: [{
            duration: "HasDuration",
            durationTime: 4,
            isBaseStats: !1,
            isEvolvedItem: !1,
            key: "Status.Buff",
            mods: [{
                attrName: "PhysicalPowerItem",
                calcType: "ScalableFloat",
                floatValue: 10,
                modType: "Additive"
            }, {
                attrName: "LifeStealPercentItem",
                calcType: "ScalableFloat",
                floatValue: 5,
                modType: "Additive"
            }],
            stackLimit: 3,
            stackType: "AggregateBySource"
        }]
    },
    "Prophetic Cloak": {
        effects: [{
            duration: "Infinite",
            isBaseStats: !1,
            isEvolvedItem: !0,
            key: "Items.PropheticCloak.EvolvedProts",
            mods: [{
                attrName: "MagicalProtectionItem",
                calcType: "ScalableFloat",
                floatValue: 15,
                modType: "Additive"
            }, {
                attrName: "PhysicalProtectionItem",
                calcType: "ScalableFloat",
                floatValue: 15,
                modType: "Additive"
            }, {
                attrName: "DamageTakenPercentModifierItem",
                calcType: "ScalableFloat",
                floatValue: -6,
                modType: "Additive"
            }]
        }, {
            duration: "Infinite",
            isBaseStats: !1,
            isEvolvedItem: !1,
            key: "Items.PropheticCloak.MagicalProtCount",
            mods: [{
                attrName: "MagicalProtectionItem",
                calcType: "ScalableFloat",
                floatValue: 1,
                modType: "Additive"
            }],
            stackLimit: 15,
            stackType: "AggregateByTarget"
        }, {
            duration: "Infinite",
            isBaseStats: !1,
            isEvolvedItem: !1,
            key: "Items.PropheticCloak.PhysicalProtCount",
            mods: [{
                attrName: "PhysicalProtectionItem",
                calcType: "ScalableFloat",
                floatValue: 1,
                modType: "Additive"
            }],
            stackLimit: 15,
            stackType: "AggregateByTarget"
        }]
    }
}