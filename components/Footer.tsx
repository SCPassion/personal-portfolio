export default function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SCP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
