@trails.each do |trail|
    json.set! trail.id do 
        json.extract! trail, :id, :name, :description, :location, :difficulty, :length, :lat, :lon
        json.photoUrl trail.photo.attached? ? trail.photo.url : nil
    end
end

