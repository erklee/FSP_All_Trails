json.trail do
    json.extract! @trail, :id, :name, :description, :location, :difficulty, :length, :lon, :lat
    json.photoUrl @trail.photo.attached? ? @trail.photo.url : nil
end
