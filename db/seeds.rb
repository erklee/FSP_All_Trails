require "open-uri"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    Review.destroy_all
    User.destroy_all
    Trail.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('trails')
    ApplicationRecord.connection.reset_pk_sequence!('reviews')

    puts "Creating users..."
    
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-lition', 
      email: 'demo@user.io', 
      password: 'password'
    )

    users = [
      { email: 'alice@example.com', username: 'alice123', password: 'password1' },
      { email: 'bob@example.com', username: 'bobby456', password: 'password2' },
      { email: 'carol@example.com', username: 'carol789', password: 'password3' },
      { email: 'dave@example.com', username: 'dave123', password: 'password4' },
      { email: 'eve@example.com', username: 'eve456', password: 'password5' },
      { email: 'frank@example.com', username: 'frank789', password: 'password6' },
      { email: 'grace@example.com', username: 'grace123', password: 'password7' },
      { email: 'heidi@example.com', username: 'heidi456', password: 'password8' },
      { email: 'ivan@example.com', username: 'ivan789', password: 'password9' },
      { email: 'judy@example.com', username: 'judy123', password: 'password10' }
    ]
    
    users.each do |user|
      User.create!(
        email: user[:email],
        username: user[:username],
        password: user[:password],
        session_token: SecureRandom.urlsafe_base64
      )
    end

    
    

    hemp = Trail.create!(
      name: 'Hempstead Lake Park',
      description: 'This is a beautiful lake side trail. Mainly dirt paths. Kid,pet,and bike friendly. Please do not grill in areas that are not desinated for grilling. Also, please do not swim in the lake.',
      location: 'West Hempstead',
      difficulty: 'Easy',
      length: 3.2,
      lat: 40.6831,
      lon: -73.6431

    )
    hemp.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/hempsteadstatepark.webp"), filename: "hemp.jpeg")

    bbvm = Trail.create!(
      name: "Brooklyn Bridge Walk via Manhattan",
      location: "New York",
      length: 2.4,
      difficulty: "Easy",
      description: "This is a fun and scenic walk from Manhattan to Brooklyn across one of the country's most famous bridges.",
      lat: 40.71226441275163,
      lon: -74.0046549160047
    )

    bbvm.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/bbwvm.webp"), filename: "bbvm.webpb")

    high_line = Trail.create!(
      name: "High Line Park",
      location: "Manhattan",
      length: 1.2,
      difficulty: "Easy",
      description: "Experience this 1.2-mile point-to-point trail near New York City, New York. Generally considered an easy route, it takes an average of 21 min to complete. This is a very popular area for walking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. You'll need to leave pups at home — dogs aren't allowed on this trail.",
      lat: 40.73929713337491,
      lon: -74.00783388818371
      
    )

    high_line.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/high_line_park.webp"), filename: "highline.webp")

    ppp = Trail.create!(
      name: "Peaks of Prospect Park",
      location: "Brooklyn",
      length: 1.2,
      difficulty: "Moderate",
      description: "Experience this 5.0-mile loop trail near New York City, New York. Generally considered a moderately challenging route, it takes an average of 1 h 49 min to complete. This is a very popular area for birding, hiking, and running, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.",
      lat: 40.672205595910384,
      lon: -73.96948368656399
    )

    ppp.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/ppp.webp"), filename: "ppp.webp" )

    cpew = Trail.create!(
      name: "Central Park East and West Drive Loop",
      location: "Manhattan",
      length: 6.1,
      difficulty: "Easy",
      description: "Explore this 6.1-mile loop trail near New York City, New York. Generally considered an easy route, it takes an average of 2 h 2 min to complete. This is a very popular area for road biking, running, and walking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.",
      lat: 40.76814264388405,
      lon: -73.97874664816426
    )

    cpew.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/cpew.webp"), filename: "cpew.webp")

    swt = Trail.create!(
      name: "Stillwell Woods Trail",
      location: "Woodbury",
      length: 4.3,
      difficulty: "Moderate",
      description: "Explore this 6.1-mile loop trail near New York City, New York. Generally considered an easy route, it takes an average of 2 h 2 min to complete. This is a very popular area for road biking, running, and walking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.",
      lat: 40.83173273517657,
      lon: -73.47738353275581

    )

    swt.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/swt.webp"), filename: "swt.webp")

    bcpspl = Trail.create!(
      name: "Blydenburgh County Park Stump Pond Loop",
      location: "Smithtown",
      length: 6.1,
      difficulty: "Easy",
      description: "Head out on this 6.1-mile loop trail near Hauppauge, New York. Generally considered an easy route, it takes an average of 1 h 55 min to complete. This is a very popular area for birding, fishing, and hiking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome and may be off-leash in some areas.",
      lat: 40.83511140875805,
      lon: -73.2201079044744

    )

    bcpspl.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/bcpspl.webp"), filename: "bcpspl.webp")

    cshppl = Trail.create!(
      name: "Caumsett State Historic Park Perimeter Loop",
      location: "Lloyd Harbor",
      length: 6.1,
      difficulty: "Easy",
      description: "Experience this 5.2-mile loop trail near Huntington, New York. Generally considered an easy route, it takes an average of 1 h 49 min to complete. This is a very popular area for birding, hiking, and mountain biking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. You'll need to leave pups at home — dogs aren't allowed on this trail.",
      lat: 40.91737637239876,
      lon: -73.47303311467569
    )
    
    cshppl.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/cshppl.webp"), filename: "cshppl.webp")

    nstcsh = Trail.create!(
      name: "Nassau-Suffolk Trail: Cold Spring Harbor to Uplands Farm Sanctuary",
      location: "Cold Spring Harbor State Park",
      length: 5.2,
      difficulty: "Moderate",
      description: "Get to know this 5.2-mile out-and-back trail near Cold Spring Harbor, New York. Generally considered a moderately challenging route, it takes an average of 2 h 21 min to complete. This is a very popular area for birding, cross-country skiing, and hiking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime.",
      lat: 40.867298907130255,
      lon: -73.4616047568081

    )
    
    nstcsh.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/nstcsh.webp"), filename: "nstcsh.webp")

    smt = Trail.create!(
      name: "Sunken Meadow Trail",
      location: " Sunken Meadow State Park",
      length: 3.5,
      difficulty: "Moderate",
      description: "Get to know this 3.5-mile loop trail near Kings Park, New York. Generally considered a moderately challenging route, it takes an average of 1 h 24 min to complete. This is a very popular area for hiking and running, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.",
      lat: 40.90962533775173,
      lon: -73.2501396387446

    )
    
    smt.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/smt.webp"), filename: "smt.webp")

    mlt = Trail.create!(
      name: "Massapequa Lake Trail",
      location: " Massapequa Preserve",
      length: 6.3,
      difficulty: "Easy",
      description: "Discover this 6.3-mile out-and-back trail near Massapequa Park, New York. Generally considered an easy route, it takes an average of 1 h 50 min to complete. This is a very popular area for fishing, road biking, and snowshoeing, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. You'll need to leave pups at home — dogs aren't allowed on this trail.",
      lat: 40.700117558495066,
      lon: -73.45235149817732
    )
    
    mlt.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/mlt.webp"), filename: "mlt.webp")

    crspp = Trail.create!(
      name: "Connetquot River State Park Preserve",
      location: "Bohemia County Park ",
      length: 3.0,
      difficulty: "Easy",
      description: "Get to know this 3.0-mile loop trail near Bohemia, New York. Generally considered an easy route, it takes an average of 53 min to complete. This is a very popular area for hiking, horseback riding, and running, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. You'll need to leave pups at home — dogs aren't allowed on this trail.",
      lat: 40.749270413537175,
      lon: -73.15160691961216
    )
    
    crspp.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/crspp.webp"), filename: "csrpp.webp")

    aefp = Trail.create!(
      name: "Avalon/East Farm Preserve",
      location: "Avlon Preserve",
      length: 3.5,
      difficulty: "Easy",
      description: "Head out on this 3.5-mile loop trail near St. James, New York. Generally considered an easy route, it takes an average of 1 h 16 min to complete. This is a very popular area for birding, hiking, and running, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.",
      lat: 40.91157080038437,
      lon: -73.15178395408341
    )
    
    aefp.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/aefp.webp"), filename: "aefp.webp")

    jkorrp = Trail.create!(
      name: "Jacqueline Kennedy Onassis Reservoir Running Path",
      location: "Central Park",
      length: 1.7,
      difficulty: "Easy",
      description: "Explore this 1.7-mile loop trail near New York City, New York. Generally considered an easy route, it takes an average of 31 min to complete. This is a very popular area for birding, running, and walking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. You'll need to leave pups at home — dogs aren't allowed on this trail.",
      lat: 40.78404265022073,
      lon: -73.95919765912642
    )
    
    jkorrp.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/jkorrp.webp"), filename: "jkorrp.webp")

    blt = Trail.create!(
      name: "Belmont Lake Trail",
      location: "Belmont Lake State Park ",
      length: 1.4,
      difficulty: "Easy",
      description: "Discover this 1.4-mile loop trail near North Babylon, New York. Generally considered an easy route, it takes an average of 25 min to complete. This is a very popular area for birding, hiking, and mountain biking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.",
      lat: 40.73905440852043,
      lon: -73.3414714860541
    )
    
    blt.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/blt.webp"), filename: "blt.webp")

    mtp = Trail.create!(
      name: "Muttontown Preserve",
      location: "Muttontown Preserve",
      length: 2.5,
      difficulty: "Easy",
      description: "Explore this 2.5-mile loop trail near East Norwich, New York. Generally considered an easy route, it takes an average of 52 min to complete. This is a very popular area for cross-country skiing, hiking, and running, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. You'll need to leave pups at home — dogs aren't allowed on this trail.",
      lat: 40.83819352457256,
      lon: -73.53525095621858
    )
    
    mtp.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/mtp.webp"), filename: "mtp.webp")

    ksp = Trail.create!(
      name: "Kissena Lake Loop",
      location: "Kissena Park",
      length: 1.4,
      difficulty: "Easy",
      description: "Experience this 1.4-mile loop trail near New York City, New York. Generally considered an easy route, it takes an average of 25 min to complete. This trail is great for birding, hiking, and running, and it's unlikely you'll encounter many other people while exploring. The best times to visit this trail are June through August.",
      lat: 40.74277430885696,
      lon: -73.80743892563025
    )
    
    ksp.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/ksp.webp"), filename: "ksp.webp")

    rr = Trail.create!(
      name: "Ridgewood Reservoir",
      location: "Highland Park",
      length: 2.3,
      difficulty: "Easy",
      description: "Enjoy this 2.3-mile loop trail near New York City, New York. Generally considered an easy route, it takes an average of 42 min to complete. This is a very popular area for hiking, running, and walking, so you'll likely encounter other people while exploring. The best times to visit this trail are May through June. Dogs are welcome, but must be on a leash.",
      lat: 40.68633097326282,
      lon: -73.88946811947463

    )
    
    rr.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/rr.webp"), filename: "rr.webp")

    bpl = Trail.create!(
      name: "Baisley Pond Loop",
      location: "Baisley Pond Park",
      length: 1.5,
      difficulty: "Easy",
      description: "Explore this 1.5-mile loop trail near New York City, New York. Generally considered an easy route, it takes an average of 26 min to complete. This is a popular trail for birding, road biking, and walking, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are May through June.",
      lat: 40.67637495740642,
      lon: -73.78263371195663

    )
    
    bpl.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/bpl.webp"), filename: "bpl.webp")

    kpl = Trail.create!(
      name: "Kings Point Loop",
      location: "Kings Point Park ",
      length: 1.8,
      difficulty: "Easy",
      description: "Try this 1.8-mile loop trail near Great Neck, New York. Generally considered an easy route, it takes an average of 32 min to complete. This is a popular trail for birding, running, and walking, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are April through May.",
      lat: 40.81016762429327,
      lon: -73.7517578243423


    )
    
    kpl.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/kpl.webp"), filename: "kpl.webp")

    cwpl = Trail.create!(
      name: "Coffin Woods Preserve Loop",
      location: "Coffin Woods Preserve",
      length: 1.5,
      difficulty: "Easy",
      description: "Get to know this 1.5-mile loop trail near Locust Valley, New York. Generally considered an easy route, it takes an average of 34 min to complete. This is a popular trail for hiking, running, and walking, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are June through July. Dogs are welcome and may be off-leash in some areas.",
      lat: 40.87780764486706,
      lon: -73.58310337727235

    )
    
    cwpl.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/cwpl.webp"), filename: "cwpl.webp")

    spplt = Trail.create!(
      name: "Sands Point Preserve Loop Trail",
      location: "Sands Point Park And Preserve",
      length: 1.9,
      difficulty: "Easy",
      description: "Explore this 1.9-mile loop trail near Port Washington, New York. Generally considered an easy route, it takes an average of 42 min to complete. This is a popular trail for birding, fishing, and hiking, but you can still enjoy some solitude during quieter times of day. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.",
      lat: 40.86149208665882,
      lon: -73.69802366770053

    )
    
    spplt.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/spplt.webp"), filename: "spplt.webp")

    cmpt = Trail.create!(
      name: "Christopher Morley Park Trail",
      location: "Roslyn Heights",
      length: 0.9,
      difficulty: "Easy",
      description: "Discover this 0.9-mile loop trail near Roslyn Heights, New York. Generally considered an easy route, it takes an average of 20 min to complete. This trail is great for walking, and it's unlikely you'll encounter many other people while exploring. The best times to visit this trail are May through June.",
      lat: 40.78534470841277,
      lon: -73.66276465086119


    )
    
    cmpt.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/cmpt.webp"), filename: "cmpt.webp")

    owg = Trail.create!(
      name: "Old Westbury Gardens",
      location: "Old Westbury",
      length: 1.0,
      difficulty: "Easy",
      description: "Experience this 1.0-mile loop trail near Old Westbury, New York. Generally considered an easy route, it takes an average of 21 min to complete. This is a popular trail for walking, but you can still enjoy some solitude during quieter times of day. The trail is open year-round and is beautiful to visit anytime. You'll need to leave pups at home — dogs aren't allowed on this trail.",
      lat: 40.775280991219354,
      lon: -73.59632005702863


    )
    
    owg.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/owg.webp"), filename: "owg.webp")

    appl = Trail.create!(
      name: "Alley Pond Park Loop",
      location: "Alley Park",
      length: 3.2,
      difficulty: "Moderate",
      description: "Enjoy this 3.2-mile loop trail near New York City, New York. Generally considered a moderately challenging route, it takes an average of 1 h 8 min to complete. This is a very popular area for hiking, running, and walking, so you'll likely encounter other people while exploring. The best times to visit this trail are April through November",
      lat: 40.74231272745608,
      lon: -73.73812598247444



    )
    
    appl.photo.attach(io: URI.open("https://sometrails-seeds.s3.amazonaws.com/FSP_SEED_PIC/appl.webp"), filename: "appl.webp")







    def generate_realistic_review

      trail_experience = ["amazing", "breathtaking", "challenging", "peaceful", "exciting", "refreshing"].sample
      trail_condition = ["well-maintained", "scenic", "wild", "rocky", "lush"].sample
      weather_condition = ["sunny", "cloudy", "windy", "rainy"].sample
      random_thoughts = ["I can't wait to go back!", "Highly recommended!", "A hidden gem!", "A must-visit trail!", "Great for nature lovers!"].sample
    
      "The trail was #{trail_experience}. The trail conditions were #{trail_condition}, and the weather was #{weather_condition}. #{random_thoughts}"
    end
    # Seed data for reviews
    (1..10).each do |user_id|
      (1..25).each do |trail_id|
        (1..2).each do
          Review.create!(
            user_id: user_id,
            trail_id: trail_id,
            review: generate_realistic_review,
            rating: rand(1..5)
          )
        end
      end
    end

    # Trail.create!(
    #   name: "Nassau-Suffolk Trail: Cold Spring Harbor to Uplands Farm Sanctuary",
    #   location: "Cold Spring Harbor",
    #   length: 5.2,
    #   difficulty: "Moderate",
    #   description: "Get to know this 5.2-mile out-and-back trail near Cold Spring Harbor, New York. Generally considered a moderately challenging route, it takes an average of 2 h 21 min to complete. This is a very popular area for birding, cross-country skiing, and hiking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime."

    # )

    # Trail.create!(
    #   name: "Sunken Meadow Trail",
    #   location: "Kings Park",
    #   length: 3.5,
    #   difficulty: "Moderate",
    #   description: "Get to know this 3.5-mile loop trail near Kings Park, New York. Generally considered a moderately challenging route, it takes an average of 1 h 24 min to complete. This is a very popular area for hiking and running, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash."
    # )

    # Trail.create!(
    #   name: "Cold Spring Harbor Trailhead to Lawrence Hill Road",
    #   location: "Cold Spring Harbor",
    #   length: 1.8,
    #   difficulty: "Moderate",
    #   description: "Explore this 1.8-mile out-and-back trail near Cold Spring Harbor, New York. Generally considered a moderately challenging route, it takes an average of 54 min to complete. This is a very popular area for hiking and running, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash."

    # )

    # Trail.create!(
    #   name: "Massapequa Lake Trail",
    #   location: "Massapequa",
    #   length: 6.3,
    #   difficulty: "Easy",
    #   description: "Discover this 6.3-mile out-and-back trail near Massapequa Park, New York. Generally considered an easy route, it takes an average of 1 h 50 min to complete. This is a very popular area for fishing, road biking, and snowshoeing, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. You'll need to leave pups at home — dogs aren't allowed on this trail."

    # )

    # Trail.create!(
    #   name: "Connetquot River State Park Preserve",
    #   location: "Great River",
    #   length: 3.0,
    #   difficulty: "Easy",
    #   description: "Discover this 6.3-mile out-and-back trail near Massapequa Park, New York. Generally considered an easy route, it takes an average of 1 h 50 min to complete. This is a very popular area for fishing, road biking, and snowshoeing, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. You'll need to leave pups at home — dogs aren't allowed on this trail."
    # )

    # Trail.create!(
    #   name: "Connetquot River State Park Preserve",
    #   location: "Great River",
    #   length: 3.0,
    #   difficulty: "Easy",
    #   description: "Discover this 6.3-mile out-and-back trail near Massapequa Park, New York. Generally considered an easy route, it takes an average of 1 h 50 min to complete. This is a very popular area for fishing, road biking, and snowshoeing, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. You'll need to leave pups at home — dogs aren't allowed on this trail."
    # )

    # Trail.create!(
    #   name: "Avalon/East Farm Preserve",
    #   location: "Stony Brook",
    #   length: 3.5,
    #   difficulty: "Easy",
    #   description: "Head out on this 3.5-mile loop trail near St. James, New York. Generally considered an easy route, it takes an average of 1 h 16 min to complete. This is a very popular area for birding, hiking, and running, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash."
    # )

    # Trail.create!(
    #   name: "Belmont Lake Trail",
    #   location: "Babylon",
    #   length: 1.4,
    #   difficulty: "Easy",
    #   description: "Discover this 1.4-mile loop trail near North Babylon, New York. Generally considered an easy route, it takes an average of 25 min to complete. This is a very popular area for birding, hiking, and mountain biking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash."
    # )

    # Trail.create!(
    #   name: "Muttontown Preserve",
    #   location: "Muttontown",
    #   length: 2.5,
    #   difficulty: "Easy",
    #   description: "Explore this 2.5-mile loop trail near East Norwich, New York. Generally considered an easy route, it takes an average of 52 min to complete. This is a very popular area for cross-country skiing, hiking, and running, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. You'll need to leave pups at home — dogs aren't allowed on this trail."
    # )

    # Trail.create!(
    #   name: "Bethpage Bikeway Trail",
    #   location: "Woodbury",
    #   length: 13.2,
    #   difficulty: "Easy",
    #   description: "Head out on this 13.2-mile point-to-point trail near Plainview, New York. Generally considered an easy route, it takes an average of 4 h 8 min to complete. This is a popular trail for road biking, running, and walking, but you can still enjoy some solitude during quieter times of day. The trail is open year-round and is beautiful to visit anytime. You'll need to leave pups at home — dogs aren't allowed on this trail."
    # )

    # Trail.create!(
    #   name: "Norman J. Levy Park and Preserve",
    #   location: "Merrick",
    #   length: 2.2,
    #   difficulty: "Easy",
    #   description: "Explore this 2.2-mile loop trail near Merrick, New York. Generally considered a moderately challenging route, it takes an average of 46 min to complete. This is a very popular area for birding, running, and walking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. You'll need to leave pups at home — dogs aren't allowed on this trail."
    # )

    # 20.times do
    #   user = User.all.sample  # Select a random user
    #   trail = Trail.all.sample  # Select a random trail
    
    #   Review.create!(
    #     user_id: user.id,
    #     trail_id: trail.id,
    #     rating: rand(1..5),  # Random rating between 1 and 5
    #     review: Faker::Lorem.paragraph(sentence_count: rand(2..5))  # Random review text with 2 to 5 sentences
    #   )
    # end

    # More users
    # 10.times do 
    #   User.create!({
    #     username: Faker::Internet.unique.username(specifier: 6),
    #     email: Faker::Internet.unique.email,
    #     password: 'password'
    #   }) 
    # end
  
    puts "Done!"
  # end
  
