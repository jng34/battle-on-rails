"Seeding users..."
u1 = User.create(name: 'James', profile_img: 'https://media.cdn.adultswim.com/uploads/20210914/219141616186-1910281358343-RAM.jpg', password: 'password')
u2 = User.create(name: 'William', profile_img: 'https://media.cdn.adultswim.com/uploads/20210914/219141616186-1910281358343-RAM.jpg', password: 'password')
u2 = User.create(name: 'Tashi', profile_img: 'https://media.cdn.adultswim.com/uploads/20210914/219141616186-1910281358343-RAM.jpg', password: 'password')
u2 = User.create(name: 'Peter', profile_img: 'https://media.cdn.adultswim.com/uploads/20210914/219141616186-1910281358343-RAM.jpg', password: 'password')
u2 = User.create(name: 'Peter', profile_img: 'https://media.cdn.adultswim.com/uploads/20210914/219141616186-1910281358343-RAM.jpg', password: 'password')
u2 = User.create(name: 'Peter', profile_img: 'https://media.cdn.adultswim.com/uploads/20210914/219141616186-1910281358343-RAM.jpg', password: 'password')
u2 = User.create(name: 'Peter', profile_img: 'https://media.cdn.adultswim.com/uploads/20210914/219141616186-1910281358343-RAM.jpg', password: 'password')
u2 = User.create(name: 'Peter', profile_img: 'https://media.cdn.adultswim.com/uploads/20210914/219141616186-1910281358343-RAM.jpg', password: 'password')


"Seeding items..."
i1 = Item.create(name: "Sword", img_url: "https://freesvg.org/img/Anonymous-katana.png", description:"the sword of King James")
i2 = Item.create(name: "Cap", img_url: "http://cdn.shopify.com/s/files/1/0354/5271/5148/products/20957832_03_1200x630.jpg?v=1643649658", description:"Mark's cap")
i3 = Item.create(name: "Shield", img_url: "https://freesvg.org/img/Chrisdesign_weapon_shield.png", description:"Shield of nonsense")
i4 = Item.create(name: "Laptop", img_url: "https://freesvg.org/img/laptop-personification-work-ready-body-builder.png", description:"Mohammed's laptop, full of code")
i5 = Item.create(name: "Hand Sanitizer", img_url: "https://upload.wikimedia.org/wikipedia/commons/7/71/Purell_Hand_Sanitizer_%2816066200780%29.jpg", description:"Purell")



"Seeding powers..."
Power.create(name: "Poke", str: 1, hp: 2, description: "poking motions", user_id: u1.id, item_id: i4.id)
Power.create(name: "Headbutt", str: 2, hp: 1, description: "head to butt motions", user_id: u2.id, item_id: i1.id)
Power.create(name: "Push", str: 1, hp: 1, description: "Hard shove without you seeing it coming", user_id: u5.id, item_id: i2.id)
Power.create(name: "Slap", str: 1, hp: 1, description: "What did the five fingers say to the face?", user_id: u2.id, item_id: i4.id)
Power.create(name: "Sanitize", str: 0, hp: 1, description: "99.98% effective", user_id: u3.id, item_id: i1.id)
Power.create(name: "Fart", str: 0, hp: 1, description: "Putrid gas attack", user_id: u4.id, item_id: i2.id)
