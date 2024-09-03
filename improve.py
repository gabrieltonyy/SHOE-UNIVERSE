import os
import shutil
from sklearn.model_selection import train_test_split

# Paths to the dataset directories
dataset_dir = r"C:\Users\ELITEBOOK 84O G4\Desktop\DRAX_PROJECT"
train_dir = os.path.join(dataset_dir, 'train')
test_dir = os.path.join(dataset_dir, 'test')

# Function to count images in a directory
def count_images(directory):
    count = 0
    for root, dirs, files in os.walk(directory):
        count += len([file for file in files if file.endswith(('jpg', 'jpeg', 'png'))])
    return count

# Count images in train and test directories
train_count = count_images(train_dir)
test_count = count_images(test_dir)
total_count = train_count + test_count

# Calculate recommended number of images
recommended_train_count = int(total_count * 0.8)
recommended_test_count = total_count - recommended_train_count

print(f"Total images: {total_count}")
print(f"Recommended train images: {recommended_train_count}")
print(f"Recommended test images: {recommended_test_count}")

# Function to move images
def move_images(src_dir, dest_dir, num_images):
    images = []
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith(('jpg', 'jpeg', 'png')):
                images.append(os.path.join(root, file))
    images_to_move = images[:num_images]
    for image in images_to_move:
        shutil.move(image, dest_dir)

# Ensure the recommended number of images in train and test directories
if train_count < recommended_train_count:
    move_images(test_dir, train_dir, recommended_train_count - train_count)
elif train_count > recommended_train_count:
    move_images(train_dir, test_dir, train_count - recommended_train_count)

# Recount images after moving
train_count = count_images(train_dir)
test_count = count_images(test_dir)

print(f"Final train images: {train_count}")
print(f"Final test images: {test_count}")