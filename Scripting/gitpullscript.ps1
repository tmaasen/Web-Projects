param (

    # The root directory to perform the pull in
    $baseDir = "C:\Users\tmaas\git\prog-2\",

    # How deep down you want to look for .git folders
    $depth = 0

    # The command you want to perform (hard-coded below)
    #$cmd1 = "fetch --all",
    #$cmd2 = "reset --hard origin/master"
)

# Here specifies an array of student folders that need to be made that will store each individual local repo
$array = @("drew", "hunter", "ulpiana", "nick", "kiah", "joel", "alex", "ethan", "drake", "caleb", "rickey", "gaby", "adelaide")

function CreateFolders () {

  if($gitFolders.Length -eq 0) {
        for($x = 0; $x -lt $array.length; $x++) {
            mkdir $array[$x]
        }
    }

}


function Go () {

    # Finds all .git folders by given path, the -match "h" parameter is for hidden folders 
    $gitFolders = Get-ChildItem -Path $baseDir -Depth $depth -Recurse -Force #| Where-Object { $_.Mode -match "h" -and $_.FullName -like "*\$gitFolderName" }

    ForEach ($gitFolder in $gitFolders) {

        # Remove the ".git" folder from the path 
        $folder = $gitFolder.FullName -replace $gitFolderName, ""

        Write-Host "Performing git $cmd in folder: '$folder'..." -foregroundColor "green"

        # Go into the folder
        Push-Location $folder 

        # Perform the command within the folder
        & git fetch --all
	    & git reset --hard origin/master

        # Go back to the original folder
        Pop-Location
    }
}

function Main () {  
    #CreateFolders
    Go   
}

# Executes the main function
Main 